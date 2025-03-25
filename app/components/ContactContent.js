"use client";
import Image from "next/image";
import cont from '../../public/assets/img/cont.jpg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export default function AboutContent() {
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
    const [refRight, inViewRight] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inViewLeft) controlsLeft.start("visible");
        if (inViewRight) controlsRight.start("visible");
    }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);

    const variantsLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const variantsRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <>
            <div className="relative h-[500px] overflow-hidden">
                <Image src={cont} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-gray-900 flex flex-col justify-center text-left  p-8">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">Nous joindre</h1>
                    <p className="text-xl sm:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>



            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className=" rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-600 text-center">Notre localisation à Goma</h2>
                        <div className="w-full h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63809.727437917005!2d29.16538765120264!3d-1.6777211394033615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f062fad00bf%3A0x4d4ec1961863dc77!2sKatindo!5e0!3m2!1sfr!2scd!4v1742649494290!5m2!1sfr!2scd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-100 py-10 m-5">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-50 rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="col-span-1">
                            <h2 className="text-3xl text-gray-600 font-bold mb-6 text-center">Contactez-nous</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                                    <input type="text" id="nom" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                                    <input type="tel" id="telephone" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-1 hidden md:block">
                            <Image src={cont} alt="Contact Image" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}