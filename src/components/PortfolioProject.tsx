import SmartLink from "@/components/SmartLink";
import Image from "next/image";
import { FC } from "react";
import PageHeader from "./PageHeader";

interface PortfolioProjectProps {
    title: string;
    description?: string;
    imgSrc: string;
    href: string;
}

const PortfolioProject: FC<PortfolioProjectProps> = ({ title, description, imgSrc, href }) => {
    return (
        <SmartLink href={href} className="inline-block h-full p-2 tablet:p-4 hover:bg-slate-100 rounded-lg border theme-d-border mb-8">
            <div className="">
                <div className="h-[256px] w-[256px] overflow-hidden bg-white rounded flex items-center justify-center">
                    <Image
                        src={imgSrc}
                        alt={title}
                        width={128}
                        height={128}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="w-[256px]"
                    />
                </div>
                <div className="w-[256px]">
                    <PageHeader text={title} level='h4' className="mt-2" />
                    {description && (
                        <p className="text-sm theme-l-fg-2">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </SmartLink>
    )
}

const PortfolioProjectList: FC<{ items: PortfolioProjectProps[] }> = ({ items }) => {
    return (
        <ul className="grid tablet:grid-cols-2 desktop:grid-cols-3 gap-4" >
            {items.map(item =>
                <li key={item.title} className="m-auto">
                    <PortfolioProject {...item} />
                </li>
            )}
        </ul>
    )
}

export default PortfolioProjectList