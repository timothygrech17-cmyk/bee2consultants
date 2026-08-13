# Building with the BEE² design system

BEE² is the design system behind a two-partner fractional consultancy (fractional CMO + project
management). The visual register is **serious, senior, editorial** — deep navy fields, a single
warm lemon accent, generous whitespace, and a serif display face. It is not a playful or
high-saturation product UI.

## Setup

**No provider, no theme wrapper.** Components are plain React and read everything from CSS custom
properties in the stylesheet. Import the design system's `styles.css` once and render components
directly — nothing else is required, and there is no context to forget.

Two consequences worth knowing:

- **Light mode only.** Component CSS carries `dark:` variants inherited from shadcn, but this
  system defines **no dark palette** — there is no `.dark` token block. Do not build dark-mode
  designs with it; they will render with light tokens.
- **`Link` and `Image` are plain `<a>` and `<img>`.** The bundle ships browser shims in place of
  `next/link` / `next/image`, so `href` navigates normally and there is no router or image
  optimizer. Component APIs are unchanged.

Headings (`h1`–`h4`) automatically take Fraunces at weight 500 with tight leading — you do not need
`font-heading` on a heading element.

## The styling idiom: Tailwind v4 utility classes

Style your own layout with utility classes. The stylesheet ships the full standard Tailwind
vocabulary (spacing, flex/grid, sizing, type scale, `sm:`/`md:`/`lg:`/`xl:` breakpoints,
`hover:`/`focus-visible:`/`disabled:` states) **plus** these system-specific families. Use these
names rather than raw hex — they are the brand.

| Family | Names | Use |
|---|---|---|
| Brand colour | `navy`, `navy-deep`, `blue`, `lemon`, `ink`, `mist` | `bg-navy`, `text-lemon`, `border-mist`, `ring-blue` |
| Semantic role | `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring` (each with a `-foreground` pair where it applies) | `bg-card`, `text-muted-foreground`, `border-border` |
| Alpha | any brand/semantic colour + `/5`…`/90` | `bg-blue/40`, `text-white/80`, `bg-lemon/20` |
| Type face | `font-sans` (Urbanist), `font-heading` / `font-serif` (Fraunces) | body vs display |
| Radius | `rounded-sm` … `rounded-4xl`, `rounded-full` (scale is driven by `--radius: 0.75rem`) | `rounded-3xl` for large panels, `rounded-full` for pills |
| Brand gradient | `bg-brand-gradient`, `text-brand-gradient` | navy → blue → lemon diagonal; use sparingly, usually at low opacity behind a navy field |

House patterns worth copying: section eyebrows are
`text-xs font-semibold uppercase tracking-wider text-blue` (or `text-lemon` on navy); CTAs are
pill-shaped (`rounded-full`), not rectangles; navy panels put body copy at `text-white/80`.

## Where the truth lives

- **`styles.css` and its imports** — every token and utility that exists. Read it before inventing
  a class name.
- **`components/<group>/<Name>/<Name>.prompt.md`** — per-component usage and examples.
- **`components/<group>/<Name>/<Name>.d.ts`** — the exact props interface.

Available components: `Button`, `Card` (with `CardHeader`, `CardTitle`, `CardDescription`,
`CardContent`, `CardFooter`, `CardAction`), `PillarCard`, `PartnerCard`, `CTASection`,
`TrustStrip`, `SiteHeader`, `SiteFooter`, `Logo`. Prefer composing these over hand-rolling
equivalents. `SiteHeader` only shows its desktop nav at ≥1024px.

## Idiomatic example

```jsx
<section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
  <p className="text-xs font-semibold uppercase tracking-wider text-blue">What we do, first</p>
  <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
    Two disciplines, each led by the partner who has done the work.
  </h2>

  <div className="mt-10 grid gap-6 md:grid-cols-2">
    <Card>
      <CardHeader>
        <CardTitle>Fractional CMO</CardTitle>
        <CardDescription>Led by Timothy Grech · Malta</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          A seat inside your leadership team, from day one.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">See how it works</Button>
      </CardFooter>
    </Card>
  </div>
</section>
```

The library component carries the control; utility classes carry your own layout glue around it.
