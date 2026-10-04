import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { PRIMARY_DOCTOR, telLink, waLink } from "@/lib/clinic";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={telLink(PRIMARY_DOCTOR.phone)}
        aria-label="Call Sai Clinic"
        className="grid h-12 w-12 place-items-center rounded-full bg-white text-forest shadow-lift ring-1 ring-ink/5 transition-transform hover:scale-105 sm:hidden"
      >
        <Phone size={20} />
      </a>
      <a
        href={waLink(PRIMARY_DOCTOR.phone)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sai Clinic on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#1FAF54] text-white shadow-lift transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
};

export default FloatingActions;
