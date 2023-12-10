import Disclaimer from "@/components/Disclaimer";
import PageHeader from "@/components/PageHeader";
import PortfolioProjectList from "@/components/PortfolioProject";
import ART_DATA from "@/data/art.data";
import MUSIC_DATA from "@/data/music.data";
import { getIdFromText } from "@/utils/stringUtils";

const PortfolioPage = () => {
    return (
        <>
            <Disclaimer />
            
            <PageHeader text='Creative Portfolio' />

            <PageHeader text="Art" level="h2" className="pb-2 my-4 border-b-2 theme-l-border" />
            <PortfolioProjectList items={ART_DATA.map(gallery => ({
                title: gallery.name,
                description: gallery.description,
                imgSrc: gallery.thumnbnailPath,
                href: `/portfolio/art/${getIdFromText(gallery.name)}/`
            }))} />

            <PageHeader text="Music" level="h2" className="pb-2 my-4 border-b-2 theme-l-border" />
            <PortfolioProjectList items={MUSIC_DATA.map(artist => ({
                title: artist.name,
                description: artist.description,
                imgSrc: artist.thumnbnailPath,
                href: `/portfolio/music/${getIdFromText(artist.name)}/`
            }))} />
        </>
    )
}




export default PortfolioPage