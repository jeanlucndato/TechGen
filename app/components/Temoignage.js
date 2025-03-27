"use client"; // Indique que c'est un composant client
import Image from 'next/image';
import temoins1 from '../../public/assets/img/prop13.jpeg';
import temoins2 from '../../public/assets/img/prop13.jpeg';
import temoins3 from '../../public/assets/img/prop13.jpeg';
import temoins4 from '../../public/assets/img/prop13.jpeg';
import temoins5 from '../../public/assets/img/prop13.jpeg';
import temoins6 from '../../public/assets/img/prop13.jpeg';
import temoins7 from '../../public/assets/img/prop13.jpeg';
import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            name: 'Jules Bokande',
            role: 'CEO, Co-Founder',
            content: 'Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio dicta placeat! Et pariatur doloremque ea veniam.',
            image: temoins1, // Correction ici
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins2, // Correction ici
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins3, // Correction ici
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins4, // Correction ici
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins5, // Correction ici
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins6, // Correction ici
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins7, // Correction ici
        },
        // Ajoutez d'autres témoignages ici
    ];
    const totalTestimonials = testimonials.length;
    const testimonialRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalTestimonials]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    };

    return (
        <div className="bg-blue-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">Témoignages</h2>

                <div className="relative">
                    <div
                        ref={testimonialRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full p-6">
                                <div className="bg-gray-800 text-white rounded-lg p-8">
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={96}
                                            height={96}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
                                    <p className="text-center text-gray-400 mb-4">{testimonial.role}</p>
                                    <p className="text-center">{testimonial.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Flèches de navigation */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between p-4">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-200 rounded-full p-2 focus:outline-none" // Ajout de focus:outline-none
                        >
                            <FaChevronLeft className="text-gray-600" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-200 rounded-full p-2 focus:outline-none" // Ajout de focus:outline-none
                        >
                            <FaChevronRight className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


