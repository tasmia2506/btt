import { business } from "@/config/business";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: business.name,
    areaServed: {
      "@type": "City",
      name: `${business.city} (${business.cityAlt})`,
    },
    telephone: business.phoneHref.replace("tel:", ""),
    address: business.addresses.map((a) => ({
      "@type": "PostalAddress",
      streetAddress: a.lines.join(", "),
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: "IN",
    })),
    sameAs: [business.googleBusinessUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
