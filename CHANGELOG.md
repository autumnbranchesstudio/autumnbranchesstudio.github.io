# Autumn Branches Portfolio — Changelog

## v15 — Mobile-responsive implementation

**Revision date:** 2026-08-23  
**Status:** Delivered candidate implementing the approved mobile-audit scope

### Request summary

Repair the responsive implementation at 375px, 390px, 430px, and 768px without redesigning or changing the approved desktop layouts. Preserve v14 as the locked source archive, add continuity records, regression-test every page, and package a complete self-contained v15 archive.

### Files changed

- `index.html`
- `projects/cafe-lumiere/index.html`
- `projects/mara-vale/index.html`
- `projects/nura-wellness/index.html`
- `projects/verde-systems/index.html`
- Added `PROJECT_HANDOFF.md`
- Added `CHANGELOG.md`

### Changes completed

#### Global and navigation

- Added 44px mobile interaction areas for site and case-study menu toggles and brand links.
- Added 44px closing-navigation link areas on case-study pages.
- Added navigation IDs and `aria-controls` relationships.
- Added Escape-key dismissal with focus return for all mobile menus.
- Added a 600–820px tablet layout layer for compatible audience, territory, campaign, and metric groups.

#### Homepage

- Increased Cinema, Literature, and Architecture micro-control targets to 44px.
- Increased the contact submit button to a 44px minimum height.
- Preserved the hero, service system, transition, selected-work rail, lens compositions, and desktop layout.

#### Café Lumière

- Repaired phone and tablet positioning-principle rows.
- Restored complete calendar card, date, metadata, colour, footer, and grid styling below 821px.
- Added a four-column tablet calendar layout and two-column tablet card groups.
- Added lazy loading and asynchronous decoding to suitable below-fold images.

#### Mara Vale

- Increased recurring-series arrows and dot hit areas to 44px while preserving the small visible dot treatment.
- Added `aria-hidden` slide state and `aria-pressed` dot state updates.
- Added compatible two-column tablet card groups.
- Preserved the approved personal-brand/core-thesis and positioning compositions.

#### Nura Wellness

- Increased educational-carousel arrow targets to 44px.
- Added a two-column tablet social-module layout and a three-column/two-row feed at tablet width.
- Added compatible two-column tablet card groups.
- Added lazy loading and asynchronous decoding to suitable below-fold images.

#### Verde Systems

- Restored mobile/tablet signal-card backgrounds, borders, padding, and content flow.
- Restored category-pattern and communication-opportunity board styling and tag grids.
- Repaired phone and tablet positioning-principle rows.
- Restored complete calendar card, date, metadata, colour, footer, and grid styling below 821px.
- Added a four-column tablet calendar and compatible two-column tablet card groups.

### Bugs fixed

- Café positioning labels and descriptions colliding below 821px.
- Café calendar dates, titles, metadata, and footer labels running together below 821px.
- Verde hero signal cards losing their approved card treatment below 821px.
- Verde category and opportunity boards losing card and pattern-grid styling below 821px.
- Verde positioning labels colliding with descriptions below 821px.
- Verde calendar dates, titles, metadata, and footer labels running together below 821px.
- Nura tablet feed and supporting social modules producing an excessively long phone-style stack.
- Undersized mobile controls and carousel targets.
- Mobile menus lacking Escape-key dismissal and focus return.

### Testing performed

Pages tested:

- Homepage
- Café Lumière
- Mara Vale
- Nura Wellness
- Verde Systems

Viewport widths tested:

- 375px
- 390px
- 430px
- 768px
- 820px breakpoint edge
- 821px desktop boundary
- 1024px
- 1440px

Checks performed:

- Document-level horizontal overflow
- Local content overlap and clipping at repaired components
- Typography wrapping and card proportions
- Tablet grid and page-height behaviour
- Mobile menu open, link selection, Escape dismissal, and focus return
- Touch-target dimensions
- Homepage services and creative-lens controls
- Mara and Nura carousel state changes and ARIA state
- Image loading and packaged media references
- Local links, anchors, and asset paths
- Duplicate IDs and inline JavaScript syntax
- Browser console, failed request, and missing-image checks
- v14/v15 desktop computed-layout and pixel regression comparison

Results:

- No page-level horizontal overflow at any tested width.
- No collisions in the repaired positioning, calendar, signal-card, board, or tablet-feed components.
- No undersized visible interactive targets in the mobile audits.
- No missing local file or anchor reference.
- No inline JavaScript syntax or runtime error detected.
- Desktop comparisons at 821px, 1024px, and 1440px were pixel-identical to v14 for all five pages.

### Known limitations

- Testing used headless Chromium; physical-device Safari and Android testing remains recommended.
- The original approximately 2.94 MB homepage video was retained. Mobile video re-encoding was explicitly excluded from v15.
- Repeated case-study CSS and JavaScript remain inline rather than being refactored into shared files.
- An apparently unused Nura image asset was retained because asset cleanup was outside scope.

## v14 — Locked baseline

- Original approved archive: `autumnbranches-site-v14-social-final(1).zip`
- SHA-256: `fd675714a2bef598d93c692ca0d4cc70d13db0865e01a453a6d2b6450d93ef6c`
- v14 was not overwritten, renamed, or modified during the v15 revision.
