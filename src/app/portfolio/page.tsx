import React from 'react';
import PageFrame from "@/components/PageFrame";
import PortfolioPage from "./PortfolioPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dan Bednarczyk | Creative Portfolio',
    description: 'Collection of multimedia art projects',
  }

export default function Page() {
    return (
        <PageFrame>
            <PortfolioPage />
        </PageFrame>
    )
}
