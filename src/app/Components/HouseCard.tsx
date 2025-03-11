import React, { useState, useEffect } from "react";

interface ApartementCardProps {
  id: number;
  title: string;
  ville: string;
  quartier: string;
  imageUrl: string;
  price: number;
}

const ApartementCard: React.FC<ApartementCardProps> = ({ id, title, ville, quartier, imageUrl, price }) => {
  const [showModal, setShowModal] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [mobilePayment, setMobilePayment] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [purchaseMobilePayment, setPurchaseMobilePayment] = useState("");
  const [purchaseCardNumber, setPurchaseCardNumber] = useState("");
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
      const response = await fetch(`https://api.unsplash.com/photos/random?count=6&query=apartment&client_id=5f931k2HopI5YGZbQ9AFpkAhw5ui9fkqK0e46svGJak`);
      const data = await response.json();
      const imageUrls = data.map((img: any) => img.urls.regular);
      
      // Ajoute l'image principale en premier
      setImages([imageUrl, ...imageUrls]); 
    } catch (error) {
      console.error("Erreur lors du chargement des images:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <div onClick={() => setShowModal(true)} className="max-w-sm rounded overflow-hidden cursor-pointer">
        <img className="w-full rounded-2xl h-80 w-80" src={imageUrl} alt={title} />
        <div className="px-2 py-2">
          <div className="font-bold text-xl">{title}</div>
          <span className="text-stone-500">{ville}, {quartier}</span>
        </div>
        <div className="px-2 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price} $</span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50">
          <div className="bg-white w-full h-full p-6 relative max-h-[100vh] overflow-y-auto p-[80px]">
            <button className="absolute top-4 right-4 text-black text-5xl" onClick={() => setShowModal(false)}>
              &times;
            </button>

            <div className="flex flex-col gap-6">
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
                <p className="text-gray-700 text-center mt-2 font-xl font-bold">{ville}: {quartier}, {price} $</p>

                <div className="flex flex-between items-center justify-center gap-[450px]">
                  {/* Formulaire de location */}
                  <form className="mt-4 border w-[450px] shadow-md rounded-2xl p-6">
                    <p className="text-4xl font-bold text-center">Louez pour un séjour</p>

                    <label className="block mt-4">Début de la location:</label>
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full p-2 border rounded" />

                    <label className="block mt-2">Fin de la location:</label>
                    <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full p-2 border rounded" />

                    <label className="block mt-2">Numéro de paiement mobile (facultatif):</label>
                    <input type="number" value={mobilePayment} onChange={(e) => setMobilePayment(e.target.value)} placeholder="+xxx 000-000-000" className="w-full p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] border rounded" />

                    <label className="block mt-2">Numéro de carte:</label>
                    <input type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="000-000-000" className="w-full p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] border rounded" />

                    <button type="button" className="mt-6 w-full text-white p-4 rounded-xl bg-stone-900 transition duration-300 hover:bg-white hover:text-black hover:border hover:border-black">
                      Réserver Maintenant
                    </button>
                  </form>

                  <form className="mt-4 border w-[450px] shadow-md rounded-2xl p-6">
                    <p className="text-4xl font-bold text-center">Acheter l'appartement</p>

                    <label className="block mt-4">Numéro de paiement mobile (facultatif):</label>
                    <input type="number" value={purchaseMobilePayment} onChange={(e) => setPurchaseMobilePayment(e.target.value)} placeholder="+xxx 000-000-000" className="w-full p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] border rounded" />

                    <label className="block mt-2">Numéro de carte:</label>
                    <input type="number" value={purchaseCardNumber} onChange={(e) => setPurchaseCardNumber(e.target.value)} placeholder="000-000-000" className="w-full p-2 border appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] rounded" />

                    <button type="button" className="mt-6 w-full text-white p-4 rounded-xl bg-stone-900 transition duration-300 hover:bg-white hover:text-black hover:border hover:border-black">
                      Acheter Maintenant
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
