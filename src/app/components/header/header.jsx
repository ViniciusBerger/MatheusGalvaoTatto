"use client"
import Link from 'next/link'
export default function Header() {
    
    return (
       <nav className="flex flex-col md:grid md:grid-cols-3 items-center w-full bg-black p-4 md:p-12 text-lg md:text-2xl">
        {/* Left Link (Grid Column 1) */}
        <div className="flex justify-center md:justify-start">
            <Link href={"/"} className="text-white my-2 md:ml-40">HOME</Link>
        </div>

        {/* Center Logo (Grid Column 2) */}
        <div className="flex justify-center">
            <Link href={"/"}>
            <img className="h-12 md:h-16" src="/logo-transp.png" alt="Logo" />
            </Link>
        </div>

        {/* Right Link (Grid Column 3) */}
        <div className="flex justify-center md:justify-end">
            <Link href={"/postatuagem"} className="text-white my-2 md:mr-40">PÓS-TATUAGEM</Link>
        </div>
        </nav>
    )
}