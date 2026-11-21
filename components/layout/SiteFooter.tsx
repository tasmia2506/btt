import Link from "next/link";
import { business, buildWhatsappUrl, defaultEnquiryMessage } from "@/config/business";
import { services } from "@/data/services";
import { destinations } from "@/data/destinations";
import ArrowFillButton from "@/components/ui/arrow-fill-button";

export default function SiteFooter() {
  return (
    <footer className="bg-slag text-ice">
      <div className="container-edit py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-oswald uppercase font-bold text-2xl">Badiger</p>
          <p className="text-xs tracking-[0.25em] uppercase text-lichen mb-4">Tours &amp; Travels</p>
          <p className="text-sm text-ice/70 mb-6">
            Local sightseeing, outstation round trips and one-way cab drops from Bengaluru.
          </p>
          <ArrowFillButton
            href={buildWhatsappUrl(defaultEnquiryMessage())}
            btnText="Chat on WhatsApp"
            size="compact"
          />
        </div>

        <div>
          <p className="font-oswald uppercase font-semibold text-sm tracking-wide mb-4 text-lichen">
            Services
          </p>
          <ul className="space-y-2 text-sm text-ice/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-lichen">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tariffs" className="hover:text-lichen">
                Tariffs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-oswald uppercase font-semibold text-sm tracking-wide mb-4 text-lichen">
            Destinations
          </p>
          <ul className="space-y-2 text-sm text-ice/80">
            {destinations.map((d) => (
              <li key={d.slug}>
                <Link href={`/destinations/${d.slug}`} className="hover:text-lichen">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-oswald uppercase font-semibold text-sm tracking-wide mb-4 text-lichen">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-ice/80">
            <li>
              <a href={business.phoneHref} className="hover:text-lichen">
                {business.phoneDisplay}
              </a>
            </li>
            {business.addresses.map((a) => (
              <li key={a.label}>
                <span className="block text-ice/50 text-xs uppercase">{a.label}</span>
                {a.lines.join(", ")}
              </li>
            ))}
            <li>
              <a
                href={business.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lichen underline"
              >
                View on Google Business Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black/20">
        <div className="container-edit py-6 text-xs text-ice/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
            <Link href="/privacy" className="hover:text-lichen ml-3 underline">
              Privacy Policy
            </Link>
          </p>
          <p>Enquiries only — bookings are confirmed by our team on WhatsApp or call.</p>
        </div>
        <div className="container-edit pb-6 text-xs text-ice/40">
          <p>
            Designed and developed by{" "}
            <a
              href="https://naazailabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lichen underline"
            >
              Naaz AI Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
