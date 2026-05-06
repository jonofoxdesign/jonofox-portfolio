import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--next-font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jono Fox — Product Designer",
  description: "Principal product designer for developer tools and complex systems.",
  openGraph: {
    title: "Jono Fox — Product Designer",
    description: "Principal product designer for developer tools and complex systems.",
    url: "https://jonofox.com",
    siteName: "Jono Fox",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={dmSans.variable}
    >
      <body className="font-sans bg-surface text-ink antialiased" suppressHydrationWarning>
        {/* Skip to main content — visible on focus for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-teal focus:text-white focus:font-medium focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
