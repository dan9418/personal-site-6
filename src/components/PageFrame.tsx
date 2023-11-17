import { PropsWithChildren } from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const PageFrame: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="min-h-screen theme-bg-gradient flex justify-center box-border shadow-xl">
                <div className="w-full max-w-5xl py-16 lg:py-24 px-4 lg:px-8 theme-l-bg-1 min-h-screen">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default PageFrame