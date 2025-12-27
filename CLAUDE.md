# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Quartz v4** digital garden and personal website built with TypeScript. Quartz is a static site generator that converts Markdown files into a website with features like search, graph view, backlinks, and more. The site is configured for personal notes and academic content (physics, math, etc.) with custom theming and multilingual support.

## Development Commands

### Core Development

- `npm run quartz` - Main Quartz CLI tool (equivalent to `./quartz/bootstrap-cli.mjs`)
- `npm run docs` - Build and serve documentation locally using `--serve -d docs`
- `npm run check` - Run TypeScript type checking and Prettier format checking
- `npm run format` - Format all files using Prettier
- `npm run test` - Run unit tests for path utilities and dependency graph

### Build and Serve

- `npx quartz build` - Build the static site
- `npx quartz serve` - Serve the built site locally
- `npx quartz build --serve` - Build and serve in one command
- `npx quartz sync` - Sync content with remote repository

### Profiling

- `npm run profile` - Profile build performance using 0x profiler

## Architecture

### Configuration System

- **quartz.config.ts**: Main configuration file defining plugins, themes, analytics, and build settings
- **quartz.layout.ts**: Layout configuration defining component placement (header, sidebar, footer)
- **tsconfig.json**: TypeScript configuration

### Core Directories

- **content/**: Source markdown files organized by category (Books, My Notes, Physics, etc.)
- **quartz/**: Core Quartz engine with build system, components, plugins, and utilities
- **docs/**: Built documentation files
- **public/**: Generated static site output

### Plugin Architecture

Quartz uses a plugin system with three types:

- **Transformers**: Process markdown content (frontmatter, syntax highlighting, LaTeX, etc.)
- **Filters**: Filter content (remove drafts, explicit publish)
- **Emitters**: Generate output files (HTML pages, assets, RSS, sitemap)

### Component System

- **quartz/components/**: React/Preact components for UI elements
- Components are organized by type: layout (Header, Footer), content (ArticleTitle, TableOfContents), and interactive (Search, Graph, Explorer)
- **styles/**: SCSS stylesheets for component styling

### Build System

- **quartz/build.ts**: Main build orchestrator using dependency graphs
- **processors/**: Content processing pipeline (parse, filter, emit)
- **util/**: Utilities for paths, performance, tracing, and resource management

## Content Structure

### Markdown Files

- Located in `content/` directory with subdirectories by topic
- Supports frontmatter, WikiLinks, LaTeX math, and Obsidian-flavored markdown
- Ignores files in `private`, `templates`, and `.obsidian` directories

### Multilingual Content

- Content includes English, Russian, and Kazakh text
- Site configured for `en-US` locale but handles multilingual content

### Media Assets

- Images and audio files in `content/Pictures/` and `content/Audio/`
- Automatically processed and copied to public directory

## Development Workflow

### File Watching

Quartz includes hot-reload development server that watches for changes to:

- Markdown content files
- Configuration files
- Component and style files

### Theme Customization

- Custom color scheme defined in `quartz.config.ts`
- Light/dark mode support with custom colors
- Typography uses Google Fonts (Schibsted Grotesk, Source Sans Pro, IBM Plex Mono)

### Comments Integration

- Giscus comments system integrated via GitHub repository
- Configured in `quartz.layout.ts` with specific repository settings
