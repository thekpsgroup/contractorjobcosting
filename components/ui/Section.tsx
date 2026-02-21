interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "lg" | "sm";
  border?: boolean;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className = "",
  id,
  size = "default",
  border = false,
  as: Tag = "section",
}: SectionProps) {
  const sizeClass =
    size === "lg" ? "section-lg" : size === "sm" ? "py-12 px-6" : "section";
  const borderClass = border
    ? "border-t border-[var(--color-line)]"
    : "";

  return (
    <Tag
      id={id}
      className={`${sizeClass} ${borderClass} ${className}`}
    >
      <div className="container">{children}</div>
    </Tag>
  );
}

/** Amber accent rule — short horizontal line above a heading */
export function Rule() {
  return <span className="rule-amber" aria-hidden="true" />;
}

/** Overline label above a section heading */
export function Overline({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
      {children}
    </p>
  );
}
