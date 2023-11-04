import { NAV_LINKS } from "@/data/links.data"

const Footer: React.FC = () => {
    return (
        <footer className="p-12 bg-slate-500 text-white">
            <div className="w-full h-full max-w-5xl flex flex-col justify-center items-center">
                <p>Author: Dan Bednarczyk</p>
                <p>Last Updated: 11/3/23</p>
            </div>
        </footer>
    )
}

export default Footer