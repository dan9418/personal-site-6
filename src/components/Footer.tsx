import { NAV_LINKS } from "@/data/links.data"
import LinksList, { LinkCategoriesList } from "./LinksList"

const Footer: React.FC = () => {
    return (
        <footer className="p-8 bg-slate-500 text-white">
            <LinkCategoriesList x isDark />
            <address className="text-xs text-slate-100 pt-8 flex flex-col justify-center items-center">
                <p>Dan Bednarczyk</p>
                <p>11/5/23</p>
            </address>
        </footer>
    )
}

export default Footer