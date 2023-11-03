'use client'

import { NAV_LINKS } from "@/data/links.data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ICON, { IconId } from "./icons/icons"

const NavLink: React.FC<{ href: string, text: string, iconId: IconId }> = ({ href, text, iconId }) => {
    const pathname = usePathname();
    let className = "block h-full px-4 text-white hover:bg-slate-600 inline-flex justify-center items-center";
    if (pathname === href) {
        className = `${className} border-white border-b-2`
    }

    const Component = ICON[iconId];

    return (
        <Link href={href} className={className}>
            <Component size={24} />
            {text}
        </Link>
    )
}

const Nav: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-12 bg-slate-500 flex justify-center items-center">
            <div className="w-full h-full max-w-5xl">
                {NAV_LINKS.map(link => <NavLink key={link.text} {...link} />)}
            </div>
        </nav>
    )
}

export default Nav