import PageFrame from "@/components/PageFrame";
import MonValleyPage from "./MonValleyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'The Mon Flows North | Dan Bednarczyk',
    description: 'Bits and pieces about the Mon Valley. A work in progress.',
  }

export default function Home() {
    return (
        <PageFrame>
            <MonValleyPage />
        </PageFrame>
    )
}
