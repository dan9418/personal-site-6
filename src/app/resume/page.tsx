import PageFrame from "@/components/PageFrame";
import ResumePage from "./ResumePage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Resume | Dan Bednarczyk',
    description: 'Software engineering resume',
  }

export default function Home() {
    return (
        <PageFrame>
            <ResumePage />
        </PageFrame>
    )
}
