"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Customized Training Programs",
    description: `Through collaboration with companies, we can design specialized 
training programs that meet your unique needs. We work to understand your requirements and provide 
tailored training solutions that enhance your employees' skills and achieve your strategic objectives.`,
    link: "https://stripe.com",
  },
  {
    title: "Improving Employee Performance",
    description: `Our training programs are designed to enhance employee 
performance by providing the knowledge and skills necessary to keep pace with developments in their 
fields. This contributes to increasing work efficiency and productivity.`,
    link: "https://netflix.com",
  },
  {
    title: "Developing Organizational Culture",
    description: `By offering continuous training, we assist companies in fostering 
a culture of lifelong learning within the workplace. This motivates employees and increases their loyalty 
and commitment to the company’s goals. `,
    link: "https://google.com",
  },
  {
    title: "Meeting Changing Market Demands",
    description: ` In the face of rapid changes in the job market, partnerships with 
companies play a crucial role in continuously updating and developing training programs, ensuring that 
employees acquire the skills needed to adapt to new challenges.`,
    link: "https://meta.com",
  },
  {
    title: "Enhancing Innovation",
    description: `Our training programs provide opportunities for employees to develop new 
ideas and innovative solutions, contributing to driving innovation and growth within the company.`,
    link: "https://amazon.com",
  },
];

export default function page() {
  return (
    <>
      <div className="absolute w-full h-[40rem] -z-10">
        <div className="absolute top-0 w-full h-[40rem] bg-black/60"></div>
        <Image
          src="/Contact/companies.png"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-[40rem] object-cover"
        />
      </div>
      <div className="py-40">
        <h1 className="text-white text-center font-brush text-6xl font-extrabold">
          Contact Us
        </h1>
        <h2 className="text-white text-center font-brush text-4xl font-bold my-10">
          Invitation for Partnership with Companies in Training
        </h2>
        <p className="text-2xl text-white text-center lg:w-[60%] mx-auto">
          Rasay expresses its desire to establish strategic partnerships with
          companies across various sectors to deliver specialized training
          programs aimed at enhancing the skills and competencies necessary to
          meet market challenges. We believe in the importance of collaboration
          with companies to achieve common goals in workforce development and
          improve institutional performance.
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-4xl md:text-5xl font-bold font-brush text-center -rotate-3 mb-8 w-[50%] mx-auto">
          Importance of Partnering with Rasay:
        </h2>
        <div className="my-10">
          <div className="max-w-7xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
