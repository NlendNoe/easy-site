import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const options = [
    "Wi-Fi",
    "Piscine",
    "Jardin",
    "Parking",
    "Climatisation",
    "Animaux autorisés",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Options sélectionnées :", selectedOptions);
    console.log("Image sélectionnée :", selectedImage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-20 rounded-3xl shadow-lg w-[600px] ">
        <h2 className="text-5xl font-bold">Poster votre logement</h2>

     
        <div className="mb-4">
          <label className="block text-gray-700">Titre de l'annonce</label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ex: Appartement cosy en centre-ville"
          />
        </div>

     
        <div className="mb-4">
          <label className="block text-gray-700">Ville</label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ex: Yaoundé"
          />
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-700">Prix par nuit</label>
          <input
            type="number"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ex: 120"
          />
        </div>

      
        <div className="mb-4">
          <label className="block text-gray-700">Image du logement</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-lg bg-white"
          />
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-700">Options</label>
          <div className="space-3 grid  sm:grid-cols-3 ">
            {options.map((option) => (
              <label key={option} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-purple-700 text-xl px-20 py-4 text-white rounded-lg hover:bg-purple-900"
        >
          Poster
        </button>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-zinc-800 text-white px-20 py-4 rounded-lg hover:bg-zinc-950"
        >
          Abandonner la publication
        </button>
      </div>
    </div>
  );
};

export default Modal;