import SmartLink from "@/components/SmartLink";
import Image from "next/image";
import { FC } from "react";
import PageHeader from "./PageHeader";

interface PortfolioProjectProps {
    title: string;
    description: string;
    imgSrc: string;
    href: string;
}

const PortfolioProject: FC<PortfolioProjectProps> = ({ title, description, imgSrc, href }) => {
    return (
        <SmartLink href={href} className="block p-4 hover:bg-slate-100 rounded-lg">
            <div className="grid grid-cols-[180px_auto] gap-4 items-start">
                <div>
                    <Image src={imgSrc} alt={title} width={180} height={180} />
                </div>
                <div>
                    <PageHeader text={title} level='h4' />
                    <p className="">
                        {description}
                    </p>
                </div>
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