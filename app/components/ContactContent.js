export default function AboutContent() {
    return (
        <>
            <div className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Art Of Coding</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                                enim minim estudiat veniam siad venumus dolore
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Clean Design</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                                enim minim estudiat veniam siad venumus dolore
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Amazing Support</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
                                enim minim estudiat veniam siad venumus dolore
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* google position */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold mb-6 text-center">Notre localisation à Goma</h2>
                        <div className="w-full h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63809.727437917005!2d29.16538765120264!3d-1.6777211394033615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f062fad00bf%3A0x4d4ec1961863dc77!2sKatindo!5e0!3m2!1sfr!2scd!4v1742649494290!5m2!1sfr!2scd" // Remplacez par votre URL
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

        // main pagge

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}