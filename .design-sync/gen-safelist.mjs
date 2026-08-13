// Generates .design-sync/build/safelist.txt — the utility vocabulary the
// shipped stylesheet must contain.
//
// WHY THIS EXISTS: Tailwind only emits utilities it finds in scanned source.
// Scanning just this repo yields exactly the classes the 15 components happen
// to use today — about 370 rules. But the stylesheet we ship is consumed by a
// design agent writing NEW layouts against this system: it will reach for
// bg-ink, border-lemon, gap-10, md:grid-cols-3 and hundreds of others that no
// current component uses. Every one of those would resolve to nothing and the
// design would render unstyled, with nothing downstream to catch it.
//
// So we enumerate the vocabulary deliberately. Tailwind extracts candidates
// from any file, so a plain text file of class names is a valid @source.
//
//   node .design-sync/gen-safelist.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'build/safelist.txt');

const out = new Set();
const add = (...c) => c.forEach((x) => out.add(x));
const cross = (prefixes, values) => {
  for (const p of prefixes) for (const v of values) add(`${p}-${v}`);
};

// ── colour vocabulary ───────────────────────────────────────────────────
// Brand scale (src/app/globals.css @theme) + shadcn semantic roles.
const BRAND = ['navy', 'navy-deep', 'blue', 'lemon', 'ink', 'mist'];
const SEMANTIC = [
  'background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground',
  'primary', 'primary-foreground', 'secondary', 'secondary-foreground',
  'muted', 'muted-foreground', 'accent', 'accent-foreground',
  'destructive', 'border', 'input', 'ring',
];
const NEUTRAL = ['white', 'black', 'transparent', 'current', 'inherit'];
const COLORS = [...BRAND, ...SEMANTIC, ...NEUTRAL];
const COLOR_PREFIXES = ['bg', 'text', 'border', 'ring', 'fill', 'stroke', 'from', 'via', 'to', 'shadow', 'outline', 'decoration', 'divide', 'placeholder', 'caret'];
// Alpha steps kept to the round tens the DS itself reaches for (bg-blue/40,
// text-white/80, bg-lemon/20…). Every extra step is 26 colours x 4 prefixes.
const ALPHA = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90];

cross(COLOR_PREFIXES, COLORS);
for (const p of ['bg', 'text', 'border', 'ring']) {
  for (const c of [...BRAND, ...SEMANTIC, 'white', 'black']) {
    for (const a of ALPHA) add(`${p}-${c}/${a}`);
  }
}

// ── spacing ─────────────────────────────────────────────────────────────
const SPACE = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24,
  28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, 'px', 'auto',
];
cross(
  ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'ps', 'pe',
   'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me',
   '-mt', '-mr', '-mb', '-ml', '-mx', '-my',
   'gap', 'gap-x', 'gap-y', 'space-x', 'space-y', 'scroll-m', 'scroll-p'],
  SPACE,
);

// ── sizing ──────────────────────────────────────────────────────────────
const FRACTIONS = ['1/2', '1/3', '2/3', '1/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '5/6', '1/12', '5/12', '7/12', '11/12'];
const SIZE_KEYWORDS = ['full', 'screen', 'auto', 'min', 'max', 'fit', 'dvh', 'dvw', 'svh', 'lvh'];
cross(['w', 'h', 'size', 'min-w', 'min-h', 'max-w', 'max-h'], [...SPACE, ...SIZE_KEYWORDS]);
cross(['w', 'h', 'basis'], FRACTIONS);
cross(['max-w'], ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'prose', 'none']);

