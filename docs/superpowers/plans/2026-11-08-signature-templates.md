# Signature Templates Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans with independent art and visual-layout work delegated in parallel. Track completion with the checkboxes below.

**Goal:** Add Aureum, Kitsune and Orbit as three polished, editable original Maker templates.

**Architecture:** Reuse the existing editor bridge and demo API. Generate three HTML views from one module, with distinct theme compositions and a shared local catalog/controller.

**Tech Stack:** Native JavaScript ES modules, HTML, CSS, Node built-in test runner, Playwright; no new runtime dependencies.

**Spec:** `docs/superpowers/specs/2026-11-08-signature-templates-design.md`

## Global Constraints

- Slugs are `aureum`, `kitsune`, `orbit`, without hyphens.
- Every view uses local resources, `data-catalog`, `design-editor.js` and the existing `window.__demo` protocol.
- Preserve all existing templates and shared panel; do not deploy or merge automatically.
- New portadas contain art only; headings and controls remain editable HTML.

## Review Focus

- Combined search/category/provider/favorites must produce correct empty and populated states.
- Mobile menus and dialogs must work with keyboard, Escape and visible focus.
- Long custom names, logos and small viewports must not overflow.
- Regenerating templates must be idempotent and preserve the 17 existing options.
- Visual edits must survive dynamic catalog rendering and remain isolated by template.

## Tasks

- [x] **1. Artwork and view generation.** Create three original raster assets in `public/muestra/signature/assets/`. Implement `signatureLobbiesPage(slug, name)` in `scripts/signature-lobbies-page.mjs` and styles in `public/muestra/signature-lobbies.css`. Inspect desktop/mobile screenshots.
- [x] **2. Catalog and interactions.** Add curated local games and `filterGames(games, { category, provider, query, favorites })` to `public/muestra/signature-catalog.mjs`; test combined filters and asset paths. Implement `public/muestra/signature-lobbies.js` using the view's `sg-*` IDs, `data-filter`, `data-provider`, `data-game`, `data-favorite`, `data-info`, and `data-close` controls. Verify local demo launches and editor messages.
- [x] **3. Maker registration.** Extend `scripts/install-lobby-templates.mjs`, regenerate HTML and editor bundle, and update selector/coverage counts to 20. Test registration and second-run idempotence.
- [x] **4. Visual and functional verification.** Run `npm test`, runtime smoke and new browser coverage for the three themes. Check resources, responsive layouts, customization, visual editing and old-template selection. Review the complete diff independently, fix concrete issues, update documentation and commit the tested changes on the feature branch.
- [ ] **5. Delivery.** Push the feature branch and open a reviewable pull request with screenshots and verification results. Report the three templates and PR link concisely.
