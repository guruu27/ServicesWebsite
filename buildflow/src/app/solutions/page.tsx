import Navbar from "@/components/Navbar";
import DetailedFeature from "@/components/DetailedFeature";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <DetailedFeature />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
