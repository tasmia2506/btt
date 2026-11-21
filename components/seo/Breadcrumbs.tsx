import Link from "next/link";
import { business } from "@/config/business";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${business.siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-ice/60 mb-4">
        {items.map((item, i) => (
          <span key={item.href}>
            {i > 0 && " / "}
            {i === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-lichen">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
