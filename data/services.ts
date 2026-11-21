export type ServiceSummary = {
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  features: string[];
  cta: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "local-sightseeing",
    title: "Local Sightseeing",
    shortLabel: "8 HOURS / 80 KM",
    description:
      "A single vehicle and driver for a full day within Bengaluru, billed as one package with a fixed extra-km and extra-hour rate.",
    features: ["8-hour, 80 km package", "Extra km and extra hour billed separately"],
    cta: "Explore Local Rides",
  },
  {
    slug: "outstation-round-trip",
    title: "Outstation Round Trips",
    shortLabel: "RETURN JOURNEYS",
    description:
      "Per-km pricing on a 300 km/day average, with driver bata and tolls billed at actuals for trips out of the city and back.",
    features: ["300 km/day average", "Toll and permit billed at actuals"],
    cta: "Explore Round Trips",
  },
  {
    slug: "one-way-drop",
    title: "One-Way Drops",
    shortLabel: "ONE DIRECTION",
    description:
      "Charged for the outward leg only — no return fare — for airport runs and single-direction trips to another city.",
    features: ["Outward leg only, no return fare", "Suited to airport and one-city drops"],
    cta: "Explore One-Way Drops",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
