
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-saffron/20 via-white to-green/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-clinic-dark">
              Welcome to <span className="text-saffron">Sai Clinic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Quality healthcare services provided by experienced professionals
            </p>
            <p className="text-gray-600 mb-8">
              H2, 7/29, Sector-2, Rajendra Nagar, Sahibabad, Ghaziabad
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-saffron hover:bg-saffron/90 text-white">
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green text-green hover:bg-green/10">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
