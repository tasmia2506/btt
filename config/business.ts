export const business = {
  name: "Badiger Tours & Travels",
  shortName: "Badiger",
  city: "Bengaluru",
  cityAlt: "Bangalore",
  state: "Karnataka",
  country: "India",
  phoneDisplay: "077602 16409",
  phoneHref: "tel:+917760216409",
  whatsappNumber: "917760216409",
  googleBusinessUrl: "https://share.google/cvbR5JviaeZXxNLSr",
  addresses: [
    {
      label: "Malleshwaram",
      lines: ["Vyalikaval, Kodandarampura", "Malleshwaram, Bengaluru, Karnataka 560003"],
    },
    {
      label: "Laggere",
      lines: ["#01, 1st Main 2nd Cross, Near Laggere Bridge", "Laggere, Bangalore - 560058, Karnataka"],
    },
  ],
  email: null as string | null,
  siteUrl: "https://www.badigertoursandtravels.example",
};

export function buildWhatsappUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsappNumber}?text=${encoded}`;
}

export function defaultEnquiryMessage() {
  return `Hello ${business.name}, I would like to enquire about a cab booking. Please share details and availability.`;
}
