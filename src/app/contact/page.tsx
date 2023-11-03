import PageFrame from "@/components/PageFrame";
import ContactPage from "./ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dan Bednarczyk | Contact',
    description: 'Contact info',
  }

export default function Home() {
    return (
        <PageFrame>
            <ContactPage />
        </PageFrame>
    )
}
