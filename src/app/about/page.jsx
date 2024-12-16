import { BackgroundBeams } from "@/components/ui/background-beams";
import { StarsBackground } from "@/components/ui/stars-background";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="min-h-[40rem] py-32 w-full bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="relative z-[2] w-1/2 rounded bg-black overflow-hidden">
        <div className="left-0 top-0 flex h-6 w-full items-center space-x-2 px-4 bg-[#464848]">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="h-4" />
        <div className="font-vt323 text-green-400 p-4">
          <div className="flex  items-center">
            <ChevronRight />
            <h1 className="font-bold text-whit text-2xl">Who Are We?</h1>
          </div>
          <div className=" my-4">
            <h1 className="text-2xl font-bold italic underline underline-offset-4 my-2">
              Our Story
            </h1>
            <p className="text-lg">
              A leading Saudi company specializing in professional education
              services across various fields, including cybersecurity, quality
              management, and risk management, along with other technical
              disciplines. We offer flexible learning solutions, allowing you to
              choose between online learning or attending sessions in
              state-of-the-art training facilities. This enables ambitious
              individuals to enhance their skills and grow their expertise while
              aligning their learning journey with their passion and schedule.
            </p>
          </div>
          <div className=" my-4">
            <h1 className="text-2xl font-bold italic underline underline-offset-4 my-2">
              Our Vision
            </h1>
            <p className="text-lg">
              To be Rsay first choice for professional education and development
              in the Arab world by offering innovative training programs and
              internationally accredited certificates that meet market needs and
              contribute to building professional competencies capable of
              achieving sustainable success.
            </p>
          </div>
          <div className=" my-4">
            <h1 className="text-2xl font-bold italic underline underline-offset-4 my-2">
              Our Mession
            </h1>
            <p className="text-lg">
              At Rsay, we are committed to empowering individuals to achieve
              their professional ambitions and develop their skills by providing
              flexible and comprehensive educational services, supported by
              local and global expertise, to ensure a holistic learning
              experience that enhances efficiency and professionalism in
              evolving work environments.
            </p>
          </div>
        </div>
      </div>
      {/* <StarsBackground /> */}
      <BackgroundBeams />
    </div>
  );
}
