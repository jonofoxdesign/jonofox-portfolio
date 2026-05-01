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
      suppressHydrationWarning
      className={dmSans.variable}
    >
      <body className="font-sans bg-surface text-ink antialiased" suppressHydrationWarning>
        <Nav />
        {children}
      </body>
    </html>
  );
}
