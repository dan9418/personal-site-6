import PageFrame from "@/components/PageFrame";
import { GALLERY_IDS, getGalleryById } from "@/data/art.data";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dan Bednarczyk',
    description: '',
}

export const generateStaticParams = () => GALLERY_IDS.map(id => { id });

// @ts-ignore
const Page = ({ params }) => {
    return (
        <PageFrame>
            <pre>{JSON.stringify(getGalleryById(params.id), null, 2)}</pre>
        </PageFrame>
    )
}

export default Page;