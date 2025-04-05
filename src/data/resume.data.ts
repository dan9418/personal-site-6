// TECHNICAL SKILLS

export type TechSkillsItem = {
  category: string;
  items: string[];
};

const TECH_SKILLS: TechSkillsItem[] = [
  {
    category: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Node",
      "SQL",
      "C#",
      "C++",
      "Java",
    ],
  },
  {
    category: "Libraries",
    items: [
      "React",
      "Next",
      "Gatsby",
      "Styled Components",
      "Tailwind CSS",
      "Google Analytics",
      "Formik",
      "Zustand",
      "Redux",
      "Misc Unit Testing",
    ],
  },
  {
    category: "Concepts",
    items: [
      "REST / HTTP",
      "Scrum / Kanban",
      "SEO",
      "SSR vs CSR",
      "Web Vitals",
      "Accessibility",
      "Telemetry (GA, Chartbeat)",
      "Edge Servers (Fastly)",
      "Error Tracking (Sentry)",
      "CI/CD (AWS, Azure)",
      "Live Streaming Video",
    ],
  },
  {
    category: "Software",
    items: [
      "Figma",
      "Jira",
      "Sentry",
      "Photoshop",
      "Postman",
      "yarn (classic/modern)",
      "Git",
      "npm",
      "VS Code",
      "Visual Studio",
    ],
  },
];

// WORK EXPERIENCE

export type WorkExpItem = {
  company: string;
  duration: string;
  position: string;
  location: string;
  items: string[];
};

const WORK_EXP: WorkExpItem[] = [
  {
    company: "PlayOn Sports, MaxPreps",
    duration: "December 2019 - Present",
    position: "Senior Software Engineer",
    location: "El Dorado Hills, CA (Remote)",
    items: [
      "Leads the web frontend team in supporting product needs and maintaining a scalable, modern codebase",
      "Facilitates communication between stakeholders in tech, product, & design on distributed Agile team",
      "Manages junior developers and presents technical material to a wide audience",
      "Implements React pages utilizing Next.js for server-side rendering and SEO optimization",
      "Builds robust, responsive component libraries using styled-components",
      "Designs integrations for ads, tracking, error reporting, and caching",
      "Supports complex routing requirements and URL-rewriting patterns",
    ],
  },
  {
    company: "Bentley Systems",
    duration: "May 2016 - July 2019",
    position: "Associate Software Engineer",
    location: "Pittsburgh, PA",
    items: [
      "Designed, implemented, and consumed various RESTful APIs",
      "Built responsive single-page web applications using TypeScript, Angular, HTML5, and CSS3",
      "Integrated relational and NoSQL databases into web applications",
      "Worked with Azure cloud applications utilizing Octopus for CI/CD pipelines",
      "Selected for inaugural International Graduate Development Program in Vilnius, Lithuania",
    ],
  },
  {
    company: "The Bank of New York Mellon",
    duration: "May 2015 - August 2015",
    position: "Software Engineer Intern",
    location: "Pittsburgh, PA",
    items: [
      "Syncronized schemas across DB2 databases to form single master schema",
      "Automated daily data comparisons for a central Reference Data Hub to simplify internal data sharing",
      "Wrote Java application to integrate disparate datasources on a partitioned MVS/Linux mainframe",
    ],
  },
];

// EDUCATION

const EDUCATION: WorkExpItem = {
  company: "University of Pittsburgh, Swanson School of Engineering",
  duration: "April 2017",
  position: "BS, Computer Engineering",
  location: "3.71 GPA",
  items: [
    "Graduated with special distinction as the Outstanding Senior in departmental class",
    "2nd place at departmental design expo for augmented reality Android app",
    "1st place for computer engineering conference paper on hybrid drives",
  ],
};

// PROJECTS

export const PROJECTS: string[] = [
  "Created 'Play What,' an educational music theory website and toolkit (in Beta)",
  "Developed this personal website using the Next App Router and Tailwind CSS",
  //'Volunteer program coordinator at nonprofit music instrument lending library',
  "Eagle Scout",
];

export type Resume = {
  techSkills: TechSkillsItem[];
  workExp: WorkExpItem[];
  education: WorkExpItem;
  projects: string[];
};

export const RESUME: Resume = {
  techSkills: TECH_SKILLS,
  workExp: WORK_EXP,
  education: EDUCATION,
  projects: PROJECTS,
};
