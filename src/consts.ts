// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

export const SITE = {
  /** Site name — used in the header brand, <title>, and og:site_name. */
  title: 'Jerry Yarnetsky, MLS',
  /** Default meta description for pages that don't set their own. */
  description: 'Web services librarian at Miami University of Ohio.',
  /** Description of the RSS feed at /rss.xml. */
  rssDescription: 'Notes and projects from Jerry Yarnetsky.',
  /** Default social share image, relative to the site root (see public/). */
  ogImage: '/og.jpg',
  /** Footer credit line. */
  footerText: 'Built with Astro Keel.',
} as const;

/** Header navigation. `href` is relative to the site root; the configured
 *  `base` is applied automatically via `withBase()`. */
export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Notes' },
  { href: '/search/', label: 'Search' },
] as const;
