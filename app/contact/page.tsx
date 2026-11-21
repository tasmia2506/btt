import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BookingForm from "@/components/booking/BookingForm";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import Reveal from "@/components/ui/Reveal";
import { business, buildWhatsappUrl, defaultEnquiryMessage } from "@/config/business";

const whyReachOut = [
  "Verified drivers, chauffeur-driven, not self-drive",
  "Transparent per-km pricing, no hidden fees",
  "Well-maintained fleet — Dzire, Etios, Ertiga, Innova Crysta",
  "Custom itineraries for local, outstation and one-way trips",
];

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Send a cab booking enquiry to Badiger Tours & Travels in Bengaluru by form, WhatsApp or phone call.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 bg-slag">
        <Image
          src="/images/cta.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>

      <section className="text-ice pt-28 pb-16">
        <div className="container-edit">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
          <SectionLabel light>Contact</SectionLabel>
          <h1 className="heading-huge text-[clamp(2.25rem,6vw,5.5rem)] max-w-3xl">
            Let&apos;s Plan
            <br />
            Your Next Journey.
          </h1>
        </div>
      </section>

      <section className="py-16" id="booking-form">
        <div className="container-edit grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <Reveal className="bg-white p-6 sm:p-10 border border-stone/40 rounded-lg">
            <h2 className="font-oswald uppercase font-bold text-slag text-xl mb-2">Send Us A Message</h2>
            <p className="text-sm text-slag/60 mb-6">
              Have a question or want to plan your next trip? Fill in the details below.
            </p>
            <BookingForm />
            <p className="text-xs text-stone mt-4">
              By sending an enquiry you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-slag">
                Privacy Policy
              </Link>
              .
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-6" delay={0.1}>
            <div className="border border-stone/40 bg-white p-6 rounded-lg">
              <p className="font-oswald uppercase text-xs tracking-wide text-stone mb-4">
                Why Reach Out To Us?
              </p>
              <ul className="space-y-3">
                {whyReachOut.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slag/75">
                    <Check size={15} className="text-moss shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <ArrowFillButton
              href={buildWhatsappUrl(defaultEnquiryMessage())}
              btnText="Chat on WhatsApp"
              size="compact"
            />
            <ArrowFillButton
              href={business.phoneHref}
              btnText={`Call ${business.phoneDisplay}`}
              size="compact"
              variant="solidDark"
            />

            <div className="border border-stone/40 bg-white p-6 rounded-lg">
              <p className="font-oswald uppercase text-xs tracking-wide text-stone mb-4">Our Locations</p>
              {business.addresses.map((a) => {
                const fullAddress = `${a.label}, ${a.lines.join(", ")}`;
                return (
                  <div key={a.label} className="mb-6 last:mb-0">
                    <div className="flex gap-3 mb-3">
                      <MapPin size={18} className="text-moss shrink-0 mt-0.5" />
                      <div>
                        <p className="font-oswald uppercase font-semibold text-sm text-slag">{a.label}</p>
                        <p className="text-sm text-slag/70">{a.lines.join(", ")}</p>
                      </div>
                    </div>
                    {a.label === "Malleshwaram" && (
                      <iframe
                        title={`Map — ${a.label}`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                        className="w-full h-44 border border-stone/30 rounded-md"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <ArrowFillButton
              href={business.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              btnText="Google Business Profile"
              size="compact"
              variant="outlineDark"
            />

            <p className="text-xs text-ice/70">
              Submitting the form or messaging us sends an enquiry only. Your trip is confirmed once our
              team responds with availability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative text-ice py-20 text-center">
        <div className="container-edit">
          <Reveal>
            <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-3">Ready When You Are</p>
            <h2 className="font-oswald uppercase font-bold text-2xl sm:text-4xl mb-4">
              Your Driver Is One Message Away.
            </h2>
            <p className="text-ice/75 max-w-md mx-auto mb-8 text-sm">
              Send the form above, or reach us directly — whichever is easiest for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ArrowFillButton href="#booking-form" btnText="Book Your Ride" size="compact" />
              <ArrowFillButton
                href={buildWhatsappUrl(defaultEnquiryMessage())}
                btnText="Chat on WhatsApp"
                variant="outlineLight"
                size="compact"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
