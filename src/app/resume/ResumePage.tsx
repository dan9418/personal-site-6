import PageHeader from "@/components/PageHeader";
import React, { ReactNode } from "react";
import { RESUME, Resume, TechSkillsItem, WorkExpItem } from '../../data/resume.data';

const ResumeSubheader: React.FC<Omit<WorkExpItem, 'items'>> = ({ company, duration, position, location }) => {
    return (
        <div className="resume-subheader whitespace-nowrap">
            <h3 className="flex flex-wrap justify-between lg:text-xl font-bold">
                <span className="company">{company}</span>
                <span className="date">{duration}</span>
            </h3>
            <h4 className="flex flex-wrap justify-between lg:text-l italic">
                <span className="position">{position}</span>
                <span className="location">{location}</span>
            </h4>
        </div>
    );
}

const List: React.FC<{ items: ReactNode[] }> = ({ items }) => {
    return (
        <ul className="list-disc ml-4 mb-4 text-sm lg:text-base">
            {items.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
    );
};

const TechSkill: React.FC<{ data: TechSkillsItem }> = ({ data }) => {
    return (
        <div>
            <h3 className="text-xl font-bold">{data.category}</h3>
            <List items={data.items} />
        </div>
    );
};

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h2 className="text-2xl font-bold my-4 pb-4  border-b border-black">{title}</h2>
    );
};

const WorkExp: React.FC<{ data: Resume['workExp'][number] }> = ({ data }) => {
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
            <PageHeader text='Resume' />

            <section>
                <SectionHeader title="Technical Skills" />
                <div className='skills grid md:grid-cols-2 lg:grid-cols-4'>
                    {RESUME.techSkills.map(skill => <TechSkill key={skill.category} data={skill} />)}
                </div>
            </section>

            <section>
                <SectionHeader title="Work Experience" />
                {RESUME.workExp.map(exp => <WorkExp key={exp.company} data={exp} />)}
            </section>

            <section>
                <SectionHeader title="Education" />
                <WorkExp data={RESUME.education} />
            </section>

            <section>
                <SectionHeader title="Projects" />
                <List items={RESUME.projects} />
            </section>
        </>
    )
}

export default ResumePage