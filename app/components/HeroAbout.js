import next from 'next';
import Imghero from '../../public/assets/img/hero.jpg';

export default function HeroAbout() {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img
        src={Imghero} // Remplacez par le chemin de votre image
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay noir */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-left text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Appropos de Nous</h1>
        <p className="text-lg">
          Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
          enim minim estudiat veniam siad venumus dolore
        </p>
      </div>
    </div>
  );
}