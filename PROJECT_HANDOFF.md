# Autumn Branches Portfolio — Project Handoff

## Version state

- Current user-approved baseline: **v22 — unified typography + active Instagram contact link**
- Last explicitly confirmed live deployment: **v20**
- Current delivered candidate: **v24 — Mara return-to-studio anchor fix**
- Previous locked original baseline: **v14**
- v23 starts from v22 and adds non-redesign launch readiness: search/social metadata, favicon/browser identity, crawl files, a branded 404 page, keyboard skip/focus support, and continuity updates.
- v24 starts from v23 and fixes Mara Vale’s closing “SAME STUDIO. DIFFERENT ANSWERS.” destination so it lands on the matching homepage closing beat rather than the top of Selected Work.
- Candidate archive: `autumnbranches-site-v24-mara-return-anchor.zip`

## Purpose and creative direction

Autumn Branches is a strategy-led portfolio for social media, content development, personal branding, and creative direction. The work is presented through independent concept projects and must not imply unverified client results.

The approved visual direction is editorial and modernist: oversized uppercase typography, a unified Arial/Helvetica sans-serif system for both display and metadata, exposed grids, hard rules, strong black/ivory fields, project-specific accent colours, modular strategy cards, social-content mockups, fixed headers, and branch-like progress rails.

## Pages

- `index.html` — portfolio homepage
- `projects/cafe-lumiere/index.html` — Café Lumière case study
- `projects/mara-vale/index.html` — Mara Vale case study
- `projects/nura-wellness/index.html` — Nura Wellness case study
- `projects/verde-systems/index.html` — Verde Systems case study

## Project structure

```text
/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── PROJECT_HANDOFF.md
├── CHANGELOG.md
├── assets/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── autumnbranches-social-preview.png
│   ├── cinema-poster.jpg
│   ├── cinema-three-frames.mp4
│   ├── cafe/
│   └── nura/
└── projects/
    ├── cafe-lumiere/index.html
    ├── mara-vale/index.html
    ├── nura-wellness/index.html
    └── verde-systems/index.html
```

The site is static and self-contained. CSS and JavaScript are embedded in each HTML file. There is no framework, build step, package manager, external font, external stylesheet, or external script dependency.

## Important design rules

- Preserve the approved desktop compositions and project-specific visual systems.
- Do not rewrite copy or replace media, colours, effects, interactions, or the approved unified sans-serif typography without approval.
- Use responsive reflow rather than scaling the complete desktop canvas.
- Keep all packaged paths relative and self-contained.
- Treat repeated case-study code as shared behaviour even though it is currently duplicated inline.
- Check every case-study page after changing repeated header, navigation, branch rail, closing navigation, grid, or calendar rules.
- Do not restore superseded Mara Vale layouts from earlier project history.

## Approved desktop behaviour

- v15 preserved the v14 desktop implementation at and above 821px.
- v16 introduced three requested exceptions: the Café 8:17 AM Story card internal layout, preliminary Nura feed safeguards, and larger closing-navigation type on all case studies.
- v17 replaces the preliminary Nura feed safeguard with a structural responsive treatment: the feed and its footer use natural height instead of fixed-height row compression; feed-card gutters are increased; from 821px through 1279px the six-post feed spans the full social-grid width and the four supporting social modules form a two-column grid; from 1050px through 1279px the six feed cards use one six-column row; at 1280px and above the approved wide-desktop social composition is retained.
- Existing fixed headers, branch rails, transitions, carousels, work rail, media crops, section order, and unrelated case-study compositions remain unchanged.
- v18 standardized fixed-header in-page anchor landing across Café Lumière, Nura Wellness, and Verde Systems using `scroll-margin-top: var(--header-h)`.
- v19 adds a Verde-specific explicit navigation calculation because live Chrome review showed native anchor positioning still landing too high there. Verde Overview / Strategy / Social links now scroll the destination section boundary below the measured fixed-header height, preserving the section top padding.
- v20 removes the decorative equalizer bars from Verde's `03 / SHORT FORM` social execution and replaces that internal treatment with a cleaner metadata / headline / footer composition. The card is also protected against 768–821px internal clipping without changing the other social executions.

- v21 removes the Courier/monospace secondary face from every webpage. All labels, metadata, controls, case-study chrome, mockups, and closing navigation now use the primary Arial/Helvetica sans-serif family. Site-level microcopy is normalized upward for legibility; dense social mockup metadata retains a smaller but raised proportional scale.
- v21 adds a visible Instagram control to the homepage contact section. It is intentionally non-clickable until the user supplies the final Instagram URL; do not invent or guess that URL.

