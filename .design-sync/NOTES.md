# design-sync notes — BEE² design system

Repo-specific gotchas for future syncs. Read this before re-running anything.

## What this repo is

A **Next.js 16 app**, not a published component package. There is no library build, no `dist/`,
and npm never self-installs a package into its own `node_modules`. The converter therefore runs on
its **synth-entry path**, deriving the component list from `src/components/` (`cfg.srcDir`).
15 components ship: `Button`, `Card` + 6 sub-parts, and the 7 brand components.

## Setup that must exist before the converter runs

`cfg.buildCmd` = `node .design-sync/build-prepare.mjs`. **Always run it first.** It does three
things, all idempotent, none committed:

1. **`node_modules/website` → repo root symlink.** The converter resolves the DS at
   `node_modules/<cfg.pkg>` and dies on ENOENT without it. Gitignored, so **recreate after every
   fresh clone or `npm ci`**.
2. **Inlines `public/*.png` as data URIs** into `.design-sync/shims/public-assets.ts` (generated).
3. **Regenerates the safelist and compiles Tailwind** → `.design-sync/build/ds.css` (`cfg.cssEntry`).

`.ds-sync/` also needs `npm i esbuild ts-morph @types/react @tailwindcss/cli` — the tailwind CLI is
an extra beyond the skill's standard list, and `build-prepare.mjs` fails loudly if it is missing.

## Next.js primitives are shimmed — this is load-bearing

`next/link` and `next/image` are redirected to `.design-sync/shims/*.tsx` via
`cfg.tsconfig` → `.design-sync/tsconfig.sync.json` (`compilerOptions.paths`).

**Why:** the real modules pull Next's client router into the bundle, which reads
`process.env.__NEXT_ROUTER_BASEPATH` at module init. In a plain browser that throws
`ReferenceError: process is not defined` **before anything is assigned to `window.BEE2`** — the
entire bundle is dead and every component reports `[BUNDLE_EXPORT] not a component`. Symptom to
recognise on any future breakage: `process is not defined` in `.render-check.json`.

Only framework primitives are shimmed. Every BEE² component in the bundle is the repo's own
compiled source.

`Logo` renders `src="/logo-navy.png"`, served from `public/` by Next and by nothing else — hence
the data-URI inlining in step 2. Without it the mark 404s in every preview card *and* in every
design built with the system.

**`tsconfig.sync.json` must be comment-free JSON.** The converter strips `//` comments with a
regex that also mangles `"//": "…"` JSON keys; the file then fails to parse and
`tsconfigPathsPlugin` silently returns null, disabling all path aliases with no error. That cost a
debugging cycle — the shims appeared to be ignored.

## The stylesheet is deliberately large (~1 MB)

`src/app/globals.css` is Tailwind v4 source and must be compiled. But Tailwind only emits utilities
it *sees*, and scanning this repo yields only the ~370 rules its 15 components happen to use.
The design agent writes **new** layouts against this system and will reach for `bg-ink`,
`border-lemon`, `gap-10`, `md:grid-cols-3` — none of which existed. Those designs would have
rendered unstyled with nothing downstream to catch it.

`.design-sync/gen-safelist.mjs` therefore enumerates the intended vocabulary (~10.5k candidates →
~1 MB CSS). Sizing history, if it needs retuning: naive full cross-product of every class × every
breakpoint × every state was **5.7 MB**; narrowing responsive variants to layout-reflowing classes
and states to non-alpha colours brought it to 1.8 MB; trimming alpha steps to round tens and
dropping alpha × state landed at 1.1 MB. Trim the variant tiers, not the base vocabulary.

## Fonts

Fraunces + Urbanist come from `next/font/google`, which resolves at Next build time and ships
nothing to a plain bundle. `.design-sync/fetch-fonts.mjs` downloads the **latin** subsets (matching
`subsets: ["latin"]` in `src/app/layout.tsx`) into `.design-sync/fonts/` with an `@font-face` sheet
wired via `cfg.extraFonts`. Re-run only if the families or axes change.

`next/font` also *defines* `--font-urbanist` / `--font-fraunces` on `<html>` at runtime. Nothing
outside Next does, so `.design-sync/ds-entry.css` defines them itself — without that block every
`font-sans` / `font-heading` rule resolves to nothing and the whole system renders in a browser
default face while still passing every automated check.

## Known render warns

None outstanding — the final validate run is clean with zero warnings.

Resolved during this run, recorded so they don't read as new:
- `[GRID_OVERFLOW]` on `Logo` (Sizes) and `PartnerCard` (Pair) → `cardMode: column` in
  `cfg.overrides`.
- `SiteHeader` needs `viewport: 1280x360` (`cardMode: single`): its nav links are `hidden lg:flex`,
  so below 1024px the card showed only a hamburger. Changing `cfg.overrides` requires a full
  `package-build.mjs` — a targeted `preview-rebuild.mjs` fails `[CONFIG_STALE]`.

## Not statically renderable (deliberately skipped)

- `SiteHeader`'s mobile menu — opens on click only.
- `SiteHeader`'s scrolled state (`bg-background/80 backdrop-blur-md`) — driven by a scroll listener.

## Upload status

**Not uploaded.** `DesignSync` reported: *"needs design-system authorization, but `/design-login`
requires an interactive terminal and is not available in this environment."* No Claude Design
project was created, so `cfg.projectId` is **absent** — a future sync will create one and must
record it.

The build in `ds-bundle/` is complete and validated (exit 0, 15/15 previews render, all cells
graded `good`). To upload from an authorized session: run `build-prepare` → `resync.mjs`, then
follow the skill's §5 upload sequence.

## Re-sync risks — what can silently go stale

- **The `node_modules/website` symlink and the `.ds-sync/` staged scripts are gitignored.** A
  fresh clone has neither. Re-run the dep installs and `build-prepare.mjs`.
- **The safelist is a judgement call, not a derivation.** If designs come back partly unstyled, a
  class family is missing from `gen-safelist.mjs` — add it there, not to a component.
- **`public-assets.ts` is generated and inlines every `public/` image.** Adding a large asset to
  `public/` silently grows the bundle; today it contributes ~300 KB of the ~470 KB bundle.
- **Font files are fetched from Google Fonts at prepare time** (network required). They are
  committed, so a re-sync does not re-fetch unless `fetch-fonts.mjs` is re-run.
- **Component discovery is scoped to `src/components/`.** A component added under `src/app/` will
  not be picked up. Pin it with `cfg.componentSrcMap` if that ever happens.
- **`.d.ts` contracts are weaker than a real library build would give** (synth-entry mode, no
  shipped types). If prop extraction degrades, `cfg.dtsPropsFor` is the escape hatch.
- **Tailwind version drift**: pinned by `.ds-sync/node_modules/@tailwindcss/cli` (built with
  4.3.3), which is independent of the repo's own `tailwindcss` dependency. A major bump could
  change `@source` semantics — `@source not` and `@source inline` are both used.
- **Playwright/chromium**: this environment cached chromium build 1194, which pins
  **playwright 1.56.1**. A different image will need the version whose `browsers.json` matches its
  cached build, or the render check cannot run.
