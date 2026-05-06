import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#0c0c0f",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Teal glow */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -150,
          width: 640,
          height: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(42,157,143,0.22) 0%, transparent 70%)",
          display: "flex",
        }}
      />
      {/* Fox orange glow */}
      <div
        style={{
          position: "absolute",
          bottom: -160,
          right: 80,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,124,0,0.16) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          flex: 1,
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            color: "#2A9D8F",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          jonofox.com
        </div>

        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              marginBottom: 22,
            }}
          >
            Jono Fox
          </div>
          <div
            style={{
              display: "flex",
              color: "#7a7a8a",
              fontSize: 36,
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            Principal Product Designer
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            color: "#444455",
            fontSize: 18,
            letterSpacing: "0.01em",
          }}
        >
          Developer tools · Complex systems · Enterprise UX
        </div>
      </div>
    </div>,
    size
  );
}
