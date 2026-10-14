import { useEffect, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { CLINIC, PRIMARY_DOCTOR, formatPhone, telLink } from "@/lib/clinic";

const EFFECTIVE_DATE = "14 October 2026";
const URL = "https://saiclinic.health/privacy-policy";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-t border-ink/10 py-8 first:border-t-0 first:pt-0">
    <h2 className="text-2xl font-medium text-ink sm:text-[1.7rem]">{title}</h2>
    <div className="mt-4 space-y-4 leading-relaxed text-ink/70 [&_a]:font-semibold [&_a]:text-forest [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink/85 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  </section>
);

const PrivacyPolicy = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Privacy Policy | Sai Clinic";
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevHref = canonical?.href;
    canonical?.setAttribute("href", URL);
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      if (canonical && prevHref) canonical.setAttribute("href", prevHref);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="container max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 text-[2.6rem] font-medium leading-[1.05] text-ink sm:text-6xl">Privacy policy</h1>
          <p className="mt-5 text-ink/55">Effective {EFFECTIVE_DATE}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Sai Clinic ("we", "us") respects your privacy. This policy explains what personal information we
            collect through saiclinic.health and when you book or contact us, how we use it, who we share it
            with, and the choices you have.
          </p>

          <div className="mt-12 rounded-[1.75rem] border border-ink/5 bg-white p-6 shadow-soft sm:p-10">
            <Section title="Who we are">
              <p>
                Sai Clinic, {CLINIC.address.line1}, {CLINIC.address.line2}, {CLINIC.address.city}, India. The clinic
                is run by {PRIMARY_DOCTOR.name} and Dr. Lalita Rastogi, and is responsible for the personal
                information described in this policy.
              </p>
            </Section>

            <Section title="What we collect">
              <ul>
                <li>
                  <strong>Appointment details.</strong> When you book online we receive your name, email address,
                  phone number (if given), the slot you chose and any note you add, such as the reason for your
                  visit.
                </li>
                <li>
                  <strong>Payment status.</strong> We see whether your consultation fee was paid and the amount. We
                  never see or store your full card, UPI or bank details.
                </li>
                <li>
                  <strong>Messages and calls.</strong> If you call us or message us on WhatsApp, we receive your
                  phone number and whatever you choose to tell us.
                </li>
                <li>
                  <strong>Health information.</strong> Anything you share about your health, in a booking note, a
                  message or during your consultation, is sensitive. We use it only to provide your care.
                </li>
                <li>
                  <strong>Technical data.</strong> Like any website, our hosting provider automatically records
                  basic request data such as IP address, browser type and the pages requested, to keep the site
                  running and secure.
                </li>
              </ul>
              <p>
                This website does not use cookies of its own, analytics or advertising trackers, and it has no
                patient login.
              </p>
            </Section>

            <Section title="How we use it">
              <ul>
                <li>To schedule, confirm, reschedule or cancel your appointment and remind you about it.</li>
                <li>To take payment of the consultation fee.</li>
                <li>To provide medical care and keep the records that care requires.</li>
                <li>To reply to your calls and messages.</li>
                <li>To keep this website secure and meet our legal obligations.</li>
              </ul>
              <p>We do not sell your personal information and we do not use it for advertising.</p>
            </Section>

            <Section title="Who we share it with">
              <p>We share only what each service needs to do its job:</p>
              <ul>
                <li>
                  <strong>Socioverse</strong> runs our online booking page, which appears inside this website.
                  Your booking details go directly to Socioverse when you book. See the{" "}
                  <a href="https://www.socioverse.io/privacy" target="_blank" rel="noopener noreferrer">
                    Socioverse privacy policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Razorpay</strong> processes consultation-fee payments under its own privacy policy and
                  security standards.
                </li>
                <li>
                  <strong>Google</strong> is used for appointment calendar invites and video consultation links
                  (Google Calendar and Google Meet), and serves this website's fonts.
                </li>
                <li>
                  <strong>WhatsApp (Meta)</strong> carries any messages you choose to send us there.
                </li>
                <li>
                  <strong>Vercel</strong> hosts this website.
                </li>
              </ul>
              <p>
                We may also disclose information where the law requires it, or where it is needed to protect
                someone's life or health in an emergency.
              </p>
            </Section>

            <Section title="How long we keep it">
              <p>
                We keep appointment and medical information for as long as needed to provide your care and for as
                long as applicable law requires medical records to be kept. After that we delete it or make it
                anonymous.
              </p>
            </Section>

            <Section title="How we protect it">
              <p>
                This website is served only over an encrypted (HTTPS) connection, and access to patient information
                is limited to the clinic. No method of storage or transmission is completely secure, but we take
                reasonable steps to protect your information.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                Under India's Digital Personal Data Protection Act, 2023, you can ask us to:
              </p>
              <ul>
                <li>tell you what personal information we hold about you and how we use it;</li>
                <li>correct or update information that is wrong or incomplete;</li>
                <li>
                  delete your information, unless we must keep it, for example as part of a medical record;
                </li>
                <li>stop using information you gave us on the basis of consent;</li>
                <li>nominate someone to exercise these rights for you.</li>
              </ul>
              <p>
                To make a request or raise a concern, contact us using the details below. If you are not satisfied
                with our response, you may complain to the Data Protection Board of India.
              </p>
            </Section>

            <Section title="Children">
              <p>
                Appointments for anyone under 18 should be booked by a parent or guardian, who provides the
                child's details on their behalf.
              </p>
            </Section>

            <Section title="Emergencies">
              <p>
                Online booking is not for emergencies. In a medical emergency, call 112 or go to the nearest
                hospital.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                If we change how we handle personal information, we will update this page and the effective date
                at the top.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                For any privacy question or request, contact {PRIMARY_DOCTOR.name} at{" "}
                <a href={telLink(PRIMARY_DOCTOR.phone)}>{formatPhone(PRIMARY_DOCTOR.phone)}</a>, or visit us at{" "}
                {CLINIC.address.line1}, {CLINIC.address.line2}, {CLINIC.address.city}.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default PrivacyPolicy;
