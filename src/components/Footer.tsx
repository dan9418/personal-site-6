'use client'

import { LINK_CONTACT } from "@/data/links.data";
import { useIsPathname } from "@/utils/hooks";
import { LinkCategoriesList } from "./LinksList";

const Footer: React.FC = () => {
    const isContactPage = useIsPathname(LINK_CONTACT.href);
    return (
        <footer className="p-8 theme-d-bg-3 theme-d-fg-1">
            {!isContactPage && <LinkCategoriesList x isDark />}
            <address className="text-xs theme-d-fg-1 pt-8 flex flex-col justify-center items-center">
                <p>Dan Bednarczyk</p>
                <p>11/5/23</p>
                <p>v0.0.1</p>
            </address>
        </footer>
    )
}

export default Footer