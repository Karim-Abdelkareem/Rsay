"use client";
import Link from "next/link";
import { React, useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../logo/Logo";
import { Globe } from "lucide-react";
import setLanguageValue from "@/actions/set-language-action";
import Sidebar from "../sidebar/Sidebar";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Header() {
  const t = useTranslations("Header");
  const tCourses = useTranslations("Services");
  const router = useRouter();

  const locale = Cookies.get("locale");

  const pages = [
    { name: t("pages.0.name"), href: "/" },
    { name: t("pages.1.name"), href: "/about" },
  ];

  const services = [
    { name: t("servicesObj.0.name"), href: t("servicesObj.0.href") },
    { name: t("servicesObj.1.name"), href: t("servicesObj.1.href") },
    { name: t("servicesObj.2.name"), href: t("servicesObj.2.href") },
  ];

  const courses = [
    { name: t("servicesObj.3.name"), href: t("servicesObj.3.href") },
    {
      name: tCourses("coursess.0.title"),
      href: tCourses("coursess.0.href"),
    },
    {
      name: tCourses("coursess.1.title"),
      href: tCourses("coursess.1.href"),
    },
    {
      name: tCourses("coursess.2.title"),
      href: tCourses("coursess.2.href"),
    },
    {
      name: tCourses("coursess.3.title"),
      href: tCourses("coursess.3.href"),
    },
    {
      name: tCourses("coursess.4.title"),
      href: tCourses("coursess.4.href"),
    },
    {
      name: tCourses("coursess.5.title"),
      href: tCourses("coursess.5.href"),
    },
    {
      name: tCourses("coursess.6.title"),
      href: tCourses("coursess.6.href"),
    },
    {
      name: tCourses("coursess.7.title"),
      href: tCourses("coursess.7.href"),
    },
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
        scrolling ? "bg-white shadow-2xl" : "bg-transparent"
      } fixed w-full top-0 left-0 z-50`}
    >
      <Link href={"/"}>
        <Logo scrolling={scrolling} />
      </Link>
      <div className="gap-4 hidden text-lg font-semibold lg:flex items-center">
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

        {/* SERVICES MENU */}

        <Menu as="div" className="relative inline-block text-left">
          <div className="group overflow-hidden hover:-translate-y-1 duration-300">
            <MenuButton
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent ${
                scrolling
                  ? "text-brand hover:text-blue-800 font-bold"
                  : "text-white hover:text-gray-50 font-bold"
              }  `}
            >
              {t("services")}
              <ChevronDownIcon
                aria-hidden="true"
                className={`-mr-1 size-6 ${
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
              locale === "en" ? "right-[-340px]" : "left-[-340px]"
            } z-10 mt-7 w-[900px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
          >
            <div className="flex gap-4">
              <div>
                <p
                  className={`${
                    locale === "en" ? "text-left" : "text-right"
                  } text-brand px-4 py-3`}
                >
                  {t("services")} :
                </p>
                {services.map((service) => {
                  return (
                    <MenuItem key={service.name}>
                      <Link
                        href={service.href}
                        className={`${
                          locale === "en" ? "text-left" : "text-right"
                        } block px-4 py-3 text-base font-bold text-brand data-[focus]:text-brand-dark data-[focus]:outline-none`}
                      >
                        {service.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </div>
              <div className="flex-1">
                <p
                  className={`${
                    locale === "en" ? "text-left" : "text-right"
                  } text-brand px-4 py-3`}
                >
                  {t("courses")} :
                </p>
                {courses.map((course) => {
                  return (
                    <MenuItem key={course.name}>
                      <Link
                        href={course.href}
                        className={`${
                          locale === "en" ? "text-left" : "text-right"
                        } block px-4 py-3 text-base font-bold text-brand data-[focus]:text-brand-dark data-[focus]:outline-none`}
                      >
                        {course.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </div>
            </div>
          </MenuItems>
        </Menu>
      </div>
      {/* ********************************************** */}
      <div className="items-center gap-5 hidden lg:flex">
        <Menu as="div" className="relative inline-block text-left">
          <div className="group overflow-hidden hover:-translate-y-1 duration-300">
            <MenuButton
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent ${
                scrolling
                  ? "text-brand hover:text-blue-800 font-bold"
                  : "text-white hover:text-gray-50 font-bold"
              }`}
            >
              {t("contact")}
              <ChevronDownIcon
                aria-hidden="true"
                className={`-mr-1 size-6 ${
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
                  router.refresh();
                }}
              >
                <div className="block px-4 py-3 font-bold text-base text-brand data-[focus]:bg-brand data-[focus]:text-white data-[focus]:outline-none hover:cursor-pointer">
                  {t("english")}
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setLanguageValue("ar");
                  router.refresh();
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

      <div className="flex items-center gap-4 lg:hidden">
        <Sidebar scrolling={scrolling} />
      </div>
    </div>
  );
}
