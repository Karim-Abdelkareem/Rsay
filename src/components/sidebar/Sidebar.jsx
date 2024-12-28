import { AlignJustify, Globe } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, DialogPanel } from "@headlessui/react";
import Cookies from "js-cookie";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import setLanguageValue from "@/actions/set-language-action";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Sidebar({ scrolling }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");

  const locale = Cookies.get("locale") || "en";
  const router = useRouter();

  const pages = [
    { name: t("pages.0.name"), href: "/" },
    { name: t("pages.1.name"), href: "/about" },
  ];

  const services = [
    { name: t("servicesObj.0.name"), href: t("servicesObj.0.href") },
    { name: t("servicesObj.1.name"), href: t("servicesObj.1.href") },
    { name: t("servicesObj.2.name"), href: t("servicesObj.2.href") },
    { name: t("servicesObj.3.name"), href: t("servicesObj.3.href") },
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
  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-6">
        <p
          className={` ${scrolling ? "text-brand" : "text-white "}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Menu
        </p>
        <AlignJustify
          className={`size-8 ${scrolling ? "text-brand" : "text-white "}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)]" />
        <button
          type="button"
          onClick={handleCloseMenu}
          className={`bg-white text-black fixed ${
            locale === "en"
              ? "right-0 md:top-0 -top-1 md:right-4"
              : "left-0 md:left-4 -top-1 md:top-0"
          } rounded-full p-[15px] m-[10px] top-0 z-[60] cursor-pointer`}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
        <DialogPanel className="fixed inset-y-0 z-50 w-full max-w-[35rem] overflow-y-auto bg-white sm:max-w-[35rem] sm:ring-1 sm:ring-gray-900/10">
          <div className="flow-root">
            <h1 className="text-3xl font-bold text-brand p-4 border-b-2">
              RSAY
            </h1>
            <div className="divide-y divide-gray-500/10">
              <div className="py-6 px-3">
                <Link
                  href="/"
                  className="text-brand font-bold p-6"
                  onClick={handleCloseMenu}
                >
                  {t("pages.0.name")}
                </Link>
              </div>
              <div className="py-6 px-3">
                <Link
                  href="/about"
                  className="text-brand font-bold p-6"
                  onClick={handleCloseMenu}
                >
                  {t("pages.1.name")}
                </Link>
              </div>
              <div className="px-3">
                <Accordion type="single" collapsible>
                  <AccordionItem value="service">
                    <AccordionTrigger className="text-base text-brand font-bold p-6">
                      {t("services")}
                    </AccordionTrigger>
                    {services.map((service) => {
                      return (
                        <AccordionContent key={service.name}>
                          <Link
                            href={service.href}
                            className="text-xs md:text-sm text-brand px-10 font-semibold"
                            onClick={handleCloseMenu}
                          >
                            {service.name}
                          </Link>
                        </AccordionContent>
                      );
                    })}
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="px-3">
                <Accordion type="single" collapsible>
                  <AccordionItem value="contact">
                    <AccordionTrigger className="text-base text-brand font-bold p-6">
                      {t("contact")}
                    </AccordionTrigger>
                    {contact.map((contact) => {
                      return (
                        <AccordionContent key={contact.name}>
                          <Link
                            href={contact.href}
                            className="text-brand px-10 font-semibold"
                            onClick={handleCloseMenu}
                          >
                            {contact.name}
                          </Link>
                        </AccordionContent>
                      );
                    })}
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="py-6 px-3">
                {locale === "en" ? (
                  <button
                    onClick={() => {
                      setLanguageValue("ar");
                      router.refresh();
                      handleCloseMenu();
                    }}
                    className="bg-brand text-white font-bold p-4 rounded-md flex gap-6 items-center"
                  >
                    {t("arabic")}
                    <Globe />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setLanguageValue("en");
                      router.refresh();
                      handleCloseMenu();
                    }}
                    className="bg-brand text-white font-bold p-4 rounded-md flex gap-6 items-center"
                  >
                    {t("english")}
                    <Globe />
                  </button>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
