import { useRouter } from "next/router";
import apartments from "../../data/apartments"; // Assure-toi que tes données sont accessibles ici
import Link from "next/link";

export default function ApartmentDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Convertir l'id en nombre et trouver l'appartement correspondant
  const apartment = apartments.find((apt) => apt.id === Number(id));

  if (!apartment) {
    return <h1 className="text-center text-2xl">Appartement non trouvé 😢</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{apartment.title}</h1>
      <p className="text-gray-700">{apartment.ville}</p>
      <img className="w-full h-80 object-cover rounded-lg" src={apartment.imageUrl} alt={apartment.title} />
      <p className="text-xl font-semibold mt-2">{apartment.price}$</p>

      <Link href="/">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Retour à la liste
        </button>
      </Link>
    </div>
  );
}
