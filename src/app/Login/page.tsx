"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"


export default function Login() {
    const pathname = usePathname()
    return (
        <div >
            <nav className="p-4 border-b z-100 mb-20 flex gap-20">
                <p className="text-3xl font-bold">EASY</p>
                <ul>
                    <li className={pathname === "/CreationCompte" ? "active" : ""}>
                        <Link href="/CreationCompte">S'inscrire sur EASY</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex">
                <form className="max-w-xl h-70 m-20 border p-10 rounded-2xl mb-20">
                    <h1 className="text-3xl text-center mb-5 font-bold">Connectez-vous sur Easy</h1>
                    <input type="text" placeholder="Email/Numéro de téléphone"
                        className="w-full text-b py-3 border rounded-lg mt-5 p-4" />
                    <input type="password" placeholder="Mots de passe"
                        className="w-full text-b py-3 border rounded-lg mt-5 p-4 mb-5" />

                    <button
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-lg  hover:bg-blue-600 transition-colors mt-5"
                        onClick={() => console.log('Réservation')}
                    >Continuer
                    </button>

                </form>

                <Image src="/Pictures/1.jpg" alt="Image house"
                width={300}
                height={200}
                className="h-full" />
                <Image src="/Pictures/2.jpg"
                width={400}
                height={300}
                className="mr-4"
                alt="Image 2"/>
            </div>
        </div>
    )
}