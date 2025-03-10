import React, { useState, useEffect } from "react";
import Link from "next/link";
import { descriptions } from "../Data/description";

interface ApartementCardProps {
  id: number;
  title: string;
  ville: string;
  imageUrl: string;
  price: number;
}

const ApartementCard: React.FC<ApartementCardProps> = ({ id, title, ville, imageUrl, price }) => {
  const [showModal, setShowModal] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (showModal) {
      fetchImages();
    }
  }, [showModal]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?count=3&query=apartment&client_id=5f931k2HopI5YGZbQ9AFpkAhw5ui9fkqK0e46svGJak`);
      const data = await response.json();
      const imageUrls = data.map((img: any) => img.urls.regular);
      setImages([imageUrl, ...imageUrls]);
    } catch (error) {
      console.error("Erreur lors du chargement des images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} className="max-w-sm rounded overflow-hidden cursor-pointer ">
        <img className="w-full rounded-2xl h-80 w-80" src={imageUrl} alt={title} />
        <div className="px-2 py-2">
          <div className="font-bold text-xl">{title}</div>
          <span>{ville}</span>
        </div>
        <div className="px-2 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${price}</span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 ">
          <div className="bg-white w-full h-full p-6 relative max-h-[100vh] overflow-y-auto p-[80px]  ">
            <button
              className="absolute top-4 right-4 text-black text-5xl "
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="flex flex-col gap-6 ">
              <div className="grid grid-cols-3 gap-2">
                {loading ? (
                  <p className="text-center w-full">Chargement des images...</p>
                ) : (
                  images.map((img, index) => (
                    <img key={index} className="w-full h-[500px] w-[500px] object-cover rounded-lg" src={img} alt={`Appartement ${index + 1}`} />
                  ))
                )}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-center">{title}</h2>
                <p className="text-gray-700 text-center mt-2 font-xl font-bold">{ville}, {price}$</p>
                {/* <p className="text-xl font-semibold mt-2 text-center"></p> */}

                <div className=" flex flex-between items-center justify-center  gap-[450px]">
                  <form className="mt-4 border w-[450px] shadow-md rounded-2xl grid grid-cols-1 flex items-center justify-center">
                    <p className="m-5 text-4xl font-bold ml-10 w-[300px]">Louez pour un séjour</p>
                    <label className="block ml-10 mt-5">Début de la location:</label>
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-[350px] p-2 border rounded ml-10" />
                    <label className="block mt-2 ml-10 ">Fin de la location:</label>
                    <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-[350px]  p-2 border rounded ml-10" />
                    <label className="block mt-2 ml-10 ">Entrer le numeros de payement mobile (facultatif)</label>
                    <input type="tel" value={checkOut} placeholder="+xxx 000-000-000" onChange={(e) => setCheckOut(e.target.value)} className="w-[350px]  p-2 border rounded ml-10" />
                    <label className="block mt-2 ml-10 ">Entrer le numeros de carte:</label>
                    <input type="number" value={checkOut} placeholder="000-000-000" onChange={(e) => setCheckOut(e.target.value)} className="w-[350px]  p-2 border rounded ml-10" />

                    <button type="button" className="mt-10 text-white p-4 mr-[70px] rounded-xl bg-stone-900 transition-colors m-10  w-[350px] hover:bg-white hover:text-black hover:border hover:border-black  transition-colors duration-300 hover:bg-sky-50 hover:text-black hover:border">
                      Reserver Maintenant
                    </button>
                  </form>

                  <form className="mt-4 border w-[450px] shadow-md rounded-2xl grid grid-cols-1 flex items-center justify-center">
                    <p className="m-5 text-4xl font-bold ml-10 w-[300px]">Acheter l'appartement</p>

                    <label className="block mt-2 ml-10 ">Entrer le numeros de payement mobile (facultatif)</label>
                    <input type="tel" value={checkOut} placeholder="+xxx 000-000-000" onChange={(e) => setCheckOut(e.target.value)} className="w-[350px]  p-2 border rounded ml-10" />
                    <label className="block mt-2 ml-10 ">Entrer le numeros de carte:</label>
                    <input type="number" value={checkOut} placeholder="000-000-000" onChange={(e) => setCheckOut(e.target.value)} className="w-[350px]  p-2 border rounded ml-10" />

                    <button type="button" className="mt-10 text-white p-4 mr-[70px] rounded-xl bg-stone-900 transition-colors m-10  w-[350px] hover:bg-white hover:text-black hover:border hover:border-black  transition-colors duration-300 hover:bg-sky-50 hover:text-black hover:border">
                      Reserver Maintenant
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApartementCard;
