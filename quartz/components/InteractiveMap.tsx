import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/map.inline"
import style from "./styles/map.scss"
import { i18n } from "../i18n"

interface MapOptions {
  center?: [number, number]
  zoom?: number
}

const defaultOptions: MapOptions = {
  center: [0, 0], // Default to world view
  zoom: 2,
}

export default ((opts?: Partial<MapOptions>) => {
  const DisplayMap: QuartzComponent = ({
    displayClass,
    cfg,
    fileData,
  }: QuartzComponentProps) => {
    const options = { ...defaultOptions, ...opts }

    // Only render the map on the map page
    if (fileData.slug !== "map") {
      return null
    }

    return (
      <div class={`display-map ${displayClass ?? ""}`}>
        <div class="map-container">
          <div
            id="maplibre-map"
            data-center={JSON.stringify(options.center)}
            data-zoom={options.zoom}
          ></div>
        </div>

        {/* Loading overlay */}
        <div id="map-loading" class="loading-overlay">
          <div class="loading-spinner"></div>
          <p>Loading map...</p>
        </div>
      </div>
    )
  }

  DisplayMap.css = style
  DisplayMap.afterDOMLoaded = script
  return DisplayMap
}) satisfies QuartzComponentConstructor
