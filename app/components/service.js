"use client"; // Indique que c'est un composant client
import next from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import prop10 from '../../public/assets/img/prop10.jpg'

// Importez vos images ici
import betonniereImage from '../../public/assets/img/betonniere.jpg';
import panneauSolaireImage from '../../public/assets/img/panneau-solaire.jpg';
import installationImage from '../../public/assets/img/installation.jpg';

export default function CustomerReviews() {
  return (
    <div className="relative">
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src={prop10}
          alt="Notre Équipement"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Notre Équipement</h1>
          <p className="text-base md:text-lg font-serif">
            Découvrez notre gamme complète d'équipements pour la construction et les panneaux solaires.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {[
            {
              title: "Matériel de Construction",
              image: betonniereImage,
              text: "General Technology assure ses projets avec un matériel performant..."
            },
            {
              title: "Matériel pour les Panneaux Solaires",
              image: panneauSolaireImage,
              text: "General Technology utilise des panneaux photovoltaïques performants..."
            },
            {
              title: "Services Associés",
              image: installationImage,
              text: "General Technology offre un service d'installation de panneaux solaires complet..."
            }
          ].map((section, index) => (
            <section key={index} className="mb-12 text-gray-700 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-4">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-serif">{section.title}</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <motion.div
                      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 m-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image src={section.image} alt={section.title} className="w-full h-48 md:h-64 object-cover rounded-md" />
                    </motion.div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
                  <p className="text-gray-600 font-serif">
                    {section.text}
                  </p>
                </div>
              </div>
            </section>
          ))}

          <div className="text-center mt-8 relative z-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 font-serif">
              <Link href="/Contact">
                Demander un devis
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}


