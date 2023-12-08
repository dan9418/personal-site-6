import PageFrame from "@/components/PageFrame";
import PageHeader from "@/components/PageHeader";
import ART_DATA from "@/data/art.data";
import GRAPHIC_DESIGN_DATA from "@/data/graphic-design.data";
import { getGalleryById } from "@/utils/dataUtils";
import { getIdFromText } from "@/utils/stringUtils";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Gallery | Dan Bednarczyk',
    description: '',
}

export const generateStaticParams = () => GRAPHIC_DESIGN_DATA.map((gallery) =>
    ({ id: getIdFromText(gallery.name) })
);

// @ts-ignore
const Page = ({ params }) => {
    const gallery = getGalleryById([...GRAPHIC_DESIGN_DATA, ...ART_DATA], params.id);
    if (!gallery) return null;
    const { name, description, images } = gallery;
    return (
        <PageFrame>
            <PageHeader text={name} />
            <p className="my-8 text-center">{description}</p>
            <ul className="grid tablet:grid-cols-2 desktop:grid-cols-3 gap-4 items-center justify-center items-center">
                {images.map(img => (
                    <li key={img.path} className="flex items-center justify-center flex-col gap-1">
                        <Image src={img.path} alt={img.name} width={256} height={256} className="rounded" />
                        <h3 className="font-bold text-center mb-2">{img.name}</h3>
                    </li>
                ))}
            </ul>
        </PageFrame>
    )
}

export default Page;