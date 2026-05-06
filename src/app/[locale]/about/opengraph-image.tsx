import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const portraitBytes = readFileSync(
    join(process.cwd(), "public/portrait.png")
  );
  const portraitSrc = `data:image/png;base64,${portraitBytes.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FAFAF8",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle warm glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: 340,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,124,0,0.09) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Left: text */}
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
            color: "#F57C00",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          About
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              color: "#111118",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
            }}
          >
            Jono Fox
          </div>
          <div
            style={{
              display: "flex",
              color: "#555560",
              fontSize: 26,
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            6 years in product design,{"\n"}9 years as an Art Director.{"\n"}Now building tools for developers.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#AAAAAA",
            fontSize: 14,
            letterSpacing: "0.01em",
          }}
        >
          jonofox.com
        </div>
      </div>

      {/* Right: portrait */}
      <div
        style={{
          display: "flex",
          width: 400,
          flex: "0 0 400px",
          background: "linear-gradient(160deg, #FFF2E0 0%, rgba(245, 124, 0, 0.15) 100%)",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={portraitSrc}
          style={{
            width: "100%",
            height: "115%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>
    </div>,
    size
  );
}
