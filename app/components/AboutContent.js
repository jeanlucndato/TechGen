import Image from 'next/image';
import back from '../../public/assets/img/bg.jpg';
import prop8 from '../../public/assets/img/prop8.jpg';
import prop11 from '../../public/assets/img/prop11.jpeg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function AboutContent() {
  return (
    <>
      {/* Section Hero */}
      <div className="relative h-[600px] overflow-hidden">
        <Image src={back} alt="Hero Background" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col justify-center text-left text-white p-8">
          <h1 className="text-6xl font-bold mb-4">À propos de Nous</h1>
          <p className="text-4xl mb-8">
            Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore
          </p>
        </div>
      </div>

      {/* Section 'Art Of Coding', 'Clean Design', 'Amazing Support' */}
      <div className="py-12 mb-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-red-800">Art Of Coding</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-red-800">Clean Design</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-red-800">Amazing Support</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore
              </p>
            </div>
          </div>
        </div>

        {/* Section 'À propos' avec image */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">À propos</h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enimet minim veniam magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.
                </p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor incididunt dolore magna consequat siad minim aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.
                </p>
              </div>
              <div>
                <Image src={prop8} width={500} height={500} alt="Description de l'image" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Services */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Répétez ce bloc pour chaque service */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Insérez ici l'icône SVG appropriée pour chaque service */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Art Of Coding</h3>
                <p className="text-gray-700 text-center">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
              </div>
              {/* Répétez le bloc ci-dessus pour les autres services (Responsive Design, Feature Reach, etc.) */}
            </div>
          </div>
        </div>

        {/* Section Travailleurs */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Répétez ce bloc pour chaque travailleur */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <img src="URL_DE_L_IMAGE_1" alt="Alicia Keys" className="w-full h-64 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">Alicia Keys</h3>
                <p className="text-gray-600 mb-4">CHEF DE PROJET</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna ut consequat siad esqudiat dolor
                </p>
                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  LIRE LA SUITE -
                </a>
              </div>
              {/* Répétez le bloc ci-dessus pour les autres travailleurs (James Millner, Scarlet Johanson, etc.) */}
            </div>
          </div>
        </div>

        {/* Section Team */}
        <div className="bg-blue-100 text-gray-900 
         py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Notre Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center"> {/* Ajout de justify-center */}
              {/* Membre de l'équipe 1 */}
              <div className="text-center max-w-xs mx-auto "> {/* Ajout de max-w-xs et mx-auto */}
                <img src="URL_DE_L_IMAGE_1" alt="Jayson Campbell" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl text-gray-600 font-semibold mb-2">Jules Bokande</h3>
                <p className="text-sm text-gray-600 mb-2">C.E.O</p>
                <p className="text-xs text-gray-500">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Membre de l'équipe 2 */}
              <div className="text-center max-w-xs mx-auto"> {/* Ajout de max-w-xs et mx-auto */}
                <img src="URL_DE_L_IMAGE_1" alt="Jayson Campbell" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jayson Campbell</h3>
                <p className="text-sm text-gray-600 mb-2">CEO, Partner</p>
                <p className="text-xs text-gray-500">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Membre de l'équipe 3 */}
              <div className="text-center max-w-xs mx-auto"> {/* Ajout de max-w-xs et mx-auto */}
                <Image src={prop11} alt="Jayson Campbell" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jayson Campbell</h3>
                <p className="text-sm text-gray-600 mb-2">CEO, Partner</p>
                <p className="text-xs text-gray-500">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Membre de l'équipe 4 */}
              <div className="text-center max-w-xs mx-auto"> {/* Ajout de max-w-xs et mx-auto */}
                <img src="URL_DE_L_IMAGE_1" alt="Jayson Campbell" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jayson Campbell</h3>
                <p className="text-sm text-gray-600 mb-2">CEO, Partner</p>
                <p className="text-xs text-gray-500">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
