import SmartLink from "@/components/SmartLink";
import { CONTACT_LINKS } from "@/data/links.data";

const LinksList = () => {
    return (
        <ul className="">
            {CONTACT_LINKS.map(link => <li key={link.href}>
                <SmartLink href={link.href} iconId={link.iconId} iconSize={24} className="p-2 block"
                    fgColor="text-black"
                    fgColorHover="hover:text-gray-700"
                >
                    {link.text}
                </SmartLink>
            </li>)}
        </ul>
    )
}

export default LinksList