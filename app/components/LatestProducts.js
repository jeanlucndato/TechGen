"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import prop7 from '../../public/assets/img/prop7.jpg';
import prop12 from '../../public/assets/img/prop12.jpg';
import prop13 from '../../public/assets/img/prop13.jpeg';
import prop14 from '../../public/assets/img/prop14.jpg';
import prop15 from '../../public/assets/img/prop15.jpg';
import prop16 from '../../public/assets/img/prop16.jpg';

export default function LatestProducts() {
  const produits = [
    {
      titre: "Triangle Roof",
      categorie: "Panneaux solaires photovoltaïques",
      description: "Chez General Technology, nous proposons une vaste sélection de panneaux solaires photovoltaïques, adaptés à tous les besoins. Que vous recherchiez des panneaux monocristallins pour une efficacité maximale, des panneaux polycristallins pour un excellent rapport qualité-prix, ou des panneaux à couches minces pour une flexibilité d'installation accrue, nous avons ce qu'il vous faut. Nos panneaux sont rigoureusement sélectionnés pour leur performance, leur durabilité et leur fiabilité, et sont accompagnés de garanties solides pour votre tranquillité d'esprit",
      imageUrl: prop7,
    },
    {
      titre: "Curved Corners",
      categorie: "Onduleurs solaires",
      description: "L'onduleur est le cœur de votre système solaire, convertissant l'énergie produite par les panneaux en électricité utilisable. Chez General Technology, nous vous proposons une gamme complète d'onduleurs solaires, y compris des onduleurs de chaîne pour les installations résidentielles, des micro-onduleurs pour une optimisation individuelle de chaque panneau, et des onduleurs hybrides pour les systèmes avec stockage de batterie. Nos onduleurs sont choisis pour leur efficacité, leur compatibilité et leurs fonctionnalités avancées, vous assurant une production d'énergie optimaler",
      imageUrl: prop16,
    },
    {
      titre: "Bird On Green",
      categorie: "Kits solaires personnalisés",
      description: "Chez General Technology, nous comprenons que chaque projet solaire est unique. C'est pourquoi nous proposons des kits solaires personnalisés, conçus pour répondre à vos besoins spécifiques. Nos experts sont à votre disposition pour évaluer votre consommation d'énergie, déterminer la taille de votre installation et vous proposer un kit adapté à votre budget et à vos objectifs. Que vous soyez un particulier souhaitant alimenter votre maison ou une entreprise cherchant à réduire vos coûts énergétiques, nous avons la solution qu'il vous faut",
      imageUrl: prop12,
    },
    {
      titre: "Bird On Green",
      categorie: "Batteries solaires pour le stockage d'énergie",
      description: "Pour une autonomie énergétique accrue, General Technology vous propose une gamme de batteries solaires de haute qualité. Nos batteries au lithium-ion offrent une capacité de stockage élevée, une longue durée de vie et des cycles de charge/décharge optimisés. Pour les applications nécessitant une solution plus économique, nous proposons également des batteries plomb-acide. Nos experts vous conseilleront sur le choix de la batterie la plus adaptée à vos besoins et à votre budget",
      imageUrl: prop15,
    },
    {
      titre: "Bird On Green",
      categorie: "Systèmes de montage et accessoires",
      description: "L'installation de panneaux solaires nécessite des systèmes de montage robustes et fiables. Chez General Technology, nous proposons une variété de structures de montage pour toitures, sols et façades, conçues pour résister aux intempéries et assurer une installation sécurisée. Nous offrons également une gamme complète d'accessoires solaires, tels que des câbles, des connecteurs, des disjoncteurs et des coffrets de protection, pour une installation complète et conforme aux normes",
      imageUrl: prop14,
    },
    {
      titre: "Bird On Green",
      categorie: "Services d'installation, de maintenance et de conseil",
      description: "En plus de nos produits de qualité, General Technology vous offre une gamme complète de services pour vous accompagner à chaque étape de votre projet solaire. Nos experts sont à votre disposition pour vous conseiller, vous aider à dimensionner votre installation, assurer l'installation et le raccordement de votre système, et vous proposer des contrats de maintenance préventive et curative. Nous sommes également là pour répondre à toutes vos questions et vous guider dans les démarches administratives",
      imageUrl: prop13,
    },
  ];

  const [produitEtendu, setProduitEtendu] = useState(null);
  const [activeDot, setActiveDot] = useState(0);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800 text-center md:text-left">Derniers Produits</h2>
        <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
          incididunt ut laboret dolore magna aliqua enim minim veniam
          exercitation
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
          {produits.slice(activeDot, activeDot + 3).map((produit, index) => (
            <ProductCard
              key={index}
              produit={produit}
              produitEtendu={produitEtendu}
              setProduitEtendu={setProduitEtendu}
              isMain={index === 1}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {produits.slice(0, produits.length - 2).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${activeDot === index ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setActiveDot(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ produit, produitEtendu, setProduitEtendu, isMain }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: isMain ? 1.1 : 1, transition: { duration: 0.5 } });
    }
  }, [controls, inView, isMain]);

  const handleLirePlus = () => {
    setProduitEtendu(produitEtendu === null ? produit.titre : null);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 1 }}
      animate={controls}
      whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
      transition={{ duration: 0.3 }}
      className="border rounded-lg overflow-hidden min-w-[300px] w-full md:w-auto"
    >
      <div className="relative h-64 w-full">
        <Image src={produit.imageUrl} alt={produit.titre} layout="fill" objectFit="cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl text-gray-500 font-semibold mb-2">{produit.titre}</h3>
        <span className="text-sm text-gray-500">{produit.categorie}</span>
        <p className="text-gray-600 mt-2">
          {produitEtendu === produit.titre
            ? produit.description
            : produit.description.substring(0, 100) + "..."}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
          onClick={handleLirePlus}
        >
          {produitEtendu === produit.titre ? "Fermer" : "Lire plus"}
        </button>
      </div>
    </motion.div>
  );
}