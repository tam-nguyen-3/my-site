// Skills shown alongside experience on the home page, grouped by kind.
// Edit the items in each group — they render as pills in array order.

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Rust', 'SQL'] },
  { label: 'Frameworks', items: ['Astro', 'React', 'Remix', 'Node.js'] },
  { label: 'Tools', items: ['Git', 'Docker', 'SQLite', 'Figma'] },
];
