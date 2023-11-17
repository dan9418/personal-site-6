import DarkThemeManager from '@/components/DarkThemeManager'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'

const font = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dan Bednarczyk',
  description: 'Technical resume, creative portfolio, and contact information'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${font.className} theme-l-fg-1`}>
        <DarkThemeManager>
          {children}
        </DarkThemeManager>
      </body>
    </html>
  )
}
