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
      ? "Principal Product Designer für Developer Tools, Design Systems und komplexe B2B-Produkte. Aerospike, Sygnum Bank, Goodlife. Verfügbar für Senior-IC- und Design-Leadership-Rollen."
      : "Jono Fox — Principal Product Designer specialising in developer tools, design systems, and complex B2B products. Aerospike, Sygnum Bank, Goodlife. Available for senior IC and design leadership roles.",
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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jono Fox",
    url: "https://jonofox.com",
    jobTitle: "Principal Product Designer",
    description:
      "Principal Product Designer specialising in developer tools, design systems, and complex B2B products. 6+ years in product design, 9 years as an Art Director. Available for senior IC and design leadership roles.",
    sameAs: [
      "https://www.linkedin.com/in/jonofox/",
    ],
    knowsAbout: [
      "Product Design",
      "UX Design",
      "Developer Experience",
      "Developer Tools",
      "Design Systems",
      "User Research",
      "Interaction Design",
      "Visual Design",
      "Prototyping",
      "Design Leadership",
      "Figma",
      "Design Tokens",
      "B2B Product Design",
      "Enterprise Software",
      "SaaS",
      "Fintech",
      "DevEx",
      "AI-augmented Design",
      "Art Direction",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Principal Product Designer",
      skills:
        "Product Design, UX Design, Design Systems, Developer Experience, Figma, User Research, Interaction Design, Prototyping, Design Leadership, B2B, SaaS, Enterprise, Fintech",
    },
    worksFor: {
      "@type": "Organization",
      name: "Aerospike",
      url: "https://aerospike.com",
    },
    alumniOf: [
      { "@type": "Organization", name: "Workwise" },
      { "@type": "Organization", name: "Sygnum Bank" },
      { "@type": "Organization", name: "Publicis" },
    ],
  };

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Nav />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
