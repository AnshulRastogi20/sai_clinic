import SectionTitle from "@/components/SectionTitle";
import SocialButton from "@/components/SocialButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, MessageCircle, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useRef } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleAppointmentSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const doctor = formData.get('doctor') as string;
    const date = formData.get('date') as string;
    const message = formData.get('message') as string || 'No additional message';
    
    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Appointment Request*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Doctor:* ${doctor === 'vipin' ? 'Dr. Vipin Rastogi' : 'Dr. Lalita Rastogi'}\n` +
      `*Date:* ${date}\n` +
      `*Message:* ${message}`
    );
    
    // Dr. Vipin's WhatsApp number
    const whatsappNumber = "919501324120";
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Show confirmation toast
    toast({
      title: "Appointment Request Submitted",
      description: "Your appointment details have been sent to Dr. Vipin Rastogi via WhatsApp.",
    });
    
    // Reset the form
    formRef.current.reset();
  };

  return (
    <section id="contact" className="bg-white/90">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Book an appointment or get in touch with our team"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="p-6 border-t-4 border-t-saffron">
              <form ref={formRef} onSubmit={handleAppointmentSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">Select Doctor</label>
                  <select
                    id="doctor"
                    name="doctor"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                    required
                  >
                    <option value="">Select a doctor</option>
                    <option value="vipin">Dr. Vipin Rastogi</option>
                    <option value="lalita">Dr. Lalita Rastogi</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-saffron hover:bg-saffron/90 text-white">
                  Request Appointment
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-green">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">New Address</p>
                    <p className="text-gray-600">H2, Block 7/29, Sector 2</p>
                    <p className="text-gray-600">Rajendra Nagar, Sahibabad, Ghaziabad</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-lg">Phone Numbers</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-800 font-semibold text-lg">Dr. Vipin: +91 9501324120</p>
                      <p className="text-gray-800 font-semibold text-lg">Dr. Lalita: +91 9999617277</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-gray-600">Monday - Friday: 6:00 PM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday & Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-r-4 border-r-saffron">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <SocialButton 
                  href="#" 
                  variant="whatsapp" 
                  className="w-full bg-green hover:bg-green-600 text-white border-0 shadow-md"
                  isDirectWhatsapp={true}
                  whatsappNumber="919501324120"
                >
                  <MessageCircle size={20} className="text-white" />
                  Contact Dr. Vipin on WhatsApp: +91 9501324120
                </SocialButton>
                
                <SocialButton 
                  href="#" 
                  variant="whatsapp" 
                  className="w-full bg-green hover:bg-green-600 text-white border-0 shadow-md"
                  isDirectWhatsapp={true}
                  whatsappNumber="919999617277"
                >
                  <MessageCircle size={20} className="text-white" />
                  Contact Dr. Lalita Rastogi on WhatsApp: +91 9999617277
                </SocialButton>
                
                <SocialButton href="https://www.facebook.com/profile.php?id=61576500987091" variant="facebook" className="w-full">
                  <Facebook size={20} />
                  Visit our Facebook Page
                </SocialButton>
                
                <SocialButton href="https://maps.app.goo.gl/oLEpHbjnXjxaZJEY8" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <MapPin size={20} />
                  Find on Google Maps
                </SocialButton>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
