# Dude Chacha

React JavaScript conversion of the supplied design using Vite and locally compiled Tailwind CSS.

## Run

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Page sections are in `src/components`. The menu filter uses React state; scroll progress and reveal animations use effects with cleanup. Original imagery, video, Google Fonts, prices, copy, and contact links are retained. External media and fonts require internet access. No backend is required; orders go directly to the supplied WhatsApp number.

The header theme button switches between the original dark design and the supplied ivory, amber, and crimson light palette. The initial theme follows the system preference; an explicit choice is saved locally and applied before React loads.
