"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import services from "../data/services";
import servicesAr from "../data/servicesAr";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Download, MoveLeft, MoveRight } from "lucide-react";
import { ContactDialog } from "@/components/contactDialog/ContactDialog";
import { FlipWords } from "@/components/ui/flip-words";
import Loader from "@/components/loader/Loader";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import FramerMagnetic from "@/components/ui/framer";
import { useRouter } from "next/navigation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Typewriter from "typewriter-effect";

export default function Home() {
  const router = useRouter();
  const locale = Cookies.get("locale") || "en";
  const t = useTranslations("HomePage");
  const [servicesToDisplay, setServicesToDisplay] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (locale === "en") {
      setServicesToDisplay(services);
    } else {
      setServicesToDisplay(servicesAr);
    }
  }, [locale]);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [locale]);

  // Separate states and refs for "Our Services" and "Who Are We" sections
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isWhoAreWeVisible, setIsWhoAreWeVisible] = useState(false);

  const servicesRef = useRef(null);
  const whoAreWeRef = useRef(null);

  // Intersection observer for "Our Services"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  // Intersection observer for "Who Are We"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsWhoAreWeVisible(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    if (whoAreWeRef.current) {
      observer.observe(whoAreWeRef.current);
    }

    return () => {
      if (whoAreWeRef.current) {
        observer.unobserve(whoAreWeRef.current);
      }
    };
  }, []);

  const motionSettingsServices = {
    initial: { opacity: 0, y: 30 },
    animate: isServicesVisible ? { opacity: 1, y: 0 } : { opacity: 0 },
    transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
  };

  const motionSettingsWhoAreWe = {
    initial: { opacity: 0, x: -30 },
    animate: isWhoAreWeVisible ? { opacity: 1, x: 0 } : { opacity: 0 },
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
  };
  const motionSettingsWhoAreWeImage = {
    initial: { opacity: 0, x: 30 },
    animate: isWhoAreWeVisible ? { opacity: 1, x: 0 } : { opacity: 0 },
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
  };

  const flipWords = [t("filpwords.0"), t("filpwords.1")];

  const words = [
    {
      text: t("title"),
      className: "text-white text-5xl md:text-8xl",
    },
  ];
  const subwords = `      ${t("subtitle")}`;
  const subwords2 = `          ${t("description")}`;

  return (
    <>
      {/* Background Image */}
      <div className="absolute h-[45rem] lg:h-full -z-10">
        <div className="absolute top-0 w-full h-[45rem] lg:h-screen bg-black/70 "></div>
        <Image
          src="/Home/bg.jpg"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-[45rem] lg:h-screen object-cover "
        />
      </div>

      {/* Header Section */}
      <div className="px-6 lg:px-0 py-32 text-white lg:justify-around w-full flex flex-col lg:flex-row h-[45rem] lg:h-screen">
        <div className="lg:w-1/2">
          <h4 className="text-white text-sm md:text-lg lg:text-xl">
            {`${t("filpwords.0")} | ${t("filpwords.1")}`}
          </h4>

          {/* <FlipWords
            words={flipWords}
            className="text-white text-sm md:text-lg lg:text-4xl font-bold"
            duration={4000}
          /> */}
          <div className="flex gap-6 items-center">
            {/* <TypewriterEffectSmooth words={words} className="font-brush" /> */}
            {/* <div
              className={`${
                locale === "ar" ? "font-sans" : "font-brush"
              } font-bold text-6xl md:text-8xl my-8`}
            >
              <Typewriter
                options={{
                  strings: [t("title")],
                  autoStart: true,
                  loop: true,
                  pauseFor: 20000,
                }}
              />
            </div> */}
            <motion.div
              className="flex mt-8 gap-8 text-6xl md:text-8xl my-4"
              initial={{ opacity: 0, x: locale === "en" ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
            >
              <p
                className={`font-bold ${
                  locale === "en" ? "font-brush" : "font-sans"
                }`}
              >
                {t("title")}
              </p>
              <span className="animate-pulse text-brand">|</span>
            </motion.div>
          </div>
          <TextGenerateEffect
            key={`subwords-${animationKey}`}
            words={subwords}
            className={`text-2xl md:text-5xl text-white font-brush ${
              locale === "en" && "-rotate-2"
            } `}
          />
          <TextGenerateEffect
            key={`subwords2-${animationKey}`}
            words={subwords2}
            duration={0.5}
            className="text-base md:text-xl text-white"
          />
          <motion.div
            className="flex mt-8 gap-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 6, duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/contact/universities">
              <button
                className="text-sm md:text-base bg-transparent hover:bg-white text-white hover:text-blue-500 font-bold px-3 md:px-6 py-3 border rounded-sm"
                aria-label="Start Now"
              >
                {t("start-now")}
              </button>
            </Link>
            <Link href="/about">
              <button
                className="text-sm md:text-base bg-brand hover:bg-white text-white hover:text-blue-500 font-bold px-3 md:px-6 py-3 hover:border rounded-sm"
                aria-label="Learn More"
              >
                {t("learn-more")}
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="flex mt-8 gap-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
        >
          <div className="hidden lg:flex items-center justify-center">
            <Loader />
          </div>
        </motion.div>
        {/* <Image
          src="/Contact/Animation.gif"
          alt="animation"
          width={400}
          height={400}
        /> */}
      </div>

      {/* Our Services Section */}
      <motion.div {...motionSettingsServices}>
        <div className="px-6 lg:px-0 my-10 lg:my-24 text-black lg:container lg:mx-auto w-full flex flex-col items-center justify-center">
          <div ref={servicesRef} className="relative">
            <div className="flex flex-col mx-auto items-center">
              <h1
                className={`text-4xl font-bold font-brush ${
                  locale == "en"
                    ? "-rotate-3 md:text-5xl"
                    : "rotate-0 md:text-7xl"
                } mb-8`}
              >
                {t("our-services")}
              </h1>
              <p
                className={`${
                  locale == "en" ? "text-lg" : "text-3xl font-medium"
                } my-10 max-w-[680px] text-center`}
              >
                {t("our-services-description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {servicesToDisplay.map((Service, i) => (
              <div
                key={i}
                className="bg-white rounded-md shadow-md border p-6 hover:shadow-[10px 10px 10px rgba(0)] hover:-translate-x-2 hover:-translate-y-2 hover:bg-blue-700 hover:text-white duration-500 group"
              >
                <Image src={Service.icon} alt="icon" width={50} height={100} />
                <h3 className="text-xl font-bold h-20 my-2">{Service.title}</h3>
                <p className="line-clamp-3 my-2">{Service.details}</p>
                <div className={`${locale == "en" && "-rotate-3"} mb-4`}>
                  <Link
                    href={Service.href}
                    className={`flex items-center gap-2 w-fit font-brush font-semibold duration-150 text-brand hover:border-b-4 border-white  group-hover:text-white`}
                  >
                    {t("learn-more")}
                    {locale === "ar" ? (
                      <MoveLeft className={`size-5`} />
                    ) : (
                      <MoveRight className={`size-5`} />
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Who Are We Section */}
      <div className="mt-36 py-16 text-black w-full flex flex-col lg:flex-row items-start justify-between bg-gray-50 overflow-hidden">
        <motion.div
          ref={whoAreWeRef}
          className="flex flex-col md:mx-20 lg:w-1/2 order-2 lg:order-1 text-center lg:text-start"
          {...motionSettingsWhoAreWe}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-brush">
            {t("who-we-are")}
          </h1>
          <div className="my-10">
            <p className="text-lg md:text-2xl max-w-[680px]">
              {t("who-we-are-description")}
            </p>
          </div>
          <Link
            href="/about"
            className={`font-brush mx-auto lg:mx-0 group ${
              locale == "en" && "-rotate-3"
            } hover:border-b-4 border-blue-700 font-semibold text-blue-700 flex gap-2 items-center w-fit hover:scale-110 duration-300`}
            aria-label="Learn more about who we are"
          >
            {t("learn-more")}
            {locale === "ar" ? (
              <MoveLeft className={`size-5 group-hover:mr-1`} />
            ) : (
              <MoveRight className={`size-5 group-hover:ml-1`} />
            )}
          </Link>
        </motion.div>
        <motion.div
          ref={whoAreWeRef}
          className="lg:w-1/2 mx-auto order-1 lg:order-2"
          {...motionSettingsWhoAreWeImage}
        >
          <Image
            src="/Home/rsay-logo-Photoroom.png"
            alt="RSAAY ITC Logo"
            width={400}
            height={400}
            className="mx-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
      <div className="flex justify-center my-14 items-center">
        <FramerMagnetic>
          <Link
            href="https://drive.usercontent.google.com/download?id=12FzQVQR1s5IXB3HCKLG9t8dC_mMx3NYI&export=download&pli=1&authuser=0"
            download="rsay-profile"
          >
            <button className="flex flex-col justify-center items-center gap-2 md:p-5 p-3 w-[200px] h-[200px] rounded-full cursor-pointer font-semibold text-black text-2xl  text-wrap border shadow-stone-950 bg-transparent bg-white transition-all duration-300 border-stone-900">
              {t("download")}
              <Image
                src={"/Home/cloud.gif"}
                alt=""
                width={64}
                height={64}
                className="hidden md:block"
                unoptimized
              />
              <Image
                src={"/Home/mobile.gif"}
                alt=""
                width={64}
                height={64}
                className="block md:hidden"
                unoptimized
              />
              {/* <Download /> */}
            </button>
          </Link>
        </FramerMagnetic>
      </div>

      {/* Our Customer */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl text-center font-bold font-brush">
          {t("ourCustomer")}
        </h1>
        <p className="text-center my-8 text-xl max-w-3xl">
          {t("ourCustomerObj")}
        </p>
        <p className="text-brand text-center font-bold">{t("join")}</p>
        <div className="my-6" style={{ direction: "ltr" }}>
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
}

const testimonials = [
  {
    image: "/Sponsers/alsemo.jpg",
    name: "alsemo",
    link: "https://al-semo.com/",
  },
  {
    image: "/Sponsers/ejad.jpg",
    name: "ejad",
    link: "https://ejadtech.sa/",
  },
  {
    image: "/Sponsers/modon.jpg",
    name: "modon",
    link: "https://modon.gov.sa/en/Pages/default.aspx",
  },
  {
    image: "/Sponsers/mora.jpg",
    name: "Mora",
    link: "https://morafinance.com/",
  },
  {
    image: "/Sponsers/TOQ.jpg",
    name: "TOQ",
    link: "https://toq.sa/en",
  },
];
