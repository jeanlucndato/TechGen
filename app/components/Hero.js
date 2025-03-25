"use client";
import { useEffect } from 'react';
import Image from "next/image";
import hero from '../../public/assets/img/hero.jpg';
import { Bebas_Neue } from 'next/font/google';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const adage = "Chaque projet, une pierre à l'édifice du développement.";
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative h-[600px] w-full overflow-hidden" // Ajout de w-full
      >
        <Image
          src={hero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={itemVariants}
          className={`absolute inset-0 flex flex-col justify-center items-start text-left text-white p-8 ${bebasNeue.className}`}
        >
          <motion.h1
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 uppercase" // Ajustement de la taille du texte
          >
            General Technology
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-xl sm:text-2xl mt-8 uppercase" // Ajustement de la taille du texte
          >
            {adage}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* le text apres le hero header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center" // Ajout de w-full
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-2xl sm:max-w-4xl mx-auto text-center" // Ajustement du padding et de la largeur maximale
        >
          <motion.h1
            variants={textVariants}
            className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6 sm:mb-8" // Ajustement de la taille du texte
          >
            Bienvenue chez General Technology
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-10" // Ajustement de la taille du texte
          >
            Votre partenaire de confiance pour tous vos projets de construction en
            République Démocratique du Congo. Forts d'une expertise solide et d'une
            passion pour l'excellence, nous nous engageons à transformer vos visions
            en réalités durables et innovantes. Notre objectif est de contribuer
            activement au développement de la RDC en construisant des infrastructures
            de qualité, respectueuses de l'environnement et adaptées aux besoins de
            notre communauté.
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full text-lg" // Ajustement du padding
          >
            Découvrez nos projets
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}