import PageHeader from "@/components/PageHeader";
import PortfolioProjectList from "@/components/PortfolioProject";
import PortfolioProject from "@/components/PortfolioProject";
import SmartLink from "@/components/SmartLink";
import ART_DATA from "@/data/art.data";
import { ALBUM_IDS } from "@/data/discography.data";
import { getIdFromText } from "@/utils/stringUtils";

const PortfolioPage = () => {
    return (
        <>
            <PageHeader text='Creative Portfolio' />
            <p className="bg-stone-200 rounded-lg border border-red-500 p-2 m-4 font-bold text-center">
                DISCLAIMER: This page is still under construction!
            </p>

            <h2>Art</h2>
            <PortfolioProjectList items={ART_DATA.map(gallery => ({
                title: gallery.name,
                description: gallery.description,
                imgSrc: gallery.images[0].path,
                href: `/portfolio/gallery/${getIdFromText(gallery.name)}/`
            }))} />

            <h2>Discography</h2>
            <ul>{ALBUM_IDS.map(id => <li key={id}><SmartLink href={`/portfolio/album/${id}/`}>{id}</SmartLink></li>)}</ul>
        </>
    )
}




export default PortfolioPage