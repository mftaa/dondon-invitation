import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ProductCatalog from '../components/ProductCatalog';
import PriceCalculator from '../components/PriceCalculator';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import TipsAndTrick from '../components/TipsAndTrick';
import OrderSteps from '../components/OrderSteps';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProductCatalog />
      <PriceCalculator />
      <Gallery />
      <Testimonials />
      <TipsAndTrick />
      <OrderSteps />
      <Footer />
    </main>
  );
}
