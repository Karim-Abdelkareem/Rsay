import TypewriterEffect from "@/components/TypewriterEffect/TypewriterEffect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { StarsBackground } from "@/components/ui/stars-background";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import React from "react";

export default async function Page() {
  const t = await getTranslations("about");
  const locale = cookies().get("locale")?.value || "en";

  return (
    <div className="min-h-[40rem] py-32 w-full bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="relative z-[2] p-4 md:p-0 md:w-3/4 xl:w-1/2 rounded bg-black overflow-hidden">
        <div
          className={`${
            locale === "en" ? "left-0" : "right-0"
          } top-0 flex h-6 w-full items-center px-4 bg-[#464848]`}
        >
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full mx-2 bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="h-4" />
        <div className="font-vt323 text-green-400 p-4">
          <div className="flex items-center">
            {locale === "en" ? <ChevronRight /> : <ChevronLeft />}
            <h1 className="font-bold text-white text-2xl">{t("who-are-we")}</h1>
          </div>
          <div className="my-4">
            <h1 className="text-2xl text-green-200 font-bold italic underline underline-offset-4 my-2">
              {t("our-story")}
            </h1>
            <p className="text-2xl">{t("our-story-description")}</p>
          </div>
          <div className="my-4">
            <h1 className="text-2xl text-green-200 font-bold italic underline underline-offset-4 my-2">
              {t("our-vision")}
            </h1>
            <p className="text-2xl">{t("our-vision-description")}</p>
          </div>
          <div className="my-4">
            <h1 className="text-2xl text-green-200 font-bold italic underline underline-offset-4 my-2">
              {t("our-mession")}
            </h1>
            <p className="text-2xl">{t("our-mession-description")}</p>
          </div>
          <div className="my-4 text-2xl flex gap-3 items-center">
            <p className="text-2xl">
              {" "}
              {">"} {t("rsay")}
            </p>
            <TypewriterEffect />
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
