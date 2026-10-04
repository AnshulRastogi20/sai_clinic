import { ArrowRight, Clock, Phone } from "lucide-react";
import { CLINIC, DOCTORS, PRIMARY_DOCTOR, formatPhone, telLink } from "@/lib/clinic";

const [vipin, lalita] = DOCTORS;

const STATS = [
  { value: `Since ${CLINIC.since}`, label: "Caring for local families" },
  { value: "45+ years", label: "Combined clinical experience" },
  { value: "12 services", label: "Under one roof" },
  { value: "2 specialists", label: "Physician & gynaecologist" },
];

const Portrait = ({ src, name, role, className }: { src: string; name: string; role: string; className: string }) => (
  <figure className={"absolute overflow-hidden arch bg-sand shadow-lift ring-[6px] ring-cream " + className}>
    <img src={src} alt={name} className="h-full w-full object-cover object-top" />
    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent px-4 pb-4 pt-12 text-cream">
      <span className="block font-display text-base leading-tight sm:text-lg">{name}</span>
      <span className="mt-0.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cream/70">{role}</span>
    </figcaption>
  </figure>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
      {/* soft backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-clay/10 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-[26rem] w-[26rem] rounded-full bg-forest/10 blur-3xl" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="animate-fade-up">
          <span className="eyebrow">Family clinic · Sahibabad, Ghaziabad</span>
          <h1 className="mt-6 text-[2.75rem] font-medium leading-[1.02] text-ink sm:text-6xl lg:text-[4.4rem]">
            Trusted family care,{" "}
            <em className="font-normal text-clay">since {CLINIC.since}.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            General medicine and women's health under one roof, from two doctors with over four
            decades of combined experience at leading hospitals across Delhi NCR.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary px-7 py-3.5 text-[0.95rem]">
              Book an appointment <ArrowRight size={18} />
            </a>
            <a href={telLink(PRIMARY_DOCTOR.phone)} className="btn-outline px-7 py-3.5 text-[0.95rem]">
              <Phone size={17} /> {formatPhone(PRIMARY_DOCTOR.phone)}
            </a>
          </div>

          <p className="mt-7 flex items-center gap-2.5 text-sm text-ink/60">
            <Clock size={16} className="text-clay" />
            <span>
              <strong className="font-semibold text-ink/80">{CLINIC.hours[0].days}</strong>, {CLINIC.hours[0].time}
              <span className="mx-2 text-ink/25">|</span>
              Weekends {CLINIC.hours[1].time.toLowerCase()}
            </span>
          </p>
        </div>

        <div className="relative mx-auto aspect-[5/6] w-full max-w-[30rem] animate-fade-up [animation-delay:150ms]">
          <Portrait src={vipin.photo} name={vipin.name} role={vipin.role} className="left-0 top-0 w-[58%] aspect-[3/4]" />
          <Portrait src={lalita.photo} name={lalita.name} role={lalita.role} className="bottom-0 right-0 w-[54%] aspect-[3/4]" />

          <div aria-hidden className="absolute right-[6%] top-[4%] h-[34%] w-[30%] arch border border-clay/30" />

          <div className="absolute bottom-[5%] left-0 w-[42%] rounded-2xl border border-ink/5 bg-white/90 p-3.5 shadow-soft backdrop-blur sm:p-4">
            <span className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-forest">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" /> Clinic hours
            </span>
            <span className="mt-1.5 block font-display text-lg leading-tight text-ink sm:text-xl">6 - 8 PM</span>
            <span className="block text-xs text-ink/55">Monday to Friday</span>
          </div>
        </div>
      </div>

      <div className="container mt-16 lg:mt-24">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-cream px-5 py-6 sm:px-7">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-2xl text-ink sm:text-3xl">{s.value}</span>
                <span className="mt-1 block text-sm text-ink/55">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
