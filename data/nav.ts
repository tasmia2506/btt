export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Fleet", href: "/fleet" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Local Sightseeing", href: "/services/local-sightseeing" },
      { label: "Outstation Round Trips", href: "/services/outstation-round-trip" },
      { label: "One-Way Drops", href: "/services/one-way-drop" },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Ooty", href: "/destinations/ooty" },
      { label: "Mysore", href: "/destinations/mysore" },
      { label: "Coonoor", href: "/destinations/coonoor" },
      { label: "Coorg", href: "/destinations/coorg" },
      { label: "Munnar", href: "/destinations/munnar" },
    ],
  },
  { label: "Tariffs", href: "/tariffs" },
  { label: "Contact", href: "/contact" },
];
