"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Quels sont les avantages d'installer des panneaux solaires ?",
            answer: "L'installation de panneaux solaires vous permet de réduire significativement vos factures d'électricité, d'augmenter la valeur de votre propriété et de contribuer activement à la protection de l'environnement en utilisant une source d'énergie renouvelable et durable."
        },
        {
            question: "Quel est le coût d'une installation solaire complète ?",
            answer: "Le coût d'une installation solaire complète varie généralement entre 10 000 € et 25 000 €, en fonction de la taille de l'installation, du type de panneaux solaires choisis et des éventuelles subventions disponibles dans votre région."
        },
        {
            question: "Quelle est la durée de vie des panneaux solaires ?",
            answer: "Nos panneaux solaires sont conçus pour durer en moyenne 25 à 30 ans, avec une garantie de performance assurant au moins 80% de leur capacité initiale après 25 ans d'utilisation."
        },
        {
            question: "Comment puis-je bénéficier des aides financières pour l'installation de panneaux solaires ?",
            answer: "Nous vous accompagnons dans toutes les démarches nécessaires pour obtenir les aides financières disponibles, telles que les subventions locales, la TVA réduite à 10% et les primes comme MaPrimeRénov'."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-gray-600 mb-12">
                    Foire Aux Questions
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
                            >
                                <span className="text-xl font-semibold text-gray-900">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`h-7 w-7 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {activeIndex === index && (
                                <div className="px-8 pb-8 pt-0 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-700 mb-8">
                        Vous avez d'autres questions ? N'hésitez pas à nous contacter !
                    </p>
                    <Link href="/Contact" className="bg-blue-400 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-300">
                        Contactez-nous
                    </Link>
                </div>
            </div>
        </div>
    );
}