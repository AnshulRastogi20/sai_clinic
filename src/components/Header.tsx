
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Doctors", href: "#doctors" },
    { name: "Services", href: "#services" },
    { name: "Notice", href: "#notices" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/photos/7bd7848f-112c-48a9-a750-a9b49d679c90.png" 
              alt="Sai Clinic Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2" 
            />
            <span className="text-lg sm:text-xl font-bold text-saffron">Sai Clinic</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-saffron font-medium transition-colors text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
          
          <Button asChild size="sm" className="bg-saffron hover:bg-saffron/90 text-white hidden sm:flex">
            <a href="#contact">Book Appointment</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-saffron"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-saffron font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <Button 
              asChild 
              className="w-full bg-saffron hover:bg-saffron/90 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">Book Appointment</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
