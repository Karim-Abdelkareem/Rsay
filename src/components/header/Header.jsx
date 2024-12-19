"use client";
import Link from "next/link";
import { React, useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../logo/Logo";
import { AlignJustify, Contact, Globe } from "lucide-react";
import setLanguageValue from "@/actions/set-language-action";
import Sidebar from "../sidebar/Sidebar";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

export default function Header() {
  const t = useTranslations("Header");

  const locale = Cookies.get("locale");

  const pages = [
    { name: t("pages.0.name"), href: "/" },
    { name: t("pages.1.name"), href: "/about" },
  ];

  const services = [
    { name: t("servicesObj.0.name"), href: "/" },
    { name: t("servicesObj.1.name"), href: "/" },
    { name: t("servicesObj.2.name"), href: "/" },
    { name: t("servicesObj.3.name"), href: "/" },
  ];

  const contact = [
    {
      name: t("contactObj.0.name"),
      href: "/contact/companies",
    },
    {
      name: t("contactObj.1.name"),
      href: "/contact/universities",
    },
  ];

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-3 px-6 flex items-center justify-between transition-all duration-150 ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      } fixed w-full top-0 left-0 z-50`}
    >
      <Logo scrolling={scrolling} />
      <div className="gap-4 hidden lg:flex items-center">
        {pages.map((page, i) => (
          <div
            key={i}
            className="group overflow-hidden hover:-translate-y-1 duration-300"
          >
            <Link
              href={page.href}
              className={`${
                scrolling
                  ? "text-brand font-bold hover:text-blue-800"
                  : "text-white"
              }`}
            >
              {page.name}
            </Link>
            <div
              className={`p-[2px] ${
                scrolling ? "bg-blue-800" : "bg-white"
              } -translate-x-28 group-hover:translate-x-0 duration-500`}
            />
          </div>
        ))}

        <Menu as="div" className="relative inline-block text-left">
          <div className="group overflow-hidden hover:-translate-y-1 duration-300">
            <MenuButton
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent ${
                scrolling
                  ? "text-brand hover:text-blue-800 font-bold"
                  : "text-white hover:text-gray-50 font-medium"
              }  `}
            >
              {t("services")}
              <ChevronDownIcon
                aria-hidden="true"
                className={`-mr-1 size-5 ${
                  scrolling
                    ? "text-brand hover:text-blue-800"
                    : "text-white hover:text-gray-50"
                } font-bold `}
              />
            </MenuButton>
            <div
              className={`p-[2px] ${
                scrolling ? "bg-blue-800" : "bg-white"
              } -translate-x-28 group-hover:translate-x-0 duration-500`}
            />
          </div>

          <MenuItems
            transition
            className={`absolute overflow-hidden ${
              locale === "en" ? "right-0" : "left-0"
            } z-10 mt-7 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
          >
            <div>
              {services.map((service) => {
                return (
                  <MenuItem key={service.name}>
                    <Link
                      href={service.href}
                      className={`${
                        locale === "en" ? "text-left" : "text-right"
                      } block px-4 py-3 text-base font-bold text-brand data-[focus]:bg-brand data-[focus]:text-white data-[focus]:outline-none`}
                    >
                      {service.name}
                    </Link>
                  </MenuItem>
                );
              })}
            </div>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative inline-block text-left">
          <div className="group overflow-hidden hover:-translate-y-1 duration-300">
            <MenuButton
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent ${
                scrolling
                  ? "text-brand hover:text-blue-800 font-bold"
                  : "text-white hover:text-gray-50 font-medium"
              }`}
            >
              {t("contact")}
              <ChevronDownIcon
                aria-hidden="true"
                className={`-mr-1 size-5 ${
                  scrolling
                    ? "text-brand hover:text-blue-800 font-bold"
                    : "text-white hover:text-gray-50 font-medium"
                }`}
              />
            </MenuButton>
            <div
              className={`p-[2px] ${
                scrolling ? "bg-blue-800" : "bg-white"
              } -translate-x-28 group-hover:translate-x-0 duration-500`}
            />
          </div>

          <MenuItems
            transition
            className={`absolute overflow-hidden ${
              locale === "en" ? "right-0" : "left-0"
            } z-10 mt-7 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
          >
            {contact.map((contact) => {
              return (
                <MenuItem key={contact.name}>
                  <Link
                    href={contact.href}
                    className={`${
                      locale === "en" ? "text-left" : "text-right"
                    } block px-4 py-3 text-base font-bold text-brand data-[focus]:bg-brand data-[focus]:text-white data-[focus]:outline-none`}
                  >
                    {contact.name}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuItems>
        </Menu>
        <Menu as="div">
          <MenuButton
            className={`${
              scrolling && "border-brand"
            } border p-2 cursor-pointer`}
          >
            <Globe className={`${scrolling ? "text-brand" : "text-white"}`} />
          </MenuButton>
          <MenuItems
            transition
            className={`absolute overflow-hidden ${
              locale === "en" ? "right-0" : "left-0"
            } z-10 mt-7 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
          >
            <div>
              <MenuItem
                onClick={() => {
                  setLanguageValue("en");
                }}
              >
                <div className="block px-4 py-3 font-bold text-base text-brand data-[focus]:bg-brand data-[focus]:text-white data-[focus]:outline-none hover:cursor-pointer">
                  {t("english")}
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setLanguageValue("ar");
                }}
              >
                <div className="block px-4 py-3 font-bold text-base text-brand data-[focus]:bg-brand data-[focus]:text-white data-[focus]:outline-none hover:cursor-pointer">
                  {t("arabic")}
                </div>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>

      <div className="flex lg:hidden">
        <Sidebar scrolling={scrolling} />
      </div>
    </div>
  );
}
