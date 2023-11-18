import PageFrame from "@/components/PageFrame";
import { GALLERY_IDS, getGalleryById } from "@/data/art.data";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Dan Bednarczyk',
    description: '',
}

export const generateStaticParams = () => GALLERY_IDS.map(id => { id });

// @ts-ignore
const Page = ({ params }) => {
    const gallery = getGalleryById(params.id);
    if (!gallery) return null;
    const { name, description, images } = gallery;
    return (
        <PageFrame>
            <h2 className="text-2xl font-bold mt-16 mb-8">{name}</h2>
            <p>{description}</p>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 align-center justify-center">
                {images.map(img => (
                    <li key={img.path}>
                        <Image src={img.path} alt={img.name} width={256} height={256} />
                    </li>
                ))}
            </ul>
        </PageFrame>
    )
}

export default Page;