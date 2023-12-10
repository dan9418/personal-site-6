import { ILink } from "@/data/links.data";
import { getIdFromText } from "./stringUtils";

export interface IGalleryImage {
    name: string;
    year: number;
    caption: string;
    path: string;
}

export interface IGallery {
    name: string;
    description: string;
    images: IGalleryImage[];
    thumnbnailPath: string;
}

export const getGalleryById = (data: IGallery[], id: string): IGallery | undefined =>
    data.find((gallery) => getIdFromText(gallery.name) === id);

export interface ITrack {
    name: string;
    writer?: string;
}

export interface IAlbum {
    name: string;
    releaseDate: string;
    remasterDate?: string;
    artSrc: string;
    links: ILink[];
    tracks: ITrack[];
}

export interface IArtist {
    name: string;
    links: ILink[];
    albums: IAlbum[];
}

export const getArtistById = (data: IArtist[], id: string): IArtist | undefined =>
    data.find((artist) => getIdFromText(artist.name) === id);
