import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-2xl p-2">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Bloc 1 : Liens Utiles */}
        <div className="w-full md:w-1/6">
          <h3 className="font-semibold mb-2 text-sm">Liens Utiles</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white text-xs">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white text-xs">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-white text-xs">
                Services
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="text-gray-300 hover:text-white text-xs">
                Réalisations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white text-xs">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-300 hover:text-white text-xs">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-300 hover:text-white text-xs">
                Conditions d'utilisation
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc 2 : Services et Produits */}
        <div className="w-full md:w-1/6">
          <h3 className="font-semibold mb-2 text-sm">Services & Produits</h3>
          <ul className="space-y-1">
            <li className="text-xs">Construction de bâtiments solaires</li>
            <li className="text-xs">Installation de panneaux solaires</li>
            <li className="text-xs">Vente de panneaux solaires</li>
            <li className="text-xs">Vente d'onduleurs</li>
            <li className="text-xs">Vente de batteries</li>
          </ul>
        </div>

        {/* Bloc 3 : Réseaux Sociaux */}
        <div className="w-full md:w-1/6">
          <h3 className="font-semibold mb-2 text-sm">Réseaux Sociaux</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-300 flex items-center text-xs">
                <FaTwitter className="mr-1" />
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 flex items-center text-xs">
                <FaFacebook className="mr-1" />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 flex items-center text-xs">
                <FaInstagram className="mr-1" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 flex items-center text-xs">
                <FaYoutube className="mr-1" />
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Bloc 5 : Informations de Contact */}
        {/* <div className="w-full md:w-1/6">
          <h3 className="font-semibold mb-2 text-sm">Contact</h3>
          <p className="text-xs">Adresse: 123 Rue du Soleil, Ville Solaire</p>
          <p className="text-xs">Téléphone: +1 555 123 4567</p>
          <p className="text-xs">Email: info@entreprisesolaire.com</p>
          <Link href="/contact" className="text-blue-500 hover:text-blue-300 mt-1 block text-xs">
            Nous contacter
          </Link>
        </div> */}

        {/* Bloc 6 : À propos de l'Entreprise */}
        <div className="w-full md:w-1/6">
          <h3 className="font-semibold mb-2 text-sm">À propos</h3>
          <p className="text-xs">
            Entreprise spécialisée dans la construction de bâtiments écologiques et la vente de matériel solaire de haute qualité.
          </p>
          <p className="mt-1 text-xs">Certifications: ISO 14001, SolarPlus</p>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} Entreprise Solaire</p>
        </div>

        {/* Bloc 4 : Newsletter (déplacé en dernier) */}
        <div className="w-full md:w-1/6">
          <h3 className="font-semibold mb-2 text-sm">Newsletter</h3>
          <p className="text-xs mb-2">
            Restez informé de nos dernières actualités et offres spéciales.
          </p>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="bg-gray-700 text-white p-1 rounded-l-md focus:outline-none flex-grow mb-1 md:mb-0 md:mr-1 text-xs"
            />
            <button className="bg-blue-500 hover:bg-emerald-500 text-white px-2 py-1 rounded-r-md text-xs">
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}