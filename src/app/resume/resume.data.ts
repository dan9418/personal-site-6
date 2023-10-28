// TECHNICAL SKILLS

export type TechSkills = {
    category: string;
    items: string[];
}[];

export const TECH_SKILLS: TechSkills = [
    {
        category: 'Languages',
        items: [
            'JavaScript es6',
            'TypeScript 6',
            'HTML5',
            'CSS3',
            'Node',
            'SQL',
            'C#',
            'C++',
            'Java',
        ]
    },
    {
        category: 'Libraries',
        items: [
            'React 18',
            'Next 13',
            'Gatsby',
            'Styled Components',
            'Redux',
            'Google Analytics',
            'Formik',
            'Recoil',
            'Misc. Unit Testing',
        ]
    },
    {
        category: 'Concepts',
        items: [
            'REST / HTTP',
            'Scrum / Kanban',
            'SEO / SSR vs CSR',
            'Web Vitals',
            'Accessibility',
            'Edge Servers (Fastly)',
            'Error Tracking (Sentry)',
            'CI/CD (AWS, Azure)',
            'NoSQL',
        ]
    },
    {
        category: 'Software',
        items: [
            'Figma',
            'Jira',
            'Sentry',
            'Photoshop',
            'npm / yarn',
            'Postman',
            'VS Code',
            'Visual Studio',
            'Git',
        ]
    }
]

export type WorkExp = {
    company: string;
    duration: string;
    position: string;
    location: string;
    items: string[];
}[];

// WORK EXPERIENCE

export const WORK_EXP: WorkExp = [
    {
        company: 'CBS Sports, MaxPreps',
        duration: 'December 2019 - Present',
        position: 'Senior Software Engineer',
        location: 'El Dorado Hills, CA + Remote',
        items: [
            'Leads the frontend team effort to modularize and modernize the legacy MaxPreps site architecture',
            'Implements React pages utilizing Next.js for server-side rendering and SEO optimization',
            'Builds out robust, responsive component libraries using styled-components',
            'Architects solutions for ad, tracking, and caching needs',
            'Supports complex routing requirements and URL-rewriting patterns',
            'Facilitates communication between stakeholders in tech, product, & design on distributed Agile team',
            'Manages junior developers and presents technical material to broader company and executives',
        ]
    },
    {
        company: 'Bentley Systems',
        duration: 'May 2016 - July 2019',
        position: 'Associate Software Engineer',
        location: 'Pittsburgh, PA',
        items: [
            'Designed, implemented, and consumed various RESTful APIs',
            'Built responsive single-page web applications using TypeScript, Angular, HTML5, and CSS3',
            'Integrated relational and NoSQL databases into web applications',
            'Worked with Azure cloud applications utilizing Octopus for CI/CD pipelines',
            'Selected for inaugural International Graduate Development Program in Vilnius, Lithuania',
        ]
    },
    {
        company: 'The Bank of New York Mellon',
        duration: 'May 2015 - August 2015',
        position: 'Software Engineer Intern',
        location: 'Pittsburgh, PA',
        items: [
            'Syncronized schemas across DB2 databases to form single master schema',
            'Automated daily data comparisons for a central Reference Data Hub to simplify internal data sharing',
            'Wrote Java application to integrate disparate datasources on a partitioned MVS/Linux mainframe',
        ]
    }
];

// EDUCATION

export type Education = {
    school: string;
    year: string;
    degree: string;
    gpa: string;
}

export const EDUCATION: Education = {
    school: 'University of Pittsburgh, Swanson School of Engineering',
    year: 'April 2017',
    degree: 'BS, Computer Engineering',
    gpa: '3.71 GPA'
}

// PROJECTS

export const PROJECTS: string[] = [
    'Created Play What, an educational music theory website and toolkit (in Beta)',
    'Developed a personal portfolio website using Gatsby',
    'Volunteer program coordinator at nonprofit music instrument lending library',
]

// AWARDS

export const AWARDS: string[] = [
    'Graduated with special distinction as the Outstanding Senior in departmental class (2017)',
    '2nd place at departmental design expo for augmented reality Android app (2017)',
    '1st place for computer engineering conference paper on hybrid drives (2014)',
    'Eagle Scout (2009)',
]
