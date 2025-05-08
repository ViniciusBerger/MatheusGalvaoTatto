"use client"
import Link from 'next/link'
export default function Header() {
    
    return (
        <nav className="flex items-center justify-center w-full bg-#17171799 p-4">
            <ul className="mt-2 ml-8 flex item-center justify-around  space-x-3 text-[#F47700] w-full max-h-20">
                <li className="text-white flex mt-8 ml-10"><Link href={"/"}>HOME</Link></li>
                <li><Link href={"/login"}> <img className="h-20" src="/logo-transp.png" alt="Logo" /></Link></li>
                <li className="text-white flex mt-8 "><Link href={"/postatuagem"}>PÓS-TATUAGEM</Link></li>
            </ul>

        </nav>
    )
}