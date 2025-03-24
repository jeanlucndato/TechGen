import Image from 'next/image';
import back from '../../public/assets/img/bg.jpg'


export default function AboutContent() {
  return (
    <>
      <div className="relative h-[500px] overflow-hidden"> {/* Ajustez la hauteur selon vos besoins */}
        {/* Image de fond principale */}
        <Image
          src={back}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />


        {/* Contenu du Hero */}
        <div className="absolute inset-0 flex flex-col justify-center  text-left text-white p-8">
          <h1 className="text-6xl font-bold mb-4">Appropos de Nous</h1>
          <p className="text-4xl- mb-8">
            Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim
            minim estudiat veniam siad venumus dolore
          </p>

        </div>
      </div>

      <div className="py-12 mb-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4  text-red-800">Art Of Coding</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                enim minim estudiat veniam siad venumus dolore
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-red-800">Clean Design</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                enim minim estudiat veniam siad venumus dolore
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-red-800">Amazing Support</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                enim minim estudiat veniam siad venumus dolore
              </p>
            </div>
          </div>
        </div>
        {/* appropos des Nous  */}

        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Texte à gauche */}
              <div>
                <h2 className="text-3xl font-bold mb-4">À propos</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
                  incididunt ut laboret dolore adipiscing elit sed tempor incididunt ut
                  laboret dolore magna aliqua. Ut enimet minim veniam magna aliqua. Ut
                  enim minim veniam exercitation laboris ut siad consequat siad minim
                  enum esqudiat dolore.
                </p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
                  incididunt ut laboret tempor incididunt dolore magna consequat siad
                  minim aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit
                  sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim
                  veniam exercitation laboris ut siad consequat siad minim enum
                  esqudiat dolore.
                </p>
              </div>

              {/* Image à droite */}
              <div>
                <img
                  src="URL_DE_L_IMAGE"
                  alt="Description de l'image"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* les services  */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Insérez ici l'icône SVG pour "Art Of Coding" */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Art Of Coding</h3>
                <p className="text-gray-700 text-center">
                  Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Insérez ici l'icône SVG pour "Responsive Design" */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-700 text-center">
                  Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Insérez ici l'icône SVG pour "Feature Reach" */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l7 12 7-12M2 21h20"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Feature Reach</h3>
                <p className="text-gray-700 text-center">
                  Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Insérez ici l'icône SVG pour "Useful Documentation" */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-3m3 3v-3m3 3v-3m3 3H9a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C15.952 21 14 20.052 14 19v-1a4 4 0 00-4-4v-1a4 4 0 00-4 4v3z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Useful Documentation</h3>
                <p className="text-gray-700 text-center">
                  Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Insérez ici l'icône SVG pour "Fast Delivery" */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-700 text-center">
                  Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Insérez ici l'icône SVG pour "Free Plugins" */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Free Plugins</h3>
                <p className="text-gray-700 text-center">
                  Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* les travailleurs  */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Carte 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="URL_DE_L_IMAGE_1"
                  alt="Alicia Keys"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Alicia Keys</h3>
                <p className="text-gray-600 mb-4">CHEF DE PROJET</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
                  incididunt ut laboret dolor magna ut consequat siad esqudiat dolor
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  LIRE LA SUITE -
                </a>
              </div>

              {/* Carte 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="URL_DE_L_IMAGE_2"
                  alt="James Millner"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">James Millner</h3>
                <p className="text-gray-600 mb-4">DÉVELOPPEUR PRINCIPAL</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
                  incididunt ut laboret dolor magna ut consequat siad esqudiat dolor
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  LIRE LA SUITE -
                </a>
              </div>

              {/* Carte 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src="URL_DE_L_IMAGE_3"
                  alt="Scarlet Johanson"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Scarlet Johanson</h3>
                <p className="text-gray-600 mb-4">CONCEPTEUR</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
                  incididunt ut laboret dolor magna ut consequat siad esqudiat dolor
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  LIRE LA SUITE -
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}