"use client";
import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  const t = useTranslations("about");

  return (
    <div>
      <Typewriter
        options={{
          strings: [
            t("ict"),
            t("website"),
            t("mobile"),
            t("lms"),
            t("training"),
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
