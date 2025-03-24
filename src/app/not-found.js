import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-gray-900 to-brand/10 animate-gradient">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-9xl font-bold text-brand mb-4 animate-bounce drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white mb-4">{t("title")}</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          {t("description")}
        </p>
        <Link
          href="/"
          className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
