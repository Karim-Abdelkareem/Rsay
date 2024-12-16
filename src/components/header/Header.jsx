"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { React, useState, useEffect } from "react";

export default function Header() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contactus" },
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
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold text-blue-600">Rsay </h1>
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
      <div className="gap-4 hidden lg:flex">
        {pages.map((page, i) => (
          <div
            key={i}
            className="group overflow-hidden hover:-translate-y-1 duration-300"
          >
            <Link
              href={page.href}
              className=" text-blue-700 font-bold hover:text-blue-800"
            >
              {page.name}
            </Link>
            <div className="p-[2px] bg-blue-800 -translate-x-28 group-hover:translate-x-0 duration-500" />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden">
        <Menu
          className={`size-8 ${scrolling ? "text-black" : "text-white "}`}
        />
      </div>
    </div>
  );
}
