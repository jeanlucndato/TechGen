"use client";
import { useEffect } from 'react';
import Image from "next/image";
import prop17 from '../../public/assets/img/prop17.jpg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CustomerReviews() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
          Le Sermon de CEO
        </h2>

        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 relative flex flex-col sm:flex-row items-start" // Ajout de shadow-lg
        >
          <div className="text-3xl sm:text-4xl text-gray-400 mb-4 sm:mr-4">"</div>
          <div className="flex-1">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Depuis notre création, nous avons réalisé des projets ambitieux et variés, allant de la construction de bâtiments résidentiels et commerciaux à la réalisation d'infrastructures industrielles complexes. Chaque projet a été une occasion pour nous de démontrer notre engagement envers la qualité, l'innovation et la satisfaction de nos clients.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Notre ambition est de devenir un acteur majeur du développement de la RDC en construisant des infrastructures durables et innovantes qui répondent aux besoins de notre population. Nous sommes déterminés à investir dans les technologies de pointe, à former nos équipes aux meilleures pratiques et à collaborer avec les acteurs locaux pour créer un avenir meilleur pour notre pays.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              En tant que PDG de General Technology, je suis fier de notre expérience en RDC, où nous avons réalisé des projets ambitieux. Notre ambition est de contribuer au développement du pays en construisant des infrastructures durables et innovantes. Nous croyons en un avenir prospère pour la RDC et nous sommes déterminés à y jouer un rôle actif.
            </p>

            <div className="text-right text-gray-600">
              <span className="font-semibold text-gray-800">Jules Bokande,</span> C.E.O Generale Technology
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-8 rounded-full h-16 w-16 overflow-hidden">
            <Image
              src={prop17}
              alt="Immagine del CEO"
              layout="responsive"
              width={64}
              height={64}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}