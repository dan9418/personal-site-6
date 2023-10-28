import React, { ReactNode } from "react";
import { TECH_SKILLS, TechSkills, WORK_EXP, WorkExp } from './resume.data';

const ResumeSubheader: React.FC<Omit<WorkExp[number], 'items'>> = ({ company, duration, position, location }) => {
    return (
        <div className="resume-subheader">
            <h3 className="flex justify-between text-xl font-bold">
                <span className="company">{company}</span>
                <span className="date">{duration}</span>
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

const TechSkill: React.FC<{ data: TechSkills[number] }> = ({ data }) => {
    return (
        <div>
            <h3 className="text-xl font-bold">{data.category}</h3>
            <List items={data.items} />
        </div>
    );
};

const WorkExp: React.FC<{ data: WorkExp[number] }> = ({ data }) => {
    return (
        <div className="mt-4">
            <ResumeSubheader
                company={data.company}
                position={data.position}
                duration={data.duration}
                location={data.location}
            />
            <List items={data.items} />
        </div>
    );
};

const ResumePage = () => {
    return (
        <>
            <section>
                <h2 className="text-2xl font-bold mt-8">Technical Skills</h2>
                <div className='skills grid grid-cols-4'>
                    {TECH_SKILLS.map(skill => <TechSkill key={skill.category} data={skill} />)}
                </div>
            </section>

            <section className="experience">
                <h2 className="text-2xl font-bold mt-8">Work Experience</h2>
                {WORK_EXP.map(exp => <WorkExp key={exp.company} data={exp} />)}
            </section>

            <section>
                <h2 className="text-2xl font-bold mt-8">Education</h2>

                <ResumeSubheader
                    company='University of Pittsburgh, Swanson School of Engineering'
                    position='BS, Computer Engineering'
                    duration='Apr 2017'
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