import PageFrame from "@/components/PageFrame";
import ContactPage from "./ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact | Dan Bednarczyk',
    description: 'Contact info',
  }

export default function Home() {
    return (
        <PageFrame>
            <ContactPage />
        </PageFrame>
    )
}
