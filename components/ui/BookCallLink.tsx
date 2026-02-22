"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { siteConfig } from "@/lib/config";

interface BookCallLinkProps {
  source: string;
  className?: string;
  children: React.ReactNode;
}

export function BookCallLink({ source, className, children }: BookCallLinkProps) {
  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        if (process.env.NEXT_PUBLIC_GA_ID) {
          sendGAEvent("event", "book_call_click", { source });
        }
      }}
    >
      {children}
    </a>
  );
}
