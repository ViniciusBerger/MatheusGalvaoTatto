"use client"
import Link from 'next/link'
export default function Header() {
    
    return (
       <nav className="relative flex items-center justify-between w-full bg-[#202021] p-4 md:p-12 text-lg md:text-2xl">
            <Link href="/" className="text-white my-2 md:ml-40">HOME</Link>

            <div className="absolute left-1/2 -translate-x-1/2">
                <Link href="/">
                <img className="h-12 md:h-16" src="/logo-transp.png" alt="Logo" />
                </Link>
            </div>

            <Link href="/postatuagem" className="text-white my-2 md:mr-40">
                PÓS-TATUAGEM
            </Link>
        </nav>
    )
}