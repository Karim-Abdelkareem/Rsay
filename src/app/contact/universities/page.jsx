"use client";
import { HoverEffectUni } from "@/components/ui/card-hover-effect-uni";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contactForm/ContactForm";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import contactUni from "@/data/contact-universities";
import contactUniAr from "@/data/contact-universitiesAr";

export default function Page() {
  const t = useTranslations("contact");
  const locale = Cookies.get("locale");
  const dataToDisplay = locale === "en" ? contactUni : contactUniAr;
  const [isPartneringVisible, setIsPartneringVisible] = useState(false);
  const [isCollaboratingVisible, setIsCollaboratingVisible] = useState(false);

  const partneringRef = useRef(null);
  const collaboratingRef = useRef(null);

  useEffect(() => {
    const currentRef = partneringRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPartneringVisible(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [partneringRef]);

  // Intersection observer for "Collaborating"
  useEffect(() => {
    const currentRef = collaboratingRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCollaboratingVisible(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [collaboratingRef]);

  const motionSettingsPartnering = {
    initial: { opacity: 0, y: 30 },
    animate: isPartneringVisible ? { opacity: 1, y: 0 } : { opacity: 0 },
    transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
  };

  const motionSettingsCollaborating = {
    initial: { opacity: 0, x: -30 },
    animate: isCollaboratingVisible ? { opacity: 1, x: 0 } : { opacity: 0 },
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
  };
  const motionSettingsCollaboratingImage = {
    initial: { opacity: 0, x: 30 },
    animate: isCollaboratingVisible ? { opacity: 1, x: 0 } : { opacity: 0 },
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <div className="absolute w-full h-[40rem] -z-10">
        <div className="absolute top-0 w-full h-[40rem] bg-black/60"></div>
        <Image
          src="/Contact/univeristies.png"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-[40rem] object-cover"
        />
      </div>
      <div className="py-40 h-screen">
        <h1 className="text-white text-center font-brush text-4xl md:text-5xl lg:text-6xl font-extrabold">
          {t("contact-us")}
        </h1>
        <h2 className="text-white text-center mx-4 lg:mx-0 font-brush text-xl md:text-2xl lg:text-4xl font-bold my-10">
          {t("partnering-uni")}
        </h2>
        <p className="md:text-lg lg:text-2xl text-white text-center w-[80%] lg:w-[60%] mx-auto">
          {t("partnering-uni-description")}
        </p>
      </div>
      <div ref={partneringRef}>
        <motion.div {...motionSettingsPartnering}>
          <h2
            className={`text-3xl md:text-5xl font-bold font-brush text-center ${
              locale === "en" ? "-rotate-3" : ""
            } mb-8 md:w-[50%] mx-auto`}
          >
            {t("why")}
          </h2>
          <div className="my-10">
            <div className="max-w-7xl mx-auto px-8">
              <HoverEffectUni items={dataToDisplay} />
            </div>
          </div>
        </motion.div>

        <div
          ref={collaboratingRef}
          className="flex justify-between flex-col md:flex-row items-center"
        >
          <div className="w-full  md:max-w-[50%] px-4 md:ml-12 lg:ml-16 order-2 md:order-1">
            <motion.div {...motionSettingsCollaborating}>
              <h3 className="text-xl lg:text-3xl font-semibold">
                {t("invite")}
              </h3>
              <p className="my-6 text-lg lg:text-2xl">
                {t("invite-description")}
              </p>
            </motion.div>
          </div>
          <div className="order-1 md:order-2">
            <motion.div {...motionSettingsCollaboratingImage}>
              <Image
                src="/Contact/collaboration.jpg"
                alt="coll"
                width={800}
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* *************** */}
      <ContactForm />
    </>
  );
}
