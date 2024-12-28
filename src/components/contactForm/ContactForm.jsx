"use client";
import Cookies from "js-cookie";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const locale = Cookies.get("locale") || "en";
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    errors: {},
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...formData.errors };

    switch (name) {
      case "name":
        if (/[^a-zA-Z\s]/.test(value)) return;
        if (value === "" || value.length < 3) {
          errors.name = t("error.name");
        } else {
          delete errors.name;
        }
        break;
      case "phone":
        if (/[^0-9]/.test(value)) return;
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: value, errors });
  };

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(formData);

    if (Object.keys(formData.errors).length > 0) {
      setFormData({ ...formData });
      return;
    }

    emailjs
      .sendForm("service_bkoi6bt", "template_i6qv5d3", form.current, {
        publicKey: "sWk2snuALe_DfFFLw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            errors: {},
          });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
              <Link href="mailto:info@rsaay.com">
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
              </Link>
              <Link href="mailto:sales@rsaay.com">
                <div className="flex items-center gap-4 my-6">
                  <Mail className="size-7" />
                  <p
                    className={`hover:text-blue-400 ${
                      locale === "en"
                        ? "hover:translate-x-2"
                        : "hover:-translate-x-2"
                    }  duration-200 cursor-pointer`}
                  >
                    sales@rsaay.com
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-4 my-6">
                <PhoneCall className="size-7" />
                <p
                  className={`hover:text-blue-500 ${
                    locale === "en"
                      ? "hover:translate-x-2 "
                      : "hover:-translate-x-2 "
                  } duration-200 cursor-pointer`}
                >
                  +966552791055
                </p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <MapPin className="size-6" />
                <p className="max-w-[40%]">{t("address")}</p>
              </div>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-xl w-full md:w-1/2 p-4 flex flex-col justify-center md:p-6"
        >
          {/* name */}
          <div className="flex flex-col">
            <label htmlFor="name">{t("name")}</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-name")}
              type="text"
              required
            />
            {formData.errors.name && (
              <span className="text-red-500 text-sm">
                {formData.errors.name}
              </span>
            )}
          </div>
          {/*  email */}
          <div className="flex flex-col">
            <label htmlFor="email">{t("email")}</label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-email")}
              type="email"
              required
            />
            {formData.errors.email && (
              <span className="text-red-500 text-sm">
                {formData.errors.email}
              </span>
            )}
          </div>
          {/*  phone */}
          <div className="flex flex-col">
            <label htmlFor="phone">{t("phone-number")}</label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-phone-number")}
              type="text"
              required
            />
            {formData.errors.phone && (
              <span className="text-red-500 text-sm">
                {formData.errors.phone}
              </span>
            )}
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
            <label htmlFor="message">{t("message")}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder={t("type-message")}
              rows="4"
              required
            ></textarea>
          </div>
          {/* submit */}
          <div className="flex items-center gap-3 w-1/4 justify-center my-2 p-3 text-white bg-gradient-to-r from-brand to-blue-500 rounded-xl hover:bg-brafrom-brand cursor-pointer hover:scale-105 duration-500">
            <input
              type="submit"
              value={t("send")}
              className={`bg-transparent cursor-pointer ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} 
            />
            {loading ? (
              <div className="animate-spin">
                {" "}
                <Send className="spin" />
              </div>
            ) : (
              <Send />
            )}
          </div>
        </form>
      </div>
    </>
  );
}
