import SmartLink from "@/components/SmartLink";
import { ILink } from "@/data/links.data";
import { FC } from "react";

const MusicLinksLinks: FC<{ links: ILink[] }> = ({ links }) => {
    return (
        <ul className="flex gap-4 uppercase">
            {links.map(link => (
                <li key={link.href}>
                    <SmartLink href={link.href} iconId={link.iconId} iconSize='h-6 w6'>
                        {link.iconId}
                        {link.caption && <span>{link.caption}</span>}
                    </SmartLink>
                </li>
            ))}
        </ul>
    )
}

export default MusicLinksLinks;