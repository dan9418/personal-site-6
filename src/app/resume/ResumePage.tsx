import React, { ReactNode } from "react";
import { TECH_SKILLS, TechSkills } from './resume.data';

const ResumeSubheader: React.FC<any> = ({ company, date, position, location }) => {
    return (
        <div className="resume-subheader">
            <h3 className="flex justify-between text-xl font-bold">
                <span className="company">{company}</span>
                <span className="date">{date}</span>
            </h3>
            <h4 className="flex justify-between text-l italic">
                <span className="position">{position}</span>
                <span className="location">{location}</span>
            </h4>
        </div>
    );
}

const List: React.FC<{ items: ReactNode[] }> = ({ items }) => {
    return (
        <ul className="list-disc ml-4">
            {items.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
    );
};

const SectionList: React.FC<{ data: TechSkills[number] }> = ({ data }) => {
    return (
        <div>
            <h3 className="text-xl font-bold">{data.category}</h3>
            <List items={data.items} />
        </div>
    );
};

const ResumePage = () => {
    return (
        <>
            <section>
                <h2 className="text-2xl font-bold">Technical Skills</h2>
                <div className='skills grid grid-cols-4'>
                    {TECH_SKILLS.map(skill => <SectionList key={skill.category} data={skill} />)}
                </div>
            </section>

            <section className="experience">
                <h2 className="text-2xl font-bold">Work Experience</h2>

                <ResumeSubheader
                    company='CBS Sports Digital'
                    position='Senior Software Engineer'
                    date='Dec 2019 - Present'
                    location='El Dorado Hills, CA (Remote)'
                />

                <ul className="list-disc ml-4">
                    <li>Serving as the primary frontend engineer in effort to modularize and modernize the <a href='https://www.maxpreps.com/' target='_blank'>MaxPreps</a> architecture</li>
                    <li>Implementing new React pages utilizing Next.js for server-side rendering and SEO optimization</li>
                    <li>Building out robust, responsive component library using styled-components</li>
                    <li>Architecting patterns for ad, tracking, and edge-caching implementations</li>
                    <li>Managing complex, multi-layer routing requirements and URL-rewriting patterns</li>
                    <li>Working directly with stakeholders across product, design, and engineering in a highly collaborative Agile environment</li>
                </ul>

                <ResumeSubheader
                    company='Bentley Systems'
                    position='Associate Software Engineer'
                    date='May 2016 - Jul 2019'
                    location='Pittsburgh, PA + Vilnius, LT'
                />

                <ul className="list-disc ml-4">
                    <li>Designed, implemented, and consumed various RESTful APIs</li>
                    <li>Built responsive web applications using TypeScript, Angular, HTML5, and CSS3</li>
                    <li>Authored backend services for scalability, flexibility, and modularity using .NET framework</li>
                    <li>Integrated relational and NoSQL databases into web applications</li>
                    <li>Worked with Azure cloud applications utilizing Octopus for CI/CD pipelines</li>
                </ul>

                <ResumeSubheader
                    company='The Bank of New York Mellon'
                    position='Software Engineer Intern'
                    date='May 2015 - Aug 2015'
                    location='Pittsburgh, PA'
                />

                <ul className="list-disc ml-4">
                    <li>Syncronized schemas across DB2 databases to form single, master schema</li>
                    <li>Automated daily data comparisons for a central Reference Data Hub to simplify internal data sharing</li>
                    <li>Wrote Java application to integrate disparate datasources on a partitioned MVS/Linux mainframe</li>
                </ul>

                <ResumeSubheader
                    company='University of Pittsburgh, Residence Life'
                    position='Resident Assistant'
                    date='Aug 2014 - Dec 2015'
                    location='Pittsburgh, PA'
                />

                <ul className="list-disc ml-4">
                    <li>Managed and mentored 57 freshmen engineering residents</li>
                    <li>Enforced community standards for diverse pool of students</li>
                    <li>Organized large-scale social, educational, and experiential programs</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Education</h2>

                <ResumeSubheader
                    company='University of Pittsburgh, Swanson School of Engineering'
                    position='BS, Computer Engineering'
                    date='Apr 2017'
                    location='Pittsburgh, PA'
                />

                <ul className="list-disc ml-4">
                    <li>Graduated with special distinction as the Outstanding Senior in departmental class</li>
                    <li>3.71 GPA</li>
                </ul>

            </section>

            <section>

                <h2 className="text-2xl font-bold">Projects</h2>

                <ul className="list-disc ml-4">
                    <li>Creator of <b>Play What</b> (in beta), an educational website and open source framework for exploring music theory concepts</li>
                    <li>Volunteer at <a href='https://musiclandria.com/' target='_blank' rel='noopener noreferrer'>The Library of Musiclandria</a>, a nonprofit music instrument lending library and community space</li>
                    <li>Developed an <a href='https://github.com/dan9418/ARDashboard/' target='_blank' rel='noopener noreferrer'>augmented reality dashboard</a> mobile app to recognize and communicate with electrical switchgear (senior design project)</li>
                    <li>Developed an Android app for boolean algebra calculations</li>
                    <li>Assisted in design and construction of several tech-supplemented hydroponic gardening systems</li>
                    <li>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</li>
                    <li>Developed this portfolio site with Gatsby, React, TypeScript, and SCSS</li>
                </ul>

            </section>

            <section>
                <h2 className="text-2xl font-bold">Awards</h2>

                <ul className="list-disc ml-4">
                    <li>Selected for inaugural International Graduate Development Program in Vilnius, Lithuania</li>
                    <li>Won 2nd place at departmental senior design expo for augmented reality mobile app</li>
                    <li>Won 1st place for computer engineering conference paper on hybrid drives</li>
                    <li>Eagle Scout</li>
                </ul>

            </section>

        </>
    )
}

export default ResumePage