import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
