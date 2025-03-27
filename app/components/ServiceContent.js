"use client"; // Indique que c'est un composant client
import next from "next";
import Image from 'next/image'
import prop9 from '../../public/assets/img/prop9.jpg'
import prop10 from '../../public/assets/img/propo5.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaRulerCombined, FaTree, FaDraftingCompass, FaBuilding, FaThumbtack, FaMap, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// Importez vos images ici
import betonniereImage from '../../public/assets/img/betonniere.jpg';
import panneauSolaireImage from '../../public/assets/img/panneau-solaire.jpg';
import installationImage from '../../public/assets/img/installation.jpg';
// Ajoutez d'autres images ici
import realisation4 from '../../public/assets/img/prop20.jpg';
import realisation1 from '../../public/assets/img/prop21.jpg'; // Remplacez par le che
import realisation2 from '../../public/assets/img/prop22.jpg'; // Remplacez par le chemin de vo
import realisation3 from '../../public/assets/img/prop23.jpg';



export default function CustomerReviews() {
  return (

    <>
      <div className="relative h-[600px] overflow-hidden">

        {/* l'image du fond  */}
        <Image
          src={prop9} // Remplacez par le chemin de votre image
          width="{50%}"
          height="{50%}"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay noir */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg">
            General Technology : l'alliance de la construction solide et de l'énergie solaire, pour des projets qui éclairent le futur.
          </p>
        </div>
      </div>
      {/* fin de l'image du font */}

      {/* serctions nos service  */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-700 font-semibold text-center mb-8">Nos Services</h2>
          <p className="text-gray-600 text-center mb-12">
            veritatis est maiores velit quasi blanditiis et natus accusamus itaque.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 : Interior Design */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <FaRulerCombined className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Interior Design</h3>
              <p className="text-gray-600 mb-4">
                Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">plus d'infos →</a>
            </div>

            {/* Service 2 : Landscape Design */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <FaTree className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Landscape Design</h3>
              <p className="text-gray-600 mb-4">
                Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <a href="#" className="text-blue-300 font-semibold hover:underline">plus d'infos →</a>
            </div>

            {/* Service 3 : Engineering Plan */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <FaDraftingCompass className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Engineering Plan</h3>
              <p className="text-gray-600 mb-4">
                Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">plus d'infos →</a>
            </div>

            {/* Service 4 : Architecture Design */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <FaBuilding className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Architecture Design</h3>
              <p className="text-gray-600 mb-4">
                Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">plus d'infos →</a>
            </div>

            {/* Service 5 : Interior Planning */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <FaThumbtack className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Interior Planning</h3>
              <p className="text-gray-600 mb-4">
                Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">plus d'infos →</a>
            </div>

            {/* Service 6 : Floor Plan */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <FaMap className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2  text-gray-700">Floor Plan</h3>
              <p className="text-gray-600 mb-4">
                Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <a href="#" className="text-blue-400 font-semibold hover:underline">plus d'infos →</a>
            </div>
          </div>
        </div>
      </div>


      {/* fin section nos services */}

      {/* Section Équipement (reste inchangée) */}


      {/* fin du section equippement */}



    </>
  );
}
// <div className="relative mt-12 ">
//   <div className="mx-auto w-full  relative h-[300px]"> {/* Ajout de relative et h-[300px] */}
//     <Image
//       src={prop10}
//       alt="About Hero"
//       className="transition-opacity duration-300 hover:opacity-70 rounded-[5px] object-cover" // Ajout de object-cover
//       layout="fill" // Ajout de layout="fill"
//     />
//   </div>
//   <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
//     <h1 className="text-4xl font-bold mb-4 font-serif text-blue-900 md:text-5xl lg:text-6xl">Notre Équipement</h1>
//     <p className="text-lg font-serif text-gray-800 md:text-xl lg:text-2xl">
//       Découvrez notre gamme complète d'équipements pour la construction et les panneaux solaires.
//     </p>
//   </div>
// </div>
// <div className="bg-gray-100 py-12">
//   <div className="container mx-auto px-4">
//     {/* Section Matériel de construction */}
//     <section className="mb-12 text-gray-700">
//       <h2 className="text-3xl font-semibold mb-6 text-center">Matériel de Construction</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Exemple d'un élément */}
//         <motion.div
//           className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Image src={betonniereImage} alt="Bétonnière" className="w-full h-64 object-cover mb-4 rounded-md" />
//           <h3 className="text-xl font-semibold mb-2">Bétonnières</h3>
//           <p className="text-gray-600">Description de la bétonnière...</p>
//         </motion.div>
//         {/* Ajoutez d'autres éléments ici avec leurs images */}
//         <motion.div
//           className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Image src={betonniereImage} alt="Autre équipement" className="w-full h-64 object-cover mb-4 rounded-md" />
//           <h3 className="text-xl font-semibold mb-2">Autre équipement</h3>
//           <p className="text-gray-600">Description de l'équipement...</p>
//         </motion.div>
//       </div>
//     </section>

//     {/* Section Matériel pour les panneaux solaires */}
//     <section className="mb-12 text-gray-700">
//       <h2 className="text-3xl font-semibold mb-6 text-center">Matériel pour les Panneaux Solaires</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Exemple d'un élément */}
//         <motion.div
//           className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Image src={panneauSolaireImage} alt="Panneau solaire" className="w-full h-64 object-cover mb-4 rounded-md" />
//           <h3 className="text-xl font-semibold mb-2">Panneaux Photovoltaïques</h3>
//           <p className="text-gray-600">Description des panneaux solaires...</p>
//         </motion.div>
//         {/* Ajoutez d'autres éléments ici avec leurs images */}
//       </div>
//     </section>

//     {/* Section Services associés */}
//     <section className="mb-12 text-gray-700">
//       <h2 className="text-3xl font-semibold mb-6 text-center">Services Associés</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Exemple d'un élément */}
//         <motion.div
//           className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Image src={installationImage} alt="Installation" className="w-full h-64 object-cover mb-4 rounded-md" />
//           <h3 className="text-xl font-semibold mb-2">Installation</h3>
//           <p className="text-gray-600">Description du service d'installation...</p>
//         </motion.div>
//         {/* Ajoutez d'autres éléments ici avec leurs images */}
//       </div>
//     </section>

//     {/* Appel à l'action */}
//     <div className="text-center mt-8">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//         Demander un devis
//       </button>
//     </div>
//   </div>
// </div>