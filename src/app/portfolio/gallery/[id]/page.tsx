import PageFrame from "@/components/PageFrame";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dan Bednarczyk',
    description: '',
}

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
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