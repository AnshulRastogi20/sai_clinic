import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/icons";

const NAV = [
  { name: "About", href: "#about" },
  { name: "Doctors", href: "#doctors" },
  { name: "Services", href: "#services" },
  { name: "Notices", href: "#notices" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-ink/5 bg-cream/90 py-3 backdrop-blur-lg" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" aria-label="Sai Clinic, back to top" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/65 transition-colors hover:text-ink"
            >
              {link.name}
            </a>
          ))}
          <a href="#book" className="btn-primary px-5 py-2.5">
            Book appointment
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-full p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="container pb-5 pt-3 md:hidden" aria-label="Mobile">
          <div className="space-y-1">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 font-display text-2xl text-ink"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="#book" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Book appointment
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
