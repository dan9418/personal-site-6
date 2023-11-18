import PageHeader from "@/components/PageHeader";
import PortfolioProjectList from "@/components/PortfolioProject";
import ART_DATA from "@/data/art.data";
import DISCOGRAPHY_DATA from "@/data/discography.data";
import { getIdFromText } from "@/utils/stringUtils";

const PortfolioPage = () => {
    return (
        <>
            <PageHeader text='Creative Portfolio' />
            <p className="bg-stone-200 rounded-lg border border-red-500 p-2 m-4 font-bold text-center">
                DISCLAIMER: This page is still under construction!
            </p>

            <PageHeader text="Graphic Design" level="h2" className="mb-4" />
            <PortfolioProjectList items={ART_DATA.map(gallery => ({
                title: gallery.name,
                description: gallery.description,
                imgSrc: gallery.images[0].path,
                href: `/portfolio/gallery/${getIdFromText(gallery.name)}/`
            }))} />

            <PageHeader text="Music" level="h2" className="mt-8 mb-4" />    
            {DISCOGRAPHY_DATA.map(artist => (
                <>
                    <PageHeader text={artist.name} level="h3" className="mb-4"/>
                    <PortfolioProjectList items={artist.albums.map(album => ({
                        title: album.name,
                        description: album.releaseDate,
                        imgSrc: album.artSrc,
                        href: `/portfolio/album/${getIdFromText(album.name)}/`
                    }))} />
                </>
            ))}
        </>
    )
}




export default PortfolioPage