import Link from "next/link"

export default function Footer() {
    return (
        <div>
            <div className=" border-t pb-20 flex items-center justify-center 
             text-sky-50 bg-stone-900">
                
                <span className="text-2xl mr-20">LOGO</span>
                <ul className="mt-20">
                <p className="font-bold pb-4">Assistance</p>
                    <li>
                        <Link href="/">Centre d'aide</Link>
                    </li>
                    <li>
                        <Link href="/">Option d'annulation</Link>
                    </li>
                    <li>
                        <Link href="/">J'ai des problemes avec l'appartement</Link>
                    </li>
                </ul>
                <ul className="mt-20 ml-20">
                    <p className="font-bold pb-4">Easy</p>
                    <li>
                        <Link href="/">Devenir membre</Link>
                    </li>
                    <li>
                        <Link href="/">Nouvelles Fonctionnalités</Link>
                    </li>
                    <li>
                        <Link href="/">Forums et communauté</Link>
                    </li>  
                </ul>

            </div>
            <div className="flex items-center justify-center bg-gray-100 gap-4 pb-4 text-sky-50 bg-stone-900">
                <span>2025 Easy,Inc</span>
                <span>Conditions générales</span>
                <span>Confidentialité</span>
                <span>Information sur Easy</span>
                <span>EUR</span>
            </div>
        </div>
    )
}