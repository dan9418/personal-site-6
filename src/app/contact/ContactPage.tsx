import PageHeader from "@/components/PageHeader";
import { CONTACT_LINKS } from "@/data/links.data";
import Link from "next/link";
import React, { ReactNode } from "react";


const List: React.FC<{ items: ReactNode[] }> = ({ items }) => {
    return (
        <ul className="list-disc ml-4 mb-4">
            {items.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
    );
};

const ResumePage = () => {
    return (
        <>
            <PageHeader text='Contact' />
            <List items={CONTACT_LINKS.map(link => <Link href={link.href}>{link.text}</Link>)} />
        </>
    )
}

export default ResumePage