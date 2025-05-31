
import { Card } from "@/components/ui/card";

const AnnouncementSection = () => {
  return (
    <section className="bg-gradient-to-r from-saffron/10 to-green/10 py-8">
      <div className="container mx-auto px-4">
        <Card className="border-l-4 border-l-saffron bg-white/90 p-6">
          <h2 className="text-2xl font-bold text-saffron mb-4 text-center">🏥 IMPORTANT ANNOUNCEMENT 🏥</h2>
          <h3 className="text-xl font-semibold text-center mb-4">CHANGE OF ADDRESS</h3>
          <div className="text-center mb-4">
            <p className="text-gray-700 mb-2">From Shalimar Garden to Rajendra Nagar</p>
            <p className="text-sm text-gray-600">
              After 15 years of serving Shalimar Garden (2000-2015), we have relocated to provide enhanced healthcare services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-green mb-2">New Address:</h4>
              <p className="text-gray-700">
                Sai Clinic<br/>
                H2, Block 7/29<br/>
                Sector 2, Rajendra Nagar<br/>
                Sahibabad, Ghaziabad
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green mb-2">New Timings:</h4>
              <p className="text-gray-700">
                Monday to Friday: 6:00 PM - 8:00 PM<br/>
                Saturday & Sunday: By Appointment Only
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Contact: 9501324120, 9999617277
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AnnouncementSection;
