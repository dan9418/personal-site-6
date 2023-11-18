import Link from "next/link";
import { PropsWithChildren } from "react";
import Icon from "./icons/Icon";
import { IconId } from "./icons/icons";

interface ISmartLinkProps extends PropsWithChildren {
    className?: string;
    href: string;
    iconId?: IconId;
    iconSize?: string;
    fgColor?: string;
    fgColorHover?: string;
    bgColor?: string;
    bgColorHover?: string;
}

const SmartLink: React.FC<ISmartLinkProps> = ({ href, iconId, iconSize, children, fgColor, className = '', fgColorHover, bgColor, bgColorHover }) => {
    const isRelative = href.startsWith('/');
    const Tag = isRelative ? Link : 'a';

    const isBlock = className.split(' ').includes('block');

    let classes = `
        ${iconId ? isBlock ? 'flex' : 'inline-flex' : ''}
        ${iconId ? 'items-center gap-2' : ''}  
        ${fgColor ? ` ${fgColor}` : ''} 
        ${fgColorHover ? ` ${fgColorHover}` : ''} 
        ${bgColor ? ` ${bgColor}` : ''} 
        ${bgColorHover ? ` ${bgColorHover}` : ''} 
        ${className ? className : ''} 
    `;

    return (
        <Tag href={href} className={classes} target={isRelative ? '' : '_blank'}>
            {iconId && <Icon iconId={iconId} className={iconSize} />}
            {children}
        </Tag>
    )
}

export default SmartLink