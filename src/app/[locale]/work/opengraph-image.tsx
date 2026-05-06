import { ImageResponse } from "next/og";
import { readFileSync } from "fs";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const voyagerBytes = readFileSync(
    new URL(
      "../../../../public/case-studies/aerospike-voyager/aerospike-voyager-data-browser-hero.png",
      import.meta.url
    )
  );
  const voyagerSrc = `data:image/png;base64,${voyagerBytes.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FAFAF8",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Left content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 64px 64px 80px",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#2A9D8F",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Work
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              color: "#111118",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Product design case studies
          </div>
          {/* Company colour chips */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { label: "Aerospike", color: "#2A9D8F", bg: "#E4F4F2" },
              { label: "Sygnum Bank", color: "#E91E63", bg: "#FCE4EC" },
              { label: "Goodlife", color: "#1976D2", bg: "#E3F2FD" },
              { label: "Workwise", color: "#F57C00", bg: "#FFF2E0" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  background: item.bg,
                  color: item.color,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  padding: "6px 14px",
                  borderRadius: 20,
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#AAAAAA",
            fontSize: 14,
          }}
        >
          jonofox.com
        </div>
      </div>

      {/* Right: hero image */}
      <div
        style={{
          display: "flex",
          width: 440,
          flex: "0 0 440px",
          background: "linear-gradient(135deg, #EEF2FF 0%, rgba(99, 102, 241, 0.20) 100%)",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={voyagerSrc}
          style={{
            width: "92%",
            height: "92%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
    </div>,
    size
  );
}
