import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
