import MusicLinksLinks from "@/components/MusicLinksList";
import PageFrame from "@/components/PageFrame";
import PageHeader from "@/components/PageHeader";
import { ALBUM_IDS, getAlbumById } from "@/data/discography.data";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Album | Dan Bednarczyk',
    description: '',
}

export const generateStaticParams = () => ALBUM_IDS.map(id => { id });

// @ts-ignore
const Page = ({ params }) => {
    const album = getAlbumById(params.id);
    if (!album) return null;
    return (
        <PageFrame>
            <PageHeader text={album.name} />
            {album.releaseDate && <PageHeader level='h3' isCentered className="mt-4" text={`Released: ${album.releaseDate}`} />}
            {album.remasterDate && <PageHeader level='h3' isCentered className="mt-4" text={`Remastered: ${album.remasterDate}`} />}
            <div className="flex items-center justify-center mt-8">
                <MusicLinksLinks links={album.links} />
            </div>
            <Image src={album?.artSrc} alt={album?.name} width={256} height={256} className="py-8" />
            <ul className="list-decimal ml-4">
                {album?.tracks.map(track => (
                    <li key={track.name}>
                        {track.name}
                    </li>
                ))}
            </ul>
        </PageFrame>
    )
}

export default Page;