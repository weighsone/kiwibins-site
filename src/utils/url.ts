/**
 * Prefix a path with the Astro base URL (for GitHub Pages compatibility).
 *
 * Usage:  href={u('/bins-and-prices/')}
 *         src={u('/assets/images/logo.png')}
 *
 * import.meta.env.BASE_URL is set by astro.config.mjs `base` option.
 * It includes a trailing slash, e.g. "/kiwibins-site/"
 */
export function u(path: string): string {
  // Remove trailing slash from base so we can control it from `path`
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
  return `${base}${path}`;
}
