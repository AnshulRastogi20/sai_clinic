
import SectionTitle from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-green/5 via-white to-saffron/5">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Sai Clinic" 
          subtitle="Our journey of serving the community with dedication and excellence"
        />
        
        <Card className="p-8 border-t-4 border-t-saffron shadow-lg">
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              We are pleased to inform you that after 15 years of serving the community of Shalimar Garden 
              (B65, SG Ext II) from 2000 to 2015 with unwavering passion and dedication—especially during a 
              time when no medical services were available—our center has now relocated to Rajender Nagar 
              Sector-2 Sahibabad Ghaziabad.
            </p>
            
            <p className="text-lg mb-6">
              This move marks a new chapter in our journey, allowing us to expand our services and continue 
              our commitment to holistic, accessible healthcare.
            </p>
            
            <p className="text-lg mb-6">
              Our new facility offers a wider range of medical services, preventive and curative healthcare.
            </p>
            
            <p className="text-lg mb-6">
              We extend our heartfelt gratitude to the Shalimar Garden community for their trust and support 
              over the past decade, and we look forward to serving you with enhanced care at our new Rajendra 
              Nagar Sahibabad location.
            </p>
            
            <p className="text-lg font-semibold text-saffron">
              Thank you for being a part of our journey.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
