import { Phone, MessageCircle } from "lucide-react";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import { business, buildWhatsappUrl } from "@/config/business";

export default function BookingCta({
  heading,
  whatsappMessage,
}: {
  heading: string;
  whatsappMessage: string;
}) {
  return (
    <section className="bg-lichen text-slag py-16 text-center">
      <div className="container-edit">
        <h2 className="heading-huge text-[clamp(1.75rem,5vw,3rem)] mb-6">{heading}</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <ArrowFillButton href="/contact" btnText="Send a Booking Enquiry" variant="solidDark" />
          <ArrowFillButton
            href={buildWhatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            btnText="Chat on WhatsApp"
            variant="outlineDark"
          />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center mt-8 text-sm font-semibold text-slag/80">
          <a href={business.phoneHref} className="inline-flex items-center gap-2 hover:text-slag">
            <Phone size={15} /> {business.phoneDisplay}
          </a>
          <a
            href={buildWhatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-slag"
          >
            <MessageCircle size={15} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
