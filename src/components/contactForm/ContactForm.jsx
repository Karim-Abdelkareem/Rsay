import Cookies from "js-cookie";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const locale = Cookies.get("locale");
  return (
    <>
      <div className="w-full items-start flex flex-col md:flex-row bg-gray-50 border-t-2">
        <div className="flex-1 px-4 py-8 md:p-10 flex flex-col md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
            {t("lets-talk")} <br /> {t("hear-from-you")}
          </h2>
          <div className="my-16 hidden md:block">
            <p className="font-bold">{t("email-or-call")} </p>
            <p className="my-2 text-gray-600 w-3/4">{t("assist-reach")}</p>
            <div className="my-10">
              <div className="flex items-center gap-4 my-6">
                <Mail className="size-7" />
                <p
                  className={`hover:text-blue-500 ${
                    locale === "en"
                      ? "hover:translate-x-2 "
                      : "hover:-translate-x-2 "
                  } duration-200 cursor-pointer`}
                >
                  info@rsaay.com
                </p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <PhoneCall className="size-7" />
                <p
                  className={`hover:text-blue-500 ${
                    locale === "en"
                      ? "hover:translate-x-2 "
                      : "hover:-translate-x-2 "
                  } duration-200 cursor-pointer`}
                >
                  +966549851842
                </p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <PhoneCall className="size-7" />
                <p
                  className={`hover:text-blue-500 ${
                    locale === "en"
                      ? "hover:translate-x-2 "
                      : "hover:-translate-x-2 "
                  } duration-200 cursor-pointer`}
                >
                  +966549851842
                </p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <MapPin className="size-6" />
                <p className="max-w-[40%]">{t("address")}</p>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-white shadow-xl w-full md:w-1/2 p-4 flex flex-col justify-center md:p-6">
          {/* name */}
          <div className="flex flex-col">
            <label htmlFor="">{t("name")}</label>
            <input
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              name="name"
              placeholder={t("type-name")}
              type="text"
              required
            />
          </div>
          {/*  email */}
          <div className="flex flex-col">
            <label htmlFor="">{t("email")}</label>
            <input
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-email")}
              type="email"
              name="email"
              required
            />
          </div>
          {/*  phone */}
          <div className="flex flex-col">
            <label htmlFor="">{t("phone-number")}</label>
            <input
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-phone-number")}
              type="text"
              name="phone"
              required
            />
          </div>
          {/* site */}
          <div className="flex flex-col">
            <label htmlFor="">{t("site")}</label>
            <input
              name="site"
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-site")}
              type="text"
              required
            />
          </div>
          {/* role */}
          <div className="flex flex-col">
            <label htmlFor="">{t("position-or-role")}</label>
            <input
              name="role"
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-position-or-role")}
              type="text"
              required
            />
          </div>
          {/* message */}
          <div className="flex flex-col">
            <label htmlFor="">{t("message")}</label>
            <textarea
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-message")}
              name="message"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          {/* submit */}
          <button className="flex items-center gap-3 w-1/4 justify-center my-2 p-3  text-white bg-gradient-to-r from-primary to-blue-500 rounded-xl hover:bg-primary cursor-pointer hover:scale-105 duration-500">
            {t("send")}
            <Send />
          </button>
        </form>
      </div>
    </>
  );
}
