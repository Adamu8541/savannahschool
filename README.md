# Savannah School public website

A reusable, frontend-only school website inspired by the public homepages of Gombe State University and North-Eastern University, Gombe. Savannah School is a clearly identified illustrative identity, not an official institution. All programme descriptions and stories are sample content.

## Technologies

React 19, TypeScript, Vite, Tailwind CSS 4, React Router and Lucide icons. There are no APIs, databases, authentication, application submissions or management modules.

## Local development

Use Node.js 22 or newer and npm:

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and produces `dist/`. `npm run preview` serves the production output locally. Netlify installs the locked dependencies with `npm ci --include=dev`, runs `npm run build` and publishes `dist`, with a fallback rewrite for frontend routes. Image CDN requests fall back to the local original under the standard Vite development server.

## Customisation

School identity, navigation, programmes, stories and image metadata live in `src/data/site.ts`. Shared components live in `src/components/`. Brand colours and responsive styles live in `src/styles.css`. Update the public sharing metadata in `index.html` alongside any identity changes. Replace sample text and images with approved institutional material before official use.

## References and photographs

See `DESIGN.md` for the reference inspection, design decisions, photo sources and verification limitations.
