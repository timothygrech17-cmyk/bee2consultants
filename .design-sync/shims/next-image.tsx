// Browser stand-in for `next/image`, wired via .design-sync/tsconfig.sync.json.
// Same reason as next-link.tsx: the real module pulls in Next internals that
// reference `process` and kill the bundle at load.
//
// It also fixes a second problem. Logo renders `src="/logo-navy.png"` — a
// path served out of public/ by Next. Nothing serves public/ here, so the mark
// would 404 in every preview card AND in every design the agent builds. Those
// files are inlined as data URIs at prepare time (public-assets.ts) and looked
// up here, so the real BEE² logo travels with the bundle.
import * as React from 'react';
import { PUBLIC_ASSETS } from './public-assets';

type StaticImport = { src: string; width?: number; height?: number };

export type ImageProps = Omit<React.ComponentPropsWithoutRef<'img'>, 'src'> & {
  src: string | StaticImport;
  width?: number | string;
  height?: number | string;
  /** Next-only optimizer hints — accepted for API parity, inert in the browser. */
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
  onLoadingComplete?: unknown;
};

export default function Image({
  src,
  alt = '',
  fill,
  priority,
  style,
  quality: _quality,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  unoptimized: _unoptimized,
  loader: _loader,
  onLoadingComplete: _onLoadingComplete,
  ...rest
}: ImageProps) {
  const raw = typeof src === 'string' ? src : (src?.src ?? '');
  const resolved = PUBLIC_ASSETS[raw] ?? raw;

  // `fill` means "absolutely fill the positioned parent" in next/image.
  const fillStyle: React.CSSProperties | undefined = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : undefined;

  return (
    <img
      src={resolved}
      alt={alt}
      loading={priority ? 'eager' : undefined}
      decoding="async"
      style={fillStyle ? { ...fillStyle, ...style } : style}
      {...rest}
    />
  );
}
