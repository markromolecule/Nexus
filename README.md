# Nexus – Gaming App Landing (Monorepo Root)

This repository contains the Nexus web front‑end built with React + Vite + Tailwind CSS.

## Project

- App: `nexus-web/`
- Node: 18+ recommended

## Quick Start

```bash
cd nexus-web
npm install
npm run dev
```

Build and preview:
```bash
npm run build
npm run preview
```

## Tech Stack
- React 19 + Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)

## Structure (key paths)
```
nexus-web/
  src/
    common/          # shared data + utilities
      data.js        # page content (hero, character, stats, activity, news)
    components/
      common/        # Header, Footer, Navigation primitives
      joseph/        # Reusable cards for Developer 1 page
    hooks/
      useNavigation.js
      useSound.js    # WebAudio blips (no external assets)
    pages/
      JosephPage.jsx # Dev 1 (implemented)
      Developer2-5   # Placeholder variants
    shared/          # Layout + Container wrappers
```

## Customizing Content
Edit `nexus-web/src/common/data.js`:
- `hero.title`, `subtitle`, `cta`
- `hero.videoUrl` (optional mp4/webm/gif) for the hero media panel
- `character`: name, role, avatar (image import), bio
- `stats`: top‑line metrics
- `statDetails`: rich metrics with `value`/`max` and optional `unit`
- `activity`: array of `{ action, when }`
- `news`: array of `{ title, source, tag? }`
- `achievements`: string list (badges)

## Sounds
Simple UI sounds implemented via Web Audio:
- Hook: `src/hooks/useSound.js`
- Usage:
```js
const { click, select } = useSound()
<button onClick={click} onMouseEnter={select}>Play</button>
```

## Styling & Effects
- Palette: Black + Blue (Electric/Royal/Cyan)
- Global theme in `src/index.css` (CSS vars + Tailwind)
- Background FX & parallax: `src/shared/Layout.jsx`
- Card fade overlays: `src/shared/Container.jsx`, game/character/stats cards

## Developer Pages
- Dev 1 (Joseph) fully implemented with hero, character, stats, games, activity, achievements, and news
- Dev 2–5 can reuse components or create their own; wire their content via their own data files/folders

## Accessibility & Notes
- Fixed header (72px) with blur/shadow on scroll
- Hero media supports autoplay, loop, muted, and has left fade overlay to blend with layout

## License
Internal/student project. Update as needed.
