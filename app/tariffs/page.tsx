import Image from "next/image";
import type { Metadata } from "next";
import { Clock, Route, ArrowRightLeft, ShieldAlert, Moon, Car } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PricingTable from "@/components/pricing/PricingTable";
import InfoPills from "@/components/ui/InfoPills";
import HighlightGrid from "@/components/ui/HighlightGrid";
import BookingCta from "@/components/ui/BookingCta";
import Reveal from "@/components/ui/Reveal";
import { vehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Cab Tariffs & Taxi Rates in Bangalore",
  description:
    "Transparent local package, outstation round-trip and one-way drop tariffs for Dzire, Etios, Ertiga and Innova Crysta with Badiger Tours & Travels.",
};

export default function TariffsPage() {
  const localRows = vehicles.map((v) => ({
    Vehicle: v.name,
    Package: v.local ? v.local.package.split(" — ")[0] : "Contact for confirmation",
    "Extra KM": v.local ? v.local.extraKm : "-",
    "Extra Hour": v.local ? v.local.extraHour : "-",
  }));

  const outstationRows = vehicles.map((v) => ({
    Vehicle: v.name,
    Rate: v.outstationRoundTrip ? v.outstationRoundTrip.rate : "Contact for confirmation",
    "Daily Avg": v.outstationRoundTrip ? v.outstationRoundTrip.dailyAverage : "-",
    Bata: v.outstationRoundTrip
      ? `${v.outstationRoundTrip.bata}${v.outstationRoundTrip.nightBata ? " · Night " + v.outstationRoundTrip.nightBata : ""}`
      : "-",
  }));

  const oneWayRows = vehicles.map((v) => ({
    Vehicle: v.name,
    Rate: v.oneWayDrop ? v.oneWayDrop.rate : "Contact for confirmation",
    Bata: v.oneWayDrop ? v.oneWayDrop.bata : "-",
  }));

  return (
    <>
      <section className="bg-slag text-ice pt-28 pb-16">
        <div className="container-edit grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tariffs", href: "/tariffs" }]} />
            <SectionLabel light>Tariffs</SectionLabel>
            <h1 className="heading-huge text-[clamp(2.25rem,6vw,5.5rem)] max-w-3xl mb-5">
              Cab Tariffs &amp; Taxi Rates In Bangalore.
            </h1>
            <InfoPills
              items={[
                { icon: Clock, label: "Local Packages" },
                { icon: Route, label: "Outstation Round Trips" },
                { icon: ArrowRightLeft, label: "One-Way Drops", accent: true },
              ]}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative w-full aspect-[1182/887] border border-ice/20">
              <Image
                src="/images/tariffs.jpeg"
                alt="Badiger Tours and Travels cab service poster"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-16">
        <div className="container-edit">
          <Reveal className="grid lg:grid-cols-[1fr_300px] gap-5 items-stretch mb-10">
            <div className="bg-white border border-stone/15 rounded-2xl p-7 sm:p-9">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-5">
                Good To Know Before Booking
              </p>
              <HighlightGrid
                items={[
                  { icon: ShieldAlert, text: "Toll, parking and state permits are extra, based on actual bills" },
                  { icon: Moon, text: "Night driving (10 PM – 6 AM) attracts additional driver bata" },
                  { icon: Car, text: "Ertiga duty timing is 6 AM – 10 PM for outstation round trips" },
                  {
                    icon: Route,
                    text: "Night bata for Dzire, Etios and Ertiga not separately specified — confirm at booking",
                  },
                  { icon: Car, text: "Etios local package and one-way drop rates not separately supplied" },
                ]}
              />
            </div>
            <div className="bg-slag text-ice rounded-2xl p-7 sm:p-9 flex flex-col justify-center">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-ice/60 mb-3">
                Starting Cab Rate
              </p>
              <p className="font-oswald font-bold text-lichen text-4xl leading-none">₹12/km</p>
              <p className="text-ice/70 text-sm mt-3">Outstation round trip, Dzire / Etios</p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-oswald uppercase font-bold text-slag text-3xl mb-2">01 / Local Packages</h2>
            <p className="text-sm text-slag/70 mb-6">8 hours / 80 km, extra km and extra hour billed above the limit.</p>
            <PricingTable columns={["Vehicle", "Package", "Extra KM", "Extra Hour"]} rows={localRows} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-edit">
          <Reveal>
            <h2 className="font-oswald uppercase font-bold text-slag text-3xl mb-2">02 / Outstation Round Trips</h2>
            <p className="text-sm text-slag/70 mb-6">300 km/day average. Not an all-inclusive package.</p>
            <PricingTable columns={["Vehicle", "Rate", "Daily Avg", "Bata"]} rows={outstationRows} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-16">
        <div className="container-edit">
          <Reveal>
            <h2 className="font-oswald uppercase font-bold text-slag text-3xl mb-2">03 / One-Way Drops</h2>
            <p className="text-sm text-slag/70 mb-6">One direction only — not a return trip.</p>
            <PricingTable columns={["Vehicle", "Rate", "Bata"]} rows={oneWayRows} />
          </Reveal>
        </div>
      </section>

      <BookingCta
        heading="Have a Trip in Mind?"
        whatsappMessage="Hello, I would like to enquire about cab tariffs with Badiger Tours & Travels."
      />
    </>
  );
}
