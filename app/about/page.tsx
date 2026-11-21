import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPinned, Repeat2, Navigation2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import HighlightGrid from "@/components/ui/HighlightGrid";
import Reveal from "@/components/ui/Reveal";
import { vehicles } from "@/data/vehicles";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Badiger Tours & Travels offers cab and travel options from Bengaluru for local sightseeing, outstation round trips, one-way drops and destination journeys.",
};

const linkClass =
  "group/link inline-flex items-center gap-2 font-oswald uppercase font-semibold mt-8 hover:underline underline-offset-4";

export default function AboutPage() {
  return (
    <>
      <section className="bg-slag text-ice pt-28 pb-16">
        <div className="container-edit grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />
            <SectionLabel light>About Badiger</SectionLabel>
            <h1 className="heading-huge text-[clamp(2.5rem,7vw,6rem)] max-w-3xl">
              More Than
              <br />
              Getting There.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative w-full aspect-[887/946] border border-ice/20">
              <Image
                src="/images/about-us.jpeg"
                alt="Badiger Tours and Travels — Bengaluru"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-20">
        <div className="container-edit grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-lg sm:text-xl text-slag font-oswald uppercase leading-snug">
              Badiger Tours &amp; Travels offers cab and travel options from Bengaluru for local
              sightseeing, outstation round trips, one-way drops and destination journeys.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slag/75 text-sm sm:text-base">
              The brand aims to make travel enquiries and trip planning straightforward by providing
              vehicle choices and clearly presented tariffs. Whatever the trip — across the city or
              across the state — the goal is a simple, transparent way to get a ride confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slag text-ice py-20">
        <div className="container-edit">
          <Reveal>
            <SectionLabel light>Services Overview</SectionLabel>
            <h2 className="heading-huge text-[clamp(1.75rem,4vw,3rem)] mb-10">
              Local, Outstation &amp; One-Way Travel.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <HighlightGrid
              tone="light"
              className="sm:grid-cols-3 gap-8"
              items={[
                {
                  icon: MapPinned,
                  text: "Local sightseeing packages of 8 hours / 80 km for exploring Bengaluru.",
                },
                {
                  icon: Repeat2,
                  text: "Outstation round trips charged per km with a 300 km daily average and driver bata.",
                },
                {
                  icon: Navigation2,
                  text: "One-way drops for travelling to a destination in a single direction only.",
                },
              ]}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/services" className={`${linkClass} text-lichen`}>
              View All Services{" "}
              <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-20">
        <div className="container-edit">
          <Reveal>
            <SectionLabel>Vehicle Overview</SectionLabel>
            <h2 className="heading-huge text-slag text-[clamp(1.75rem,4vw,3rem)] mb-10">
              Four Vehicles To Choose From.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <Reveal key={v.slug} delay={i * 0.08}>
                <div className="relative h-56 rounded-lg overflow-hidden">
                  <Image src={v.image} alt={v.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slag/80 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-ice font-oswald uppercase font-bold">{v.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Link href="/fleet" className={`${linkClass} text-slag`}>
              Explore Our Fleet{" "}
              <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-lichen text-slag py-20">
        <div className="container-edit">
          <Reveal>
            <SectionLabel light>Travel Destinations</SectionLabel>
            <h2 className="heading-huge text-[clamp(1.75rem,4vw,3rem)] mb-8">
              Popular Routes From Bengaluru.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-4">
              {destinations.map((d) => (
                <ArrowFillButton
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  btnText={d.name}
                  size="compact"
                  variant="solidLight"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slag text-ice py-24 text-center">
        <div className="container-edit">
          <Reveal>
            <h2 className="heading-huge text-[clamp(2rem,6vw,4rem)] mb-6">Ready To Plan A Ride?</h2>
            <ArrowFillButton href="/contact" btnText="Plan Your Journey" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
