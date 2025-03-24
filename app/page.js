import Navbar from './components/Navbar'; // Corrected
import Hero from './components/Hero'; // Corrected
import Service from './components/service'; // Assuming service.js exists
import LatestProducts from './components/LatestProducts'; // Corrected
import CustomerReviews from './components/CustomerReviews'; // Corrected
import Pricing from './components/ServiceContent'; // Assuming ServiceContent.js exists
import Footer from './components/Footer'; // Corrected

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <LatestProducts />
      <CustomerReviews />
      <Pricing />
      <Footer />
      {/* ... le reste de votre contenu ... */}
    </div>
  );
}