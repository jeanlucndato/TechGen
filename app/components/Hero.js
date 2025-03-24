"use client";
import { useState } from 'react';
import Image from "next/image";
import hero from '../../public/assets/img/hero.jpg';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

export default function Hero() {
  const fullText = `General Technologie est à l'avant-garde de la technologie durable, combinant expertise en énergie renouvelable, construction innovante et solutions informatiques de pointe. Notre mission est de transformer les défis environnementaux en opportunités technologiques, en développant des projets qui allient performance, durabilité et efficacité. Nous proposons des solutions complètes, de la conception de systèmes solaires intelligents à la construction de bâtiments à énergie positive, en passant par le développement de logiciels de gestion énergétique. Nos études de cas illustrent notre capacité à innover et à réaliser des projets ambitieux, contribuant ainsi à un avenir plus vert`;
  const shortText = fullText.substring(0, 200) + '...';

  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <Image
        src={hero}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className={`absolute inset-0 flex flex-col justify-center items-start text-left text-white p-8 ${bebasNeue.className}`}>
        <h1 className="text-6xl font-bold mb-4">General Technology</h1> {/* Titre plus grand */}
        <p className="text-lg mt-8">
          {isExpanded ? fullText : shortText}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold" // Bouton carré
          onClick={handleReadMore}
        >
          {isExpanded ? 'Lire moins' : 'Lire la suite'}
        </button>
      </div>
    </div>
  );
}