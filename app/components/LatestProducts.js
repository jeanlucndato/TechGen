"use client"; // Assurez-vous d'inclure cette directive si vous utilisez useState

import React, { useState } from 'react';
import Image from 'next/image';
import prop7 from '../../public/assets/img/prop7.jpg'

export default function LatestProducts() {
  const produits = [
    {
      titre: "Triangle Roof",
      categorie: "MANAGEMENT",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna ut consequat siad esqudiat dolor",
      imageUrl: prop7, // Remplacez par le chemin de votre image
    },
    {
      titre: "Curved Corners",
      categorie: "DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna ut consequat siad esqudiat dolor",
      imageUrl: "/images/product2.jpg", // Remplacez par le chemin de votre image
    },
    {
      titre: "Bird On Green",
      categorie: "DESIGN",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna ut consequat siad esqudiat dolor",
      imageUrl: "/images/product3.jpg", // Remplacez par le chemin de votre image
    },
  ];

  const [produitEtendu, setProduitEtendu] = useState(null);

  const handleLirePlus = (index) => {
    setProduitEtendu(index);
  };

  const handleFermer = () => {
    setProduitEtendu(null);
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Derniers Produits</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
          incididunt ut laboret dolore magna aliqua enim minim veniam
          exercitation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {produits.map((produit, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={produit.imageUrl}
                  alt={produit.titre}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{produit.titre}</h3>
                <span className="text-sm text-gray-500">{produit.categorie}</span>
                <p className="text-gray-600 mt-2">
                  {produitEtendu === index
                    ? produit.description
                    : produit.description.substring(0, 100) + "..."}
                </p>
                {produitEtendu === index ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
                    onClick={handleFermer}
                  >
                    Fermer
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
                    onClick={() => handleLirePlus(index)}
                  >
                    Lire plus
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}