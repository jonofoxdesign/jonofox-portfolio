import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const heroBytes = readFileSync(
    join(
      process.cwd(),
      "public/case-studies/sygnum/sygnum-digital-assets-dashboard-hero.png"
    )
  );
  const heroSrc = `data:image/png;base64,${heroBytes.toString("base64")}`;

  const accent = "#E91E63";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#0c0c0f",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 56px 64px 72px",
          width: 640,
          flex: "0 0 640px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: accent,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Sygnum Bank
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 50,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Designing a digital assets banking dashboard from scratch
        </div>

        <div
          style={{
            display: "flex",
            color: "#444455",
            fontSize: 15,
          }}
        >
          jonofox.com · Case Study
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          background: "linear-gradient(135deg, #1f0612 0%, #3a0d22 100%)",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 55% 45%, ${accent}28 0%, transparent 65%)`,
            display: "flex",
          }}
        />
        <img
          src={heroSrc}
          style={{
            width: "88%",
            height: "88%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
    </div>,
    size
  );
}
