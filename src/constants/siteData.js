export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  // { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const heroRoles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Full Stack Developer",
  "Software Engineer",
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/asm-ayesha", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/msayesha-siddika", icon: "linkedin" },
  // { label: "X", href: "https://x.com/your-handle", icon: "x" },
  { label: "Email", href: "mailto:msayesha.siddikaa@gmail.com", icon: "email" },
];

// export const experienceItems = [
//   {
//     company: "Neon Forge Studio",
//     role: "Lead Full Stack Developer",
//     duration: "2024 - Present",
//     location: "Remote",
//     summary:
//       "Built premium web experiences, product systems, and AI-assisted workflows for founders and internal teams.",
//     responsibilities: [
//       "Shipped marketing sites and dashboards with polished motion systems.",
//       "Designed reusable component libraries and scalable frontend foundations.",
//       "Integrated Django, Next.js, and automation pipelines for product velocity.",
//     ],
//     tech: ["Next.js", "Django", "Framer Motion", "PostgreSQL", "AWS"],
//   },
//   {
//     company: "Signal Layer",
//     role: "Backend Engineer",
//     duration: "2022 - 2024",
//     location: "Hybrid",
//     summary:
//       "Focused on API design, performance tuning, and shipping reliable product infrastructure with clean DX.",
//     responsibilities: [
//       "Optimized API latency and database access patterns across core workflows.",
//       "Implemented admin tooling, auth flows, and observability improvements.",
//       "Collaborated with design to convert concepts into scalable production UI.",
//     ],
//     tech: ["Python", "Django", "FastAPI", "Redis", "Docker"],
//   },
//   {
//     company: "Studio Orbit",
//     role: "Software Engineer",
//     duration: "2020 - 2022",
//     location: "Remote",
//     summary:
//       "Delivered frontend and backend features for dashboards, landing pages, and client-facing portals.",
//     responsibilities: [
//       "Built responsive interfaces with animation-aware architecture.",
//       "Created analytics surfaces and reusable UI primitives for teams.",
//       "Collaborated across product, design, and delivery for rapid launches.",
//     ],
//     tech: ["React", "Tailwind CSS", "MySQL", "Firebase", "Linux"],
//   },
// ];

// export const skillCategories = [
//   {
//     title: "Frontend",
//     icon: "frontend",
//     skills: [
//       { name: "Next.js", level: 96 },
//       { name: "React", level: 95 },
//       { name: "JavaScript", level: 94 },
//       { name: "Tailwind CSS", level: 97 },
//     ],
//   },
//   {
//     title: "Backend",
//     icon: "backend",
//     skills: [
//       { name: "Python", level: 93 },
//       { name: "Django", level: 95 },
//       { name: "FastAPI", level: 88 },
//       { name: "Redis", level: 84 },
//     ],
//   },
//   {
//     title: "Database",
//     icon: "database",
//     skills: [
//       { name: "PostgreSQL", level: 93 },
//       { name: "MySQL", level: 87 },
//       { name: "Supabase", level: 82 },
//       { name: "Firebase", level: 80 },
//     ],
//   },
//   {
//     title: "DevOps",
//     icon: "devops",
//     skills: [
//       { name: "Docker", level: 89 },
//       { name: "AWS", level: 84 },
//       { name: "Vercel", level: 96 },
//       { name: "Linux", level: 91 },
//     ],
//   },
//   {
//     title: "Tools",
//     icon: "tools",
//     skills: [
//       { name: "Git", level: 95 },
//       { name: "VS Code", level: 98 },
//       { name: "Figma", level: 82 },
//       { name: "Postman", level: 86 },
//     ],
//   },
//   {
//     title: "AI / Automation",
//     icon: "ai",
//     skills: [
//       { name: "Prompt Design", level: 88 },
//       { name: "Workflow Automation", level: 90 },
//       { name: "OpenAI APIs", level: 86 },
//       { name: "Agentic Tools", level: 84 },
//     ],
//   },
// ];

