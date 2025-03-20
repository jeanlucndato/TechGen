import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/service'
import LatestProducts from './components/LatestProducts';
import CustomerReviews from './components/CustomerReviews';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <LatestProducts />
      <CustomerReviews />
      <Pricing />
      <Footer />
      {/* ... le reste de votre contenu ... */}
    </div>
  );
}