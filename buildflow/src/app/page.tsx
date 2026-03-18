import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import DetailedFeature from "@/components/DetailedFeature";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <TrustedBy />
        <Features />
        <DetailedFeature />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
