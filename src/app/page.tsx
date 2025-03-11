"use client";
import ApartementCard from "./Components/HouseCard";
import { useState } from "react"

import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Components/Footer";
import { apartments } from "./Data/appartements";


export default function Home() {

    const [searchTerm, setSearchTerm] = useState('')
    
    const filterAppart = apartments.filter(
        (apartment) =>
            apartment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            apartment.ville.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div >
            {/* <NavBar searchTerm={searchTerm} set /> */}
            <div className="container mx-auto p-4 pt-80">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apartments.map((apartment) => (
                        <ApartementCard
                            key={apartment.id}
                            id={apartment.id}
                            title={apartment.title}
                            ville={apartment.ville}
                            quartier={apartment.quartier}
                            imageUrl={apartment.imageUrl}
                            price={apartment.price}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}