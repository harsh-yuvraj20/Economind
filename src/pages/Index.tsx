import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedBytes } from "@/components/FeaturedBytes";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBytes />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
