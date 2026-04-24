export default function ContactPage() {
  return (
    <div className="pt-36 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
          Let's <span className="text-teal">talk</span>
        </h1>
        <p className="text-lg text-ink-secondary leading-relaxed mb-12">
          I'm open to the right opportunity, a good collaboration, or a
          conversation about developer tools and design systems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:jonathanlouisfox@gmail.com"
            className="px-8 py-4 rounded-xl bg-teal text-white font-medium font-syne text-lg hover:bg-teal-hover transition-colors"
          >
            jonathanlouisfox@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jonofox/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border px-8 py-4 rounded-xl font-medium font-syne text-lg text-ink hover:text-teal transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
