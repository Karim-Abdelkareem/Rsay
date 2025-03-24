import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  const headersList = headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const defaultLocale = acceptLanguage.includes("ar") ? "ar" : "en";
  const locale = cookies().get("locale")?.value || defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
