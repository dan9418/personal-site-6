import SmartLink from "@/components/SmartLink";
import { CATEGORY_LINKS, ILink, ILinkCategory } from "@/data/links.data";

const LinksList: React.FC<{ links: ILink[], isDark?: boolean }> = ({ links, isDark }) => {
    return (
        <ul className="">
            {links.map(link => <li key={link.href}>
                <SmartLink
                    href={link.href}
                    iconId={link.iconId}
                    iconSize='h-6 w6'
                    className="p-2 block rounded-md"
                    fgColor={isDark ? 'text-white' : "text-black"}
                    fgColorHover={isDark ? 'hover:text-gray-300' : "hover:text-gray-700"}
                    bgColorHover={isDark ? 'hover:bg-slate-800' : "hover:bg-slate-200"}
                >
                    <div>
                        <div className="text-sm">
                            {link.text}
                        </div>
                        <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-xs`}>
                            {link.caption}
                        </div>
                    </div>
                </SmartLink>
            </li>
            )}
        </ul>
    )
}

export const LinkCategoriesList: React.FC<{ categories?: ILinkCategory[], x?: boolean, isDark?: boolean }> =
    ({ categories = CATEGORY_LINKS, x = false, isDark = false }) => {
        const className = x ? 'lg:flex w-full justify-center gap-16' : '';
        return (
            <ul className={className}>
                {categories.map(cat => {
                    return (
                        <>
                            <li>
                                <h3 className={`border-b ${isDark ? 'border-slate-200' : 'border-slate-500'} my-2 pb-1 font-bold`}>{cat.name}</h3>
                                <LinksList links={cat.links} isDark={isDark} />
                            </li>
                        </>
                    )
                })}

            </ul>
        )
    }

export default LinksList