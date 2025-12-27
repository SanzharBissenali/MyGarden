import { FullSlug, getFullSlug } from "../../util/path"

interface MapMarker {
  id: string
  coordinates: [number, number]
  title: string
  description?: string
  category?: string
  image?: string | null
}

interface MapState {
  map: any
  markers: Map<string, any>
}

const MAPLIBRE_CDN = "https://unpkg.com/maplibre-gl@4.1.0/dist/maplibre-gl.js"
const MAPLIBRE_CSS = "https://unpkg.com/maplibre-gl@4.1.0/dist/maplibre-gl.css"

let mapState: MapState = {
  map: null,
  markers: new Map(),
}

// Category colors and icons with modern styling
const MARKER_STYLES = {
  default: { 
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
    borderColor: "#667eea",
    icon: "✨",
    shadowColor: "rgba(102, 126, 234, 0.4)"
  },
  important: { 
    color: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)", 
    borderColor: "#ff6b6b",
    icon: "🔥",
    shadowColor: "rgba(255, 107, 107, 0.4)"
  },
  note: { 
    color: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)", 
    borderColor: "#4ecdc4",
    icon: "💡",
    shadowColor: "rgba(78, 205, 196, 0.4)"
  },
  location: { 
    color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", 
    borderColor: "#a8edea",
    icon: "📍",
    shadowColor: "rgba(168, 237, 234, 0.4)"
  },
}


function loadMapLibreCSS(): void {
  if (!document.querySelector(`link[href="${MAPLIBRE_CSS}"]`)) {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = MAPLIBRE_CSS
    document.head.appendChild(link)
  }
}

function loadMapLibreJS(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.maplibregl) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = MAPLIBRE_CDN
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load MapLibre GL JS"))
    document.head.appendChild(script)
  })
}

async function loadMarkersFromFile(): Promise<MapMarker[]> {
  try {
    const response = await fetch('/map-data.json')
    if (!response.ok) throw new Error(`Failed to fetch map data: ${response.status}`)
    const data = await response.json()
    return data.markers || []
  } catch (error) {
    console.warn("Failed to load markers from file:", error)
    return []
  }
}

function createMarkerElement(marker: MapMarker): HTMLElement {
  const el = document.createElement("div")
  const style = MARKER_STYLES[marker.category || "default"]

  el.className = `map-marker category-${marker.category || "default"}`
  el.innerHTML = `
    <div class="marker-icon" style="
      background: ${style.color};
      border-color: ${style.borderColor};
      box-shadow: 0 4px 12px ${style.shadowColor}, 0 2px 4px rgba(0,0,0,0.1);
    ">
      <span class="marker-emoji">${style.icon}</span>
    </div>
  `

  el.addEventListener("click", (e) => {
    console.log("Marker clicked:", marker.title)
    e.stopPropagation()
    showMarkerPopup(marker)
  })
  
  return el
}

function addMarker(markerData: MapMarker): void {
  if (!window.maplibregl || !mapState.map) {
    console.log("Cannot add marker - maplibregl or map not ready")
    return
  }

  const el = createMarkerElement(markerData)
  const marker = new window.maplibregl.Marker(el)
    .setLngLat(markerData.coordinates)
    .addTo(mapState.map)

  marker._markerData = markerData
  mapState.markers.set(markerData.id, marker)
}


function showMarkerPopup(marker: MapMarker): void {
  if (!mapState.map) return

  const popupContent = `
    <div class="marker-popup">
      ${marker.image ? `<img src="${marker.image}" alt="${marker.title}" class="popup-image" />` : ""}
      <h4>${marker.title}</h4>
      ${marker.description ? `<p>${marker.description}</p>` : ""}
      <small>Category: ${marker.category || "default"}</small>
    </div>
  `

  new window.maplibregl.Popup({ closeOnClick: true, maxWidth: "400px" })
    .setLngLat(marker.coordinates)
    .setHTML(popupContent)
    .addTo(mapState.map)
}


function hideLoadingOverlay(): void {
  const loadingOverlay = document.getElementById("map-loading")
  if (loadingOverlay) {
    loadingOverlay.style.display = "none"
  }
}

async function initializeMap(): Promise<void> {
  const mapContainer = document.getElementById("maplibre-map")
  if (!mapContainer || !window.maplibregl) return

  try {
    const centerData = mapContainer.getAttribute("data-center")
    const zoomData = mapContainer.getAttribute("data-zoom")

    const center = centerData ? JSON.parse(centerData) : [0, 0]
    const zoom = zoomData ? parseInt(zoomData) : 2

    mapState.map = new window.maplibregl.Map({
      container: "maplibre-map",
      style: {
        version: 8,
        name: "Custom Styled Map",
        sources: {
          "custom-tiles": {
            type: "raster",
            tiles: [
              "https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
              "https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
              "https://c.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
              "https://d.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
            ],
            tileSize: 256,
            attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> © <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
          }
        },
        layers: [
          {
            id: "background",
            type: "background",
            paint: {
              "background-color": "#f5f5f5"
            }
          },
          {
            id: "custom-base",
            type: "raster",
            source: "custom-tiles",
            minzoom: 0,
            maxzoom: 22,
            paint: {
              "raster-opacity": 1,
              "raster-contrast": 0.1,
              "raster-brightness-min": 0.1,
              "raster-brightness-max": 0.9,
              "raster-saturation": -0.2
            }
          }
        ],
      },
      center: center,
      zoom: zoom,
      pitch: 0,
      bearing: 0,
      antialias: true,
      attributionControl: true,
    })

    mapState.map.on("load", async () => {
      hideLoadingOverlay()

      const markers = await loadMarkersFromFile()
      markers.forEach(addMarker)
    })

  } catch (error) {
    console.error("Failed to initialize map:", error)
    hideLoadingOverlay()
  }
}

function setupEventListeners(): void {
  // No event listeners needed for read-only map
}

document.addEventListener("DOMContentLoaded", async () => {
  const mapContainer = document.getElementById("maplibre-map")
  if (mapContainer) {
    try {
      loadMapLibreCSS()
      await loadMapLibreJS()
      setupEventListeners()
      await initializeMap()
    } catch (error) {
      console.error("Failed to load MapLibre on DOM load:", error)
      hideLoadingOverlay()
    }
  }
})

document.addEventListener("nav", async () => {
  const mapContainer = document.getElementById("maplibre-map")
  if (mapContainer) {
    try {
      loadMapLibreCSS()
      await loadMapLibreJS()
      setupEventListeners()
      await initializeMap()
    } catch (error) {
      console.error("Failed to initialize map on navigation:", error)
      hideLoadingOverlay()
    }
  }
})
