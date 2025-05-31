
import SectionTitle from "@/components/SectionTitle";
import DoctorCard from "@/components/DoctorCard";
import { Card } from "@/components/ui/card";

const DoctorsSection = () => {
  return (
    <section id="doctors" className="bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Meet Our Doctors" 
          subtitle="Experienced medical professionals committed to providing the best healthcare"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DoctorCard
            name="Vipin Rastogi"
            qualifications="MBBS, M.Phil., MBA"
            experience="22+ years"
            designation="Senior Physician & Hospital Management Expert"
            timing="Mon-Fri: 6:00 PM - 8:00 PM, Sat-Sun: By Appointment"
            imageUrl="/photos/f924ded8-d730-4db3-b771-57324a6d700c.png"
            className="animate-fade-in"
          />
          
          <DoctorCard
            name="Lalita Rastogi"
            qualifications="MBBS, MD, PGDMH"
            experience="20+ years"
            designation="Gynaecologist, Obstetrician, Infertility & Infection control specialist"
            timing="Mon-Fri: 6:00 PM - 8:00 PM, Sat-Sun: By Appointment"
            imageUrl="/photos/d536ac5a-a70a-4d1d-a618-d6bda31e6875.png"
            className="animate-fade-in"
          />
        </div>

        <div className="mt-12 space-y-8">
          <Card className="p-6 border-t-4 border-t-saffron">
            <h3 className="text-2xl font-bold text-saffron mb-4">About Dr. Vipin Rastogi</h3>
            <p className="text-gray-700 leading-relaxed">
              It is truly commendable to witness Dr. Vipin Rastogi's remarkable journey in the field of medicine. 
              With 15 years of outstanding clinical experience at Sir Ganga Ram Hospital Old Rajendra Nagar and 
              Sant Parmanand Hospital Civil Lines, Delhi as an emergency and critical care doctor, he has touched 
              countless lives with his expertise and dedication.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Furthermore, Dr. Rastogi's decade-long leadership in managing esteemed hospitals like Jain Neuro, 
              Tirath Ram Shah Charitable Hospital, and Goyal Hospital and Urology Centre reflects his exceptional 
              administrative acumen and vision. His ability to balance clinical excellence with effective hospital 
              management is inspiring, setting new benchmarks in healthcare and hospital leadership.
            </p>
          </Card>

          <Card className="p-6 border-t-4 border-t-green">
            <h3 className="text-2xl font-bold text-green mb-4">About Dr. Lalita Rastogi</h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Lalita Rastogi is a highly respected and dedicated professional with over 20 years of experience in 
              Gynecology, Obstetrics, and Infertility treatment. She has served countless women with compassion, expertise, 
              and a commitment to improving their reproductive health. Dr. Lalita's deep knowledge and patient-centered 
              approach have earned her a trusted name in the community.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              She has served as Consultant Gynecologist at Narinder Mohan Hospital for several years and in recent years, 
              she has made significant contributions to hospital infection prevention and control, enhancing patient safety 
              and care standards. Her passion for women's health and her unwavering dedication to medical excellence continue 
              to make a meaningful impact in both clinical practice and healthcare advancement.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
