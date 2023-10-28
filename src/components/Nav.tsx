import Link from "next/link"
import { PropsWithChildren } from "react"

const NavLink: React.FC<{ href: string, text: string }> = ({ href, text }) => {
    return (
        <Link href={href} className="block h-full px-4 text-white hover:bg-slate-600 inline-flex justify-center items-center">{text}</Link>
    )
}

const Nav: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-12 bg-slate-500 flex justify-center items-center">
            <div className="w-full h-full max-w-5xl">
                <NavLink href='/' text="Home" />
                <NavLink href='/resume' text="Resume" />
                <NavLink href='/portfolio' text="Portfolio" />
            </div>
        </nav>
    )
}

export default Nav