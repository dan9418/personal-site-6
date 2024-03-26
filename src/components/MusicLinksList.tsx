import SmartLink from "@/components/SmartLink";
import { ILink } from "@/data/links.data";
import { FC } from "react";
import { IconId } from "./icons/icons";

const MusicLinksLinks: FC<{ links: ILink[] }> = ({ links }) => {
    return (
        <ul className="flex gap-4 uppercase">
            {links.map(link => (
                link.iconId === IconId.Lyrics ? null :
                    <li key={link.href}>
                        <SmartLink href={link.href} iconId={link.iconId} iconSize='h-6 w6' className="border theme-l-border py-1 px-2 rounded text-sm hover:bg-slate-100">
                            {link.iconId?.replace('music', 'Apple Music')}
                            {link.caption && <span>{link.caption}</span>}
                        </SmartLink>
                    </li>
            ))}
        </ul>
    )
}

export default MusicLinksLinks;