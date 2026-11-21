export type Vehicle = {
  slug: string;
  name: string;
  category: string;
  seats: string;
  image: string;
  description: string;
  features: string[];
  local: {
    package: string;
    extraKm: string;
    extraHour: string;
  } | null;
  outstationRoundTrip: {
    rate: string;
    dailyAverage: string;
    bata: string;
    nightBata?: string;
    dutyTiming?: string;
  } | null;
  oneWayDrop: {
    rate: string;
    bata: string;
  } | null;
  contactForConfirmation?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    slug: "dzire",
    name: "Dzire",
    category: "Sedan",
    seats: "4+1",
    image: "/images/car1.jpeg",
    description:
      "A compact, fuel-efficient sedan suited to everyday local trips and outstation drives alike.",
    features: ["Air conditioning", "Chauffeur-driven", "Clean, sanitized interior"],
    local: { package: "₹2,200 — 8 hrs / 80 km", extraKm: "₹16/km", extraHour: "₹160/hour" },
    outstationRoundTrip: { rate: "₹12/km", dailyAverage: "300 km/day", bata: "₹400/day" },
    oneWayDrop: { rate: "Starting ₹15/km", bata: "₹500" },
  },
  {
    slug: "etios",
    name: "Etios",
    category: "Sedan",
    seats: "4+1",
    image: "/images/car2.jpeg",
    description: "A roomy, dependable sedan for outstation round trips with a steady highway ride.",
    features: ["Air conditioning", "Chauffeur-driven", "Clean, sanitized interior"],
    local: null,
    outstationRoundTrip: { rate: "₹12/km", dailyAverage: "300 km/day", bata: "₹400/day" },
    oneWayDrop: null,
    contactForConfirmation: true,
  },
  {
    slug: "ertiga",
    name: "Ertiga",
    category: "MPV",
    seats: "6+1",
    image: "/images/car3.jpeg",
    description: "A 6-seater MPV with extra luggage room, built for family and group travel.",
    features: ["Air conditioning", "Chauffeur-driven", "Extra boot space"],
    local: { package: "₹3,000 — 8 hrs / 80 km", extraKm: "₹20/km", extraHour: "₹200/hour" },
    outstationRoundTrip: {
      rate: "₹16/km",
      dailyAverage: "300 km/day",
      bata: "₹400/day",
      dutyTiming: "6 AM – 10 PM",
    },
    oneWayDrop: { rate: "₹20/km", bata: "₹400" },
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    category: "Premium MPV",
    seats: "7+1",
    image: "/images/car4.jpeg",
    description: "Our premium 7-seater — the most comfortable option for longer outstation journeys.",
    features: ["Air conditioning", "Chauffeur-driven", "Premium ride comfort"],
    local: { package: "₹4,000 — 8 hrs / 80 km", extraKm: "₹23/km", extraHour: "₹230/hour" },
    outstationRoundTrip: {
      rate: "₹22/km",
      dailyAverage: "300 km/day",
      bata: "₹500/day",
      nightBata: "₹500",
    },
    oneWayDrop: { rate: "₹25/km", bata: "₹500" },
  },
];

export function getVehicle(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}
