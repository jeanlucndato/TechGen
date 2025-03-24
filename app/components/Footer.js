import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 rounded-2xl p-2">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 : Liens */}
        <div>
          <h3 className="font-semibold mb-4">Liens</h3>
          <ul className="space-y-2">
            <li>

              <Link href="/About" className="text-gray-300 hover:text-white">
                APPROPOS
              </Link>
            </li>
            <li>

              <Link href="/service" className="text-gray-300 hover:text-white">
                Services
              </Link>
            </li>
            <li>

              <Link href="/realisation" className="text-gray-300 hover:text-white">
                Realisation
              </Link>
            </li>

          </ul>
        </div>

        {/* Colonne 2 : Réseaux sociaux */}
        <div>
          <h3 className="font-semibold mb-4">Réseaux sociaux</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">S'abonner à la newsletter</h3>
          <p className="mb-4">
            Restez informé de nos dernières actualités et offres spéciales.
          </p>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="bg-gray-700 text-white p-2 rounded-l-md focus:outline-none flex-grow mb-2 md:mb-0 md:mr-2"
            />
            <button className="bg-blue-500 hover:bg-emerald-500 text-white px-4 py-2 rounded-r-md">
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}