// ── typography ──────────────────────────────────────────────────────────
cross(['text'], ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']);
cross(['font'], ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', 'sans', 'serif', 'mono', 'heading']);
cross(['leading'], ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', 3, 4, 5, 6, 7, 8, 9, 10]);
cross(['tracking'], ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']);
cross(['text'], ['left', 'center', 'right', 'justify', 'start', 'end', 'balance', 'pretty', 'wrap', 'nowrap', 'ellipsis', 'clip']);
cross(['line-clamp'], [1, 2, 3, 4, 5, 6, 'none']);
cross(['align'], ['baseline', 'top', 'middle', 'bottom']);
cross(['list'], ['none', 'disc', 'decimal', 'inside', 'outside']);
cross(['underline-offset'], [0, 1, 2, 4, 8, 'auto']);
add('uppercase', 'lowercase', 'capitalize', 'normal-case', 'italic', 'not-italic',
    'underline', 'overline', 'line-through', 'no-underline', 'truncate', 'antialiased',
    'subpixel-antialiased', 'whitespace-nowrap', 'whitespace-pre-line', 'whitespace-normal',
    'break-words', 'break-all', 'text-balance', 'text-pretty', 'tabular-nums', 'font-stretch-normal');

// ── layout ──────────────────────────────────────────────────────────────
add('block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid',
    'hidden', 'contents', 'table', 'flow-root', 'list-item',
    'relative', 'absolute', 'fixed', 'sticky', 'static',
    'isolate', 'overflow-hidden', 'overflow-auto', 'overflow-x-auto', 'overflow-y-auto',
    'overflow-visible', 'overflow-clip', 'overflow-x-hidden', 'overflow-y-hidden',
    'flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse', 'flex-wrap',
    'flex-nowrap', 'flex-wrap-reverse', 'flex-1', 'flex-auto', 'flex-initial', 'flex-none',
    'grow', 'grow-0', 'shrink', 'shrink-0', 'container', 'mx-auto',
    'pointer-events-none', 'pointer-events-auto', 'select-none', 'select-text',
    'cursor-pointer', 'cursor-default', 'cursor-not-allowed', 'appearance-none',
    'sr-only', 'not-sr-only', 'aspect-square', 'aspect-video', 'aspect-auto');
cross(['grid-cols'], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none', 'subgrid']);
cross(['grid-rows'], [1, 2, 3, 4, 5, 6, 'none', 'subgrid']);
cross(['col-span', 'row-span'], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'full']);
cross(['col-start', 'col-end', 'row-start', 'row-end'], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'auto']);
cross(['items'], ['start', 'end', 'center', 'baseline', 'stretch']);
cross(['justify'], ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch']);
cross(['justify-items', 'place-items', 'place-content', 'content'], ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline']);
cross(['self'], ['auto', 'start', 'end', 'center', 'stretch', 'baseline']);
cross(['order'], [1, 2, 3, 4, 5, 6, 'first', 'last', 'none']);
cross(['z'], [0, 10, 20, 30, 40, 50, 'auto']);
cross(['inset', 'inset-x', 'inset-y', 'top', 'right', 'bottom', 'left', '-top', '-right', '-bottom', '-left', '-inset'],
      [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 'px', 'auto', 'full', '1/2']);
cross(['auto-cols', 'auto-rows'], ['auto', 'min', 'max', 'fr']);
cross(['object'], ['contain', 'cover', 'fill', 'none', 'center', 'top', 'bottom', 'left', 'right']);

// ── borders, radius, effects ────────────────────────────────────────────
const RADII = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'];
cross(['rounded', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l',
       'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'], RADII);
add('rounded', 'border', 'border-x', 'border-y', 'border-t', 'border-r', 'border-b', 'border-l',
    'border-solid', 'border-dashed', 'border-dotted', 'border-none',
    'divide-x', 'divide-y', 'ring', 'ring-inset', 'ring-offset-2');
cross(['border', 'border-x', 'border-y', 'border-t', 'border-r', 'border-b', 'border-l', 'ring', 'ring-offset', 'divide'], [0, 1, 2, 4, 8]);
cross(['shadow'], ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none']);
cross(['opacity'], [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100]);
cross(['blur', 'backdrop-blur'], ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']);
cross(['transition'], ['none', 'all', 'colors', 'opacity', 'shadow', 'transform']);
cross(['duration'], [0, 75, 100, 150, 200, 300, 500, 700, 1000]);
cross(['ease'], ['linear', 'in', 'out', 'in-out']);
cross(['scale'], [0, 50, 75, 90, 95, 100, 105, 110, 125, 150]);
cross(['rotate', '-rotate'], [0, 1, 2, 3, 6, 12, 45, 90, 180]);
cross(['translate-x', 'translate-y', '-translate-x', '-translate-y'], [0, 0.5, 1, 2, 3, 4, 6, 8, 'px', 'full', '1/2']);
add('bg-gradient-to-r', 'bg-gradient-to-l', 'bg-gradient-to-t', 'bg-gradient-to-b',
    'bg-gradient-to-br', 'bg-gradient-to-bl', 'bg-gradient-to-tr', 'bg-gradient-to-tl',
    'bg-linear-to-r', 'bg-linear-to-b', 'bg-linear-to-br',
    'bg-cover', 'bg-contain', 'bg-center', 'bg-no-repeat', 'bg-clip-text', 'bg-clip-padding',
    // The DS's own hand-written utilities (globals.css @layer utilities).
    'bg-brand-gradient', 'text-brand-gradient');

// ── variants ────────────────────────────────────────────────────────────
// Applied to a chosen subset — the full cross-product would balloon the sheet
// for no benefit. Responsive covers layout/spacing/type; states cover the
// interactive surface (colour, shadow, transform).
// Variants are where a safelist balloons: naively crossing every class with
// every breakpoint and state produced a 5.7 MB sheet. Both tiers below are
// deliberately narrow — responsive on the classes layout actually reflows,
// states on the interactive surface, and neither on alpha-modified colours.
const base = [...out];

// Responsive: what genuinely changes between breakpoints.
const RESPONSIVE = /^(grid-cols-|col-span-|row-span-|flex$|flex-row|flex-col|flex-wrap|hidden$|block$|inline-flex$|inline-block$|grid$|items-|justify-|self-|order-|gap-|gap-x-|gap-y-|p-|px-|py-|pt-|pr-|pb-|pl-|m-|mx-|my-|mt-|mr-|mb-|ml-|w-|h-|size-|min-w-|max-w-|min-h-|text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|left|center|right)$|leading-|rounded-|absolute$|relative$|static$|sticky$|inset-|top-|right-|bottom-|left-|z-|aspect-|object-|space-x-|space-y-|container$|mx-auto$)/;
// Exclude the long tail of spacing steps at breakpoints — rarely reached for,
// and each one costs five extra rules.
const RARE_STEP = /-(44|52|60|72|80|96|0\.5|1\.5|2\.5|3\.5)$/;

for (const c of base) {
  if (RESPONSIVE.test(c) && !RARE_STEP.test(c)) {
    for (const bp of ['sm', 'md', 'lg', 'xl']) add(`${bp}:${c}`);
  }
}

// States: colour, elevation and the small transforms, WITHOUT alpha modifiers
// (hover:bg-navy/40 and friends are a long tail nobody reaches for).
const STATEFUL = /^(bg|text|border|ring|shadow|fill|stroke|decoration|outline)-[a-z]/;
const STATES = ['hover', 'focus', 'focus-visible', 'active', 'disabled', 'group-hover'];
for (const c of base) {
  if (c.includes('/')) continue;
  if (STATEFUL.test(c) || /^(opacity-|shadow-|underline$|no-underline$|scale-|translate-y-)/.test(c)) {
    for (const st of STATES) add(`${st}:${c}`);
  }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, [...out].join('\n') + '\n');
console.error(`[SAFELIST] ${out.size} class candidates -> build/safelist.txt`);
