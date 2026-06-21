import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import style from "./styles/languageToggle.scss"

const LanguageToggle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const slug = (fileData.slug ?? "") as FullSlug
  const isRussian = slug === "ru/index" || slug.startsWith("ru/")

  // If frontmatter declares a specific translation pair, prefer it.
  // Otherwise, point to the other language's homepage.
  const translation = (fileData.frontmatter as { translation?: string } | undefined)?.translation

  let targetSlug: SimpleSlug
  let label: string

  if (translation) {
    // Frontmatter may use spaces (e.g. "Notes/Why I Write This Blog"); Quartz slugs
    // use hyphens, so normalize each path segment to match the actual emitted slug.
    const normalized = translation
      .split("/")
      .map((seg) => seg.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/\?/g, "").replace(/#/g, ""))
      .join("/")
    targetSlug = normalized as SimpleSlug
    label = isRussian ? "In English" : "На русском"
  } else if (isRussian) {
    targetSlug = "/" as SimpleSlug
    label = "In English"
  } else {
    targetSlug = "ru/" as SimpleSlug
    label = "На русском"
  }

  const href = resolveRelative(slug, targetSlug)

  return (
    <div class={classNames(displayClass, "language-toggle")}>
      <a href={href}>{label}</a>
    </div>
  )
}

LanguageToggle.css = style

export default (() => LanguageToggle) satisfies QuartzComponentConstructor
