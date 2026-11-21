import Image from "next/image";
import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import BookingCta from "@/components/ui/BookingCta";
import Reveal from "@/components/ui/Reveal";
import { vehicles } from "@/data/vehicles";
import { buildWhatsappUrl } from "@/config/business";

export const metadata: Metadata = {
  title: "Our Fleet — Dzire, Etios, Ertiga, Innova Crysta",
  description:
    "Choose your travel companion from Badiger Tours & Travels: Dzire, Etios, Ertiga and Innova Crysta, with local, outstation and one-way tariffs.",
};

export default function FleetPage() {
  return (
    <>
      <section className="bg-slag text-ice pt-28 pb-16">
        <div className="container-edit">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Fleet", href: "/fleet" }]} />
            <SectionLabel light>Our Fleet</SectionLabel>
            <h1 className="heading-huge text-[clamp(2.25rem,6vw,5.5rem)] max-w-3xl">
              Choose Your
              <br />
              Travel Companion.
            </h1>
          </Reveal>
        </div>
      </section>

      {vehicles.map((v, i) => (
        <section
          id={v.slug}
          key={v.slug}
          className={`py-20 scroll-mt-24 ${i % 2 === 0 ? "bg-ice" : "bg-white"}`}
        >
          <div className="container-edit grid lg:grid-cols-2 gap-10 items-center">
            <Reveal className={`relative h-[300px] sm:h-[400px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={v.image} alt={`${v.name} ${v.category}`} fill className="object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-lichen mb-2">
                {v.category}
              </p>
              <h2 className="heading-huge text-slag text-[clamp(2.5rem,6vw,4.5rem)] mb-6">{v.name}</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slag text-ice p-4">
                  <p className="font-oswald uppercase text-[11px] tracking-wide text-ice/60 mb-1">
                    Local Package (8 hr / 80 km)
                  </p>
                  {v.local ? (
                    <>
                      <p className="font-oswald text-xl font-bold text-lichen">{v.local.package}</p>
                      <p className="text-xs text-ice/70 mt-1">
                        Extra km {v.local.extraKm} · Extra hour {v.local.extraHour}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-ice/70">Contact for confirmation.</p>
                  )}
                </div>

                <div className="bg-slag text-ice p-4">
                  <p className="font-oswald uppercase text-[11px] tracking-wide text-ice/60 mb-1">
                    Outstation Round Trip
                  </p>
                  {v.outstationRoundTrip ? (
                    <>
                      <p className="font-oswald text-xl font-bold text-lichen">{v.outstationRoundTrip.rate}</p>
                      <p className="text-xs text-ice/70 mt-1">
                        {v.outstationRoundTrip.dailyAverage} · Bata {v.outstationRoundTrip.bata}
                        {v.outstationRoundTrip.nightBata ? ` · Night bata ${v.outstationRoundTrip.nightBata}` : ""}
                        {v.outstationRoundTrip.dutyTiming ? ` · Duty ${v.outstationRoundTrip.dutyTiming}` : ""}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-ice/70">Contact for confirmation.</p>
                  )}
                </div>

                <div className="bg-slag text-ice p-4 sm:col-span-2">
                  <p className="font-oswald uppercase text-[11px] tracking-wide text-ice/60 mb-1">
                    One-Way Drop
                  </p>
                  {v.oneWayDrop ? (
                    <p className="font-oswald text-xl font-bold text-lichen">
                      {v.oneWayDrop.rate}{" "}
                      <span className="text-xs text-ice/70 font-sans font-normal">
                        · Bata {v.oneWayDrop.bata}
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-ice/70">Contact for confirmation.</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <ArrowFillButton href="/contact" btnText="Book This Vehicle" size="compact" />
                <ArrowFillButton
                  href={buildWhatsappUrl(
                    `Hello, I would like to enquire about booking the ${v.name} with Badiger Tours & Travels.`
                  )}
                  btnText="Ask on WhatsApp"
                  size="compact"
                  variant="outlineDark"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <BookingCta
        heading="Ready To Book Your Vehicle?"
        subtitle="Toll, parking and state permit charges are extra on outstation and one-way trips, based on actual bills and slips. See the full breakdown on the tariffs page."
        whatsappMessage="Hello, I would like to enquire about booking a vehicle with Badiger Tours & Travels."
        secondaryHref="/tariffs"
        secondaryText="View All Tariffs"
      />
    </>
  );
}
