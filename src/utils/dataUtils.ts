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
}

export const getGalleryById = (data: IGallery[], id: string): IGallery | undefined =>
    data.find((gallery) => getIdFromText(gallery.name) === id);
