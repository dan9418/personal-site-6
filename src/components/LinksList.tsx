import SmartLink from "@/components/SmartLink";
import { CATEGORY_LINKS, CONTACT_LINKS } from "@/data/links.data";

const LinksList = () => {
    return (
        <ul className="">
            {CATEGORY_LINKS.map(cat => {
                return (
                    <>
                        <li>
                            <h3 className="border-b border-slate-500 my-2 pb-1 font-bold">{cat.name}</h3>
                        </li>
                        {cat.links.map(link => <li key={link.href}>
                            <SmartLink
                                href={link.href}
                                iconId={link.iconId}
                                iconSize={28}
                                className="p-2 block rounded-md"
                                fgColor="text-black"
                                fgColorHover="hover:text-gray-700"
                                bgColorHover="hover:bg-slate-200"
                            >
                                <div>
                                    <div className="text-sm">
                                        {link.text}
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                        {link.caption}
                                    </div>
                                </div>
                            </SmartLink>
                        </li>
                        )}
                    </>
                )
            })}

        </ul>
    )
}

export default LinksList