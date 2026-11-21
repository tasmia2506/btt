import FaqAccordion from "@/components/ui/FaqAccordion";
import FaqSchema from "@/components/seo/FaqSchema";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import { buildWhatsappUrl } from "@/config/business";
import type { Faq } from "@/data/faqs";

export default function FaqSection({
  heading,
  subtitle,
  items,
  whatsappMessage,
  tone = "dark",
}: {
  heading: string;
  subtitle: string;
  items: Faq[];
  whatsappMessage: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <>
      <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
        <div className="lg:sticky lg:top-28">
          <p
            className={`font-oswald uppercase text-xs tracking-[0.25em] mb-3 ${
              isLight ? "text-lichen" : "text-moss"
            }`}
          >
            FAQ
          </p>
          <h2
            className={`font-oswald uppercase font-bold text-2xl sm:text-3xl mb-4 ${
              isLight ? "text-ice" : "text-slag"
            }`}
          >
            {heading}
          </h2>
          <p className={`text-sm mb-6 max-w-xs ${isLight ? "text-ice/70" : "text-slag/70"}`}>{subtitle}</p>
          <ArrowFillButton
            href={buildWhatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            btnText="Ask on WhatsApp"
            size="compact"
            variant={isLight ? "outlineLight" : "outlineDark"}
          />
        </div>

        <div className="bg-white border border-stone/15 rounded-2xl p-6 sm:p-9">
          <FaqAccordion items={items} />
        </div>
      </div>
      <FaqSchema items={items} />
    </>
  );
}
