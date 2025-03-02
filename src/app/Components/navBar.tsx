"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function NavBar() {
    const pathname = usePathname()
    
    return (
        <nav className="p-4 border-b " style={{marginBottom:"80px"}}>

            <div className="flex flex-between">
                <span className="text-2xl">LOGO</span>
                <ul className="flex gap-8 m-auto p-4">
                    <li className={pathname === "/" ? "active" : ""}><Link className="hover:bg-gray-100 transition-colors p-3 rounded-2xl" href="/">Appartements</Link></li>
                    <li className={pathname === "/AddHouse" ? "active" : ""}><Link className="hover:bg-gray-100 transition-colors p-3 rounded-2xl"  href="/AddHouse">Poster mon logement</Link></li>

                    <button className={pathname === "/Login" ? "active" : ""}><Link className="p-3 w-20 text-white bg-blue-500 rounded-2xl hover:bg-blue-600 transition-colors " href="/Login">Login</Link></button>
                </ul>
            </div>

            <div className="border rounded-3xl h-45 m-auto p-4 w-60 pl-10 "style={{width :"650px"}}>
                <input type="text" className="border-none focus: outline-none " style={{width :"170px"}} placeholder="Où voulez-vous aller?"/><span style={{background: "aqua", padding:"12px", borderRadius:"360px", marginLeft:"376px", cursor:"pointer"}}>🔍</span>
            </div> 
            <div className="">
                <ul className="flex  gap-8 m-auto p-4 " style={{width :"1000px", margin:"0 auto"}}>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl"  href="/">👙Piscine</Link></li>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl"  href="/">⛱️Plages Emblématiques</Link></li>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl"  href="/">🏞️Vues Magnifiques</Link></li>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl"  href="/">🏰Châteaux</Link></li>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl"  href="/">🏨Hôtels</Link></li>
                    <li><Link className="hover:bg-gray-100 transition-colors p-2 rounded-2xl"  href="/">🏔️Montagnes</Link></li>
                </ul>
            </div>
        </nav>
    )
}
