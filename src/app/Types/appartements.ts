// src/Types/appartements.ts
import { faker } from "@faker-js/faker";

// Interface pour les appartements
export interface Apartment {
  id: number;
  name: string;
  description: string;
  price: number;
  location: string;
  images: string[]; // Plusieurs images
  rating: number; // Note de l'appartement
  reviews: { name: string; comment: string; rating: number }[]; // Avis des utilisateurs
}

// Génération de données factices
export const generateFakeApartments = (numApartments: number): Apartment[] => {
  const apartments: Apartment[] = [];
  for (let i = 0; i < numApartments; i++) {
    apartments.push({
      id: i,
      name: faker.lorem.words(3),
      description: faker.lorem.paragraphs(3), // Description plus longue
      price: faker.number.int({ min: 50, max: 500 }),
      location: faker.location.city(),
      images: Array.from({ length: 5 }, () =>
        faker.image.urlLoremFlickr({ category: "apartment" })
      ), // 5 images d'appartement
      rating: faker.number.float({ min: 3, max: 5 }), // Note entre 3 et 5
      reviews: Array.from({ length: 5 }, () => ({
        name: faker.person.fullName(),
        comment: faker.lorem.sentences(2),
        rating: faker.number.float({ min: 1, max: 5}),
      })), // 5 avis
    });
  }
  return apartments;
};

// Générer 50 appartements factices
export const fakeApartments = generateFakeApartments(50);