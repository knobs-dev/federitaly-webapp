import createMiddleware from "next-intl/middleware";

import { defaultLocale, supportedLocales } from "@constants";

export default createMiddleware({
  locales: supportedLocales,
  defaultLocale,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
