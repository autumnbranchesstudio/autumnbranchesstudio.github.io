# Autumn Branches Portfolio — Changelog

## v24 — Mara return-to-studio anchor fix

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on v23

### Request summary

Correct the Mara Vale closing “SAME STUDIO. DIFFERENT ANSWERS.” link so it returns to the matching closing beat on the homepage instead of the beginning of Selected Work. Preserve all v23 launch-polish work and all approved layouts.

### Files changed

- `index.html`
- `projects/mara-vale/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Added the dedicated homepage anchor `#same-studio` to the “SAME STUDIO. DIFFERENT ANSWERS.” closing beat.
- Updated Mara Vale’s “RETURN TO STUDIO” link to target `../../index.html#same-studio` instead of `../../index.html#work`.
- Added fixed-header-safe scroll margin to the new homepage target so the closing beat lands cleanly below the site header.
- Left the separate “BACK TO SELECTED WORK” link pointing to `#work` as intended.
- Preserved all v23 launch metadata, accessibility polish, page layouts, copy, media, and interactions.

### Testing performed

- Verified the Mara closing link resolves to the new `#same-studio` target.
- Verified `#same-studio` exists exactly once on the homepage.
- Verified the existing “BACK TO SELECTED WORK” link still resolves to `#work`.
- Verified no packaged local references were broken by the change.
- Verified inline JavaScript syntax remains valid.

### Known limitations

- Same as v23; this revision changes only the Mara closing destination and its homepage anchor target.

## v23 — Launch polish

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on user-approved v22

### Request summary

Complete the remaining portfolio polish without redesigning or changing approved page layouts. Improve launch readiness, browser identity, search/social metadata, error handling, and keyboard accessibility while preserving the v22 visual system and content.

### Files changed

- `index.html`
- `projects/cafe-lumiere/index.html`
- `projects/mara-vale/index.html`
- `projects/nura-wellness/index.html`
- `projects/verde-systems/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`
- Added `404.html`
- Added `robots.txt`
- Added `sitemap.xml`
- Added `.nojekyll`
- Added `assets/favicon.svg`
- Added `assets/apple-touch-icon.png`
- Added `assets/autumnbranches-social-preview.png`

### Changes completed

- Replaced the placeholder homepage browser title with a concise studio/service title and refined case-study browser titles for search results.
- Added a homepage meta description and normalized descriptive metadata across all case studies.
- Added canonical URLs for the GitHub Pages deployment.
- Added Open Graph and Twitter Card metadata to all five public pages.
- Added a 1200×630 social-sharing image built from the approved homepage proposition and visual system.
- Added a cobalt/ivory `ab` favicon plus an Apple touch icon.
- Added homepage Organization/WebSite structured data with the approved Instagram profile as a `sameAs` reference.
- Added `robots.txt`, `sitemap.xml`, and `.nojekyll` for GitHub Pages/search-engine readiness.
- Added a responsive branded `404.html` with a clear route back to selected work.
- Added a keyboard-only “Skip to main content” link to all five public pages.
- Added consistent `:focus-visible` outlines so keyboard users do not lose focus indication where earlier component rules removed native outlines.
- Added an accessible label to the homepage primary navigation.
- Preserved all visible page copy, section order, project media, responsive structures, and normal unfocused layouts from v22.

### Testing performed

- Static local-reference validation across all public HTML pages: no broken packaged image, video, favicon, or internal-file paths.
- Confirmed all five public pages contain a unique `main-content` target and working skip-link reference.
- Confirmed image alternative-text attributes remain present.
- Confirmed unique element IDs on every public page.
- Verified canonical, Open Graph, Twitter Card, favicon, touch-icon, title, and description metadata on all five public pages.
- Verified sitemap entries for the homepage and all four case studies.
- Compared visible body text against v22 after excluding the new keyboard-only skip link: no existing visible copy changed.
- Parsed all inline CSS blocks successfully.
- Ran `node --check` on every inline JavaScript block: no syntax errors.
- Verified all new launch files and social/favicon assets are packaged.

### Known limitations

- The local Chromium executable failed to complete headless screenshot rendering in this session because of an environment/runtime issue, so v23 does not claim a new browser screenshot regression pass. The normal page DOM/content is preserved from v22 and the new page-level CSS is limited to hidden-until-focused accessibility controls.
- Canonical, sitemap, and Open Graph URLs currently use `https://autumnbranchesstudio.github.io/`. They should be changed if a custom domain is connected later.
- Physical-device Safari/Android testing remains recommended after deployment.

