
import { Facebook } from "lucide-react";
import SocialButton from "./SocialButton";

const Footer = () => {
  return (
    <footer className="bg-clinic-dark text-white pt-10 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/photos/7bd7848f-112c-48a9-a750-a9b49d679c90.png" 
                alt="Sai Clinic Logo" 
                className="h-10 w-10 mr-2" 
              />
              <h4 className="text-xl font-bold">Sai Clinic</h4>
            </div>
            <p className="mb-4">Providing quality healthcare services to our community.</p>
            <p className="flex items-start mb-2 text-sm sm:text-base">
              <span className="font-semibold mr-2">Address:</span> 
              <span>H2, 7/29, Sector-2, Rajendra Nagar</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#home" className="hover:text-saffron transition-colors">Home</a></li>
              <li><a href="#doctors" className="hover:text-saffron transition-colors">Our Doctors</a></li>
              <li><a href="#services" className="hover:text-saffron transition-colors">Services</a></li>
              <li><a href="#notices" className="hover:text-saffron transition-colors">Notices</a></li>
              <li><a href="#contact" className="hover:text-saffron transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <SocialButton 
                href="#" 
                variant="whatsapp" 
                className="flex-1 mb-2 sm:mb-0 bg-green"
                isDirectWhatsapp={true}
                whatsappNumber="919811958448"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.127 19.2c-.919 1.35-2.56 2.304-4.28 2.58-.43.075-.708.087-.994.09-3.522-.169-6.728-2.828-7.75-6.227-.452-1.502-.506-3.196-.116-4.843.868-3.659 3.773-6.27 7.252-6.8 5.831-.894 10.492 3.587 10.036 9.131-.089 1.941-.999 3.997-1.993 5.204l-.003.003c-.48.66-.758 1.07-1.022 1.153-.522.154-1.375-.906-1.097-1.27.827-1.067 1.561-2.545 1.815-3.683.471-2.09.09-4.248-1.087-5.943-3.665-5.29-11.986-2.907-12.338 3.63-.108.851.11 1.759.199 2.123.452 1.858 1.488 3.199 3.09 4.102.435.249 1.264.915 2.003.96.693.041 1.076-.066 1.222-.273.177-.25.145-.616-.05-.845-.676-.798-1.514-1.536-1.931-2.291-.65-1.17-.825-2.576-.382-3.874.981-2.817 3.776-4.377 6.535-3.95 2.259.349 4.422 2.208 4.955 4.413.674 2.775-.587 5.614-3.064 7.003-.89.5-2.07.603-2.901.333-.394-.128-.552-.123-.7.168z" />
                </svg>
                WhatsApp
              </SocialButton>
              
              <SocialButton href="https://www.facebook.com/profile.php?id=61576500987091" variant="facebook" className="flex-1">
                <Facebook size={20} />
                Facebook
              </SocialButton>
            </div>
            
            <SocialButton 
              href="https://maps.app.goo.gl/oLEpHbjnXjxaZJEY8" 
              className="w-full mt-2 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C7.802 0 4.386 3.416 4.386 7.614c0 4.872 6.799 15.057 7.085 15.498a.705.705 0 0 0 1.059 0c.285-.44 7.085-10.626 7.085-15.498C19.614 3.416 16.199 0 12 0zm0 11.445a3.831 3.831 0 1 1 0-7.663 3.831 3.831 0 0 1 0 7.663z" />
              </svg>
              Find us on Google Maps
            </SocialButton>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sai Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
