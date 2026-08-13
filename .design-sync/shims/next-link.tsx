// Browser stand-in for `next/link`, wired via .design-sync/tsconfig.sync.json.
//
// The real next/link drags Next's client router into the bundle, which reads
// process.env.__NEXT_ROUTER_BASEPATH at module init and throws
// "process is not defined" in a plain browser — the whole bundle dies before
// anything is assigned to window.BEE2. Claude Design renders plain React, not
// a Next app, so there is no router to talk to and no navigation to intercept:
// an anchor IS the correct behavior here, not a downgrade.
//
// This shims a FRAMEWORK primitive, never a BEE² component — every component
// in the bundle is the repo's own compiled source.
import * as React from 'react';

type UrlObject = {
  pathname?: string | null;
  hash?: string | null;
  search?: string | null;
  query?: Record<string, string | number | boolean | undefined | null> | null;
};

export type LinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> & {
  href: string | UrlObject;
  /** Next-only routing hints — accepted for API parity, inert in the browser. */
  prefetch?: boolean | null;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
  locale?: string | false;
};

function formatUrl(url: string | UrlObject): string {
  if (typeof url === 'string') return url;
  if (!url) return '';
  const { pathname = '', query, hash = '', search = '' } = url;
  let qs = search ?? '';
  if (!qs && query) {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null) params.append(k, String(v));
    }
    const s = params.toString();
    if (s) qs = `?${s}`;
  }
  return `${pathname ?? ''}${qs}${hash ?? ''}`;
}

export default function Link({
  href,
  children,
  // Swallowed: these are router directives, not anchor attributes, and React
  // would warn about each one as an unknown DOM prop.
  prefetch: _prefetch,
  replace: _replace,
  scroll: _scroll,
  shallow: _shallow,
  passHref: _passHref,
  legacyBehavior: _legacyBehavior,
  locale: _locale,
  ...rest
}: LinkProps) {
  return (
    <a href={formatUrl(href)} {...rest}>
      {children}
    </a>
  );
}
