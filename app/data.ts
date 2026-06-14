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
    "CS/AI @ Northeastern",
  location: "New York, NY / Boston, MA", // <- e.g. "San Francisco, CA"
  // Short paragraphs for the About section
  about: [
    "I'm Alex Park, a Computer Science Student at Northeastern University concentrating in artificial intelligence.",
    "In my free time, I love playing basketball, lifting weights, exploring cafes, and playing games.",
  ],
};

/* ---- Contact / social links -------------------------------------- */
export const contact = {
  email: "park.ale@northeastern.edu",
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
