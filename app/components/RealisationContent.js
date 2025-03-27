"use client"; // Indique que c'est un composant client
import next from "next";
import Image from 'next/image'
import prop10 from '../../public/assets/img/prop10.jpg'
import prop11 from '../../public/assets/img/propo5.jpg'; import { motion } from 'framer-motion';
import realisation4 from '../../public/assets/img/prop20.jpg';
import realisation1 from '../../public/assets/img/prop21.jpg'; // Remplacez par le che
import realisation2 from '../../public/assets/img/prop22.jpg'; // Remplacez par le chemin de vo
import realisation3 from '../../public/assets/img/prop23.jpg';



export default function CustomerReviews() {
    return (

        <>
            <div className="relative h-[600px] overflow-hidden">
                <Image
                    src={prop10} // Remplacez par le chemin de votre image
                    width="{50%}"
                    height="{50%}"
                    alt="About Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay noir */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
                    <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
                    <p className="text-lg">
                        General Technology : l'alliance de la construction solide et de l'énergie solaire, pour des projets qui éclairent le futur.
                    </p>
                </div>
            </div>

            {/* fin de font */}

            {/* les code de nos realisations revus */}

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Nos Réalisations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Réalisation 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <Image src={realisation1} alt="Triangle Roof" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Triangle Roof</h3>
                                <p className="text-gray-600 mb-2">MANAGEMENT</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Réalisation 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <Image src={realisation2} alt="Curved Corners" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Curved Corners</h3>
                                <p className="text-gray-600 mb-2">DEVELOPMENT</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Réalisation 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <Image src={realisation3} alt="Bird On Green" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Bird On Green</h3>
                                <p className="text-gray-600 mb-2">DESIGN</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Réalisation 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <Image src={realisation4} alt="Bird On Green" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Bird On Green</h3>
                                <p className="text-gray-600 mb-2">DESIGN</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Réalisation 5 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <Image src={realisation3} alt="Bird On Green" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Bird On Green</h3>
                                <p className="text-gray-600 mb-2">DESIGN</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Réalisation 6 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <Image src={realisation3} alt="Bird On Green" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Bird On Green</h3>
                                <p className="text-gray-600 mb-2">DESIGN</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Ajoutez d'autres réalisations ici si nécessaire */}
                    </div>
                </div>


            </div>

            {/* fin du code de realisations nos service */}
        </>
    );
}