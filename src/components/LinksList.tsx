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
                    className="p-2 block rounded-md transition-colors duration-200"
                    fgColor={isDark ? 'theme-d-fg-1' : "theme-l-fg-1"}
                    bgColorHover={isDark ? "hover:bg-sky-700" : "hover:bg-slate-200"}
                >
                    <div>
                        <div className="text-sm">
                            {link.text}
                        </div>
                        <div className={`${isDark ? 'theme-d-fg-2' : 'theme-l-fg-2'} text-xs`}>
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
        const className = x ? 'desktop:flex w-full justify-center gap-16' : '';
        return (
            <ul className={className}>
                {categories.map(cat => {
                    return (
                        <>
                            <li key={cat.name}>
                                <h3 className={`border-b ${isDark ? 'theme-d-border' : 'theme-l-border'} my-2 pb-1 font-bold`}>{cat.name}</h3>
                                <LinksList links={cat.links} isDark={isDark} />
                            </li>
                        </>
                    )
                })}

            </ul>
        )
    }

export default LinksList