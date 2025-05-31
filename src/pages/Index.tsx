
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AnnouncementSection from "@/components/sections/AnnouncementSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import NoticesSection from "@/components/sections/NoticesSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  useEffect(() => {
    document.title = "Sai Clinic - Dr. Vipin & Dr. Lalita Rastogi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingActions />
      <HeroSection />
      <AboutSection />
      <AnnouncementSection />
      <DoctorsSection />
      <ServicesSection />
      <NoticesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
