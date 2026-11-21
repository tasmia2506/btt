import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned, Repeat2, Navigation2, Clock } from "lucide-react";
import FaqSection from "@/components/ui/FaqSection";
import FleetFilter from "@/components/fleet/FleetFilter";
import HowItWorksTimeline from "@/components/ui/HowItWorksTimeline";
import ReviewsCarousel from "@/components/ui/ReviewsCarousel";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { business, buildWhatsappUrl, defaultEnquiryMessage } from "@/config/business";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";

const trustPoints = [
  { title: "Verified Drivers", desc: "Chauffeur-driven, not self-drive" },
  { title: "Transparent Pricing", desc: "Per-km rates, no hidden fees" },
  { title: "Well-Maintained Fleet", desc: "Dzire, Etios, Ertiga, Innova Crysta" },
  { title: "Custom Itineraries", desc: "Local, outstation and one-way trips" },
];

const serviceIcons: Record<string, typeof MapPinned> = {
  "local-sightseeing": MapPinned,
  "outstation-round-trip": Repeat2,
  "one-way-drop": Navigation2,
};

const serviceImages: Record<string, string> = {
  "local-sightseeing": "/images/local-sightseeing-2.jpeg",
  "outstation-round-trip": "/images/outstation-round-trip-2.jpeg",
  "one-way-drop": "/images/one-way-drop-2.jpeg",
};

