export default function Hero() {
    return (
      <div className="relative h-[500px] overflow-hidden"> {/* Ajustez la hauteur selon vos besoins */}
        {/* Image de fond principale */}
        <img
          src="/images/hero-bg.jpg" // Remplacez par le chemin de votre image principale
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Image de superposition */}
        <img
          src="/images/hero-overlay.png" // Remplacez par le chemin de votre image de superposition
          alt="Hero Overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-60" // Ajustez l'opacité selon vos besoins
        />
  
        {/* Contenu du Hero */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">HI-TECH DESIGN</h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim
            minim estudiat veniam siad venumus dolore
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold">
            EXPLORE
          </button>
        </div>
      </div>
    );
  }