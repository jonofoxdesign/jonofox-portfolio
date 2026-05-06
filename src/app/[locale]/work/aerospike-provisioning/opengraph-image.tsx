import { ImageResponse } from "next/og";
import { readFileSync } from "fs";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const heroBytes = readFileSync(
    new URL(
      "../../../../../public/case-studies/aerospike-provisioning/aerospike-cloud-provisioning-hero.png",
      import.meta.url
    )
  );
  const heroSrc = `data:image/png;base64,${heroBytes.toString("base64")}`;

  const accent = "#2A9D8F";

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
          padding: "64px 56px 64px 72px",
          width: 620,
          flex: "0 0 620px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: accent,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Aerospike
        </div>

        <div
          style={{
            display: "flex",
            color: "#111118",
            fontSize: 46,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Designing cloud provisioning for infrastructure-aware developers
        </div>

        <div
          style={{
            display: "flex",
            color: "#AAAAAA",
            fontSize: 14,
          }}
        >
          jonofox.com · Case Study
        </div>
      </div>

      {/* Right image panel */}
      <div
        style={{
          display: "flex",
          flex: 1,
          background: "linear-gradient(135deg, #E4F4F2 0%, rgba(42, 157, 143, 0.24) 100%)",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={heroSrc}
          style={{
            width: "90%",
            height: "90%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
    </div>,
    size
  );
}
