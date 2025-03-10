"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./modal";
import Footer from "../Components/Footer";
export default function AddHousePage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal

  // Fonction pour ouvrir le modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-[200px]">
      <nav className="p-4 border-b z-100 flex gap-20 fixed z-100 w-[100vw] bg-stone-50 opacity-[.98] -translate-y-[200px] ">
      <Image
          src="/as.png"
          alt=""
          width={60}
          height={60}
        />
        <p className="text-3xl font-bold -mr-20">EASY</p>
        <ul></ul>
      </nav>
      
      <div className="">
        <h1 className="w-3xs text-6xl text-center ml-96 mr-96 mb-20 font-bold">
          Poster votre logement est comme le nom l'indique, <span className="text-rose-500">C'est facile</span>
        </h1>
      </div>

      <div className="flex flex-around justify-center align-center gap-20">
        <div className="w-60 mb-3 flex justify-center items-center">
          <Image
            src="/skill.png"
            alt=""
            width={80}
            height={80}
            className="rounded-3xl"
          />
          <p className="text-center text-gray-500 text-xl">
            Créer l'annonce pour votre appartement en quelques cliques
          </p>
        </div>

        <div className="w-60 flex justify-center items-center">
          <Image
            src="/gallery.png"
            alt=""
            width={80}
            height={80}
            className="rounded-3xl"
          />
          <p className="text-center text-gray-500 text-xl">
            Poster des images de l'apartement
          </p>
        </div>

        <div className="w-60 mb-3 flex justify-center items-center">
          <Image
            src="/magic.png"
            alt=""
            width={80}
            height={80}
            className="rounded-3xl"
          />
          <p className="text-center text-gray-500 text-xl">
            Poster, et le tour est jouer
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center m-20">
        <button
          onClick={openModal}
          className="bg-purple-700 text-white text-xl px-20 py-6 rounded-2xl hover:bg-purple-900"
        >
          Commencer
        </button>
      </div>

      {isModalOpen && <Modal onClose={closeModal} />}
      <Footer/>
    </div>
  );
}