// Central site configuration. Edit this file to update your name, bio,
// navigation, social/footer links, and education. Fully typed — you'll get
// autocomplete and an error if a required field is missing.

export interface NavItem {
  label: string;
  href: string;
}

export interface LinkItem {
  label: string;
  href: string;
  /** Used for the hero icon buttons. */
  icon?: 'github' | 'linkedin' | 'resume' | 'email';
  external?: boolean;
}

export interface Education {
  school: string;
  detail: string;
}

export const site = {
  name: 'hi, Tam here',
  // Used for <title>, meta description, RSS, and OpenGraph.
  title: 'Tam Nguyen',
  tagline: 'i\'m a cs senior at Minerva University. ',
  subtitle:
    'you can find me claude\'ing, coffee-hopping, philosophizing, or reading something on my kindle!',

  // Short blurb shown in the "About" preview on the home page.
  aboutPreview:
    "I'm a computer science student who cares about the small details — the ones that separate software you tolerate from software you enjoy. Most of my work lives at the intersection of developer tools, systems design, and interface craft. When I'm not building, I'm usually reading, running, or writing something down before it disappears.",

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Writing', href: '/writing' },
  ] satisfies NavItem[],

  // Icon buttons under the hero on the home page.
  hero: [
    { label: 'GitHub', href: 'https://github.com/tam-nguyen-3', icon: 'github', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tam-nguyen-m', icon: 'linkedin', external: true },
    { label: 'Résumé', href: '/resume.pdf', icon: 'resume', external: true },
  ] satisfies LinkItem[],

  // Footer links (right side).
  footerLinks: [
    { label: 'Resume', href: '/resume.pdf', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tam-nguyen-m', external: true },
    { label: 'GitHub', href: 'https://github.com/tam-nguyen-3', external: true },
    { label: 'Email', href: 'mailto:tamngminh3@gmail.com' },
  ] satisfies LinkItem[],

  education: {
    school: 'Minerva University',
    detail: 'B.S. Computer Science · Expected 2026',
  } satisfies Education,
};

export type Site = typeof site;
