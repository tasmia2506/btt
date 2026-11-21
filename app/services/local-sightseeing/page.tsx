import Image from "next/image";
import type { Metadata } from "next";
import { Clock, Route, Car, ShieldAlert } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PricingTable from "@/components/pricing/PricingTable";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqSchema from "@/components/seo/FaqSchema";
import InfoPills from "@/components/ui/InfoPills";
import HighlightGrid from "@/components/ui/HighlightGrid";
import BookingCta from "@/components/ui/BookingCta";
import { vehicles } from "@/data/vehicles";
import { localSightseeingFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Local Sightseeing & Full-Day Cab Packages in Bangalore",
  description:
    "Explore Bengaluru with convenient local cab packages from Badiger Tours & Travels. 8 hours / 80 km packages for Dzire, Ertiga and Innova Crysta.",
};

export default function LocalSightseeingPage() {
  const rows = vehicles.map((v) => ({
    Vehicle: v.name,
    Package: v.local ? v.local.package.split(" — ")[0] : "Contact for confirmation",
    "Extra KM": v.local ? v.local.extraKm : "-",
    "Extra Hour": v.local ? v.local.extraHour : "-",
  }));

  return (
    <>
      <section className="relative bg-slag text-ice min-h-[50vh] flex items-end">
        <Image
          src="/images/local-sightseeing-2.jpeg"
          alt="City street in Bengaluru"
          fill
          priority
          className="object-cover object-top opacity-40"
        />
        <div className="relative z-10 container-edit pb-14 pt-28">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Local Sightseeing", href: "/services/local-sightseeing" },
            ]}
          />
          <SectionLabel light>8 Hours / 80 KM</SectionLabel>
          <h1 className="heading-huge text-[clamp(2rem,5.5vw,4.5rem)] max-w-3xl mb-5">
            Local Sightseeing &amp; Full-Day Cab Packages in Bangalore
          </h1>
          <p className="text-ice/75 max-w-xl mt-4 text-sm sm:text-base mb-5">
            Explore Bengaluru with convenient local cab packages from Badiger Tours &amp; Travels.
          </p>
          <InfoPills
            items={[
              { icon: Clock, label: "8 Hours / 80 KM Package" },
              { icon: Route, label: "Within Bengaluru" },
              { icon: Car, label: "Dzire, Ertiga, Innova Crysta", accent: true },
            ]}
          />
        </div>
      </section>

      <section className="bg-ice py-16">
        <div className="container-edit">
          <div className="grid lg:grid-cols-[1fr_300px] gap-5 items-stretch mb-10">
            <div className="bg-white border border-stone/15 rounded-2xl p-7 sm:p-9">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-5">
                Package Snapshot
              </p>
              <HighlightGrid
                items={[
                  { icon: Clock, text: "Covers 8 hours or 80 km, whichever comes first" },
                  { icon: Route, text: "Usage beyond either limit billed at extra km / extra hour rate" },
                  { icon: Car, text: "Chauffeur-driven, air-conditioned vehicle" },
                  { icon: ShieldAlert, text: "Etios local package rate not separately supplied — contact us" },
                ]}
              />
            </div>
            <div className="bg-slag text-ice rounded-2xl p-7 sm:p-9 flex flex-col justify-center">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-ice/60 mb-3">
                Starting Package Rate
              </p>
              <p className="font-oswald font-bold text-lichen text-4xl leading-none">₹2,200</p>
              <p className="text-ice/70 text-sm mt-3">Dzire, 8 hrs / 80 km</p>
            </div>
          </div>

          <h2 className="font-oswald uppercase font-bold text-slag text-2xl mb-6">
            Local Package Pricing
          </h2>
          <PricingTable columns={["Vehicle", "Package", "Extra KM", "Extra Hour"]} rows={rows} />
        </div>
      </section>

      <section className="bg-slag text-ice py-16">
        <div className="container-edit">
          <h2 className="font-oswald uppercase font-bold text-2xl mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={localSightseeingFaqs} />
          <FaqSchema items={localSightseeingFaqs} />
        </div>
      </section>

      <BookingCta
        heading="Plan Your Local Sightseeing Trip"
        whatsappMessage="Hello, I would like to enquire about a local sightseeing cab package with Badiger Tours & Travels."
      />
    </>
  );
}
