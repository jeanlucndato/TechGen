"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import prop2 from '../../public/assets/img/propo2.jpg';
import prop4 from '../../public/assets/img/propo4.jpg';
import prop3 from '../../public/assets/img/propo3.jpg';

export default function Services() {
  const services = [
    {
      titre: "Maisons Intelligentes et Écoénergétiquesg",
      description: "Nous révolutionnons la construction de maisons en intégrant des technologies intelligentes et des solutions écoénergétiques. Nos maisons sont conçues pour être confortables, durables et personnalisables. Nous utilisons des matériaux de construction écologiques et des systèmes d'énergie renouvelable pour réduire l'empreinte carbone. De plus, nos maisons intelligentes sont équipées de systèmes domotiques avancés, permettant aux résidents de contrôler l'éclairage, le chauffage et la sécurité avec facilité.",
      imageUrl: prop2, // Correct
    },
    {
      titre: "Installation Professionnelle, Stockage d'Énergie et Outils Hi-Tech Avancés",
      description: "Notre équipe d'installateurs certifiés garantit une installation rapide et fiable de votre système solaire. Pour une autonomie maximale, nous proposons des solutions de stockage d'énergie de pointe, vous permettant d'utiliser l'énergie solaire même la nuit. Complétez votre installation avec nos outils hi-tech : logiciels d'analyse de données, systèmes de contrôle à distance et applications mobiles pour une gestion énergétique optimale.",
      imageUrl: prop4, // Correct
    },
    {
      titre: " Personnalisation de Logiciels pour les Micro-Réseaux Electrique",
      description: "Notre collaboration avec des fournisseurs de batteries de pointe a permis d'optimiser les performances des systèmes de stockage d'énergie de nos clients. Ce projet a consisté à mettre à jour les logiciels de gestion de batterie et à intégrer des algorithmes d'apprentissage automatique pour améliorer la précision des estimations de capacité et prolonger la durée de vie des batteries. Nous avons également mis en place une gestion adaptative et une maintenance proactive pour assurer une efficacité maximale. Les résultats obtenus ont été significatifs, avec une autonomie énergétique accrue et une meilleure efficacité de stockage.Notre collaboration avec des centres de recherche de pointe a permis de personnaliser les logiciels de gestion de l'énergie pour les micro-réseaux complexes. Ce projet a consisté à adapter les logiciels aux besoins spécifiques de chaque micro-réseau, en intégrant des fonctionnalités avancées telles que la gestion de la demande, la prévision de la production et la simulation des scénarios énergétiques. Nous avons travaillé en étroite collaboration avec nos clients pour comprendre leurs besoins et développer des solutions sur mesure. Grâce à cette collaboration, nous avons optimisé la gestion des micro-réseaux et favorisé une meilleure intégration des énergies renouvelables.",
      imageUrl: prop3, // Correct
    },
  ];

  const [serviceEtendu, setServiceEtendu] = useState(null);

  const handleLirePlus = (index) => {
    setServiceEtendu(index);
  };

  const handleFermer = () => {
    setServiceEtendu(null);
  };

  return (
    <div className="bg-gray-100 py-12 text-gray-800 hover:text-blue-300 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={service.imageUrl}
                alt={service.titre}
                width={500}
                height={300}
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{service.titre}</h3>
              <p className="text-gray-600 mb-4">
                {serviceEtendu === index
                  ? service.description
                  : service.description.substring(0, 100) + "..."}
              </p>
              {serviceEtendu === index ? (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleFermer}
                >
                  Fermer
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => handleLirePlus(index)}
                >
                  Lire plus
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}