# Dude Chacha — LLM project handoff

Updated: 2026-10-10. Read this before editing the project. Source files remain authoritative if they differ from this document.

## Project and purpose

- Workspace: `/Users/hammad/Documents/ChatGPT/dude-chacha`.
- React JavaScript landing page converted from two user-supplied HTML designs.
- Business: Dude Chacha, Chef Noman, Karachi heritage communal dawats in Sherwood/NW Calgary.
- Current development URL: `http://localhost:5177/`. Do not assume another localhost port is this app.
- Static frontend; menu and prices live in JSX. Ordering links open WhatsApp at `https://wa.me/13063071379`. No checkout, order API, or backend is implemented.
- Preserve supplied business details unless the user requests changes; claims and prices have not been independently verified.

## User preferences and decisions

1. Preserve the original full-width cinematic hero. A new split-photo variation was rejected as immature; do not reintroduce it.
2. Modern, premium presentation with large Playfair typography, uppercase “KARACHI.”, italic “Distilled.”, heritage labels and rounded ordering buttons.
3. Navigation floats over the hero. The hero begins at document top, uses `100svh` minimum height and reserves internal space for navigation.
4. Both themes must share layout, dimensions, alignments, body font, and hero photograph. Only palette/scrims should differ.
5. Food imagery should look natural, detailed and appetizing rather than glossy or artificially saturated.
6. Chef Noman is a real person. His generated portrait is based on his supplied headshot, and his eye expression was edited to reduce squint/brow tension. Preserve likeness and the relaxed gaze.
7. Mobile must avoid overlapping tags, clipped content, and horizontal overflow.

## Stack and commands

React 19, React DOM 19, Vite 8, Vite React plugin 6, Tailwind CSS 4 with local PostCSS processing. Consult package-lock.json for exact resolved versions.

The user instructs all shell commands to be prefixed with `rtk`; instructions are in `/Users/hammad/.codex/RTK.md`. Use `rtk proxy` when a command requires raw output or is not directly supported.

```sh
rtk npm install
rtk npm run dev -- --port 5177
rtk npm run build
rtk npm run preview -- --port 5177
```

Build output: `dist/`. Do not edit generated output directly. No automated test script is currently configured.

## Source map

| File | Responsibility |
| --- | --- |
| index.html | Metadata, Google Fonts, favicon, initial theme selection before React mounts |
| src/main.jsx | React StrictMode entry and global CSS imports |
| src/App.jsx | Theme state, localStorage persistence, reveal observer, page composition |
| src/styles.css | Tailwind entry, global styles, animations, responsive rules, reduced motion |
| src/theme.css | CSS color tokens for both themes, navbar and theme switch, photo caption colors |
| tailwind.config.cjs | Colors mapped to CSS variables and font-family utilities |
| src/components/Header.jsx | Fixed floating pill navigation, theme button, WhatsApp CTA |
| src/components/Hero.jsx and Hero.css | Shared feast photo, theme scrims, heading, CTAs, masthead and marquee |
| src/components/Legends.jsx | Heritage dish introduction |
| src/components/Textures.jsx and Textures.css | Nihari/biryani photo cards and responsive tag/content layout |
| src/components/MasterMenu.jsx | Category filter state and five menu acts |
| src/components/MenuCourse1.jsx through MenuCourse5.jsx | Menu dish content and prices |
| src/components/Packages.jsx | Feast packages |
| src/components/Chef.jsx | Chef story and generated portrait |
| src/components/HowToOrder.jsx | Ordering instructions |
| src/components/Concierge.jsx | Fixed WhatsApp contact; compact icon on small screens |
| src/components/ScrollProgress.jsx | Scroll progress indicator |
| src/components/Footer.jsx | Footer content |
| docs/surfaces/hero.md | Hero design constraints |

Page order: Hero → Legends → Textures → MasterMenu → Packages → Chef → HowToOrder → Footer.

## Theme behavior

- Root `data-theme` is `light` or `dark`; root `.dark` class is kept in sync.
- Storage key: `dude-chacha-theme`.
- Initial theme uses stored valid preference, otherwise system color preference.
- Storage failures are caught; toggle still works.
- Body font is DM Sans in BOTH themes to prevent wrapping and height changes. Playfair Display is used for headlines; Space Grotesk for labels.
- Manrope remains included in the Google Fonts URL but is no longer the active light-mode body font.
- Light palette: ivory, warm brown, crimson and amber. Dark palette: charcoal, peach and gold.
- Hero paragraph measure is shared at 30rem. Location label padding is shared; dark mode has cream text on a dark translucent backing.
- Watch CSS specificity: theme.css is imported after styles.css and contains light-mode overrides for photograph captions. Responsive food-card overrides deliberately have enough specificity to restore theme-appropriate text on the separate mobile content area.

