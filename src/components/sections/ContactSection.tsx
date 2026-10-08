import { ArrowUpRight, CalendarClock, Clock, Facebook, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import BookingEmbed from "@/components/BookingEmbed";
import { WhatsAppIcon } from "@/components/icons";
import { CLINIC, DOCTORS, formatPhone, telLink, waLink } from "@/lib/clinic";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Book a visit</span>
            <h2 className="section-title mt-5">Book an appointment.</h2>
            <p className="section-lead">
              Pick a slot below and confirm in a minute. Prefer to talk? Call or WhatsApp us.
            </p>
          </div>
          <dl className="flex flex-wrap gap-3">
            <div className="rounded-2xl border border-ink/10 bg-white px-5 py-3">
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/45">Consultation fee</dt>
              <dd className="mt-0.5 font-display text-2xl text-ink">{CLINIC.booking.fee}</dd>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white px-5 py-3">
              <dt className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/45">
                <CalendarClock size={13} /> Daily slot
              </dt>
              <dd className="mt-1 text-sm font-semibold leading-relaxed text-ink">
                {CLINIC.booking.slots.join(" · ")}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="mt-12">
          <div id="book" className="overflow-hidden rounded-[1.75rem] border border-ink/5 bg-white p-1.5 shadow-lift sm:p-3">
            <BookingEmbed />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-[1.5rem] bg-forest-deep p-7 text-cream">
              <MapPin className="text-clay-soft" size={20} />
              <span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-cream/50">Address</span>
              <address className="mt-1 not-italic leading-relaxed">
                {CLINIC.address.line1}<br />
                {CLINIC.address.line2}<br />
                {CLINIC.address.city}
              </address>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-clay-soft underline-offset-4 hover:underline"
              >
                Open in Google Maps <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-[1.5rem] bg-forest-deep p-7 text-cream">
              <Phone className="text-clay-soft" size={20} />
              <span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-cream/50">Call</span>
              <div className="mt-1 space-y-2">
                {DOCTORS.map((d) => (
                  <a key={d.id} href={telLink(d.phone)} className="block hover:text-white">
                    <span className="block text-sm text-cream/60">{d.name}</span>
                    <span className="font-display text-lg">{formatPhone(d.phone)}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="h-full rounded-[1.5rem] bg-forest-deep p-7 text-cream">
              <Clock className="text-clay-soft" size={20} />
              <span className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-cream/50">Clinic hours</span>
              <div className="mt-1 space-y-2">
                {CLINIC.hours.map((h) => (
                  <div key={h.days}>
                    <span className="block text-sm text-cream/60">{h.days}</span>
                    <span className="font-display text-lg">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-4 grid gap-3 sm:grid-cols-3">
          {DOCTORS.map((d) => (
            <a key={d.id} href={waLink(d.phone)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3.5">
              <WhatsAppIcon className="h-[18px] w-[18px]" /> WhatsApp {d.shortName}
            </a>
          ))}
          <a href={CLINIC.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn-outline py-3.5">
            <Facebook size={17} /> Follow us on Facebook
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
