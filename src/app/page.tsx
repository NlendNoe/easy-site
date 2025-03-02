// src/app/page.tsx
"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Apartment, fakeApartments } from "./Types/appartements";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleCardClick = (apartment: Apartment) => {
    setSelectedApartment(apartment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApartment(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fakeApartments.map((apartment) => (
          <div
            key={apartment.id}
            className="border border-gray-200 rounded-2xl  overflow-hidden cursor-pointer transition-shadow"
            onClick={() => handleCardClick(apartment)}
          >
            <img
              src={apartment.images[0]}
              alt={apartment.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className=" text-xl font-semibold">{apartment.name}</h2>
              <p className="">
                <strong>Prix :</strong> {apartment.price} €/nuit
              </p>
              <p className="">
                <strong>Localisation :</strong> {apartment.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedApartment && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg w-full h-full overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900 z-50"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Images supplémentaires */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {selectedApartment.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Appartement ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>

            {/* Informations de l'appartement */}
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                {selectedApartment.name}
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                {selectedApartment.description}
              </p>
              <p className="text-lg">
                <strong>Prix :</strong> {selectedApartment.price} €/nuit
              </p>
              <p className="text-lg">
                <strong>Localisation :</strong> {selectedApartment.location}
              </p>

              {/* Calendrier */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4">
                  Sélectionnez vos dates
                </h3>
                <div className="flex gap-4">
                  <div>
                    <label className="block text-lg">Date d'arrivée</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="border p-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg">Date de départ</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="border p-2 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Avis et notes */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4">Avis des voyageurs</h3>
                <div className="space-y-4">
                  {selectedApartment.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <p className="text-lg font-semibold">{review.name}</p>
                      <p className="text-gray-600">{review.comment}</p>
                      <p className="text-yellow-500">
                        Note : {review.rating.toFixed(1)}/5
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton de réservation */}
              <button
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => alert("Réservation confirmée !")}
              >
                Réserver maintenant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}