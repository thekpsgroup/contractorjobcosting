"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { siteConfig } from "@/lib/config";

export function MobileCTABar() {
  const handleClick = () => {
    sendGAEvent("event", "book_call_click", { source: "mobile_cta_bar" });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-line)] bg-canvas/95 backdrop-blur-sm px-4 py-3">
      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="block w-full bg-amber-500 text-black font-bold text-sm text-center py-3.5 hover:bg-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        aria-label="Book a call with Contractor Job Costing"
      >
        Book a Call
      </a>
    </div>
  );
}
