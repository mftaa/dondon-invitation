import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import PriceCalculator from '../components/PriceCalculator';
import OrderSteps from '../components/OrderSteps';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductCatalog />
      <PriceCalculator />
      <OrderSteps />
      <Footer />
    </main>
  );
}