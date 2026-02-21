import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Contractor Job Costing — 30-Day Install for Owner-Led Contractors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Top — logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "4px",
              height: "40px",
              background: "#f59e0b",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#fafafa",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Contractor
            </span>
            <span
              style={{
                color: "#f59e0b",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Job Costing
            </span>
          </div>
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "#f59e0b",
            }}
          />
          <div
            style={{
              color: "#fafafa",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "800px",
            }}
          >
            Know Your Margin. Fix Your Cash Flow.
          </div>
          <div
            style={{
              color: "#888888",
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
              maxWidth: "700px",
            }}
          >
            30-day job costing install for owner-led contractors doing $750K–$8M/year.
          </div>
        </div>

        {/* Bottom — CTA tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              background: "#f59e0b",
              color: "#000000",
              fontSize: "15px",
              fontWeight: 700,
              padding: "10px 20px",
              letterSpacing: "0.05em",
            }}
          >
            BOOK A CALL
          </div>
          <span
            style={{
              color: "#555555",
              fontSize: "15px",
            }}
          >
            contractorjobcosting.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
