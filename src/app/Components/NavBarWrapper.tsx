"use client"
import { usePathname } from "next/navigation"
import NavBar from "./navBar";

export default function NavBarWrapper (){
    const pathname = usePathname()

    if (pathname === "/Login" || pathname === "/CreationCompte"){
        return null
    }
    return <NavBar/>
}

 