"use client";
import ServicesIcons from "@/components/servicesIcons/ServicesIcons";
import TrainingCourses from "@/components/trainingCourses/TrainingCourses";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const locale = Cookies.get("locale");
  const t = useTranslations("Services");

  return (
    <>
      <div className="absolute h-[40rem] w-full -z-10 ">
        <div className="absolute top-0 w-full h-[40rem] bg-black/70 "></div>
        <Image
          src="/Services/training.jpeg"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-[40rem] object-cover "
        />
      </div>
      <div className="px-6 lg:px-0 py-32 lg:justify-around w-full flex flex-col gap-10 items-center h-[40rem] ">
        <ServicesIcons />
        <h1 className="uppercase text-white font-brush text-3xl md:text-7xl max-w-5xl text-center">
          {t("at-rsay")}
        </h1>
        <p className="text-center text-white font-medium text-xl max-w-2xl">
          {t("at-rsay-description")}
        </p>
      </div>

      <div className="mt-20">
        <h2
          className={`${
            locale === "en" && "-rotate-2"
          } text-center font-brush text-5xl font-bold`}
        >
          {t("courses")}
        </h2>
        <TrainingCourses />
      </div>
    </>
  );
}
