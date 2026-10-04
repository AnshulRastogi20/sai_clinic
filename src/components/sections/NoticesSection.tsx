import Reveal from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

const NOTICES = [
  {
    tag: "Location",
    title: "Our new clinic is open",
    content: `We have relocated to ${CLINIC.address.line1}, ${CLINIC.address.line2}, Ghaziabad. The new facility offers expanded services for better patient care.`,
  },
  {
    tag: "Timings",
    title: "Clinic hours",
    content: "Monday to Friday, 6:00 PM to 8:00 PM. Saturday and Sunday by prior appointment only. Please call or WhatsApp to schedule.",
  },
  {
    tag: "Services",
    title: "Expanded services",
    content: "Diabetes care, obesity management, PCOD consultation and geriatric care are now available at our new location.",
  },
  {
    tag: "Women's health",
    title: "Infertility counselling",
    content: "Dr. Lalita Rastogi offers infertility counselling and treatment options. Book a consultation for personalised care.",
  },
];

const NoticesSection = () => {
  return (
    <section id="notices" className="bg-white py-20 sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">Notice board</span>
          <h2 className="section-title mt-5">Good to know before you visit.</h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {NOTICES.map((n) => (
            <article key={n.title} className="bg-white p-7">
              <span className="inline-block rounded-full bg-forest-soft px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-forest">
                {n.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">{n.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{n.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
