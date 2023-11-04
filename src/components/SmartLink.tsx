import Link from "next/link";
import { PropsWithChildren } from "react";
import Icon from "./icons/Icon";
import { IconId } from "./icons/icons";

interface ISmartLinkProps extends PropsWithChildren {
    className: string;
    href: string;
    iconId?: IconId;
    iconSize?: number;
    fgColor?: string;
    fgColorHover?: string;
    bgColor?: string;
    bgColorHover?: string;
}

const SmartLink: React.FC<ISmartLinkProps> = ({ href, iconId, iconSize, children, fgColor, className, fgColorHover, bgColor, bgColorHover }) => {
    const isRelative = href.startsWith('/');
    const Tag = isRelative ? Link : 'a';

    const isBlock = className.split(' ').includes('block');

    let classes = `
        ${isBlock ? 'flex' : 'inline-flex'}
        align-items gap-2  
        ${fgColor ? ` ${fgColor}` : ''} 
        ${fgColorHover ? ` ${fgColorHover}` : ''} 
        ${bgColor ? ` ${bgColor}` : ''} 
        ${bgColorHover ? ` ${bgColorHover}` : ''} 
        ${className ? className : ''} 
    `;

    return (
        <Tag href={href} className={classes}>
            {iconId && <Icon iconId={iconId} size={iconSize} color={fgColor} colorHover={fgColorHover} />}
            {children}
        </Tag>
    )
}

export default SmartLink