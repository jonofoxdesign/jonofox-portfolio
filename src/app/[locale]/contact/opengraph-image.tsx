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
        background: "#FAFAF8",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Teal glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -60,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(42,157,143,0.11) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 100px",
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
          Contact
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              color: "#111118",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
            }}
          >
            Get in touch
          </div>
          <div
            style={{
              display: "flex",
              color: "#666672",
              fontSize: 30,
              fontWeight: 400,
            }}
          >
            Jono Fox — Principal Product Designer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#AAAAAA",
            fontSize: 16,
          }}
        >
          jonofox.com
        </div>
      </div>
    </div>,
    size
  );
}
