import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses and protects your information.`,
};

const sections = [
  {
    n: "01",
    title: "Who We Are",
    body: [
      `${business.name} is a cab and travel service operating from Bengaluru, Karnataka. This policy explains what information we collect through this website and how it is used.`,
    ],
  },
  {
    n: "02",
    title: "What We Collect",
    body: [
      "When you submit the booking enquiry form, we collect: your name, phone number, pickup location, destination, travel date(s), trip type, preferred vehicle, passenger count and any additional notes you enter.",
      "We do not ask for or store payment details, government ID numbers, or precise device location on this website.",
    ],
  },
  {
    n: "03",
    title: "How We Use It",
    body: [
      "The booking form does not submit to a server or database. Instead, it assembles the details you enter into a pre-filled WhatsApp message and opens WhatsApp for you to review and send yourself.",
      "We only receive your information once you choose to send that WhatsApp message. We use it solely to respond to your enquiry — confirming availability, vehicle and pricing for your trip.",
    ],
  },
  {
    n: "04",
    title: "Consent",
    body: [
      "Submitting the enquiry form or messaging us on WhatsApp or by phone is treated as your consent for us to contact you back about that enquiry. You can withdraw consent at any time by telling us so on the same channel.",
    ],
  },
  {
    n: "05",
    title: "Cookies",
    body: [
      "This website does not use tracking or advertising cookies. Any cookies set are limited to what your browser stores locally for basic site functionality.",
    ],
  },
  {
    n: "06",
    title: "Sharing",
    body: [
      "We do not sell or rent your information. We do not share it with third parties except where required to fulfil your trip (for example, with the driver assigned to your booking) or where required by law.",
    ],
  },
  {
    n: "07",
    title: "Retention",
    body: [
      "Since enquiries are sent and received over WhatsApp and phone rather than stored in a website database, retention of your conversation is governed by WhatsApp's own policies and your phone's message history, not by this website.",
    ],
  },
  {
    n: "08",
    title: "Your Rights",
    body: [
      "You can ask us at any time what information we hold about you from a past enquiry, ask us to correct it, or ask us to delete our record of a past conversation. Contact us using the details below to make this request.",
    ],
  },
  {
    n: "09",
    title: "Children",
    body: [
      "This website and our services are intended for use by adults booking travel. We do not knowingly collect information from children.",
    ],
  },
  {
    n: "10",
    title: "Changes To This Policy",
    body: [
      "We may update this policy from time to time to reflect changes to the website or our practices. The date below shows when it was last updated.",
    ],
  },
  {
    n: "11",
    title: "Contact",
    body: [
      `Questions about this policy or your information can be sent to us at ${business.phoneDisplay} (call or WhatsApp).`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slag text-ice pt-28 pb-16">
        <div className="container-edit">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy" }]} />
          <SectionLabel light>Legal</SectionLabel>
          <h1 className="heading-huge text-[clamp(2rem,5vw,3.5rem)] mb-3">Privacy Policy</h1>
          <p className="text-sm text-ice/60">Last updated 20 November 2026</p>
        </div>
      </section>

      <section className="bg-ice py-16">
      <div className="container-edit max-w-3xl">
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.n}>
              <h2 className="font-oswald uppercase font-bold text-slag text-lg mb-3">
                <span className="text-moss mr-2">{s.n}</span>
                {s.title}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-sm text-slag/75 leading-relaxed mb-2 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
