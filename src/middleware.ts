import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for Next.js internals, static files, and the
  // PostHog reverse proxy (/ingest) — locale-prefixing those breaks ingestion
  matcher: ["/((?!ingest|_next|_vercel|.*\\..*).*)"],
};
