# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
bun install        # install dependencies
bun run dev        # start dev server at http://localhost:8080
bun run build      # production build → dist/
bun run build:dev  # development build
bun run preview    # preview production build
bun run lint       # run ESLint
```

There are no tests configured.

## Architecture

Single-page portfolio site for Joel Ovienloba (senior mobile engineer). One route (`/`) renders the full page; a catch-all renders `NotFound`.

**Page composition** — [src/pages/Index.tsx](src/pages/Index.tsx) assembles the page from top to bottom:
```
Navigation → HeroSection → AboutSection → SkillsSection → ProjectsSection → ContactSection → Footer
```

All of these are in [src/components/ui/](src/components/ui/) alongside the shadcn/ui primitives. Portfolio section components live in the same directory as the shadcn primitives (no separate `sections/` folder).

**App shell** — [src/App.tsx](src/App.tsx) wraps the app with `QueryClientProvider`, `TooltipProvider`, and both toast providers (`Toaster` + `Sonner`), then sets up React Router.

**Path alias** — `@/` maps to `src/`. Use this for all imports.

**UI primitives** — shadcn/ui with Radix UI underneath, Tailwind CSS for styling, `cn()` utility from [src/lib/utils.ts](src/lib/utils.ts) for merging class names. Base color is `slate`, CSS variables enabled.

**Static assets** — resume PDF and images live in [public/](public/) and [src/assets/](src/assets/) respectively.

**Deployment** — GitHub Pages from the `dist/` folder.
