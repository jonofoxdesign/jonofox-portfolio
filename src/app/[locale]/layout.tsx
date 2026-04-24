import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";

  return {
    title: {
      default: isDE
        ? "Jono Fox — Principal Product Designer"
        : "Jono Fox — Principal Product Designer",
      template: "%s | Jono Fox",
    },
    description: isDE
      ? "Principal Product Designer für Developer Tools und komplexe Systeme. Ich helfe Engineering-Teams, Produkte zu entwickeln, die Menschen wirklich verstehen."
      : "Principal product designer for developer tools and complex systems. I help engineering teams ship products people actually understand.",
    metadataBase: new URL("https://jonofox.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
      url: `https://jonofox.com/${locale}`,
      siteName: "Jono Fox",
      title: "Jono Fox — Principal Product Designer",
      description:
        "Principal product designer for developer tools and complex systems.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Jono Fox — Principal Product Designer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jono Fox — Principal Product Designer",
      description:
        "Principal product designer for developer tools and complex systems.",
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

import enMessages from "../../../messages/en.json";
import deMessages from "../../../messages/de.json";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "de")) {
    notFound();
  }

  const messages = locale === "de" ? deMessages : enMessages;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
