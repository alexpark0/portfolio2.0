/* ==================================================================
   EDIT YOUR CONTENT HERE
   ------------------------------------------------------------------
   This is the only file you need to touch to fill in your real info.
   I couldn't pull your LinkedIn automatically (LinkedIn blocks bots),
   so the entries below are placeholders — swap them for the real ones
   from https://www.linkedin.com/in/alex-park-/
   ================================================================== */

export const profile = {
  name: "Alexander Park",
  role: "Software Engineer",
  tagline:
    "CS/AI @ Northeastern",
  location: "New York, NY / Boston, MA",
  about: [
    "I'm Alex Park, a Computer Science Student at Northeastern University concentrating in artificial intelligence.",
    "In my free time, I love playing basketball, lifting weights, exploring cafes, and playing games.",
  ],
};

/* ---- Contact / social links -------------------------------------- */
export const contact = {
  email: "park.ale@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/alex-park-/",
  github: "https://github.com/alexpark0",
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
  /** Optional company logo, e.g. "/logos/verisk.png" (drop file in /public/logos).
      If omitted, the company initials are shown instead. */
  logo?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Quantitative Researcher Associate Co-op",
    company: "Morgan Stanley - Parametric Division",
    period: "Incoming July 2026",
    location: "New York, NY",
    description:
      "TBD",
    highlights: [
      "TBD"
    ],
    accent: "maroon",
  },
  {
    role: "Software Developer Co-op",
    company: "Verisk",
    period: "Jul - Dec 2025",
    location: "Boston, MA",
    description:
      "Exposure CSV Data Import",
    highlights: [
      "Streamline data import workflows supporting catastrophe risk modeling, improving efficiency for clients",
      "Developed a Python script to parse AWS Step Function logs, compute stage duration metrics, and generate interactive graphs in a nightly automation pipeline to visualize changes in import performance over time",
      "Validated and tested REST APIs with Stoplight, Prism, and cURL to ensure contract accuracy and consistent endpoint behavior"
    ],
    accent: "blue",
  },
  {
    role: "Software Engineer Intern",
    company: "Revvity",
    period: "May - Aug 2024",
    description:
      "SonoVol & Digital Products",
    highlights: [
      "Developed machine learning model to classify mouse poses (laying on back, stomach, side) in a given image for health condition detection with 90+% accuracy using PyTorch and AlexNet CNN architecture",
      "Trained existing machine learning model used for health condition detection in mice by tagging and labeling mice anatomy on 200+ images using Computer Vision Annotation Tool (CV AT)",
      "Mapped coordinates of input fields on dry blood spot cards used for newborn screening using React and GIMP"
    ],
    accent: "maroon",
    // logo: "/logos/revvity.png",
  },
];

/* ---- Projects ----------------------------------------------------
   Showcase work, side projects, or hackathons. `image` is optional —
   drop a screenshot in /public and reference it (e.g. "/projects/foo.png").
   If omitted, a styled placeholder is shown instead.
   ------------------------------------------------------------------ */
export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  accent: "maroon" | "blue";
};

export const projects: ProjectItem[] = [
  {
    title: "Project One",
    description:
      "Placeholder project — describe what it does, the problem it solves, and your role. Add a screenshot path to show it off.",
    tags: ["React", "TypeScript", "Node.js"],
    // image: "/projects/project-one.png",
    github: "https://github.com/alexpark0",
    demo: "",
    accent: "blue",
  },
  {
    title: "Project Two",
    description:
      "Another placeholder project. Swap in something from your GitHub or a hackathon build.",
    tags: ["Python", "PyTorch", "ML"],
    // image: "/projects/project-two.png",
    github: "https://github.com/alexpark0",
    demo: "",
    accent: "maroon",
  },
  {
    title: "Project Three",
    description:
      "A third placeholder. Add as many as you like — the grid will reflow automatically.",
    tags: ["Next.js", "Tailwind"],
    // image: "/projects/project-three.png",
    github: "https://github.com/alexpark0",
    demo: "",
    accent: "blue",
  },
];

/* ---- Interests ---------------------------------------------------
   `icon` is just an emoji so there are no extra dependencies.
   ------------------------------------------------------------------ */
export type Interest = {
  icon: string;
  title: string;
  blurb: string;
  /** Optional photo, e.g. "/interests/basketball.jpg" (drop file in /public).
      If omitted, a styled placeholder with the icon is shown. */
  image?: string;
};

export const interests: Interest[] = [
  {
    icon: "🏀",
    title: "Basketball",
    blurb: "Playing intramural or pickup with friends.",
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
    icon: "🧊",
    title: "Cubing",
    blurb: "PR: 12 seconds.",
  },
  {
    icon: "🎮",
    title: "Gaming",
    blurb: "Lately chess, but I love all types of games.",
  },
  {
    icon: "☕",
    title: "Coffee",
    blurb: "Always open to cafe recommendations.",
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