const serviceImagePosition: Record<string, string> = {
  "local-sightseeing": "object-top",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-slag text-ice min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            src="/videos/landing-page.mp4"
            poster="/videos/landing-page-poster.jpg"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slag/70 via-slag/35 to-transparent" />
        </div>
        <div className="relative z-10 container-edit pt-28 pb-16">
          <Badge variant="outline" shape="pill" className="border-ice/30 text-ice/90 gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lichen" />
            Local, Outstation &amp; One-Way Cabs
          </Badge>
          <h1 className="font-oswald uppercase font-bold text-[clamp(2rem,6vw,3.75rem)] leading-tight max-w-2xl">
            Your Journey.
            <br />
            Our <span className="bg-gradient-to-r from-lichen to-moss bg-clip-text text-transparent">Priority.</span>
          </h1>
          <p className="font-serif italic text-lichen text-lg sm:text-xl mt-4 max-w-xl">
            Clear pricing and a driver who shows up — every trip, every time.
          </p>
          <p className="max-w-xl text-ice/80 mt-4 text-sm sm:text-base">
            Transparent, chauffeur-driven cab service for local sightseeing, outstation round trips and
            one-way drops from Bengaluru. Dzire / Etios from <strong className="text-lichen">₹12/km</strong>,
            Ertiga from <strong className="text-lichen">₹16/km</strong>, Innova Crysta from{" "}
            <strong className="text-lichen">₹22/km</strong> on outstation trips.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <ArrowFillButton href="/contact" btnText="Book Your Ride" size="compact" />
            <ArrowFillButton href="/fleet" btnText="Explore Our Fleet" variant="outlineLight" size="compact" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-slag overflow-hidden">
        <div className="bg-lichen py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max">
            {[...trustPoints, ...trustPoints].map((t, i) => (
              <div key={`${t.title}-${i}`} className="flex items-center gap-3 px-8 sm:px-10 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-slag shrink-0" />
                <div>
                  <p className="font-oswald uppercase font-bold text-slag text-sm sm:text-base whitespace-nowrap">
                    {t.title}
                  </p>
                  <p className="text-xs text-slag/70 mt-1 whitespace-nowrap">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="bg-ice py-20" id="fleet">
        <div className="container-edit">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
            <div>
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-2">
                Well-Maintained Fleet
              </p>
              <h2 className="font-oswald uppercase font-bold text-slag text-2xl sm:text-4xl">
                Which Vehicle Suits <span className="text-moss">Your Trip?</span>
              </h2>
            </div>
            <ArrowFillButton href="/fleet" btnText="View Full Fleet" size="compact" variant="solidDark" />
          </div>
          <p className="text-sm text-slag/70 max-w-2xl mb-10">
            Choose from sedans for everyday trips or an MPV for more space — every vehicle comes with a
            driver and clearly published local, outstation and one-way rates.
          </p>
          <FleetFilter />
        </div>
      </section>

      {/* FEATURE BLOCK — OUTSTATION & ONE-WAY */}
      <section className="bg-slag text-ice py-20">
        <div className="container-edit grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-oswald uppercase font-bold text-[clamp(1.75rem,4vw,3rem)] mb-5">
              Outstation &amp; One-Way, Priced Upfront.
            </h2>
            <p className="text-ice/75 max-w-md mb-6 text-sm">
              Whether it&apos;s a round trip to a hill station or a one-way drop to the airport or another
              city, every outstation trip runs on a 300 km/day average with a published per-km rate and
              driver bata.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Per-km outstation rates for every vehicle",
                "One-way drops charged for one direction only",
                "Toll, parking and state permit billed at actuals",
              ].map((line) => (
                <li key={line} className="border-l-2 border-lichen pl-4 text-sm text-ice/80">
                  {line}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <ArrowFillButton href="/tariffs" btnText="View All Tariffs" size="compact" />
              <ArrowFillButton
                href="/services/outstation-round-trip"
                btnText="Outstation Details"
                size="compact"
                variant="outlineLight"
              />
            </div>
          </div>

          <div className="relative w-full aspect-[1182/887] border border-ice/20">
            <Image
              src="/images/tariffs.jpeg"
              alt="Badiger Tours and Travels cab service poster"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT / COMPANY BLOCK */}
      <section className="bg-white py-20">
        <div className="container-edit grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[887/946] order-2 lg:order-1 border border-stone/20">
            <Image
              src="/images/about-us.jpeg"
              alt="Badiger Tours and Travels — Bengaluru"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-oswald uppercase font-bold text-slag text-[clamp(1.75rem,4vw,3rem)] mb-5">
              A Cab &amp; Travel Partner Based In Bengaluru.
            </h2>
            <p className="text-slag/70 max-w-md mb-6 text-sm">
              Badiger Tours &amp; Travels offers cab and travel options from Bengaluru for local
              sightseeing, outstation round trips, one-way drops and destination journeys — with vehicle
              choices and clearly presented tariffs.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Transparent per-km rate sheets, no hidden costs",
                "Chauffeur-driven sedans and MPVs",
                "Local, outstation and one-way trips planned end to end",
              ].map((line) => (
                <li key={line} className="border-l-2 border-moss pl-4 text-sm text-slag/75">
                  {line}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <ArrowFillButton
                href="/about"
                btnText="Read Our Full Story"
                size="compact"
                variant="accentDark"
              />
              <ArrowFillButton
                href={buildWhatsappUrl(defaultEnquiryMessage())}
                btnText="Speak With Our Team"
                size="compact"
                variant="outlineDark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ice py-20" id="services">
        <div className="container-edit">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
            <div>
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-2">
                Tailored Transportation
              </p>
              <h2 className="font-oswald uppercase font-bold text-slag text-2xl sm:text-4xl">
                Travel Services <span className="text-moss">Built Around You.</span>
              </h2>
            </div>
            <ArrowFillButton href="/services" btnText="Explore All Services" size="compact" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug] ?? MapPinned;
              return (
                <Card key={s.slug} className="rounded-lg py-0 hover:border-lichen transition-colors group">
                  <div className="relative h-56 sm:h-64">
                    <Image
                      src={serviceImages[s.slug]}
                      alt={s.title}
                      fill
                      className={`object-cover ${serviceImagePosition[s.slug] ?? "object-center"} group-hover:scale-105 transition-transform duration-700`}
                    />
                    <span className="absolute left-3 top-3 w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <Icon size={18} className="text-moss" />
                    </span>
                    <Badge variant="secondary" className="absolute left-3 bottom-3">
                      {s.shortLabel}
                    </Badge>
                  </div>
                  <CardContent className="px-7 py-7">
                    <p className="font-oswald text-xs text-stone mb-2">0{i + 1} —</p>
                    <h3 className="font-oswald uppercase font-bold text-slag text-xl mb-3">{s.title}</h3>
                    <p className="text-sm text-slag/70 mb-4">{s.description}</p>
                    <ul className="space-y-1.5 mb-6 text-xs text-slag/70">
                      {s.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-moss shrink-0" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 font-oswald uppercase text-xs font-semibold text-slag group-hover:text-moss"
                      >
                        Learn More <ArrowRight size={12} />
                      </Link>
                      <ArrowFillButton
                        href={buildWhatsappUrl(
                          `Hello, I would like a quote for ${s.title} with Badiger Tours & Travels.`
                        )}
                        btnText="Get Quote"
                        size="compact"
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slag text-ice py-20">
        <div className="container-edit text-center">
          <h2 className="font-oswald uppercase font-bold text-2xl sm:text-4xl mb-14">
            Book Your Trip In Three Steps.
          </h2>
          <HowItWorksTimeline />
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-ice py-20" id="destinations">
        <div className="container-edit">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-oswald uppercase text-xs tracking-[0.25em] text-moss mb-2">
                Popular Getaways
              </p>
              <h2 className="font-oswald uppercase font-bold text-slag text-2xl sm:text-4xl">
                Where Will You Go <span className="text-moss">Next?</span>
              </h2>
            </div>
            <ArrowFillButton href="/destinations" btnText="View All Destinations" size="compact" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="group relative block h-80 overflow-hidden rounded-lg">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slag/90 via-slag/20 to-transparent" />
                <Badge variant="secondary" className="absolute left-3 top-3">
                  {d.category}
                </Badge>
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <h3 className="font-oswald uppercase font-bold text-ice text-lg mb-1">{d.name}</h3>
                  <p className="text-xs text-ice/75 mb-3 line-clamp-2">{d.blurb}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-ice/70">
                      <Clock size={12} /> {d.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 font-oswald uppercase text-[11px] font-semibold text-lichen">
                      Enquire <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-slag text-ice py-20" id="reviews">
        <div className="container-edit">
          <ReviewsCarousel
            reviews={reviews}
            header={
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <p className="font-oswald uppercase text-xs tracking-[0.25em] text-lichen mb-2">
                    What Riders Say
                  </p>
                  <h2 className="font-oswald uppercase font-bold text-2xl sm:text-4xl">
                    Trusted By <span className="text-lichen">Bengaluru Travelers.</span>
                  </h2>
                </div>
                <ArrowFillButton
                  href={business.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  btnText="Read Reviews on Google"
                  size="compact"
                  variant="outlineLight"
                />
              </div>
            }
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20" id="faq">
        <div className="container-edit">
          <FaqSection
            heading="Common Questions, Answered."
            subtitle="What travellers usually ask before booking. If yours isn't here, message us and we'll answer directly."
            items={homeFaqs}
            whatsappMessage="Hello, I have a question before booking with Badiger Tours & Travels."
            tone="dark"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-slag text-ice py-24">
        <Image
          src="/images/cta.jpeg"
          alt="Bengaluru landmarks illustration"
          fill
          className="object-cover opacity-35"
        />
        <div className="relative z-10 container-edit text-center">
          <h2 className="font-oswald uppercase font-bold text-[clamp(1.75rem,5vw,3.5rem)] mb-4">
            Your Next Journey Is One Message Away.
          </h2>
          <p className="text-ice/80 max-w-md mx-auto mb-8 text-sm">
            Tell us where you&apos;re headed — we&apos;ll get back with a transparent quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ArrowFillButton href="/contact" btnText="Book Your Ride" size="compact" />
            <ArrowFillButton
              href={buildWhatsappUrl(defaultEnquiryMessage())}
              btnText="Chat on WhatsApp"
              variant="outlineLight"
              size="compact"
            />
          </div>
        </div>
      </section>
    </>
  );
}
