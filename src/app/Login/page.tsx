"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"


export default function Login() {
    const pathname = usePathname()
    return (
        <div >
            <nav className="p-4 border-b z-100 flex gap-20">
                <p className="text-3xl font-bold">EASY</p>
                <ul>
                    <li className={pathname === "/CreationCompte" ? "active" : ""}>
                        <Link href="/CreationCompte">Créer un compte</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex h-screen w-full">
                <form className="max-w-xl h-70 m-20 p-10 rounded-2xl mb-20">
                    <h1 className="text-3xl text-center mb-5 font-bold">Connectez-vous sur Easy</h1>
                    <input type="text" placeholder="Email/Numéro de téléphone"
                        className="w-full text-b py-3 border rounded-lg mt-5 p-4" />
                    <input type="password" placeholder="Mots de passe"
                        className="w-full text-b py-3 border rounded-lg mt-5 p-4 mb-5" />

                    <button
                        className="w-full bg-stone-900 text-white py-3 rounded-lg font-medium text-lg  hover:bg-white hover:text-black hover:border hover:border-black hover:shadow-md transition-colors duration-300 mt-5"
                    >Continuer
                    </button>

                </form>
                <div className=" relative w-1/2 w-[120vw]" >
                    <Image
                        src="/Pictures/pin6.jpg"
                        alt="House"
                        layout="fill"
                        objectFit="cover"
                        className="h-full w-full"
                    />
                </div>
            </div>
        </div>
    )
}