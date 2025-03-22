import Navbar from './../components/Navbar';
import HeroAbout from '../components/HeroAbout';
import AboutContent from '../components/AboutContent'; // Créez ce composant
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <AboutContent />
      <Footer />

    </div>
  );
}