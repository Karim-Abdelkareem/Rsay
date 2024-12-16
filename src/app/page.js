"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import services from "../data/services";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";
import { ContactDialog } from "@/components/contactDialog/ContactDialog";

export default function Home() {
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
    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
  };
  const motionSettingsWhoAreWeImage = {
    initial: { opacity: 0, x: 30 },
    animate: isWhoAreWeVisible ? { opacity: 1, x: 0 } : { opacity: 0 },
    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
  };

  const words = [{ text: "Rsaay", className: "text-blue-700" }];
  const subwords = "      Information Technology Company";
  const subwords2 =
    "          RSAY ITC offers professional training with internationally accredited certificates through courses aligned with market needs. We provide flexible learning options, either online or in equipped classrooms, with interactive content and practical training to ensure easy success.";

  return (
    <>
      {/* Background Video */}
      <div className="absolute h-full -z-10">
        <div className="absolute top-0 w-full h-screen bg-black/70"></div>
        <Image
          src="/Home/bg.jpg"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Header Section */}
      <div className="py-40 text-white container mx-auto w-full flex">
        <div className="md:w-1/2">
          <h4 className="text-white text-xl">
            Knowledge | Skill | Quality | Impact
          </h4>
          <TypewriterEffectSmooth words={words} />
          <TextGenerateEffect
            words={subwords}
            className="text-5xl text-white"
          />
          <TextGenerateEffect
            words={subwords2}
            className="text-xl text-white"
          />
          <motion.div
            className="flex mt-8 gap-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 8, duration: 0.5, ease: "easeOut" }}
          >
            <button
              className="bg-transparent hover:bg-white text-white hover:text-blue-500 font-bold px-6 py-3 border rounded-sm"
              aria-label="Start Now"
            >
              Start Now
            </button>
            <button
              className="bg-blue-700 hover:bg-white text-white hover:text-blue-500 font-bold px-6 py-3 hover:border rounded-sm"
              aria-label="Learn More"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="my-36 text-black container mx-auto w-full flex flex-col items-center justify-center">
        <div ref={servicesRef} className="relative">
          <motion.div
            className="flex flex-col mx-auto items-center"
            {...motionSettingsServices}
          >
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="text-lg my-10 max-w-[680px] text-center">
              We provide professional training with internationally accredited
              certificates through courses aligned with market needs.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {services.map((Service, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-md border p-4 hover:shadow-[10px 10px 10px rgba(0)] hover:-translate-x-2 hover:-translate-y-2 hover:bg-blue-700 hover:text-white duration-500 group"
            >
              <Image src={Service.icon} alt="icon" width={50} height={100} />
              <h3 className="text-xl font-bold h-20 my-2">{Service.title}</h3>
              <p className="line-clamp-3 my-2">{Service.details}</p>
              <Link
                href={Service.href || ""}
                className="font-semibold text-blue-700 group-hover:text-white"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Who Are We Section */}
      <div className="mt-36 py-16 text-black w-full flex items-start justify-between bg-gray-50 overflow-hidden">
        <motion.div
          ref={whoAreWeRef}
          className="flex flex-col md:mx-20 w-1/2"
          {...motionSettingsWhoAreWe}
        >
          <h1 className="text-5xl font-bold">Who Are We?</h1>
          <div className="my-10">
            <p className="text-2xl max-w-[680px]">
              RSAY ITC offers professional training with internationally
              accredited certificates through courses aligned with market needs.
              We provide flexible learning options, either online or in equipped
              classrooms, with interactive content and practical training to
              ensure easy success.
            </p>
          </div>
          <Link
            href={""}
            className="font-semibold text-blue-700 flex gap-2 items-center w-fit hover:scale-110 duration-300"
            aria-label="Learn more about who we are"
          >
            Learn More
            <MoveRight />
          </Link>
        </motion.div>
        <motion.div
          ref={whoAreWeRef}
          className="w-1/2"
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
    </>
  );
}
