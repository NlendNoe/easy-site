'use client';
import Image from "next/image"
import React, { useState } from 'react';

const PropertyCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Données exemple
  // const property = {
    
  //   title: "Villa avec vue sur mer",
  //   location: "Bastos, Yaounde",
  //   price: 150,
  //   rating: 4.8,
  //   reviews: 124,
  //   images: [
  //     "/api/placeholder/800/600",
  //     "/api/placeholder/800/600",
  //     "/api/placeholder/800/600",
  //     "/api/placeholder/800/600"
  //   ],
  //   description: "Magnifique villa moderne avec vue panoramique sur la Méditerranée. Profitez d'un séjour luxueux dans un cadre exceptionnel.",
  //   amenities: ["WiFi", "Piscine", "Climatisation", "Parking"],
  //   bedrooms: 3,
  //   bathrooms: 2,
  //   maxGuests: 6
  // };

  return (
    <>
      {/* Card
      <div 
        onClick={() => setIsModalOpen(true)}
        className="max-w-sm rounded-xl overflow-hidden  cursor-pointer m-20"
      >
        <Image
          src="/Pictures/1.jpg"
          alt={property.title}
          width={300}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">{property.rating}</span>
            </div>
          </div>
          <p className="text-lg font-semibold mt-2">{property.price}€ <span className="text-sm font-normal text-gray-600">/ nuit</span></p>
        </div>
      </div> */}

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-xl max-w-[100vw] w-full max-h-[100vh] overflow-y-auto"> */}
              {/* Close button */}
              {/* <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button> */}

              {/* Image gallery */}
              {/* <div className="grid grid-cols-2 gap-2 p-4">
                <Image
                  src="/Pictures/1.jpg"
                  width={300}
                  height={300}
                  alt="Main"
                  className="w-full h-[400px] object-cover rounded-lg col-span-1"
                />
                <div className="grid grid-cols-2 gap-2 col-span-1">
                  {property.images.slice(1, 5).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-[196px] object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div> */}

              {/* Content */}
              {/* <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                  {/* Left column */}
                  {/* <div>
                    <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <div className="flex items-center mb-4">
                      <span className="mr-2">{property.rating}</span>
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-600">({property.reviews} avis)</span>
                    </div>
                    <p className="text-gray-700">{property.description}</p>
                  </div> */}

                  {/* Right column */}
                  {/* <div>
                    <div className="bg-white p-6 rounded-xl border ">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-bold">{property.price}€ <span className="text-base font-normal text-gray-600">/ nuit</span></span>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{property.rating}</span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="border rounded-lg p-3">
                            <div className="font-medium">Arrivée</div>
                            <input type="date" className="w-full mt-1" />
                          </div>
                          <div className="border rounded-lg p-3">
                            <div className="font-medium">Départ</div>
                            <input type="date" className="w-full mt-1" />
                          </div>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="font-medium">Voyageurs</div>
                          <select className="w-full mt-1 p-2">
                            {[...Array(property.maxGuests)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} voyageur{i !== 0 ? 's' : ''}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <button 
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                        onClick={() => console.log('Réservation')}
                      >
                        Réserver
                      </button>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-semibold text-lg mb-3">Équipements</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {property.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}

      
    </>
  );
};

export default PropertyCard;