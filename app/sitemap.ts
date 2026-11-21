import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/fleet",
    "/services",
    "/destinations",
    "/tariffs",
    "/contact",
    "/privacy",
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const destinationRoutes = destinations.map((d) => `/destinations/${d.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...destinationRoutes].map((path) => ({
    url: `${business.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
