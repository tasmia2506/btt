import Image from "next/image";
import type { Metadata } from "next";
import { Route, Car, Wallet, ShieldAlert, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PricingTable from "@/components/pricing/PricingTable";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import InfoPills from "@/components/ui/InfoPills";
import HighlightGrid from "@/components/ui/HighlightGrid";
import BookingCta from "@/components/ui/BookingCta";
import FaqSection from "@/components/ui/FaqSection";
import { outstationFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Outstation Cab Services From Bangalore for Round Trips",
  description:
    "Make your next road trip from Bengaluru with Dzire, Etios, Ertiga or Innova Crysta. Transparent per-km outstation round-trip rates.",
};

const rows = [
  { Vehicle: "Dzire / Etios", Rate: "₹12/km", "Daily Average": "300 km", Bata: "₹400/day" },
  { Vehicle: "Ertiga", Rate: "₹16/km", "Daily Average": "300 km", Bata: "₹400/day (6 AM – 10 PM)" },
  { Vehicle: "Innova Crysta", Rate: "₹22/km", "Daily Average": "300 km", Bata: "₹500/day · Night ₹500" },
];

export default function OutstationRoundTripPage() {
  return (
    <>
      <section className="relative bg-slag text-ice min-h-[50vh] flex items-end">
        <Image
          src="/images/outstation-round-trip-2.jpeg"
          alt="Highway curving through green hills"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 container-edit pb-14 pt-28">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Outstation Round Trip", href: "/services/outstation-round-trip" },
            ]}
          />
          <SectionLabel light>Return Journeys</SectionLabel>
          <h1 className="heading-huge text-[clamp(2rem,5.5vw,4.5rem)] max-w-3xl mb-5">
            Outstation Cab Services From Bangalore For Round Trips
          </h1>
          <p className="text-ice/75 max-w-xl mt-4 text-sm sm:text-base mb-5">
            Make your next road trip from Bengaluru with a vehicle that suits your journey.
          </p>
          <InfoPills
            items={[
              { icon: Route, label: "300 KM/Day Average" },
              { icon: Clock, label: "Multi-Day Round Trips" },
              { icon: Car, label: "Starting ₹12/km", accent: true },
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
                  { icon: Route, text: "300 km/day is a daily average, not an all-inclusive package" },
                  { icon: ShieldAlert, text: "Toll, parking and state permits billed at actuals" },
                  { icon: Clock, text: "Night driving (10 PM – 6 AM) attracts additional driver bata" },
                  { icon: Wallet, text: "Night bata for Dzire, Etios and Ertiga — please confirm with us" },
                ]}
              />
            </div>
            <div className="bg-slag text-ice rounded-2xl p-7 sm:p-9 flex flex-col justify-center">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-ice/60 mb-3">
                Starting Cab Rate
              </p>
              <p className="font-oswald font-bold text-lichen text-4xl leading-none">₹12/km</p>
              <p className="text-ice/70 text-sm mt-3">+ ₹400/day driver bata</p>
            </div>
          </div>

          <h2 className="font-oswald uppercase font-bold text-slag text-2xl mb-6">
            Outstation Round-Trip Pricing
          </h2>
          <PricingTable columns={["Vehicle", "Rate", "Daily Average", "Bata"]} rows={rows} />
        </div>
      </section>

      <section className="bg-slag text-ice py-16">
        <div className="container-edit">
          <FaqSection
            heading="Frequently Asked Questions"
            subtitle="What travellers usually ask about outstation round trips. If yours isn't here, message us directly."
            items={outstationFaqs}
            whatsappMessage="Hello, I have a question about an outstation round trip with Badiger Tours & Travels."
            tone="light"
          />
        </div>
      </section>

      <BookingCta
        heading="Plan Your Outstation Round Trip"
        whatsappMessage="Hello, I would like to enquire about an outstation round trip with Badiger Tours & Travels."
      />
    </>
  );
}