## Current image assets

All active images are local under public/; referenced in JSX/CSS with root-relative URLs.

| Asset | Use |
| --- | --- |
| karachi-feast-refined.png | Active hero photo in both themes, 1536×1024 |
| nihari-refined.png | Active nihari close-up, 1536×1024 |
| biryani-refined.png | Active biryani close-up, 1536×1024 |
| chef-noman-portrait-relaxed.png | Active chef portrait with relaxed eyes, 1024×1536 |
| karachi-feast-light-hero.png | Preserved earlier hero version |
| chef-noman-portrait.png | Preserved earlier chef portrait |
| favicon.svg | Site favicon |

These are AI-created illustrative images, not verified photographs of actual dishes or the kitchen. Chef image alt text acknowledges its generated origin. Original identity reference: `/Users/hammad/Downloads/noman-dp-upwork.png` (outside repository; do not depend on it for deployment).

Food refinements retained warm brass/stone styling, improved natural meat/rice textures and restrained colors. Hero composition preserves clear left-side copy space and dishes on the right. The original dark-mode remote video/poster was removed. Food-card remote Google image URLs were replaced with local assets. Brightness changes on hover were removed; gentle image zoom remains on desktop.

For future image edits use the image generation skill and built-in imagegen tool. Inspect local reference images before editing, preserve original files, copy final generated assets into public/, and update all CSS and JSX references together.

## Responsive food-card implementation

- `.food-card-tags` is one wrapping flex row containing the macro label and cooking-duration label; independent absolute tags caused the reported overlap.
- At widths below 1024px, each card has a 260px image area and a separate relative-positioned content area with automatic height.
- Text, prices and CTAs wrap naturally; descriptions are not line-clamped on small screens.
- Mobile card headings use responsive sizing; ordering targets have at least 44px height.
- At desktop widths the original over-image card content remains.
- Duration labels use gold on a dark backing in both themes.
- Keep `.food-card-content.absolute.bottom-8` responsive override specificity, or replace the older caption selectors cleanly when refactoring.

## Interactions and accessibility

- Menu filter categories: all, traditional, rice, bbq, fusion, handhelds-sweets. Conditional rendering shows matching MenuCourse components.
- Category buttons expose aria-pressed.
- Theme button has dynamic accessible label and title.
- External ordering links use target=_blank and rel=noopener noreferrer.
- Skip-to-content link, visible focus outlines and reduced-motion rules exist.
- Reveal observer adds is-visible and unobserves revealed elements; observer disconnects on cleanup.
- Mobile concierge is 52px and has a descriptive accessible name.

## Verification performed

Latest mobile-card change:

- Production build succeeded after responsive CSS/JSX changes.
- Real Chromium browser checks at 320, 390, 768 and 1512 CSS pixels in BOTH themes found no tag/content overlap and no document horizontal overflow.
- Mobile card content position was relative and height grew to fit its content.
- Light-mode mobile heading contrast was inspected after reload: dark text on ivory content background.
- Browser console had no warnings or errors in the latest check.
- Food assets decoded successfully at 1536×1024.

Earlier theme alignment checks compared 97 section/text/link/navigation elements without measured layout differences. Some earlier narrow-width emulation was imperfect; rely on the latest explicit mobile/touch checks above.

These checks cover the requested visual fixes, not a comprehensive production certification. Deployment, real Safari/iOS testing, exhaustive accessibility/contrast audit, SEO review, performance budgets and business-content validation were not completed in this session.

## Useful follow-up checks

After future changes, build and test both themes at 320, 390, 768, 1024 and 1512px. Inspect food tags, price rows, menu filters, navbar, floating concierge, and hero CTAs. Confirm theme toggling does not move layout. Check keyboard focus, image loading and console errors. Avoid relying only on overflow-x:hidden: inspect element geometry for hidden overflow.

Do not claim a deployment or external verification unless actually performed. No deployment or PR was created as part of the recent visual changes.
