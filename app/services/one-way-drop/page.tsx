import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRightLeft, Car, Wallet, ShieldAlert } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PricingTable from "@/components/pricing/PricingTable";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import InfoPills from "@/components/ui/InfoPills";
import HighlightGrid from "@/components/ui/HighlightGrid";
import BookingCta from "@/components/ui/BookingCta";
import FaqSection from "@/components/ui/FaqSection";
import { oneWayFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "One-Way Cab Service From Bangalore for Outstation Travel",
  description:
    "Plan a one-way journey from Bengaluru with Dzire, Ertiga or Innova Crysta. Transparent one-way drop rates with driver bata.",
};

const rows = [
  { Vehicle: "Dzire", Rate: "Starting ₹15/km", Bata: "₹500" },
  { Vehicle: "Etios", Rate: "Contact for confirmation", Bata: "-" },
  { Vehicle: "Ertiga", Rate: "₹20/km", Bata: "₹400" },
  { Vehicle: "Innova Crysta", Rate: "₹25/km", Bata: "₹500" },
];

export default function OneWayDropPage() {
  return (
    <>
      <section className="relative bg-slag text-ice min-h-[50vh] flex items-end">
        <Image
          src="/images/one-way-drop-2.jpeg"
          alt="Single road stretching toward hills"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 container-edit pb-14 pt-28">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "One-Way Drop", href: "/services/one-way-drop" },
            ]}
          />
          <SectionLabel light>One Direction</SectionLabel>
          <h1 className="heading-huge text-[clamp(2rem,5.5vw,4.5rem)] max-w-3xl mb-5">
            One-Way Cab Service From Bangalore For Outstation Travel
          </h1>
          <p className="text-ice/75 max-w-xl mt-4 text-sm sm:text-base mb-5">
            Plan a one-way journey from Bengaluru with vehicle options for your destination.
          </p>
          <InfoPills
            items={[
              { icon: ArrowRightLeft, label: "One Direction Only" },
              { icon: Car, label: "Dzire, Ertiga, Innova Crysta" },
              { icon: Wallet, label: "Starting ₹15/km", accent: true },
            ]}
          />
        </div>
      </section>

      <section className="bg-ice py-16">
        <div className="container-edit">
          <div className="grid lg:grid-cols-[1fr_300px] gap-5 items-stretch mb-10">
            <div className="bg-white border border-stone/15 rounded-2xl p-7 sm:p-9">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-5">
                Good To Know
              </p>
              <HighlightGrid
                items={[
                  { icon: ArrowRightLeft, text: "One-way means a journey in one direction only — not a return trip" },
                  { icon: ShieldAlert, text: "Toll, parking and state permits are extra, based on actual bills" },
                  { icon: Car, text: "Chauffeur-driven, air-conditioned vehicle" },
                  { icon: Wallet, text: "Etios one-way rate not separately supplied — contact us for confirmation" },
                ]}
              />
            </div>
            <div className="bg-slag text-ice rounded-2xl p-7 sm:p-9 flex flex-col justify-center">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-ice/60 mb-3">
                Starting Cab Rate
              </p>
              <p className="font-oswald font-bold text-lichen text-4xl leading-none">₹15/km</p>
              <p className="text-ice/70 text-sm mt-3">Dzire, one-way drop</p>
            </div>
          </div>

          <h2 className="font-oswald uppercase font-bold text-slag text-2xl mb-6">
            One-Way Drop Pricing
          </h2>
          <PricingTable columns={["Vehicle", "Rate", "Bata"]} rows={rows} />
        </div>
      </section>

      <section className="bg-slag text-ice py-16">
        <div className="container-edit">
          <FaqSection
            heading="Frequently Asked Questions"
            subtitle="What travellers usually ask about one-way drops. If yours isn't here, message us directly."
            items={oneWayFaqs}
            whatsappMessage="Hello, I have a question about a one-way cab drop with Badiger Tours & Travels."
            tone="light"
          />
        </div>
      </section>

      <BookingCta
        heading="Plan Your One-Way Drop"
        whatsappMessage="Hello, I would like to enquire about a one-way cab drop with Badiger Tours & Travels."
      />
    </>
  );
}
