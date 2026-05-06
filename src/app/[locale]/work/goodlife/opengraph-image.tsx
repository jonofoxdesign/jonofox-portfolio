import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HERO_URL = "https://jonofox.com/case-studies/goodlife/goodlife-health-clubs-sign-up-hero.png";

export default function Image() {
  const heroSrc = HERO_URL;

  const accent = "#1976D2";

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
          Goodlife Health Clubs
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
          Replacing lock-in anxiety with sign-up confidence
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
          background: "linear-gradient(135deg, #E3F2FD 0%, rgba(25, 118, 210, 0.13) 100%)",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={heroSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "bottom center",
          }}
        />
      </div>
    </div>,
    size
  );
}
