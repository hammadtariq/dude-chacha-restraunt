# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static single-page landing site for Dude Chacha (Chef Noman, Karachi heritage dawats, Calgary). React 19 + Vite 8 + Tailwind CSS 4 (compiled locally via PostCSS). No backend: menu and prices live in JSX, and ordering links open WhatsApp (`https://wa.me/13063071379`). `LLM_Handoff.md` holds a longer handoff with decisions and verification history; source files win if they differ.

## Commands

```sh
npm install
npm run dev -- --port 5177   # dev server (script already passes --host 0.0.0.0)
npm run build                # output to dist/ (generated; don't edit)
npm run preview -- --port 5177
```

There is no test runner and no linter configured. Verify changes with a build plus a browser check of both themes at 320, 390, 768, 1024 and 1512px (no overlap, no horizontal overflow, no console errors, theme toggle doesn't shift layout).

## Architecture

- `src/App.jsx` owns theme state and composes the page in this order: Hero → Legends → Textures → MasterMenu → Packages → Chef → HowToOrder → Footer (Header, Concierge, ScrollProgress float outside `<main>`). It also runs the IntersectionObserver that adds `.is-visible` to `.reveal-item` elements.
- **Theming**: `data-theme="light|dark"` on `<html>` plus a synced `.dark` class. `index.html` sets the initial theme before React mounts (stored `dude-chacha-theme` in localStorage, else system preference). Colors are CSS variables in `src/theme.css`, mapped to Tailwind colors in `tailwind.config.cjs`. `theme.css` is imported after `styles.css` and contains overrides, so mind specificity.
- **Menu**: `MasterMenu.jsx` holds the category filter state (all, traditional, rice, bbq, fusion, handhelds-sweets) and conditionally renders `MenuCourse1`–`MenuCourse5`.
- Component-specific CSS lives beside the component (`Hero.css`, `Textures.css`); global styles, animations and reduced-motion rules are in `src/styles.css`.
- Images are local files in `public/`, referenced with root-relative URLs. When replacing one, update all JSX and CSS references together.

## Design constraints (user decisions)

- Keep the original full-width cinematic hero; the split-photo variant was rejected. Hero starts at y=0 with `100svh` min-height, and the fixed nav floats over it. See `docs/surfaces/hero.md`.
- Both themes must share layout, dimensions, body font (DM Sans) and the hero photo; only palette and scrims differ. Playfair Display for headlines, Space Grotesk for labels.
- Food cards: below 1024px each card has a 260px image area plus a separate relative content area. Tags are one wrapping flex row (`.food-card-tags`); don't reintroduce independent absolute tags (they overlapped). Keep the `.food-card-content.absolute.bottom-8` override specificity.
- Chef Noman is a real person; the portrait is derived from his headshot. Preserve likeness and the relaxed gaze.
- Food imagery should look natural and appetizing, not glossy or oversaturated. Images are AI-generated and illustrative.
- Preserve supplied business details (prices, copy, contact) unless asked to change them.
- Mobile: no overlapping tags, clipped content or horizontal overflow; check geometry rather than relying on `overflow-x: hidden`.
