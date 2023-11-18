import SmartLink from "@/components/SmartLink";
import Image from "next/image";
import { FC } from "react";

interface PortfolioProjectProps {
    title: string;
    description: string;
    imgSrc: string;
    href: string;
}

const PortfolioProject: FC<PortfolioProjectProps> = ({ title, description, imgSrc, href }) => {
    return (
        <SmartLink className="grid grid-cols-[180px_auto] gap-4" href={href}>
            <div>
                <Image src={imgSrc} alt={title} width={180} height={180} />
            </div>
            <div>
                <h2>{title}</h2>
                <p className="">
                    {description}
                </p>
            </div>
        </SmartLink>
    )
}

const PortfolioProjectList: FC<{ items: PortfolioProjectProps[] }> = ({ items }) => {
    return (
        <ul className="flex flex-col gap-4" >
            {items.map(item =>
                <li key={item.title}>
                    <PortfolioProject {...item} />
                </li>
            )}
        </ul>
    )
}

export default PortfolioProjectList