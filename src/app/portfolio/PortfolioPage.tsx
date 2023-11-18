import PageHeader from "@/components/PageHeader";
import SmartLink from "@/components/SmartLink";
import { GALLERY_IDS } from "@/data/art.data";
import { ALBUM_IDS } from "@/data/discography.data";

const PortfolioPage = () => {
    return (
        <>
            <PageHeader text='Creative Portfolio' />
            <p className="bg-stone-200 rounded-lg border border-red-500 p-2 m-4 font-bold text-center">
                DISCLAIMER: This page is still under construction!
            </p>

            <h2>Discography</h2>
            <ul>{ALBUM_IDS.map(id => <li key={id}><SmartLink href={`/portfolio/album/${id}/`}>{id}</SmartLink></li>)}</ul>
            <h2>Galleries</h2>
            <ul>{GALLERY_IDS.map(id => <li key={id}><SmartLink href={`/portfolio/gallery/${id}/`}>{id}</SmartLink></li>)}</ul>
        </>
    )
}




export default PortfolioPage