"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"


export default function NavBar() {
    const pathname = usePathname()

    return (
        <nav className=" border-b fixed z-100 w-[100vw] bg-stone-50 opacity-[.98] ">

            <div className="flex flex-between">
                <span className="text-2xl">LOGO</span>
                <ul className="flex gap-8 m-auto p-4">

                    <li className={pathname === "/" ? "active" : ""}><Link className="hover:bg-gray-100 transition-colors p-3 rounded-2xl" href="/">Appartements</Link></li>

                    <li className={pathname === "/AddHouse" ? "active" : ""}><Link className="hover:bg-gray-100 transition-colors p-3 rounded-2xl" href="/AddHouse">Poster mon logement</Link></li>

                </ul>
                <button className={pathname === "/Login" ? "active" : ""}><Link className=" text-white p-4 m-5 mr-[70px] rounded-xl bg-stone-900 transition-colors w-[200px] hover:bg-white hover:text-black hover:border hover:border-black hover:shadow-md transition-colors duration-300 hover:bg-sky-50 hover:text-black hover:border" href="/Login">Easy Start</Link></button>



            </div>

            <div className="border rounded-3xl h-45 m-auto bg-stone-50 p-4 w-60 pl-10 flex flex-between cursor-pointer justify-between" style={{ width: "650px" }}>
                <input type="text" className="border-none focus: outline-none bg-stone-50 w-[450px]"
                    placeholder="Que voulez-vous ?" />
                <span >
                    <Image src="/loupe.png" alt="" width={30} height={30} className="mr-5" />
                </span>
            </div>
            <div className="">
                <ul className="flex  gap-8 m-auto p-4 " style={{ width: "1000px", margin: "0 auto" }}>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl" href="/">
                        Piscine </Link>
                    </li>

                    <li><Link className="hover:bg-gray-100  transition-colors p-2 rounded-2xl" href="/">
                        Plages Emblématiques</Link>
                    </li>

                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl" href="/">Vues Magnifiques</Link></li>

                    <li><Link className="hover:bg-gray-100 transition-colors p-2  rounded-2xl" href="/">
                    
                        Centre Ville</Link></li>

                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl" href="/">Hôtels</Link></li>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl " href="/">
                    Montagnes</Link></li>

                </ul>
            </div>
        </nav>
    )
}
