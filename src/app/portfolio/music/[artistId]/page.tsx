import MusicLinksLinks from "@/components/MusicLinksList";
import PageFrame from "@/components/PageFrame";
import PageHeader from "@/components/PageHeader";
import MUSIC_DATA from "@/data/music.data";
import { IAlbum, getArtistById } from "@/utils/dataUtils";
import { getIdFromText } from "@/utils/stringUtils";
import { Metadata } from 'next';
import Image from "next/image";
import { FC } from "react";

export const metadata: Metadata = {
    title: 'Album | Dan Bednarczyk',
    description: '',
}

export const generateStaticParams = () => MUSIC_DATA.map((artist) =>
    ({ artistId: getIdFromText(artist.name) })
);

const Album: FC<{ album: IAlbum }> = ({ album }) => {
    return (
        <div className="mb-8">
            <PageHeader text={album.name} level="h2" />
            {album.releaseDate && <PageHeader level='h3' className="mt-4" text={`Released: ${album.releaseDate}`} />}
            {album.remasterDate && <PageHeader level='h3' className="mt-4" text={`Remastered: ${album.remasterDate}`} />}
            <div className="flex items-center mt-8">
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
        </div>
    )
}


// @ts-ignore
const Page = ({ params }) => {
    const artist = getArtistById(MUSIC_DATA, params.artistId);
    if (!artist) return null;
    return (
        <PageFrame>
            <PageHeader text={artist.name} />
            {artist.albums.map(album => <Album key={album.name} album={album} />)}
        </PageFrame>
    )
}

export default Page;