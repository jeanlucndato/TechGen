import Link from 'next/link';

export default function Navbar() {
  return (

    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <Link href="/" className="text-white font-bold text-3xl mb-4 md:mb-0">
          GenTech
        </Link>
        <div className="space-x-4">
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
    // <nav className="bg-gray-800 p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link href="/" className="text-white font-bold text-xl">
    //       GenTech {/*great */}
    //     </Link>
    //     <div className="space-x-4">
    //       <Link href="/" className="text-gray-300 hover:text-white">
    //         ACCUEIL
    //       </Link>

    //       <Link href="/About" className="text-gray-300 hover:text-white">
    //         APPROPOS
    //       </Link>
    //       <Link href="/Service" className="text-gray-300 hover:text-white">
    //         EQUIPPEMENT
    //       </Link>

    //       <Link href="/Realisation" className="text-gray-300 hover:text-white">
    //         REALISATION
    //       </Link>

    //       <Link href="/Contact" className="text-gray-300 hover:text-white">
    //         CONTACT
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
}