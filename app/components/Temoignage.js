"use client";
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
            image: temoins1,
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins2,
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins3,
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins4,
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins5,
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins6,
        },
        {
            name: 'Alice Johnson',
            role: 'Marketing Director',
            content: 'Another testimonial here...',
            image: temoins7,
        },
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
        <div className="bg-blue-100 py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-6 md:mb-8">Témoignages</h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={testimonialRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full px-2 sm:px-4">
                                <div className="bg-gray-800 text-white rounded-lg p-6 md:p-8">
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
                                    <p className="text-center text-gray-400 text-sm sm:text-base mb-4">{testimonial.role}</p>
                                    <p className="text-center text-sm sm:text-base">{testimonial.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Flèches de navigation */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-2 sm:px-4">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft className="text-gray-600 text-sm sm:text-base" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none transition-colors"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight className="text-gray-600 text-sm sm:text-base" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


