import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          asentus {/* Remplacez par le nom de votre compagnie */}
        </Link>
        <div className="space-x-4">
          <Link href="/#" className="text-gray-300 hover:text-white">
            ACCUEIL
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">
            PRICING
          </Link>
          <Link href="/About" className="text-gray-300 hover:text-white">
           APPROPOS
          </Link>
          <Link href="/products" className="text-gray-300 hover:text-white">
            SERVICES
          </Link>
          <Link href="/faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}