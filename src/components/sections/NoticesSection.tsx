
import SectionTitle from "@/components/SectionTitle";
import NoticeCard from "@/components/NoticeCard";

const NoticesSection = () => {
  return (
    <section id="notices" className="bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notice Board" 
          subtitle="Important announcements and updates from Sai Clinic"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NoticeCard
            title="New Location Now Open!"
            date="Current"
            content="We have successfully relocated to H2, Block 7/29, Sector 2, Rajendra Nagar, Sahibabad, Ghaziabad. Our enhanced facility offers expanded services for better patient care."
            important={true}
          />
          
          <NoticeCard
            title="Updated Operating Hours"
            date="Current"
            content="New timings: Monday to Friday 6:00 PM - 8:00 PM. Saturday and Sunday appointments available by prior arrangement. Please call to schedule."
            important={true}
          />
          
          <NoticeCard
            title="Expanded Services Available"
            date="May 20, 2025"
            content="We now offer specialized services including diabetes care, obesity management, PCOD consultation, and geriatric care at our new location."
          />
          
          <NoticeCard
            title="Infertility Counselling Services"
            date="May 15, 2025"
            content="Dr. Lalita Rastogi now provides specialized infertility counselling and treatment options. Schedule your consultation for personalized care."
          />
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
