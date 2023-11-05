import { LinkCategoriesList } from "@/components/LinksList";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => {
    return (
        <>
            <PageHeader text='Contact' />
            <div className="max-w-3xl m-auto ">
                <LinkCategoriesList />
            </div>
        </>
    )
}

export default ContactPage