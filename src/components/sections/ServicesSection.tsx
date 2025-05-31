
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-green/5">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive healthcare services available at our new Rajendra Nagar location"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            title="General Medical Consultation" 
            description="Comprehensive diagnosis and treatment of various diseases and health conditions."
          />
          <ServiceCard 
            title="Specialized Diabetes Care" 
            description="Expert management and monitoring of diabetes with personalized treatment plans."
          />
          <ServiceCard 
            title="Paediatric Consultations" 
            description="Specialized medical care for children and adolescents."
          />
          <ServiceCard 
            title="Gynaecology Services" 
            description="Comprehensive women's health services and reproductive system care."
          />
          <ServiceCard 
            title="Obstetric Care" 
            description="Complete prenatal, delivery, and postnatal care for expectant mothers."
          />
          <ServiceCard 
            title="Infertility Counselling" 
            description="Expert guidance and treatment options for couples facing fertility challenges."
          />
          <ServiceCard 
            title="Family Planning Guidance" 
            description="Comprehensive family planning consultation and contraceptive advice."
          />
          <ServiceCard 
            title="Child Vaccination Services" 
            description="Complete immunization services following national vaccination schedules."
          />
          <ServiceCard 
            title="Geriatric Consultations" 
            description="Specialized healthcare services for elderly patients and age-related conditions."
          />
          <ServiceCard 
            title="Obesity Management" 
            description="Comprehensive weight management programs and lifestyle modification guidance."
          />
          <ServiceCard 
            title="PCOD Consultation and Care" 
            description="Specialized treatment and management of Polycystic Ovarian Disorder."
          />
          <ServiceCard 
            title="Health Check-ups" 
            description="Comprehensive health examination and preventive screening services."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
