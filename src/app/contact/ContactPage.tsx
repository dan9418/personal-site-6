import PageHeader from "@/components/PageHeader";
import Icon from "@/components/icons/Icon";
import { CONTACT_LINKS } from "@/data/links.data";
import Link from "next/link";
import React from "react";

const L: React.FC<any> = ({ href, text, iconId }) => {
    return (
        <Link href={href}>
            <Icon iconId={iconId} size={24} />
            <span>{text}
            </span>
        </Link>
    )
};


const ContactPage = () => {
    return (
        <>
            <PageHeader text='Contact' />
            <ul className="list-disc ml-4 mb-4">
                {CONTACT_LINKS.map(link => <li key={link.href}><L {...link} /></li>)}
            </ul>
        </>
    )
}

export default ContactPage