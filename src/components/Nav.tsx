'use client'

import { CONTACT_LINKS, NAV_LINKS } from "@/data/links.data"
import { usePathname } from "next/navigation"
import { useState } from "react"
import LinksList, { LinkCategoriesList } from "./LinksList"
import SmartLink from "./SmartLink"
import Icon from "./icons/Icon"
import { IconId } from "./icons/icons"

const NavLink: React.FC<{ href: string, text: string, iconId?: IconId }> = ({ href, text, iconId }) => {
    const pathname = usePathname();
    let className = "block h-full px-4 hover:bg-slate-600 inline-flex justify-center items-center";
    if (pathname === href) {
        className = `${className} border-white border-b-2`
    }

    return (
        <SmartLink href={href} className={className} iconId={iconId} fgColor="text-white" fgColorHover="hover:text-gray-300" >
            {text}
        </SmartLink>
    )
}

const Nav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 h-12 bg-slate-500 flex justify-center items-center">
                <div className="w-full h-full max-w-5xl relative">
                    {NAV_LINKS.map(link => <NavLink key={link.text} {...link} iconId={undefined} />)}
                    <div className="absolute right-0 top-0 h-12 hidden lg:block">
                        {CONTACT_LINKS.map(link => <NavLink key={link.text} {...link} text="" />)}
                    </div>
                </div>
                <button className="h-12 w-12 flex justify-center items-center fixed top-0 right-0 z-10 lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Icon iconId={IconId.Menu} size={16} color="white" />
                </button>
            </nav>
            {isMenuOpen &&
                <section
                    className="h-full w-80 fixed right-0 top-12 bg-slate-100 p-4 shadow lg:hidden">
                    <LinkCategoriesList />
                </section>
            }
        </>
    )
}

export default Nav