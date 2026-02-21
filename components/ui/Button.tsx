"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  gaEvent?: string;
  gaParams?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  gaEvent,
  gaParams,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-block font-bold text-sm tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

  const variants = {
    primary:
      "bg-amber-500 text-black px-8 py-4 hover:bg-amber-400 active:bg-amber-600",
    secondary:
      "border border-amber-500 text-amber-500 px-8 py-4 hover:bg-amber-500/10 active:bg-amber-500/20",
    ghost:
      "text-amber-500 hover:text-amber-400 underline underline-offset-4 px-0 py-0",
  };

  const handleClick = () => {
    if (gaEvent) {
      sendGAEvent("event", gaEvent, gaParams ?? {});
    }
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={classes} onClick={handleClick} {...externalProps}>
      {children}
    </Link>
  );
}

/** A simple <a> tag version for external URLs that need GA tracking */
interface ExternalButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  gaEvent?: string;
  gaParams?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
}

export function ExternalButton({
  href,
  variant = "primary",
  gaEvent,
  gaParams,
  children,
  className = "",
}: ExternalButtonProps) {
  const base =
    "inline-block font-bold text-sm tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

  const variants = {
    primary:
      "bg-amber-500 text-black px-8 py-4 hover:bg-amber-400 active:bg-amber-600",
    secondary:
      "border border-amber-500 text-amber-500 px-8 py-4 hover:bg-amber-500/10",
  };

  const handleClick = () => {
    if (gaEvent) {
      sendGAEvent("event", gaEvent, gaParams ?? {});
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
