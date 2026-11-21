export type Destination = {
  slug: string;
  name: string;
  category: string;
  duration: string;
  distanceFromBengaluru: string;
  bestFor: string;
  image: string;
  blurb: string;
  itinerary: string[];
  placesToVisit: string[];
  seoH1: string;
};

export const destinations: Destination[] = [
  {
    slug: "ooty",
    name: "Ooty",
    category: "Hill Station",
    duration: "3 days",
    distanceFromBengaluru: "~270 km (approx. 6–7 hrs drive)",
    bestFor: "Tea Gardens & Cool Weather",
    image: "/images/Ooty.jpeg",
    blurb:
      "The Nilgiris' best-known hill station — tea estates, cool air and winding ghat roads from Bengaluru.",
    itinerary: [
      "Day 1: Drive from Bengaluru to Ooty, check in, evening at leisure.",
      "Day 2: Local sightseeing in and around Ooty.",
      "Day 3: Return drive to Bengaluru.",
    ],
    placesToVisit: ["Ooty Lake", "Government Botanical Garden", "Doddabetta Peak", "Rose Garden"],
    seoH1: "Bangalore to Ooty Cab Service — Plan Your 3-Day Trip",
  },
  {
    slug: "mysore",
    name: "Mysore",
    category: "Heritage City",
    duration: "1-day round trip",
    distanceFromBengaluru: "~145 km (approx. 3 hrs drive)",
    bestFor: "Palaces & Heritage",
    image: "/images/Mysore.jpeg",
    blurb:
      "A heritage city close enough for a single-day round trip — palaces, gardens and markets.",
    itinerary: [
      "Early morning departure from Bengaluru.",
      "Full day sightseeing in Mysore.",
      "Evening return drive to Bengaluru.",
    ],
    placesToVisit: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "Mysore Zoo"],
    seoH1: "Bangalore to Mysore Cab — One-Day Round Trip",
  },
  {
    slug: "coonoor",
    name: "Coonoor",
    category: "Hill Station",
    duration: "3–4 days",
    distanceFromBengaluru: "~270 km (approx. 6–7 hrs drive)",
    bestFor: "Tea Estates & Quiet Viewpoints",
    image: "/images/coonoor.jpeg",
    blurb:
      "A quieter alternative to Ooty in the Nilgiris, with tea gardens and viewpoints.",
    itinerary: [
      "Day 1: Drive from Bengaluru to Coonoor, check in.",
      "Day 2–3: Local sightseeing around Coonoor and the Nilgiris.",
      "Day 4: Return drive to Bengaluru.",
    ],
    placesToVisit: ["Sim's Park", "Dolphin's Nose", "Lamb's Rock", "Catherine Falls"],
    seoH1: "Bangalore to Coonoor Taxi — Explore the Nilgiris",
  },
  {
    slug: "coorg",
    name: "Coorg",
    category: "Coffee Country",
    duration: "3 days",
    distanceFromBengaluru: "~250 km (approx. 5–6 hrs drive)",
    bestFor: "Coffee Estates & Waterfalls",
    image:
      "https://images.unsplash.com/photo-1571244007059-888ae90b5d85?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    blurb:
      "Karnataka's coffee country in the Western Ghats — misty estates, waterfalls and a cooler pace from Bengaluru.",
    itinerary: [
      "Day 1: Drive from Bengaluru to Coorg (Madikeri), check in, evening at leisure.",
      "Day 2: Local sightseeing around Coorg.",
      "Day 3: Return drive to Bengaluru.",
    ],
    placesToVisit: ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Namdroling Monastery"],
    seoH1: "Bangalore to Coorg Cab Service — Plan Your 3-Day Trip",
  },
  {
    slug: "munnar",
    name: "Munnar",
    category: "Tea Country",
    duration: "3–4 days",
    distanceFromBengaluru: "~480 km (approx. 9–10 hrs drive)",
    bestFor: "Tea Plantations & Hill Trails",
    image: "/images/munnar.jpeg",
    blurb:
      "Kerala's tea-garden hill country — a longer drive from Bengaluru, suited to a multi-day trip.",
    itinerary: [
      "Day 1: Drive from Bengaluru to Munnar, check in.",
      "Day 2–3: Local sightseeing around Munnar.",
      "Day 4: Return drive to Bengaluru.",
    ],
    placesToVisit: ["Eravikulam National Park", "Mattupetty Dam", "Tea Museum", "Top Station"],
    seoH1: "Bangalore to Munnar Cab Service — Plan Your Hill Journey",
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
