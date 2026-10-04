import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { CLINIC, DOCTORS, formatPhone, telLink, waLink, type Doctor } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const DoctorProfile = ({ doctor, flip }: { doctor: Doctor; flip: boolean }) => (
  <Reveal>
    <article className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
      <div className={cn("relative mx-auto w-full max-w-sm", flip && "md:order-2")}>
        <div aria-hidden className="absolute -inset-3 arch border border-clay/25" />
        <div className="relative aspect-[4/5] overflow-hidden arch bg-sand shadow-lift">
          <img src={doctor.photo} alt={doctor.name} loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-soft">
          <span className="text-clay">{doctor.experience}</span> of experience
        </div>
      </div>

      <div className={cn(flip && "md:order-1")}>
        <span className="eyebrow">{doctor.role}</span>
        <h3 className="mt-4 text-4xl font-medium text-ink sm:text-5xl">{doctor.name}</h3>
        <p className="mt-3 text-base font-medium text-forest">{doctor.designation}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Qualifications">
          {doctor.qualifications.map((q) => (
            <li key={q} className="rounded-full border border-ink/10 bg-white px-3.5 py-1 text-sm font-semibold text-ink/75">
              {q}
            </li>
          ))}
        </ul>

        <div className="mt-7 space-y-4 leading-relaxed text-ink/70">
          {doctor.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <dl className="mt-7 grid gap-4 border-t border-ink/10 pt-6 sm:grid-cols-2">
          {CLINIC.hours.map((h) => (
            <div key={h.days}>
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-ink/45">{h.days}</dt>
              <dd className="mt-1 font-display text-lg text-ink">{h.time}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={waLink(doctor.phone)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon className="h-[18px] w-[18px]" /> WhatsApp {doctor.shortName}
          </a>
          <a href={telLink(doctor.phone)} className="btn-outline">
            <Phone size={16} /> {formatPhone(doctor.phone)}
          </a>
        </div>
      </div>
    </article>
  </Reveal>
);

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Meet your doctors</span>
          <h2 className="section-title mt-5">Experience you can sit across the table from.</h2>
          <p className="section-lead mx-auto">
            Two senior doctors with decades of hospital experience, now caring for families in your
            neighbourhood.
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
          {DOCTORS.map((doctor, i) => (
            <DoctorProfile key={doctor.id} doctor={doctor} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
