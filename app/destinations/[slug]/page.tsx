import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Route, CalendarDays, Sparkles, Car, Wallet, ShieldAlert } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import InfoPills from "@/components/ui/InfoPills";
import HighlightGrid from "@/components/ui/HighlightGrid";
import BookingCta from "@/components/ui/BookingCta";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";
import { destinations, getDestination } from "@/data/destinations";
import { vehicles } from "@/data/vehicles";

const cheapestVehicle = vehicles.find((v) => v.outstationRoundTrip)!;

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return {
    title: destination.seoH1,
    description: destination.blurb,
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  return (
    <>
      <section className="relative bg-slag text-ice min-h-[55vh] flex items-end">
        <Image src={destination.image} alt={destination.name} fill priority className="object-cover opacity-50" />
        <div className="relative z-10 container-edit pb-14 pt-28">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Destinations", href: "/destinations" },
              { label: destination.name, href: `/destinations/${destination.slug}` },
            ]}
          />
          <SectionLabel light>{destination.category}</SectionLabel>
          <h1 className="heading-huge text-[clamp(2rem,6vw,5rem)] max-w-3xl mb-5">{destination.seoH1}</h1>
          <InfoPills
            items={[
              { icon: CalendarDays, label: destination.duration },
              { icon: Route, label: destination.distanceFromBengaluru },
              { icon: Sparkles, label: destination.bestFor, accent: true },
            ]}
          />
        </div>
      </section>

      {/* TRIP PACKAGE PANEL */}
      <section className="bg-ice py-16">
        <div className="container-edit">
          <Reveal className="grid lg:grid-cols-[1fr_340px] gap-5 items-stretch">
            <div className="bg-white border border-stone/15 rounded-2xl p-7 sm:p-9">
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-5">Trip Snapshot</p>
              <div className="mb-8">
                <InfoPills
                  items={[
                    { icon: CalendarDays, label: destination.duration },
                    { icon: Route, label: destination.distanceFromBengaluru },
                    { icon: Sparkles, label: destination.bestFor, accent: true },
                  ]}
                />
              </div>
              <HighlightGrid
                items={[
                  { icon: Car, text: `Chauffeur-driven, air-conditioned ${cheapestVehicle.name} or similar` },
                  {
                    icon: Route,
                    text: `${cheapestVehicle.outstationRoundTrip?.dailyAverage} average on outstation routes`,
                  },
                  {
                    icon: Wallet,
                    text: `Driver bata from ${cheapestVehicle.outstationRoundTrip?.bata}, as per vehicle`,
                  },
                  { icon: ShieldAlert, text: "Toll, parking and state permits billed at actuals" },
                ]}
              />
            </div>

            <div className="bg-slag text-ice rounded-2xl p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <p className="font-oswald uppercase text-xs tracking-[0.25em] text-ice/60 mb-3">
                  Starting Cab Rate
                </p>
                <p className="font-oswald font-bold text-lichen text-4xl sm:text-5xl leading-none">
                  {cheapestVehicle.outstationRoundTrip?.rate}
                </p>
                <p className="text-ice/70 text-sm mt-3">Per km, outstation round trip</p>
              </div>
              <div className="mt-8 pt-6 border-t border-ice/15">
                <Badge shape="pill" className="bg-lichen text-slag px-4 py-2 text-xs">
                  + {cheapestVehicle.outstationRoundTrip?.bata} driver bata
                </Badge>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-edit grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h2 className="font-oswald uppercase font-bold text-slag text-2xl mb-4">About {destination.name}</h2>
            <p className="text-slag/75 text-sm sm:text-base">{destination.blurb}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-oswald uppercase font-bold text-slag text-2xl mb-4">Suggested Itinerary</h2>
            <ul className="space-y-3">
              {destination.itinerary.map((line) => (
                <li key={line} className="text-sm text-slag/75 border-l-2 border-lichen pl-4">
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-xs text-stone mt-4">
              This itinerary is a suggestion only. Hotels, meals and sightseeing tickets are not included
              in the cab fare.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TOP PLACES TO VISIT */}
      <section className="bg-ice py-16">
        <div className="container-edit">
          <Reveal>
            <h2 className="font-oswald uppercase font-bold text-slag text-2xl mb-8">
              Top Places To Visit In {destination.name}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {destination.placesToVisit.map((place, i) => (
              <Reveal key={place} delay={(i % 2) * 0.08}>
                <div className="flex items-center gap-4 bg-white border border-stone/15 rounded-lg px-5 py-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-slag text-lichen flex items-center justify-center font-oswald font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="font-oswald uppercase font-semibold text-slag flex items-center gap-2">
                    <MapPin size={14} className="text-moss shrink-0" /> {place}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slag text-ice py-16">
        <div className="container-edit">
          <Reveal>
            <h2 className="font-oswald uppercase font-bold text-2xl mb-8">Vehicle Options</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vehicles.map((v, i) => (
              <Reveal key={v.slug} delay={i * 0.08}>
                <Link
                  href={`/fleet#${v.slug}`}
                  className="relative h-44 group overflow-hidden block rounded-lg"
                >
                  <Image src={v.image} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slag/90 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-oswald uppercase font-bold">{v.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCta
        heading={`Plan Your Trip To ${destination.name}`}
        whatsappMessage={`Hello, I would like to enquire about a trip to ${destination.name} with Badiger Tours & Travels.`}
      />
    </>
  );
}
