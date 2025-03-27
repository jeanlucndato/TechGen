import Navbar from '../components/Navbar';
import ServiceContent from '../components/ServiceContent'
import Service from '../components/service'
import Temoignage from '../components/Temoignage'
import Footer from '../components/Footer';

export default function About() {
    return (
        <div>
            <Navbar />
            <ServiceContent />
            <Service />
            <Temoignage />
            <Footer />
        </div>
    );
}