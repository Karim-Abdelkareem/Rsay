"use client";
import Link from "next/link";
import { React, useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../logo/Logo";

export default function Header() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
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
      <div className="gap-4 hidden lg:flex items-baseline">
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
          <div>
            <MenuButton
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent ${
                scrolling
                  ? "text-brand hover:text-blue-800 font-bold"
                  : "text-white hover:text-gray-50 font-medium"
              }  `}
            >
              Serivces
              <ChevronDownIcon
                aria-hidden="true"
                className={`-mr-1 size-5 ${
                  scrolling
                    ? "text-brand hover:text-blue-800"
                    : "text-white hover:text-gray-50"
                } font-bold `}
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-7 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Account settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Support
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  License
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent ${
                scrolling
                  ? "text-brand hover:text-blue-800 font-bold"
                  : "text-white hover:text-gray-50 font-medium"
              }`}
            >
              Contact Us
              <ChevronDownIcon
                aria-hidden="true"
                className={`-mr-1 size-5 ${
                  scrolling
                    ? "text-brand hover:text-blue-800 font-bold"
                    : "text-white hover:text-gray-50 font-medium"
                }`}
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-7 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  href="/contact/companies"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  For Companies
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  For Universities
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>

      {/* <div className="flex lg:hidden">
        <Menu
          className={`size-8 ${scrolling ? "text-black" : "text-white "}`}
        />
      </div> */}
    </div>
  );
}
