
import SocialButton from "@/components/SocialButton";
import { MapPin, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      <SocialButton
        href="https://maps.app.goo.gl/oLEpHbjnXjxaZJEY8"
        variant="outline"
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-white border-green-500 hover:bg-green-50"
      >
        <MapPin size={20} className="text-green-600" />
      </SocialButton>
      <SocialButton
        isDirectWhatsapp={true}
        whatsappNumber="919501324120"
        variant="whatsapp"
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-green-500 hover:bg-green-600 text-white border-0"
      >
        <MessageCircle size={20} className="text-white" />
      </SocialButton>
    </div>
  );
};

export default FloatingActions;
