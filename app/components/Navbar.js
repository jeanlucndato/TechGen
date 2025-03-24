"use client"; // Ajout de la directive "use client"
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';
import { useState, useEffect } from 'react';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Ajout de l'état pour le menu mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 bg-opacity-80 backdrop-blur-lg p-3' : 'bg-transparent p-4'
        }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto  ">
          <Link
            href="/"
            className={`text-white font-bold text-3xl ${bebasNeue.className}`}
          >
            GenTech
          </Link>
          <button
            className="md:hidden text-white  focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.829 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`space-x-4 mt-4 md:mt-0 md:flex ${isMenuOpen ? 'flex flex-col' : 'hidden'
            } md:flex  `}
        >
          <Link href="/" className="text-gray-300 hover:text-white">
            ACCUEIL
          </Link>
          <Link href="/About" className="text-gray-300 hover:text-white">
            APPROPOS
          </Link>
          <Link href="/Service" className="text-gray-300 hover:text-white">
            EQUIPPEMENT
          </Link>
          <Link href="/Realisation" className="text-gray-300 hover:text-white">
            REALISATION
          </Link>
          <Link href="/Contact" className="text-gray-300 hover:text-white">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}