# Project guide

This is a frontend-only React + TypeScript + Vite SPA with Tailwind CSS 4. Keep it frontend-only unless a later user explicitly requests another stage. Do not add a database, authentication, school management modules or fake submissions.

## Architecture

- `src/main.tsx`: React entry, route table and document titles.
- `src/data/site.ts`: configurable identity, navigation, pathways, sample news and image metadata.
- `src/components/Layout.tsx`: shared public header, navigation, search, CTA and footer.
- `src/components/Home.tsx`: homepage and reusable news listing.
- `src/components/Pages.tsx`: public information pages and gallery viewer.
- `src/components/ui.tsx`: reusable page headings, photos and links.
- `src/styles.css`: Tailwind import, tokens, institutional visual styles and responsive rules.
- `public/images/`: locally downloaded licensed stock photographs.
- `netlify.toml`: Vite build/publish settings and SPA rewrite.

## Conventions

Use `.tsx` for React and `.ts` for modules. Use semantic landmarks, visible keyboard focus, descriptive link labels and accessible controls. Keep content in the central data module where practical. The gallery is keyboard accessible with Escape, arrow controls and focus containment. No automatic carousel rotation is used. The school emblem is an illustrative book monogram, not an official logo.

Image URLs use the Netlify Image CDN and fall back to local originals for development. Preserve aspect ratios using object-fit. Keep image licensing and source records in DESIGN.md. Do not invent official institutional facts, contact details, admission deadlines, event dates or accreditation statements. This project deliberately identifies sample content.

The design follows GSU’s layered header, horizontal navigation, broad photographic hero, announcement strip and institutional sections. NEU supplies supplementary programme and campus-life inspiration. Keep rectangular geometry and restrained effects. Build validation is performed by the hosting pipeline in this environment; do not run local builds or servers during agent runs.
