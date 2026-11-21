import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FloatingButtons from "@/components/ui/FloatingButtons";
import StructuredData from "@/components/seo/StructuredData";
import { Toaster } from "sonner";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Cab Service in Bangalore`,
    template: `%s | ${business.name}`,
  },
  description:
    "Looking for a reliable cab service in Bangalore? Book local sightseeing cabs, outstation taxis, one-way drops and round-trip travel with Badiger Tours & Travels.",
  openGraph: {
    title: `${business.name} | Cab Service in Bangalore`,
    description:
      "Local sightseeing, outstation round trips and one-way cab drops from Bengaluru with Dzire, Etios, Ertiga and Innova Crysta.",
    siteName: business.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(oswald.variable, openSans.variable, "font-sans")}>
      <body className="font-sans antialiased">
        <StructuredData />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingButtons />
        <Toaster position="bottom-center" theme="light" richColors />
      </body>
    </html>
  );
}
