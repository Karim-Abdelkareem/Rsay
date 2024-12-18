"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const projects = [
  {
    id: "1",
    title: "Customized Training Programs",
    description: `Through collaboration with companies, we can design specialized 
training programs that meet your unique needs. We work to understand your requirements and provide 
tailored training solutions that enhance your employees' skills and achieve your strategic objectives.`,
    icon: "/Contact/training.png",
  },
  {
    id: "2",
    title: "Improving Employee Performance",
    description: `Our training programs are designed to enhance employee 
performance by providing the knowledge and skills necessary to keep pace with developments in their 
fields. This contributes to increasing work efficiency and productivity.`,
    icon: "/Contact/growth.png",
  },
  {
    id: "3",
    title: "Developing Organizational Culture",
    description: `By offering continuous training, we assist companies in fostering 
a culture of lifelong learning within the workplace. This motivates employees and increases their loyalty 
and commitment to the company’s goals. `,
    icon: "/Contact/environment.png",
  },
  {
    id: "4",
    title: "Meeting Changing Market Demands",
    description: ` In the face of rapid changes in the job market, partnerships with 
companies play a crucial role in continuously updating and developing training programs, ensuring that 
employees acquire the skills needed to adapt to new challenges.`,
    icon: "/Contact/economic.png",
  },
  {
    id: "5",
    title: "Enhancing Innovation",
    description: `Our training programs provide opportunities for employees to develop new 
    ideas and innovative solutions, contributing to driving innovation and growth within the company.`,
    icon: "/Contact/idea.png",
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
        <h1 className="text-white text-center font-brush text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Contact Us
        </h1>
        <h2 className="text-white text-center mx-4 lg:mx-0 font-brush text-xl md:text-2xl lg:text-4xl font-bold my-10">
          Invitation for Partnership with Companies in Training
        </h2>
        <p className="md:text-lg lg:text-2xl text-white text-center w-[80%] lg:w-[60%] mx-auto">
          Rasay expresses its desire to establish strategic partnerships with
          companies across various sectors to deliver specialized training
          programs aimed at enhancing the skills and competencies necessary to
          meet market challenges. We believe in the importance of collaboration
          with companies to achieve common goals in workforce development and
          improve institutional performance.
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-3xl md:text-5xl font-bold font-brush text-center -rotate-3 mb-8 md:w-[50%] mx-auto">
          Importance of Partnering with Rasay:
        </h2>
        <div className="my-10">
          <div className="max-w-7xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="w-full  md:max-w-[50%] px-4 md:ml-12 lg:ml-16 order-2 md:order-1">
            <h3 className="text-xl lg:text-3xl font-semibold">
              We invite you to explore collaboration opportunities with us and
              look forward to discussing how we can work together to achieve
              your goals and enhance the efficiency of your workforce.
            </h3>
            <p className="my-6 text-lg lg:text-2xl">
              If you represent a company and wish to learn more about our
              partnership, please do not hesitate to contact us using the
              information below.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/Contact/collaboration.jpg"
              alt="coll"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>

      {/* *************** */}
      <div className="w-full items-start flex flex-col md:flex-row bg-gray-50">
        <div className="flex-1 px-4 py-8 md:p-10 flex flex-col md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
            Let’s Talk <br /> We love to hear from You!
          </h2>
          <div className="my-16 hidden md:block">
            <p className="font-bold">
              Email, call or complete the form to get in touch with us!
            </p>
            <p className="my-2 text-gray-600 w-3/4">
              We&apos;re here to assist you. Reach out via email, give us a
              call, or fill out the form, and we&apos;ll respond promptly.
            </p>
            <div className="my-10">
              <div className="flex items-center gap-4 my-6">
                <Mail className="size-7" />
                <p className="hover:text-blue-500 hover:translate-x-2 duration-200 cursor-pointer">
                  info@rsaay.com
                </p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <PhoneCall className="size-7" />
                <p className="hover:text-blue-500 hover:translate-x-2 duration-200 cursor-pointer">
                  +966549851842
                </p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <PhoneCall className="size-7" />
                <p className="hover:text-blue-500 hover:translate-x-2 duration-200 cursor-pointer">
                  +966549851842
                </p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <MapPin className="size-6" />
                <p className="max-w-[40%]">
                  Abdul Samad Al-Tanoukhi Street, Al-Zahra District, Riyadh
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-white shadow-xl w-full md:w-1/2 p-4 flex flex-col justify-center md:p-6">
          {/* name */}
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              name="name"
              placeholder="enter name"
              type="text"
              required
            />
          </div>
          {/*  email */}
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder="enter email"
              type="email"
              name="email"
              required
            />
          </div>
          {/*  phone */}
          <div className="flex flex-col">
            <label htmlFor="">Phone</label>
            <input
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder="phone number"
              type="text"
              name="phone"
              required
            />
          </div>
          {/* site */}
          <div className="flex flex-col">
            <label htmlFor="">Site</label>
            <input
              name="site"
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder="Site"
              type="text"
              required
            />
          </div>
          {/* role */}
          <div className="flex flex-col">
            <label htmlFor="">Role</label>
            <input
              name="role"
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder="role"
              type="text"
              required
            />
          </div>
          {/* message */}
          <div className="flex flex-col">
            <label htmlFor="">Message</label>
            <textarea
              className="my-2 p-3 border-2 border-gray-200 rounded-sm"
              placeholder="message"
              name="message"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          {/* submit */}
          <button className="flex items-center gap-3 w-1/4 justify-center my-2 p-3  text-white bg-gradient-to-r from-primary to-blue-500 rounded-xl hover:bg-primary cursor-pointer hover:scale-105 duration-500">
            Send
            <Send />
          </button>
        </form>
      </div>
    </>
  );
}
