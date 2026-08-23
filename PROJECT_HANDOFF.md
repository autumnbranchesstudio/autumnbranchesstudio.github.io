# Autumn Branches Portfolio — Project Handoff

## Version state

- Current delivered candidate: **v15 — mobile-responsive implementation**
- Previous locked and approved baseline: **v14**
- v15 status: Implements the approved audit scope and is awaiting post-delivery acceptance.
- Source archive for v15: `autumnbranches-site-v15-mobile-responsive.zip`

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

- Widths at and above 821px retain the v14 desktop implementation.
- v15 was compared with v14 at 821px, 1024px, and 1440px.
- Computed layout signatures and full-page pixel comparisons were identical at the tested desktop widths.
- Existing fixed headers, branch rails, transitions, carousels, work rail, media crops, and case-study compositions remain unchanged.

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

- User acceptance of the delivered v15 archive.
- No other content or visual request is currently approved.

## Recommended next step

Review v15 on at least one physical iPhone/Safari device and one Android/Chrome device. Once accepted, record v15 as the current approved version and use it—not v14—as the baseline for v16.
