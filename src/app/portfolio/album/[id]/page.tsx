import PageFrame from "@/components/PageFrame";
import PageHeader from "@/components/PageHeader";
import SmartLink from "@/components/SmartLink";
import { ALBUM_IDS, getAlbumById } from "@/data/discography.data";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Dan Bednarczyk',
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
            Released: <h2>{album.releaseDate}</h2>
            {album.remasterDate && <h2>{album.releaseDate}</h2>}
            <ul className="flex gap-4">
                {album?.links.map(link => (
                    <li key={link.href}>
                        <SmartLink href={link.href} iconId={link.iconId} iconSize='h-6 w6'>
                            {link.iconId}
                            {link.caption && <span>{link.caption}</span>}
                        </SmartLink>
                    </li>
                ))}
            </ul>
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