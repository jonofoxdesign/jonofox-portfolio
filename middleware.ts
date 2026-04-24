import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Find locale prefix in pathname
  const pathnameLocale = locales.find(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    // Locale found — pass through with locale header for next-intl RSC
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("X-NEXT-INTL-LOCALE", pathnameLocale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // No locale prefix — redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
