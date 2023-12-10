import Disclaimer from "@/components/Disclaimer";
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
        <div className="mt-8 pt-8 border-t theme-l-border">
            <PageHeader text={album.name} level="h2" />
            {album.releaseDate && <PageHeader level='h4' className="mt-2" text={`Released: ${album.releaseDate}`} />}
            {album.remasterDate && <PageHeader level='h4' className="mt-2" text={`Remastered: ${album.remasterDate}`} />}
            <div className="flex items-center mt-2">
                <MusicLinksLinks links={album.links} />
            </div>
            <Image src={album?.artSrc} alt={album?.name} width={256} height={256} className="mt-2" />
            <ul className="list-decimal mt-2 ml-4">
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
            <Disclaimer />
            <PageHeader text={artist.name} />
            <p className="my-8 text-center">{artist.description}</p>
            <div className="flex justify-center mt-2">
                <MusicLinksLinks links={artist.links} />
            </div>
            {artist.albums.map(album => <Album key={album.name} album={album} />)}
        </PageFrame>
    )
}

export default Page;