## v22 — Activate Instagram contact link

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on v21

### Request summary

Activate the existing homepage Instagram contact control using the supplied Autumn Branches Studio Instagram profile URL.

### Files changed

- `index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Converted the pending Instagram contact control into a real external link.
- Linked it to the supplied Autumn Branches Studio Instagram profile.
- Opens Instagram in a new tab with `noopener noreferrer`.
- Added an accessible link label and visible keyboard focus treatment.
- Removed the disabled/pending state styling; no other portfolio layout or content was changed.

### Testing performed

- Verified the supplied Instagram URL is present exactly once in `index.html`.
- Verified the control is a focusable anchor with external-link safety attributes.
- Verified no pending/disabled Instagram state remains.
- Verified packaged local references remain unchanged.

### Known limitations

- Final live verification should be performed after GitHub Pages deploys v22.

## v21 — Unified sans-serif typography + Instagram contact control

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on deployed/user-approved v20

### Request summary

Remove the secondary Courier/monospace typeface throughout the entire portfolio and use the primary sans-serif family everywhere. Increase undersized metadata/interface text where needed so the new system stays legible. Add an Instagram button to the homepage contact section, with the final URL to be supplied later.

### Files changed

- `index.html`
- `projects/cafe-lumiere/index.html`
- `projects/mara-vale/index.html`
- `projects/nura-wellness/index.html`
- `projects/verde-systems/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Removed all Courier New / generic monospace font declarations from the five webpages.
- Converted case-study metadata variables/usages to the existing Arial/Helvetica primary sans-serif family.
- Increased site-level labels, case metadata, lens controls, project metadata, article indices, calendar metadata, social-execution labels, and footer/navigation microcopy where the previous scale became too small.
- Kept dense miniature social-post metadata proportional while raising its smallest values for better legibility.
- Added a centered Instagram control beside the direct email option in the homepage contact section.
- The Instagram control is deliberately rendered as a non-interactive pending control until the user supplies the actual profile URL, avoiding a dead or guessed link.
- No portfolio copy, project content, media, colours, or section order was changed.

### Testing performed

- Responsive layout and overflow checks across all five pages at 375, 390, 430, 768, 820, 821, 1024, 1280, and 1440px.
- Verified no Courier/monospace declaration remains in any webpage.
- Checked header/navigation wrapping, selected-work metadata, case-study labels, calendars, social mockups, closing navigation, and homepage contact layout.
- Verified the pending Instagram control is not focusable/clickable before a real URL is supplied.
- Verified packaged local references and JavaScript remain valid.

### Known limitations

- The Instagram profile URL is still required before the control can be made active.
- Physical-device Safari/Android testing remains recommended after deployment.

## v20 — Verde short-form social card cleanup

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on v19

### Request summary

Remove the decorative equalizer-style bars from Verde Systems' `03 / SHORT FORM` social execution and rebalance that card so it feels as clean and intentional as the other social examples. Preserve the existing message, colours, typography language, and all unrelated page layouts.

### Files changed

- `projects/verde-systems/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Removed the four decorative lime bars from the Verde short-form execution.
- Rebuilt the card as a simple three-part composition: top metadata, centered headline, and bottom `ONE IDEA / 60 SEC` / play-control row.
- Added a restrained lime divider above the bottom metadata to give the card structure without introducing another decorative graphic.
- Added a constrained grid column to prevent intrinsic text width from escaping the card at the 821px breakpoint.
- Reduced the short-form headline minimum desktop size so `INFRASTRUCTURE` remains fully inside the narrow desktop card instead of clipping.
- Increased the 431–820px execution row height so the redesigned short-form card and its paired perspective card have enough vertical room without internal clipping.
- Preserved all existing Verde copy, colours, content order, navigation behavior, social modules, and media.

### Bugs fixed

- Decorative bars reading like an unrelated chart/equalizer inside the short-form social execution.
- Potential internal clipping of the redesigned card around 768–820px.
- Long headline word overflow at the 821px desktop breakpoint.

### Testing performed

- Chromium layout and geometry checks at 375, 390, 430, 768, 820, 821, 1024, 1280, and 1440px.
- Confirmed the short-form card has no horizontal or vertical internal overflow at the tested widths.
- Confirmed the full document has no horizontal overflow at the tested widths.
- Confirmed no page JavaScript errors were introduced by the change.
- Visual spot checks completed at 375, 768, and 1440px.

### Known limitations

- As with prior versions, final GitHub Pages review in the user's live Chrome/Safari environments remains recommended after deployment.

## v19 — Verde fixed-header anchor landing correction

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on v18

### Request summary

Correct Verde Systems after live review showed its Strategy navigation still landing too high, with the POSITIONING label partially hidden behind the fixed header. Preserve the section design and the v18 behavior on the other case studies.

### Files changed

- `projects/verde-systems/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Added an explicit in-page navigation handler for Verde's Overview, Strategy, and Social links.
- The handler calculates the live fixed-header height and scrolls the destination section boundary immediately below it, preserving the destination section's own top padding.
- Keeps reduced-motion behavior by switching to an immediate scroll when the user requests reduced motion.
- Keeps the URL hash updated without triggering a second browser-native anchor jump.
- Added the same precise correction when a Verde page is opened directly with a valid section hash.
- Retained the v18 `scroll-margin-top` rule as a CSS fallback.

