import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/*<Stats />*/}
        <Testimonials />
        <Founders />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;