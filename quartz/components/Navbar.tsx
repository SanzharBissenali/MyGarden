import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import style from "./styles/navbar.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Navbar: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    const links = opts?.links ?? {}

    return (
      <nav class="navbar">
        <ul>
          {Object.entries(links).map(([text, link]) => {
            // Check if it's an external link (starts with http)
            const isExternal = link.startsWith("http")
            const href = isExternal ? link : resolveRelative(fileData.slug!, link as FullSlug)

            return (
              <li>
                <a href={href} class={isExternal ? "external" : "internal"}>
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  Navbar.css = style
  return Navbar
}) satisfies QuartzComponentConstructor
