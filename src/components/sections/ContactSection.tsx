import { useRef, type FormEvent } from "react";
import { format, parseISO } from "date-fns";
import { ArrowUpRight, ChevronDown, Clock, Facebook, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";
import { CLINIC, DOCTORS, formatPhone, telLink, waLink, type DoctorId } from "@/lib/clinic";

const todayISO = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD in local time

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const doctor = DOCTORS.find((d) => d.id === (data.get("doctor") as DoctorId));
    if (!doctor) return;

    const text = [
      "*Appointment request - Sai Clinic*",
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Doctor:* ${doctor.name}`,
      `*Preferred date:* ${format(parseISO(date), "EEE, d MMM yyyy")}`,
      message ? `*Message:* ${message}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    // Each request goes to the doctor the patient picked.
    window.open(waLink(doctor.phone, text), "_blank", "noopener,noreferrer");

    toast({
      title: "Opening WhatsApp",
      description: `Tap send in WhatsApp to share your request with ${doctor.name}. The clinic will confirm your time.`,
    });
    form.reset();
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Book a visit</span>
          <h2 className="section-title mt-5">Request an appointment.</h2>
          <p className="section-lead">
            Fill in your details and we'll open WhatsApp with your request ready to send. Prefer to talk? Call us
            directly.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-ink/5 bg-white p-6 shadow-lift sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="field-label">Full name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="field" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="[0-9+\s\-]{10,15}"
                    title="Enter a 10-digit mobile number"
                    required
                    className="field"
                    placeholder="98XXXXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="field-label">Preferred date</label>
                  <input id="date" name="date" type="date" min={todayISO()} required className="field" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="doctor" className="field-label">Doctor</label>
                  <div className="relative">
                    <select id="doctor" name="doctor" required defaultValue="" className="field appearance-none pr-10">
                      <option value="" disabled>Select a doctor</option>
                      {DOCTORS.map((d) => (
                        <option key={d.id} value={d.id}>{d.name} - {d.role}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="field-label">
                    Message <span className="font-normal text-ink/40">(optional)</span>
                  </label>
                  <textarea id="message" name="message" rows={3} className="field resize-none" placeholder="Briefly describe your concern" />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-7 w-full py-4 text-[0.95rem]">
                <WhatsAppIcon className="h-[18px] w-[18px]" /> Send request on WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-ink/45">
                Your appointment is confirmed only once the clinic replies.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <div className="rounded-[1.75rem] bg-forest-deep p-7 text-cream sm:p-9">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-clay-soft" size={20} />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-cream/50">Address</span>
                    <address className="mt-1 not-italic leading-relaxed">
                      {CLINIC.address.line1}<br />
                      {CLINIC.address.line2}<br />
                      {CLINIC.address.city}
                    </address>
                    <a
                      href={CLINIC.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-clay-soft underline-offset-4 hover:underline"
                    >
                      Open in Google Maps <ArrowUpRight size={14} />
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-clay-soft" size={20} />
                  <div className="w-full">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-cream/50">Call</span>
                    <div className="mt-1 space-y-1.5">
                      {DOCTORS.map((d) => (
                        <a key={d.id} href={telLink(d.phone)} className="flex flex-wrap items-baseline justify-between gap-x-4 hover:text-white">
                          <span className="text-cream/70">{d.name}</span>
                          <span className="font-display text-lg">{formatPhone(d.phone)}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 shrink-0 text-clay-soft" size={20} />
                  <div className="w-full">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-cream/50">Hours</span>
                    <div className="mt-1 space-y-1.5">
                      {CLINIC.hours.map((h) => (
                        <div key={h.days} className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <span className="text-cream/70">{h.days}</span>
                          <span className="font-display text-lg">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {DOCTORS.map((d) => (
                <a key={d.id} href={waLink(d.phone)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3.5">
                  <WhatsAppIcon className="h-[18px] w-[18px]" /> {d.shortName}
                </a>
              ))}
              <a
                href={CLINIC.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline py-3.5 sm:col-span-2"
              >
                <Facebook size={17} /> Follow us on Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
