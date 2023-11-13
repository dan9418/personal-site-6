import PageFrame from "@/components/PageFrame";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dan Bednarczyk',
    description: '',
}

// @ts-ignore
const Page = ({ params }) => {
    return (
        <PageFrame>
            <pre>{JSON.stringify(params, null, 2)}</pre>
        </PageFrame>
    )
}

export default Page;