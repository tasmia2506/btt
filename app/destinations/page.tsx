import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations — Ooty, Mysore, Coonoor, Coorg, Munnar",
  description:
    "Plan a trip from Bengaluru to Ooty, Mysore, Coonoor, Coorg or Munnar with Badiger Tours & Travels.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="bg-slag text-ice pt-28 pb-16">
        <div className="container-edit">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }]} />
          <SectionLabel light>Destinations</SectionLabel>
          <h1 className="heading-huge text-[clamp(2.25rem,6vw,5.5rem)] max-w-3xl">
            The Road Is Calling.
          </h1>
        </div>
      </section>

      <section className="bg-ice py-16">
        <div className="container-edit grid sm:grid-cols-2 gap-6">
          {destinations.map((d, i) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative h-[380px] overflow-hidden block"
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slag/90 via-slag/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="font-oswald text-ice/70 text-xs uppercase tracking-[0.25em] mb-2">
                  0{i + 1} — {d.duration}
                </p>
                <h2 className="heading-huge text-ice text-4xl mb-3">{d.name}</h2>
                <p className="text-ice/80 text-sm max-w-sm mb-4">{d.blurb}</p>
                <span className="inline-flex items-center gap-2 font-oswald uppercase font-semibold text-lichen">
                  Plan Your Trip <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
