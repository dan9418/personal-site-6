import { PropsWithChildren } from "react"
import Nav from "./Nav"

const PageFrame: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="min-h-screen px-24 bg-slate-400 flex justify-center box-border">
                <div className="w-full max-w-5xl py-24 px-16 bg-slate-300 min-h-screen">
                    {children}
                </div>
            </main>
        </>
    )
}

export default PageFrame