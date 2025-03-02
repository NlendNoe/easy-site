"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"


export default function CreationCompte(){

    const pathname = usePathname()
    return (
        <div>
            <nav className="p-4 border-b z-100 mb-20 flex gap-20">
                <p className="text-3xl font-bold">EASY</p>
                <ul>
                    <li className={pathname ==="/Login" ? "active" : ""}>
                        <Link href="/Login">J'ai deja un compte sur EASY</Link>
                    </li>
                </ul>
            </nav>
            <form className="max-w-2xl m-auto border p-10 rounded-2xl mb-20 shadow-lg">
                <h1 className="text-2xl text-center mb-5 ">Rejoignez la famille Easy</h1>
                <input type="text" placeholder="Pays/Région"
                    className="w-full text-b py-3 border rounded-lg mt-5 p-4" />
                <input type="phone" placeholder="Numéro de téléphone"
                    className="w-full text-b py-3 border rounded-lg mt-5 p-4 mb-5" />

                <span className="text-gray-500 flex items-center justify-center">Cette étape est necessaire à la vérification de vos informations.</span>

                <button
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-lg  hover:bg-blue-600 transition-colors mt-5"
                    onClick={() => console.log('Réservation')}
                >Continuer
                </button>

                <span className="text-gray-500 flex items-center justify-center p-5">_____________________ ou _____________________</span>

                <div>
                    <button
                        className="w-full text-b py-3 border rounded-lg mt-5"
                        onClick={() => console.log('Réservation')}
                    >Continuer avec Google
                    </button>

                    <button
                        className="w-full text-b py-3 border rounded-lg mt-5"
                        onClick={() => console.log('Réservation')}
                    >Continuer avec Apple
                    </button>

                    <button
                        className="w-full text-b py-3 border rounded-lg mt-5"
                        onClick={() => console.log('Réservation')}
                    >Continuer avec l'adresse e-mail
                    </button>

                    <button
                        className="w-full text-b py-3 border rounded-lg mt-5"
                        onClick={() => console.log('Réservation')}
                    >Continuer avec Facebook
                    </button>
                </div>

            </form>

        </div>
    )
}