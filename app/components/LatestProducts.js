"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Données des produits
const produits = [
  {
    titre: "Triangle Roof",
    categorie: "Panneaux solaires photovoltaïques",
    description: "Chez General Technology, nous proposons une vaste sélection de panneaux solaires photovoltaïques...",
    imageUrl: "/assets/img/prop7.jpg",
  },
  {
    titre: "Curved Corners",
    categorie: "Onduleurs solaires",
    description: "L'onduleur est le cœur de votre système solaire, convertissant l'énergie produite par les panneaux...",
    imageUrl: "/assets/img/prop16.jpg",
  },
  {
    titre: "Triangle Roof",
    categorie: "Panneaux solaires photovoltaïques",
    description: "Chez General Technology, nous proposons une vaste sélection de panneaux solaires photovoltaïques...",
    imageUrl: "/assets/img/prop7.jpg",
  },
  {
    titre: "Curved Corners",
    categorie: "Onduleurs solaires",
    description: "L'onduleur est le cœur de votre système solaire, convertissant l'énergie produite par les panneaux...",
    imageUrl: "/assets/img/prop16.jpg",
  },
  {
    titre: "Triangle Roof",
    categorie: "Panneaux solaires photovoltaïques",
    description: "Chez General Technology, nous proposons une vaste sélection de panneaux solaires photovoltaïques...",
    imageUrl: "/assets/img/prop7.jpg",
  },
  {
    titre: "Curved Corners",
    categorie: "Onduleurs solaires",
    description: "L'onduleur est le cœur de votre système solaire, convertissant l'énergie produite par les panneaux...",
    imageUrl: "/assets/img/prop16.jpg",
  },
  // Ajoutez vos autres produits ici...
];

export default function LatestProducts() {
  const [produitEtendu, setProduitEtendu] = useState(null);
  const [activeDot, setActiveDot] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Vérification que window est disponible (côté client)
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize(); // Initialisation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    const itemsToShow = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;
    const newIndex = (activeDot + newDirection + produits.length) % (produits.length - (itemsToShow - 1));
    setActiveDot(newIndex);
  };

  return (
    <>
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Derniers Produits</h2>

          <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={activeDot}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 flex justify-center gap-4 sm:gap-8"
              >
                {produits.slice(activeDot, activeDot + (windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3)).map((produit, index) => (
                  <ProductCard
                    key={produit.titre}
                    produit={produit}
                    produitEtendu={produitEtendu}
                    setProduitEtendu={setProduitEtendu}
                    isMain={index === 1 && windowWidth >= 1024}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => paginate(-1)}
              className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-500 p-2 rounded-full shadow-lg hover:bg-blue-300 transition-all"
              aria-label="Précédent"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => paginate(1)}
              className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-500 p-2 rounded-full shadow-lg hover:bg-blue-300 transition-all"
              aria-label="Suivant"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {produits.slice(0, produits.length - (windowWidth < 640 ? 0 : windowWidth < 1024 ? 1 : 2)).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${activeDot === index ? 'bg-blue-500 scale-125' : 'bg-gray-300'}`}
                onClick={() => {
                  setDirection(index > activeDot ? 1 : -1);
                  setActiveDot(index);
                }}
                aria-label={`Aller au produit ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ProductCard({ produit, produitEtendu, setProduitEtendu, isMain }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: isMain ? 1.05 : 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: isMain ? 0.1 : 0.2
        }
      });
    }
  }, [controls, inView, isMain]);

  const handleLirePlus = () => {
    setProduitEtendu(produitEtendu === produit.titre ? null : produit.titre);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`border rounded-lg overflow-hidden w-full ${isMain ? 'sm:w-[320px] lg:w-[350px]' : 'sm:w-[280px] lg:w-[320px]'} bg-white shadow-sm hover:shadow-md transition-all mx-auto`}
      whileHover={{ scale: isMain ? 1.03 : 1.02 }}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={produit.imageUrl}
          alt={produit.titre}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
          {produit.titre}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-2">
          {produit.categorie}
        </p>
        <div className={`overflow-hidden ${produitEtendu === produit.titre ? 'max-h-[500px]' : 'max-h-[72px]'} transition-all duration-300`}>
          <p className="text-sm sm:text-base text-gray-600">
            {produit.description}
          </p>
        </div>
        <button
          onClick={handleLirePlus}
          className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded transition-all"
        >
          {produitEtendu === produit.titre ? "Réduire" : "Lire plus"}
        </button>
      </div>
    </motion.div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
    </svg>
  );
}
// ... (votre composant ProductCard reste inchangé)










