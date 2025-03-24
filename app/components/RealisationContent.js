import next from "next";
import Image from 'next/image'
import prop10 from '../../public/assets/img/prop10.jpg'


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
                        Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                        enim minim estudiat veniam siad venumus dolore
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 (Triangle Roof) */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="URL_IMAGE_1" alt="Triangle Roof" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Triangle Roof</h3>
                                <p className="text-gray-600 mb-2">MANAGEMENT</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Service 2 (Curved Corners) */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="URL_IMAGE_2" alt="Curved Corners" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Curved Corners</h3>
                                <p className="text-gray-600 mb-2">DEVELOPMENT</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Service 3 (Bird On Green) */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="URL_IMAGE_3" alt="Bird On Green" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Bird On Green</h3>
                                <p className="text-gray-600 mb-2">DESIGN</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Service 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="URL_IMAGE_4" alt="Service 4" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Service 4 Title</h3>
                                <p className="text-gray-600 mb-2">Service 4 Category</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Service 5 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="URL_IMAGE_5" alt="Service 5" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Service 5 Title</h3>
                                <p className="text-gray-600 mb-2">Service 5 Category</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                        {/* Service 6 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="URL_IMAGE_6" alt="Service 6" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Service 6 Title</h3>
                                <p className="text-gray-600 mb-2">Service 6 Category</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                                <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}