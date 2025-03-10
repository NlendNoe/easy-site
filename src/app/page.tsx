"use client";
import ApartementCard from "./Components/HouseCard";
import { useState } from "react"

import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./Components/navBar";
import Footer from "./Components/Footer";

const apartments = [
    {
        id: 1,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/1.jpg',
        price: 120000,
    },
    {
        id: 2,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/2.jpg',
        price: 120000,
    },
    {
        id: 3,
        title: 'Nlend penthouse',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/3.jpg',
        price: 120000,
    },
    {
        id: 4,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/4.jpg',
        price: 120000,
    },
    {
        id: 5,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/5.jpg',
        price: 120000,
    },
    {
        id: 6,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/6.jpg',
        price: 120000,
    },
    {
        id: 7,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/7.jpg',
        price: 120000,
    },
    {
        id: 8,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/8.jpg',
        price: 120000,
    },
    {
        id: 9,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/12.jpg',
        price: 120000,
    },
    {
        id: 10,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/18.jpg',
        price: 120000,
    },
    {
        id: 11,
        title: 'Appartement cosy en centre-ville',
        ville: 'Yaounde',
        note: '3.5',
        imageUrl: '/Pictures/15.jpg',
        price: 120000,
    },

];
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