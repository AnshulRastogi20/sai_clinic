import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import NoticesSection from "@/components/sections/NoticesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  // Arriving from another page as /#doctors: the browser tries to jump before
  // React has rendered the sections, so jump again once they exist.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const frame = requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: "auto" })
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctorsSection />
        <ServicesSection />
        <NoticesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
