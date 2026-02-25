import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardImage from "@/components/DashboardImage";
import CyberCore from "@/components/CyberCore";
import ProblemAndSolution from "@/components/ProblemAndSolution";
import BentoFeatures from "@/components/BentoFeatures";
import PlanSelector from "@/components/subscription/components/PlanSelector";
import Founders from "@/components/Founders";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";


export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <DashboardImage />
        <CyberCore />
        <ProblemAndSolution />
        <BentoFeatures />
        <PlanSelector />
        <Founders />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}