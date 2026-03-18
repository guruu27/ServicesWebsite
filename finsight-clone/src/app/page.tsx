import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <ProductShowcase />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