// export const techMarquee = [
//   "Next.js",
//   "Framer Motion",
//   "GSAP",
//   "Lenis",
//   "Tailwind CSS",
//   "React Icons",
//   "Django",
//   "FastAPI",
//   "PostgreSQL",
//   "Docker",
//   "Supabase",
//   "Vercel",
//   "AWS",
//   "Redis",
// ];

export const projectFilters = ["All", "Full Stack", "Frontend"];

export const projects = [
  {
    title: "SkillSphere",
    categories: ["Full Stack", "Frontend"],
    description:
      "A course catalog and learning tracker with a persistent UI, search functionality, and Google, Email login integration.",
    tech: ["Next.js", "React 19", "MongoDB", "Better Auth", "Tailwind CSS", "Vercel"],
    live: "https://skillsphere-nextjs.vercel.app/",
    github: "https://github.com/asm-ayesha/skillsphere-nextjs",
    accent: "cyan",
    highlights: ["Persistent Navbar & Footer", "Search functionality (by course title)", "Course detail pages(Protected route)", "Google Login Integration"],
  },
  {
    title: "Bond Keeper",
    categories: ["Frontend"],
    description:
      "BondKeeper is a responsive web app that helps users track and maintain meaningful relationships by logging interactions, setting communication goals, and visualizing connection history.",
    tech: ["React", "Next.js","Recharts", "Tailwind CSS", "Vercel"],
    live: "https://bond-keeper.vercel.app",
    github: "https://github.com/asm-ayesha/bond-keeper",
    accent: "purple",
    highlights: ["View all friends in a structured card layout", "Automatically updates the Timeline", "Filter interactions by Call, Text, or Video"],
  },
  {
    title: "DigitToolHub",
    categories: ["Full Stack", "Frontend"],
    description:
      "DigiToolsHub is a modern React-based web app for browsing digital tools, managing a dynamic shopping cart, and enjoying a smooth, responsive UI experience",
    tech: ["React", "Tailwind CSS", "Netlify"],
    live: "https://digitoolshub.netlify.app/",
    github: "https://github.com/asm-ayesha/DigitToolHub",
    accent: "blue",
    highlights: ["Add/remove products dynamically", "'Proceed to Checkout' clears cart instantly", "Switch between Products and Cart", "Interactive Buy Now button"],
  },
  // {
  //   title: "Vector Atelier",
  //   categories: ["Frontend", "AI"],
  //   description:
  //     "A visual studio for premium landing pages, with motion presets and AI-assisted content workflows.",
  //   tech: ["Next.js", "GSAP", "Lenis", "Vercel"],
  //   live: "https://skillsphere-nextjs.vercel.app/",
  //   github: "https://github.com/your-handle/vector-atelier",
  //   accent: "cyan",
  //   highlights: ["Motion presets", "Editorial layout", "Fast iteration"],
  // },
];

// export const testimonials = [
//   {
//     name: "Alya Morgan",
//     role: "Founder, Northstar Labs",
//     quote:
//       "The execution felt high-end from the first frame. The motion, hierarchy, and details made the product feel instantly credible.",
//     rating: 5,
//   },
//   {
//     name: "Derek Chen",
//     role: "Product Lead, Signal Layer",
//     quote:
//       "The delivery combined clean engineering with a cinematic layer of polish. It moved our launch forward without compromising quality.",
//     rating: 5,
//   },
//   {
//     name: "Sara Patel",
//     role: "Creative Director, Orbit Studio",
//     quote:
//       "Every section felt intentional. The site balances restraint and energy in a way that makes the brand memorable.",
//     rating: 5,
//   },
// ];

// export const stats = [
//   { label: "Projects shipped", value: 48, suffix: "+" },
//   { label: "Problems solved", value: 320, suffix: "+" },
//   { label: "Years of experience", value: 6, suffix: "+" },
//   { label: "GitHub commits", value: 1800, suffix: "+" },
// ];

export const contactDetails = [
  { label: "Email", value: "msayesha.siddikaa@gmail.com" },
  // { label: "Phone", value: "+1 (555) 012-4827" },
  { label: "Location", value: "Remote / Global" },
];

export const contributionHeatmap = Array.from({ length: 84 }, (_, index) => (index * 7 + 3) % 5);