- v22 activates the supplied Autumn Branches Studio Instagram URL in the homepage contact section.
- v23 adds launch-facing metadata and accessibility polish without altering normal page compositions: canonical URLs, page descriptions/titles, Open Graph/Twitter metadata, a shared social preview image, favicon/touch icon, `robots.txt`, `sitemap.xml`, `.nojekyll`, a branded `404.html`, keyboard skip links, and consistent focus-visible outlines.
- v24 adds a dedicated homepage `#same-studio` target and points Mara Vale’s “SAME STUDIO. DIFFERENT ANSWERS.” closing link to it, with fixed-header-safe anchor spacing.

## Approved mobile and tablet behaviour in v15

- Phone layouts are audited at 375px, 390px, and 430px.
- Tablet layouts are audited at 768px and the 820px breakpoint edge.
- Header, menu, carousel, lens-control, footer-link, and submit-button targets use a minimum 44px interaction area where applicable.
- Mobile menus close on Escape and return focus to the menu toggle.
- Compatible case-study card groups use two-column tablet layouts from 600px through 820px; phones retain single-column stacking.
- Café Lumière and Verde Systems positioning rows and calendars have dedicated mobile/tablet structures.
- Verde’s signal cards and category/opportunity boards retain their approved card styling on mobile.
- Nura’s feed uses two columns on phones and three columns within its tablet-wide feed module; supporting social modules use a two-column tablet layout.
- Mara and Nura carousel controls use 44px touch targets. Mara also exposes active slide state through ARIA attributes.
- Suitable below-fold Café and Nura images use lazy loading and asynchronous decoding.

## Shared components and behaviour

- Fixed site or case-study header
- Mobile disclosure navigation
- Branch progress rail
- Dark/light header-state switching
- Case-study transition wipe
- Previous, next, back, and home closing links
- Audience, territory, campaign, metric, and calendar grids
- Reduced-motion handling

Page-specific interactions:

- Homepage: service accordion, creative-lens tabs, micro-controls, scroll transition, contact mailto construction
- Mara Vale: recurring-opinion carousel
- Nura Wellness: five-slide educational carousel

## Decisions that must not be reversed

- v14 remains the locked source baseline; do not overwrite it.
- The approved desktop appearance must remain stable unless a desktop change is explicitly requested.
- Mara’s current personal-brand/core-thesis grouping and revised positioning structure are approved.
- The project remains an editorial portfolio rather than a conventional template redesign.
- No broad component-library or shared-file refactor should be bundled into a minor repair revision.
- Version numbers must advance sequentially, and earlier approved archives must remain available.

## Current open issues and known limitations

- Physical iOS Safari and Android hardware testing remains outside the local tool environment.
- The homepage video remains the original 2560×1350, approximately 2.94 MB file; a smaller mobile encode has not been approved or created.
- Shared case-study CSS and JavaScript remain duplicated inline.
- `assets/nura/social/nura-reel-feed.webp` appears unreferenced but is intentionally retained.
- The homepage selected-work rail intentionally scrolls horizontally inside its own container.
- Some Verde social mockups intentionally crop internal overflow as part of the approved card treatment.
- v23 canonical URLs, sitemap entries, and Open Graph URLs target the current GitHub Pages domain `https://autumnbranchesstudio.github.io/`. If a custom domain is connected later, these URLs must be updated in one coordinated revision.
- In the v23 creation session, the local Chromium executable did not complete headless screenshot runs because of an environment/runtime failure. Static DOM, path, CSS, JavaScript, metadata, and visible-body preservation checks passed; live browser verification should be done after deployment.

## Outstanding requests

- User review/acceptance of v24, which includes the v23 launch-polish work plus the Mara return-to-studio anchor correction.
- If accepted, deploy v24 to GitHub Pages and verify the favicon, social preview metadata, 404 page, keyboard skip/focus behavior, and Mara closing destination on the live site.

## Recommended next step

Deploy v24 after review. Confirm that Mara Vale’s “SAME STUDIO. DIFFERENT ANSWERS.” link lands on the matching homepage closing beat. If a custom domain is planned, connect it only after v24 is stable, then update canonical/sitemap/Open Graph URLs to the custom domain in the next version.