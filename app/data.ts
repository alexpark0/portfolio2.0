/* ==================================================================
   EDIT YOUR CONTENT HERE
   ------------------------------------------------------------------
   This is the only file you need to touch to fill in your real info.
   I couldn't pull your LinkedIn automatically (LinkedIn blocks bots),
   so the entries below are placeholders — swap them for the real ones
   from https://www.linkedin.com/in/alex-park-/
   ================================================================== */

export const profile = {
  name: "Alex Park",
  role: "Software Engineer", // <- your headline / title
  tagline:
    "I build thoughtful, performant software and enjoy turning hard problems into clean, simple products.",
  location: "City, Country", // <- e.g. "San Francisco, CA"
  // Short paragraphs for the About section
  about: [
    "Hi, I'm Alex — a placeholder bio that you should replace with your real summary from LinkedIn. Talk about what you do, what you care about, and what you're great at.",
    "I'm interested in [your focus areas]. When I'm not shipping code you'll find me [a personal detail to make it human].",
  ],
};

/* ---- Contact / social links -------------------------------------- */
export const contact = {
  email: "alexpark2805@gmail.com",
  linkedin: "https://www.linkedin.com/in/alex-park-/",
  github: "https://github.com/alexpark0", // <- update if different
  // Add or remove as you like
};

/* ---- Work / project experience ----------------------------------
   Newest first. `accent` is "maroon" or "blue" (just for color variety).
   ------------------------------------------------------------------ */
export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  accent: "maroon" | "blue";
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Placeholder role description — replace with what you actually did here.",
    highlights: [
      "Shipped a key feature that moved an important metric.",
      "Led or contributed to something technically meaningful.",
      "Collaborated cross-functionally to deliver X.",
    ],
    accent: "maroon",
  },
  {
    role: "Software Engineering Intern",
    company: "Previous Company",
    period: "Summer 2023",
    location: "On-site",
    description:
      "Placeholder role description — what was the team and what did you build?",
    highlights: [
      "Built a tool / service used by the team.",
      "Improved performance or reliability of something.",
    ],
    accent: "blue",
  },
  {
    role: "Your Earlier Role",
    company: "Earlier Company / University Project",
    period: "2022 — 2023",
    description:
      "Another placeholder — feel free to add education here too, or remove this entry.",
    highlights: [
      "Notable accomplishment one.",
      "Notable accomplishment two.",
    ],
    accent: "maroon",
  },
];

/* ---- Interests ---------------------------------------------------
   `icon` is just an emoji so there are no extra dependencies.
   ------------------------------------------------------------------ */
export type Interest = {
  icon: string;
  title: string;
  blurb: string;
};

export const interests: Interest[] = [
  {
    icon: "💻",
    title: "Building Things",
    blurb: "Side projects, hackathons, and tinkering with new tech.",
  },
  {
    icon: "🏔️",
    title: "The Outdoors",
    blurb: "Hiking, travel, and being away from a screen now and then.",
  },
  {
    icon: "🎵",
    title: "Music",
    blurb: "Playing, listening, and the occasional concert.",
  },
  {
    icon: "📚",
    title: "Reading",
    blurb: "Sci-fi, design, and the odd business book.",
  },
  {
    icon: "🎮",
    title: "Gaming",
    blurb: "Strategy and story-driven games when there's time.",
  },
  {
    icon: "☕",
    title: "Coffee",
    blurb: "An ongoing search for the perfect pour-over.",
  },
];

/* ---- Skills (shown as pills in the About section) ---------------- */
export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "AWS",
  "Git",
];