### Bugs fixed

- Verde Strategy landing with `POSITIONING` clipped underneath the fixed header in the live browser.
- Potential browser-to-browser variation in Verde's native fixed-header anchor positioning.

### Testing performed

- Verified the Verde menu contains valid `#opening`, `#strategy`, and `#social` targets.
- Checked the explicit target calculation against the live header height at narrow mobile, tablet, short-desktop, and standard desktop viewport sizes.
- Confirmed the change is isolated to Verde navigation JavaScript; no section CSS, copy, media, or layout rules were modified.

### Known limitations

- Live GitHub Pages should still be hard-refreshed after deployment to ensure the browser is running the new inline script rather than a cached v18 document.

## v18 — Case-study navigation anchor landing repair

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on user-accepted v17

### Request summary

Make fixed-header case-study menu links land with the destination section fully visible, using Mara Vale's already-correct Strategy landing as the reference. Café Lumière, Nura Wellness, and Verde Systems were landing the section start behind the fixed header, cutting off the POSITIONING label. Apply the same behavior to every in-page section target on those pages without changing section layouts.

### Files changed

- `projects/cafe-lumiere/index.html`
- `projects/nura-wellness/index.html`
- `projects/verde-systems/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Added the same fixed-header anchor offset behavior already used by Mara Vale to every `.section` target on Café Lumière, Nura Wellness, and Verde Systems.
- Overview, Strategy, Social, and any other section-ID anchors on those pages now reserve the current `--header-h` above the destination when browser anchor scrolling occurs.
- The offset automatically follows the existing 66px desktop header and 60px mobile/tablet header variable values.
- Preserved all section padding, typography, colors, grids, branch rails, content, and interactions.

### Bugs fixed

- Café Lumière Strategy landing placing POSITIONING underneath/too close to the fixed header.
- Nura Wellness Strategy landing placing POSITIONING underneath/too close to the fixed header.
- Verde Systems Strategy landing placing POSITIONING underneath/too close to the fixed header.
- Equivalent fixed-header clipping risk for the other menu-linked sections on those three case studies.

### Testing performed

- Verified all case-study menu anchor targets exist and are section elements.
- Compared implementation with Mara Vale's existing `.section { scroll-margin-top: var(--header-h) }` behavior.
- Browser anchor landing geometry checks performed for Strategy and Social/Content targets at 375px, 768px, and 1440px; all menu hash targets, including Overview, were statically verified to exist.
- Confirmed no document-level horizontal overflow and no local asset/path changes.

### Known limitations

- Final live GitHub Pages verification is still recommended because browser zoom and extension/toolbars can alter the visible viewport, although the anchor offset is based on the site's actual fixed-header CSS variable rather than a hard-coded desktop-only pixel value.


## v17 — Nura six-post feed structural repair

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on v16

### Request summary

Structurally repair the Nura Wellness six-post feed after live Chrome review showed the two feed rows reading like three continuous columns and the feed/footer content becoming crowded or clipped. Keep the rest of the portfolio and the v16 Café/footer fixes unchanged.

### Files changed

- `projects/nura-wellness/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Removed fixed-height compression from the Nura feed by putting the feed header, six-card grid, and feed footer into natural vertical flow.
- Changed the desktop parent social-grid rows to intrinsic sizing where the wide-desktop composition is used, preventing viewport-height differences from clipping the feed footer.
- Increased the visual gutters between all six feed cards so the two rows read as six independent posts instead of three combined vertical cards.
- Increased separation between the six-card grid and the content-mix / point-of-view footer.
- Extended the spacious tablet-style social structure through constrained desktop widths: from 821px through 1279px the feed spans the full social width and the supporting modules use a two-column grid.
- At 1050–1279px, the six feed cards use a single six-column row to keep the section compact while preserving clear separation.
- At 1280px and above, retained the approved wide-desktop three-column social composition, with only the feed's natural-height and gutter repairs applied.
- Preserved all Nura copy, images, colours, card artwork, interactions, and all non-Nura pages.

