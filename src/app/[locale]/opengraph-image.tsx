import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PORTRAIT_URL = "https://jonofox.com/portrait.png";

export default function Image() {
  const portraitSrc = PORTRAIT_URL;

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
      {/* Subtle teal glow top right */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: 340,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(42,157,143,0.12) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Left: text content */}
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
          jonofox.com
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              color: "#111118",
              fontSize: 78,
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
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.35,
            }}
          >
            Principal Product Designer
          </div>
          <div
            style={{
              display: "flex",
              color: "#999",
              fontSize: 16,
              letterSpacing: "0.01em",
              marginTop: 8,
            }}
          >
            Developer tools · Complex systems · Enterprise UX
          </div>
        </div>

        <div style={{ display: "flex" }} />
      </div>

      {/* Right: portrait */}
      <div
        style={{
          display: "flex",
          width: 560,
          flex: "0 0 560px",
          background: "linear-gradient(160deg, #E8F5F3 0%, rgba(42,157,143,0.18) 100%)",
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
