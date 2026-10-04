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
