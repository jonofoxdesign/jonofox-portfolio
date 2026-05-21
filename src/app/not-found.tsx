import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-light flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-6">404</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight mb-6">
            Nothing to see <span className="text-teal">here</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed mb-10">
            That page doesn't exist. Maybe it moved, maybe it never did. Either way, there's better stuff elsewhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/en"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal text-white font-medium text-sm hover:bg-teal-hover transition-colors"
            >
              Back home
            </Link>
            <Link
              href="/en/work"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-surface-muted text-ink font-medium text-sm hover:border-teal/30 transition-colors"
            >
              See my work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
