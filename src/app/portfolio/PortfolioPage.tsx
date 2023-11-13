import PageHeader from "@/components/PageHeader";
import SmartLink from "@/components/SmartLink";
import ART_DATA, { GALLERY_IDS } from "@/data/art.data";
import { ALBUM_IDS } from "@/data/discography.data";
import Image from "next/image";

const PortfolioPage = () => {
    return (
        <>
            <PageHeader text='Creative Portfolio' />
            <p className="bg-stone-200 rounded-lg border border-red-500 p-2 m-4 font-bold text-center">
                DISCLAIMER: This page is still under construction!
            </p>
            {false &&
                <>
                    <h2>Discography</h2>
                    <ul>{ALBUM_IDS.map(id => <li key={id}><SmartLink href={`/portfolio/album/${id}/`}>{id}</SmartLink></li>)}</ul>
                    <h2>Galleries</h2>
                    <ul>{GALLERY_IDS.map(id => <li key={id}><SmartLink href={`/portfolio/album/${id}/`}>{id}</SmartLink></li>)}</ul>
                </>
            }
            {ART_DATA.map(section => {
                const { name, images } = section;
                return (<>
                    <h2 className="text-2xl font-bold mt-16 mb-8">{name}</h2>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 align-center justify-center">
                        {images.map(img => (
                            <li key={img.path}>
                                <Image src={img.path} alt={img.name} width={256} height={256} />
                            </li>
                        ))}
                    </ul>
                </>);
            })}
        </>
    )
}




export default PortfolioPage