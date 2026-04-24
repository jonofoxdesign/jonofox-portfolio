import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Minimal passthrough middleware — exists purely to force Vercel's edge
// router to generate routing rules for the [locale] dynamic segment.
// No next-intl imports = no __dirname injection = no Edge runtime error.
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
