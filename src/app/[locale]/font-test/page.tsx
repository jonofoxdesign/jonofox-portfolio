// Font test page — not linked from nav, visit /font-test locally
// Remove this file before final deployment

const heading = "I design complex tools that feel clear"
const headingDE = "Ich denke klar, designe sorgfältig und liefere"
const body = "Most of my work starts before anyone's certain what good looks like. Developer tools at Aerospike, banking infrastructure at Sygnum, recruiting platforms at Workwise."
const bodyDE = "Die meisten meiner Projekte beginnen, bevor irgendjemand sicher weiß, wie gut aussieht. Ö ö Ü ü Ä ä ß"

const fonts = [
  {
    name: "GT Alpina (display serif — missing ß)",
    displayFamily: "GT Alpina",
    bodyFamily: "PP Radio Grotesk",
    tag: "Display candidate",
  },
  {
    name: "PP Frama (display serif)",
    displayFamily: "PP Frama",
    bodyFamily: "PP Radio Grotesk",
    tag: "Display candidate",
  },
  {
    name: "PP Kyoto (display/body sans)",
    displayFamily: "PP Kyoto",
    bodyFamily: "PP Kyoto",
    tag: "Display + body candidate",
  },
  {
    name: "PP Object Sans (body)",
    displayFamily: "PP Neue Montreal",
    bodyFamily: "PP Object Sans",
    tag: "Body candidate",
  },
  {
    name: "PP Radio Grotesk (body)",
    displayFamily: "PP Neue Montreal",
    bodyFamily: "PP Radio Grotesk",
    tag: "Body candidate",
  },
  {
    name: "PP Woodland (display — bold only)",
    displayFamily: "PP Woodland",
    bodyFamily: "PP Radio Grotesk",
    tag: "Display candidate",
  },
  {
    name: "Current: PP Neue Montreal + DM Sans",
    displayFamily: "PP Neue Montreal",
    bodyFamily: "DM Sans",
    tag: "Current",
  },
]

export default function FontTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @font-face { font-family: 'GT Alpina'; src: url('/fonts/GT-Alpina-Regular.woff2'); font-weight: 400; }
        @font-face { font-family: 'GT Alpina'; src: url('/fonts/GT-Alpina-Regular-Italic.woff2'); font-weight: 400; font-style: italic; }
        @font-face { font-family: 'GT Alpina'; src: url('/fonts/GT-Alpina-Bold.woff2'); font-weight: 700; }
        @font-face { font-family: 'GT Alpina'; src: url('/fonts/GT-Alpina-Bold-Italic.woff2'); font-weight: 700; font-style: italic; }
        @font-face { font-family: 'PP Frama'; src: url('/fonts/PPFrama-Regular.otf'); font-weight: 400; }
        @font-face { font-family: 'PP Frama'; src: url('/fonts/PPFrama-Black.otf'); font-weight: 900; }
        @font-face { font-family: 'PP Kyoto'; src: url('/fonts/PPKyoto-Medium.otf'); font-weight: 500; }
        @font-face { font-family: 'PP Kyoto'; src: url('/fonts/PPKyoto-Extrabold.otf'); font-weight: 800; }
        @font-face { font-family: 'PP Object Sans'; src: url('/fonts/PPObjectSans-Regular.otf'); font-weight: 400; }
        @font-face { font-family: 'PP Radio Grotesk'; src: url('/fonts/PPRadioGrotesk-Regular.otf'); font-weight: 400; }
        @font-face { font-family: 'PP Radio Grotesk'; src: url('/fonts/PPRadioGrotesk-RegularItalic.otf'); font-weight: 400; font-style: italic; }
        @font-face { font-family: 'PP Woodland'; src: url('/fonts/PPWoodland-Bold.otf'); font-weight: 700; }
      `}</style>

      <div className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-16">Font specimen — /font-test</p>

        {fonts.map((f) => (
          <div key={f.name} className="mb-20 pb-20 border-b border-gray-100 last:border-0">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-xs font-mono text-gray-400">{f.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${f.tag === "Current" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}>
                {f.tag}
              </span>
            </div>

            {/* Display heading */}
            <h2 style={{ fontFamily: `'${f.displayFamily}', sans-serif`, fontWeight: 700, fontSize: "3rem", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1F2D3D", marginBottom: "1rem" }}>
              {heading}
            </h2>

            {/* German heading */}
            <h3 style={{ fontFamily: `'${f.displayFamily}', sans-serif`, fontWeight: 700, fontSize: "2rem", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#2A9D8F", marginBottom: "1.5rem" }}>
              {headingDE}
            </h3>

            {/* Body text */}
            <p style={{ fontFamily: `'${f.bodyFamily}', sans-serif`, fontWeight: 400, fontSize: "1.125rem", lineHeight: 1.7, color: "#4F5D75", marginBottom: "0.75rem" }}>
              {body}
            </p>
            <p style={{ fontFamily: `'${f.bodyFamily}', sans-serif`, fontWeight: 400, fontSize: "1.125rem", lineHeight: 1.7, color: "#4F5D75" }}>
              {bodyDE}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
