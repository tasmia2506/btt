import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Local, Outstation & One-Way Cabs",
  description:
    "Local sightseeing, outstation round trips and one-way drops from Bengaluru with Badiger Tours & Travels.",
};

const images: Record<string, string> = {
  "local-sightseeing": "/images/local-sightseeing-2.jpeg",
  "outstation-round-trip": "/images/outstation-round-trip-2.jpeg",
  "one-way-drop": "/images/one-way-drop-2.jpeg",
};

const imagePosition: Record<string, string> = {
  "local-sightseeing": "object-top",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-slag text-ice min-h-[40vh] flex items-end">
        <Image
          src="/images/outstation-round-trip-2.jpeg"
          alt="Badiger Tours & Travels services"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 container-edit pb-16 pt-28">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
          <SectionLabel light>Our Services</SectionLabel>
          <h1 className="heading-huge text-[clamp(2.25rem,6vw,5.5rem)] max-w-3xl">
            Every Journey.
            <br />
            One Place To Start.
          </h1>
        </div>
      </section>

      <section className="bg-ice py-16">
        <div className="container-edit flex flex-col gap-10">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`group grid lg:grid-cols-2 gap-0 border border-stone/40 bg-white overflow-hidden ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-[280px] lg:h-auto">
                <Image
                  src={images[s.slug]}
                  alt={s.title}
                  fill
                  className={`object-cover ${imagePosition[s.slug] ?? "object-center"} group-hover:scale-105 transition-transform duration-700`}
                />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-3">
                  {s.shortLabel}
                </p>
                <h2 className="heading-huge text-slag text-[clamp(1.75rem,4vw,3rem)] mb-4">{s.title}</h2>
                <p className="text-slag/70 text-sm max-w-md mb-6">{s.description}</p>
                <span className="inline-flex items-center gap-2 font-oswald uppercase font-semibold text-slag">
                  {s.cta} <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