### Bugs fixed

- Six feed tiles visually merging into three stacked columns because the row gap was too small.
- Feed/footer content being vulnerable to clipping when Chromium calculated the fixed parent rows shorter than the feed's intrinsic content.
- Community-card content crowding in constrained desktop layouts by giving the feed substantially more width in that range.

### Testing performed

Geometry and visual checks were run in Chromium at 375, 390, 430, 599, 600, 768, 820, 821, 900, 1024, 1180, 1181, 1279, 1280, 1366, and 1440px.

Results:

- No document-level horizontal overflow at any tested width.
- Feed rows maintain explicit gutters: 11px on narrow phones, 18px at 600–820px, 14px at 821–1279px, and 16px on wide desktop.
- Feed footer remains below the six-card grid with a positive separation at every tested width; no feed child extends beyond the feed container.
- 821–1049px renders as a full-width three-column/two-row feed with the four supporting modules below in a two-column grid.
- 1050–1279px renders as a full-width six-column feed row with the supporting modules below in a two-column grid.
- 1280px and above retains the approved wide-desktop social composition.
- Visual spot checks were completed for the full social section at 768, 820, 821, 1024, 1180, and 1440px.

### Known limitations

- Final verification should still be performed on the live GitHub Pages URL in the exact Chrome setup that exposed the v16 issue.
- No unrelated browser, copy, asset, or performance changes are included in v17.

## v16 — Browser layout repairs and navigation legibility

**Revision date:** 2026-08-23  
**Status:** Delivered candidate based on the user-approved v15 baseline

### Request summary

Repair three issues identified after live/browser review: the Nura Wellness six-post feed becoming crowded or overlapping in some desktop/Chromium viewport conditions; the Café Lumière 8:17 AM Story execution clipping and misaligning; and closing case-study navigation type appearing too small. Preserve all other approved layouts and content.

### Files changed

- `projects/cafe-lumiere/index.html`
- `projects/mara-vale/index.html`
- `projects/nura-wellness/index.html`
- `projects/verde-systems/index.html`
- `PROJECT_HANDOFF.md`
- `CHANGELOG.md`

### Changes completed

- Reworked only the Café 8:17 AM Story card's internal flow so its top metadata, headline, and poll options fit without clipping at phone, tablet, and desktop widths.
- Added Nura feed safeguards that keep feed tiles on natural aspect-ratio rows and reduce headline scaling in the narrow-desktop/tablet ranges where Chromium could crowd the tile artwork.
- Increased closing-navigation typography consistently across all four case studies: 14px on desktop and 12px through 820px.
- Preserved all copy, assets, colours, section order, and unrelated desktop compositions.

### Bugs fixed

- Café Story card headline being pushed above the card and colliding with its `STORY / ASK` metadata.
- Nura feed headline crowding/clipping near the 821px desktop breakpoint and in constrained desktop/browser viewport conditions.
- Case-study closing navigation appearing undersized relative to the surrounding section.

### Testing performed

Target widths checked after the repair:

- 375px
- 390px
- 430px
- 768px
- 820px
- 821px
- 1024px
- 1180px
- 1280px
- 1440px

Checks included Café Story element bounds and child clipping, Nura feed-tile dimensions and text containment, case-study closing-navigation wrapping, document horizontal overflow, local asset references, inline JavaScript syntax, and visual spot checks in Chromium.

Results:

- No horizontal overflow detected on any of the five pages at the ten tested widths.
- No Café Story child clipping detected.
- No Nura feed-tile overlap or headline escape detected.
- Closing navigation renders at 12px through 820px and 14px from 821px upward without internal overflow.
- No missing packaged references or inline JavaScript syntax errors detected.

### Known limitations

- Physical Safari/Chrome device testing remains recommended after deployment.
- The homepage video and all media files are unchanged from v15.
- Shared case-study styles remain inline by design; no refactor was introduced.

## v15 — Mobile-responsive implementation

**Revision date:** 2026-08-23  
**Status:** Approved baseline; superseded for new work by v16 candidate

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
