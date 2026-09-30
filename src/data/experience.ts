// Work & research experience shown on the home page, in array order.

export interface ExperienceItem {
  role: string;
  org: string;
  /** e.g. "Summer 2025" or "2023 — 2024" */
  period: string;
  description: string;
  /** Shown in the home-page experience preview. */
  featured?: boolean;
  /** Path under public/ to a company logo (e.g. "/logos/acme.svg").
   *  When omitted, an initials monogram is shown instead. */
  logo?: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer Intern',
    org: 'LinkedIn',
    period: 'Summer 2026',
    description:
      'LinkedIn Pages - shipping full-stack codes for LinkedIn\'s Post Collaboration feature.',
    featured: true,
    logo: '/logos/placeholder-labs.svg',
  },
  {
    role: 'Software Engineer Intern',
    org: 'Rakuna',
    period: 'Summer 2025',
    description:
      'Built full-stack features that support recruiters on the Rakuna platform with Ruby on Rails and React.',
    featured: true,
    logo: '/logos/placeholder-co.svg',
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Minerva University',
    period: '2023 — 2024',
    description:
      'Explored distributed systems primitives for collaborative editing under real-world network conditions.',
    logo: '/logos/minerva.svg',
  },
];
