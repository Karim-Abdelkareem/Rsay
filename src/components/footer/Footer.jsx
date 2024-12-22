"use server";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Footer() {
  const t = await getTranslations("footer");
  const locale = cookies().get("locale")?.value;

  return (
    <div>
      <footer className="bg-black relative  text-white">
        {/* <Image
          src="/Home/footer.jpg"
          alt="footer_bg"
          width={1920}
          height={600}
          className="h-96 object-fill"
        /> */}
        <div className="absolute w-full h-full bg-black opacity-40 top-0 z-10 shadow-lg" />
        <div className="absolute bg-[#101112] top-0 z-20 px-10 pt-16 w-full">
          <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="flex flex-col justify-start gap-4">
                <Link href={"/"}>
                  <div
                    className={`flex gap-4 items-center ${
                      locale === "ar" ? "justify-end" : ""
                    }`}
                    dir="ltr"
                  >
                    <h1 className="text-4xl font-bold text-blue-600">RSAY</h1>
                    <span className="p-1.5 rounded-full border border-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 20 20"
                        className="text-blue-600"
                      >
                        <path
                          fill="currentColor"
                          d="M10 2a5 5 0 0 0-5 5v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7V7a3 3 0 0 1 5.906-.75a1 1 0 0 0 1.936-.5A5 5 0 0 0 10 2"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </Link>
                <div className="flex gap-3">
                  <MapPin />
                  <p>{t("address")}</p>
                </div>
                <div className="flex gap-3">
                  <PhoneCall />
                  <p
                    className={`hover:text-blue-400 ${
                      locale === "en"
                        ? "hover:translate-x-2"
                        : "hover:-translate-x-2"
                    }  duration-200 cursor-pointer`}
                  >
                    +966549851842
                  </p>
                </div>
                <Link href="tel:+966549851842">
                  <div className="flex gap-3">
                    <PhoneCall />
                    <p
                      className={`hover:text-blue-400 ${
                        locale === "en"
                          ? "hover:translate-x-2"
                          : "hover:-translate-x-2"
                      }  duration-200 cursor-pointer`}
                    >
                      +966549851842
                    </p>
                  </div>
                </Link>
                <Link href="mailto:info@rsaay.com">
                  <div className="flex gap-3">
                    <Mail />
                    <p
                      className={`hover:text-blue-400 ${
                        locale === "en"
                          ? "hover:translate-x-2"
                          : "hover:-translate-x-2"
                      }  duration-200 cursor-pointer`}
                    >
                      info@rsaay.com
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:w-1/2">
              <div className="flex flex-1 flex-col gap-4 lg:gap-8 items-start lg:w-1/2">
                <h3 className="text-xl">{t("services")}</h3>
                <div>
                  <ul className="flex flex-col gap-4 list-disc ml-4">
                    <li>
                      <Link
                        href="/services/website-development"
                        className={`hover:text-blue-400 ${
                          locale === "en" ? "hover:ml-1" : "hover:mr-1"
                        } duration-200 cursor-pointer`}
                      >
                        {t("website-development")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/mobile-application"
                        className={`hover:text-blue-400 ${
                          locale === "en" ? "hover:ml-1" : "hover:mr-1"
                        } duration-200 cursor-pointer`}
                      >
                        {t("mobile-application")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/lms"
                        className={`hover:text-blue-400 ${
                          locale === "en" ? "hover:ml-1" : "hover:mr-1"
                        } duration-200 cursor-pointer`}
                      >
                        {t("lms")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/training-courses"
                        className={`hover:text-blue-400 ${
                          locale === "en" ? "hover:ml-1" : "hover:mr-1"
                        } duration-200 cursor-pointer`}
                      >
                        {t("training-course")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-1 flex-col gap-4 lg:gap-8 items-start w-60">
                  <h3 className="text-xl">{t("contact")}</h3>
                  <div>
                    <ul className="flex flex-col gap-2 lg:gap-4 list-disc ml-4">
                      <li>
                        <Link
                          href="/contact/companies"
                          className={`hover:text-blue-400 ${
                            locale === "en" ? "hover:ml-1" : "hover:mr-1"
                          } duration-200 cursor-pointer`}
                        >
                          {t("companies")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact/universities"
                          className={`hover:text-blue-400 ${
                            locale === "en" ? "hover:ml-1" : "hover:mr-1"
                          } duration-200 cursor-pointer`}
                        >
                          {t("universities")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <span className="text-sm text-gray-300 sm:text-cente">
              © 2024 <button className="hover:underline">RSAY™</button>. All
              Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
