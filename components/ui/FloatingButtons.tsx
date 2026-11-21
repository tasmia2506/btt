import { Phone } from "lucide-react";
import { business, buildWhatsappUrl, defaultEnquiryMessage } from "@/config/business";

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      <a
        href={business.phoneHref}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-slag text-ice flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <Phone size={22} />
      </a>
      <a
        href={buildWhatsappUrl(defaultEnquiryMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.26 4.9L2 22l5.25-1.26A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.1-.44-4.38-1.23l-.31-.19-3.11.75.77-3.03-.2-.31A8.17 8.17 0 0 1 3.86 12c0-4.5 3.68-8.18 8.18-8.18S20.22 7.5 20.22 12s-3.68 8.18-8.18 8.18Zm4.47-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.31-1.63-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </div>
  );
}
