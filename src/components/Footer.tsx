'use client'

import { LINK_CONTACT } from "@/data/links.data";
import { useIsPathname } from "@/utils/hooks";
import { LinkCategoriesList } from "./LinksList";

const Footer: React.FC = () => {
    const isContactPage = useIsPathname(LINK_CONTACT.href);
    return (
        <footer className="p-8 bg-slate-500 text-white">
            {!isContactPage && <LinkCategoriesList x isDark />}
            <address className="text-xs text-slate-100 pt-8 flex flex-col justify-center items-center">
                <p>Dan Bednarczyk</p>
                <p>11/5/23</p>
                <p>v0.0.1</p>
            </address>
        </footer>
    )
}

export default Footer