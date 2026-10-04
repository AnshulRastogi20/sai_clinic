import {
  Baby,
  ClipboardCheck,
  Droplet,
  Flower2,
  HeartHandshake,
  HeartPulse,
  Microscope,
  Scale,
  Sprout,
  Stethoscope,
  Syringe,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const SERVICES: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "General Medical Consultation", description: "Diagnosis and treatment of a wide range of illnesses and health conditions.", icon: Stethoscope },
  { title: "Diabetes Care", description: "Ongoing management and monitoring of diabetes with a personalised treatment plan.", icon: Droplet },
  { title: "Paediatric Consultations", description: "Medical care for children and adolescents.", icon: Baby },
  { title: "Gynaecology", description: "Comprehensive women's health and reproductive care.", icon: Flower2 },
  { title: "Obstetric Care", description: "Prenatal, delivery and postnatal care for expectant mothers.", icon: HeartPulse },
  { title: "Infertility Counselling", description: "Expert guidance and treatment options for couples facing fertility challenges.", icon: Sprout },
  { title: "Family Planning", description: "Family planning consultation and contraceptive advice.", icon: Users },
  { title: "Child Vaccination", description: "Immunisation following the national vaccination schedule.", icon: Syringe },
  { title: "Geriatric Consultations", description: "Care for elderly patients and age-related conditions.", icon: HeartHandshake },
  { title: "Obesity Management", description: "Weight management programmes and lifestyle guidance.", icon: Scale },
  { title: "PCOD Consultation & Care", description: "Diagnosis and management of Polycystic Ovarian Disorder.", icon: Microscope },
  { title: "Health Check-ups", description: "Preventive examinations and screening.", icon: ClipboardCheck },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-sand/60 py-20 sm:py-28">
      <div className="container">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">What we treat</span>
            <h2 className="section-title mt-5">Care for every stage of family life.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink/65 lg:text-right">
            From a child's first vaccines to managing diabetes in later years, all at our Rajendra Nagar clinic.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-ink/5 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay-soft text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
