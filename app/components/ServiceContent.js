export default function CustomerReviews() {
  return (

    <>
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="/images/about-hero.jpg" // Remplacez par le chemin de votre image
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay noir */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
          <p className="text-lg">
            Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
            enim minim estudiat veniam siad venumus dolore
          </p>
        </div>
      </div>
      <div class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8 text-center">Nos Réalisations</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Réalisation 1 */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="URL_IMAGE_1" alt="Triangle Roof" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Triangle Roof</h3>
                <p class="text-gray-600 mb-2">MANAGEMENT</p>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                <a href="#" class="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
              </div>
            </div>
            {/* Réalisation 2 */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="URL_IMAGE_2" alt="Curved Corners" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Curved Corners</h3>
                <p class="text-gray-600 mb-2">DEVELOPMENT</p>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                <a href="#" class="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
              </div>
            </div>
            {/* Réalisation 3 */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="URL_IMAGE_3" alt="Bird On Green" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Bird On Green</h3>
                <p class="text-gray-600 mb-2">DESIGN</p>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor.</p>
                <a href="#" class="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE -</a>
              </div>
            </div>
            {/* Ajoutez d'autres réalisations ici si nécessaire */}
          </div>
        </div>
      </div>
    </>
  );
}