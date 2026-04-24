import { ButtonAnchor } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="pt-36 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <div>
            <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Let&apos;s <span className="text-teal">talk</span>
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed mb-10">
              I&apos;m open to the right opportunity, a good collaboration, or a
              conversation about developer tools and design systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonAnchor href="mailto:jonathanlouisfox@gmail.com" variant="teal">
                Send an email
              </ButtonAnchor>
              <ButtonAnchor
                href="https://www.linkedin.com/in/jonofox/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Connect on LinkedIn
              </ButtonAnchor>
            </div>
          </div>

          {/* Right — 2×2 photo grid */}
          <div className="grid grid-cols-2 gap-3">
            {["/jono/jono1.png", "/jono/jono2.png", "/jono/jono3.png", "/jono/jono4.png"].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                <img src={src} alt="Jono Fox" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
