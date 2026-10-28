# Maker Cloudflare Rebuild Implementation Plan

> **For agentic workers:** Use the execution and verification skills task by task. Independent work is delegated with explicit file ownership.

**Goal:** Preserve Maker's current behavior and thirteen templates while rebuilding its frontend from maintained dependencies and validating Cloudflare deployment.

**Architecture:** Recover existing application logic into readable ESM source, replace bundled vendor code with npm imports, regenerate CSS, and build a static-assets directory for Wrangler. Keep existing public URLs and demo API semantics.

**Tech Stack:** JavaScript ESM, React 19.3.1, Zod 4.6.7, Tailwind 4.3.3, esbuild 0.28.2, Wrangler 4.154.0, Node 24.22.1, npm 12.2.1, Playwright 1.64.1.

**Spec:** `docs/superpowers/specs/2026-10-28-cloudflare-rebuild-design.md`

## Global Constraints

- Preserve all thirteen templates and the existing editor, lobby/panel, mobile/desktop and import/export contracts.
- Keep the uploaded HAR private; never replay its requests or publish credentials/session data.
- Keep current routes and demo behavior; no live casino/payment integration.
- Work only on the reconstruction branch. No automatic production deployment or merge.
- Exact dependency versions and committed lockfile; no reliance on runtime-global packages.

## Review Focus

- Existing saved localStorage and URL designs must still load.
- Repeated switching between templates/panel/device modes must not leak listeners or break controls.
- Uploaded images, fonts, CSS defaults and imported projects must survive recompilation.
- Library replacements must preserve export surfaces and runtime initialization order.
- A clean checkout must build and test without the HAR, global Playwright, an Edge installation or credentials.

### Task 1: Establish baseline and behavioral coverage

**Files:** `tests/browser/`, `scripts/serve-static.mjs`, ignored `work/rebuild/`.
**Interfaces:** browser runner accepts `DEMO_ORIGIN`; baseline is commit b6d354e; assets routes retain `/muestra/`.
- [ ] Inventory HAR code resources without exposing sensitive data.
- [ ] Run existing unit tests and capture baseline browser behavior/screenshots of all templates.
- [ ] Add behavior tests for selector, customization, persistence, panel and responsive modes.

### Task 2: Reconstruct sources and replace embedded libraries

**Files:** `src/client/`, `src/styles/`, `scripts/build.mjs`, `package.json`, `package-lock.json`, `tests/build.test.mjs`.
**Interfaces:** build emits the existing script/CSS names in `dist/public/muestra/`; HTML and relative imports remain valid.
- [ ] Add failing build contracts for generated assets and managed library versions.
- [ ] Recover readable application sources; import React/React DOM/Zod from packages instead of embedded runtimes.
- [ ] Preserve editor algorithms and register all templates through maintainable data.
- [ ] Rebuild Tailwind utilities from an explicit entry and recover application-specific CSS.
- [ ] Build, run unit tests and compare browser output against baseline.

### Task 3: Make toolchain and Cloudflare workflow reproducible

**Files:** `wrangler.jsonc`, `.nvmrc`, `.npmrc`, `.github/workflows/ci.yml`, `.github/dependabot.yml`, tooling config and documentation.
**Interfaces:** `npm run build`, `npm test`, `npm run test:browser`, `npm run test:runtime`, `npm run check:assets`, `npm run check`.
- [ ] Update exact dependencies, Node/npm and GitHub Actions; declare browser tooling.
- [ ] Point Worker assets to generated output and retain routes; validate current compatibility date behavior.
- [ ] Ensure CI builds once, tests actual built assets and runs Wrangler dry-run without credentials.
- [ ] Add dependency-update proposals and document WFP namespace deployment of the generated output.

### Task 4: Validate parity, review and deliver

**Files:** regression tests, docs and any fixes found by verification.
- [ ] Run complete tests, asset checks, audit and browser scenarios; inspect screenshots.
- [ ] Exercise Workers runtime and deployment dry-run against the built output.
- [ ] Obtain an independent whole-branch review and resolve actionable issues.
- [ ] Commit the complete reconstruction; publish the isolated branch/draft PR and verify GitHub Actions when access permits.
- [ ] Report exact results and material limitations with links.
