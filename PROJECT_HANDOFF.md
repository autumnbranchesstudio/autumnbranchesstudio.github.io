# Autumn Branches Portfolio — Project Handoff

## Version state

- Current user-approved baseline: **v19 — Verde fixed-header anchor landing correction**
- Current delivered candidate: **v20 — Verde short-form social card cleanup**
- Previous locked original baseline: **v14**
- v20 starts from v19 and preserves all v15–v19 responsive, browser, Story-card, footer-navigation, Nura feed, and case-study anchor repairs.
- Candidate archive: `autumnbranches-site-v20-verde-short-form-card.zip`

## Purpose and creative direction

Autumn Branches is a strategy-led portfolio for social media, content development, personal branding, and creative direction. The work is presented through independent concept projects and must not imply unverified client results.

The approved visual direction is editorial and modernist: oversized uppercase typography, monospaced labels, exposed grids, hard rules, strong black/ivory fields, project-specific accent colours, modular strategy cards, social-content mockups, fixed headers, and branch-like progress rails.

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
├── PROJECT_HANDOFF.md
├── CHANGELOG.md
├── assets/
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
- Do not rewrite copy or replace media, fonts, colours, effects, or interactions without approval.
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

- v15 has been tested in headless Chromium, not on physical iOS Safari or Android hardware.
- The homepage video remains the original 2560×1350, approximately 2.94 MB file; a smaller mobile encode was outside the approved v15 scope.
- Shared case-study CSS and JavaScript remain duplicated inline.
- `assets/nura/social/nura-reel-feed.webp` appears unreferenced but was retained to avoid unrelated asset cleanup.
- The homepage selected-work rail intentionally extends horizontally inside its own scrollable container; it does not widen the document.
- Some fixed-height Verde social mockups intentionally crop internal overflow as part of their approved card treatment.

## Outstanding requests

- User review/acceptance of the delivered v20 Verde short-form card cleanup.
- After acceptance, deploy the updated Verde HTML and continuity records to GitHub Pages and verify the short-form execution at desktop and mobile widths.

## Recommended next step

Deploy v20, hard-refresh Verde Systems, and verify the revised `03 / SHORT FORM` execution in the live site. If accepted, use v20 as the baseline for the next portfolio additions.
