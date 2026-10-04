import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">Our story</span>
          <h2 className="section-title mt-5">
            Fifteen years in Shalimar Garden. <em className="font-normal text-clay">A new home</em> in Rajendra Nagar.
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/70">
            <p>
              From 2000 to 2015 we served the community of Shalimar Garden ({CLINIC.previousAddress}) with
              unwavering passion and dedication, at a time when no other medical services were available
              nearby.
            </p>
            <p>
              Our clinic has now relocated to Rajendra Nagar, Sector 2, Sahibabad, Ghaziabad. The move marks
              a new chapter: a facility with a wider range of preventive and curative care, and the same
              commitment to holistic, accessible healthcare.
            </p>
            <p>
              We are grateful to the Shalimar Garden community for fifteen years of trust and support, and we
              look forward to serving you with enhanced care at our new location.
            </p>
          </div>
          <p className="mt-8 font-display text-xl italic text-forest">
            Thank you for being a part of our journey.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:pt-12">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-forest p-8 text-cream shadow-lift sm:p-10">
            <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-cream/10" />
            <div aria-hidden className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-cream/10" />

            <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cream/60">We've moved</span>

            <div className="mt-7 space-y-6">
              <div className="opacity-60">
                <span className="text-xs font-semibold uppercase tracking-wider">Earlier</span>
                <p className="mt-1 font-display text-lg line-through decoration-cream/40">Shalimar Garden, 2000 - 2015</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-clay-soft">Now</span>
                <address className="mt-1 not-italic">
                  <span className="block font-display text-2xl leading-snug sm:text-[1.7rem]">{CLINIC.address.line1}</span>
                  <span className="block font-display text-2xl leading-snug sm:text-[1.7rem]">{CLINIC.address.line2}</span>
                  <span className="mt-1 block text-cream/70">{CLINIC.address.city}</span>
                </address>
              </div>
            </div>

            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-9 bg-cream text-forest hover:bg-white"
            >
              <MapPin size={17} /> Get directions <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
