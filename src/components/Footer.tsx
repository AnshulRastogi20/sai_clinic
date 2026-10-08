import { Wordmark } from "@/components/icons";
import { CLINIC, DOCTORS, formatPhone, telLink } from "@/lib/clinic";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Our doctors", href: "#doctors" },
  { name: "Services", href: "#services" },
  { name: "Notices", href: "#notices" },
  { name: "Book appointment", href: "#book" },
];

const Footer = () => {
  return (
    <footer className="bg-ink pb-28 pt-16 text-cream sm:pb-10">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark light />
            <p className="mt-6 max-w-sm leading-relaxed text-cream/60">
              Trusted family care since {CLINIC.since}. General medicine and women's health in Rajendra Nagar,
              Sahibabad.
            </p>
            <address className="mt-6 text-sm not-italic leading-relaxed text-cream/60">
              {CLINIC.address.line1}, {CLINIC.address.line2}, {CLINIC.address.city}
            </address>
          </div>

          <nav aria-label="Footer">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-cream/45">Explore</h4>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream/75 transition-colors hover:text-cream">{l.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-cream/45">Contact</h4>
            <ul className="mt-5 space-y-3">
              {DOCTORS.map((d) => (
                <li key={d.id}>
                  <a href={telLink(d.phone)} className="block text-cream/75 transition-colors hover:text-cream">
                    <span className="block text-xs text-cream/45">{d.name}</span>
                    {formatPhone(d.phone)}
                  </a>
                </li>
              ))}
              <li>
                <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-cream/75 hover:text-cream">
                  Google Maps
                </a>
                <span className="mx-2 text-cream/25">·</span>
                <a href={CLINIC.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-cream/75 hover:text-cream">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sai Clinic. All rights reserved.</p>
          <p>In a medical emergency, call 112 or go to the nearest hospital.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
