// Replace with your real deployed URL before publishing (used for canonical + social cards).
export const SITE_URL = "https://sanket-portfolio.example";

export const profile = {
  name: "Sanket Gabhane",
  email: "sanket.gabhane1710@gmail.com",
  phone: "+91 9322546441",
  phoneHref: "tel:+919322546441",
  // github: "https://github.com/sanketgabhane",
  location: "Pune, Maharashtra",

  github: "https://github.com/sanketgabhane",
  linkedin: "https://www.linkedin.com/in/sanketgabhane/",
};

export const numbers = [
  { value: "4+", label: "years shipping full stack products" },
  { value: "70%", label: "lift in watch time from the course player" },
  { value: "35%", label: "smaller initial bundle via code splitting" },
  { value: "30+", label: "reusable React components maintained" },
];

export const jobs = [
  {
    when: "Mar 2024 – Present",
    role: "Frontend / Full Stack Developer",
    org: "Saksoft, Pune",
    points: [
      "Building a learning management system with React, TypeScript, Node.js, Express and MongoDB.",
      "Built a course player with real-time progress tracking, lifting engagement and watch time by 70%.",
      "Created dashboards and reporting modules that visualise learner analytics and course progress.",
      "Designed REST APIs with validation and structured error responses; tuned performance with lazy loading, memoization and code splitting.",
      "Run code reviews and mentor junior developers on React and component design.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Axios"],
  },
  {
    when: "Sep 2022 – Feb 2024",
    role: "Full Stack Developer",
    org: "VUI Consultancy, Gurugram",
    points: [
      "Delivered client products in React, Angular, Node.js and MongoDB.",
      "Shipped 15+ Express REST endpoints with middleware, validation and error handling.",
      "Modelled MongoDB schemas with indexing and pagination for listings, bookings and transactions.",
      "Cut the initial bundle by about 35% with route-based code splitting.",
    ],
    stack: ["React", "Angular", "Redux", "Node.js", "MongoDB", "SCSS"],
  },
  {
    when: "Jan 2020 – Sep 2020",
    role: "Development Intern",
    org: "Ceinsys Tech, Nagpur",
    points: [
      "Built responsive, cross-browser UI for enterprise web apps from UX wireframes.",
      "Helped with debugging and frontend performance fixes.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const projects = [
  {
    name: "Advantage Motors",
    kind: "Pre-owned luxury car marketplace",
    text: "Searchable inventory with filters, vehicle detail pages, seller dashboards and transaction workflows, backed by Express APIs and MongoDB.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "SCSS"],
    tag: "VUI Consultancy",
  },
  {
    name: "Corporatedge",
    kind: "Coworking platform across 5+ cities",
    text: "Workspace discovery, multi-step booking, live availability and pricing tiers, with validated booking and pricing APIs.",
    stack: ["React", "Angular", "Node.js", "Express", "MongoDB"],
    tag: "VUI Consultancy",
  },
  {
    name: "Iconic Dental",
    kind: "Digital dental design platform",
    text: "Dental lab workflow screens for order tracking, design submissions, quality reviews and user dashboards.",
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    tag: "VUI Consultancy",
  },
  {
    name: "Placify",
    kind: "Student placement hub (final year project)",
    text: "Placement management for company details, eligibility criteria, packages and student outcomes, with responsive data-driven screens.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    tag: "Final year project",
  },
];

export const toolbox = [
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT auth",
      "Middleware",
      "Validation",
    ],
  },
  {
    group: "Database",
    items: [
      "MongoDB",
      "Mongoose",
      "Schema design",
      "Indexing",
      "Pagination",
      "SQL (basic)",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Redux Toolkit",
      "Context API",
      "RxJS",
    ],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "SCSS"],
  },
  {
    group: "UI",
    items: ["Tailwind CSS", "Bootstrap", "Responsive design", "Figma to code"],
  },
  {
    group: "Workflow",
    items: [
      "Git & GitHub",
      "Postman",
      "Jest (basic)",
      "Agile / Scrum",
      "Code reviews",
    ],
  },
];
