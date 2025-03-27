import Navbar from './components/Navbar'; // Corrected
import Hero from './components/Hero'; // Corrected
import LatestProducts from './components/LatestProducts'; // Corrected
import CustomerReviews from './components/CustomerReviews'; // Corrected
// import Pricing from './components/ServiceContent'; // Assuming ServiceContent.js exists
import Footer from './components/Footer'; // Corrected

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestProducts />
      <CustomerReviews />
      {/* <Pricing /> */}
      <Footer />
      {/* ... le reste de votre contenu ... */}
    </div>
  );
}