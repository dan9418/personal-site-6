import React from 'react';
import PageFrame from "@/components/PageFrame";
import PortfolioPage from "./PortfolioPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Dan Bednarczyk',
    description: 'Collection of multimedia art projects',
  }

export default function Page() {
    return (
        <PageFrame>
            <PortfolioPage />
        </PageFrame>
    )
}
