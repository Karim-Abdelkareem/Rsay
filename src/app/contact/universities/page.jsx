"use client";
import { HoverEffectUni } from "@/components/ui/card-hover-effect-uni";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";

const projects = [
  {
    id: "1",
    title: "Achieving Academic Excellence",
    description: `We strive to offer training programs aligned with the latest 
developments in business and technology. By partnering with universities, we can integrate academic 
knowledge with practical experience, contributing to comprehensive educational offerings.`,
    icon: "/Contact/academic.png",
  },
  {
    id: "2",
    title: "Meeting Job Market Needs",
    description: `Through our collaboration with universities, we gain insights into the 
actual requirements of the job market and develop training programs that meet those needs. We work to 
prepare trainees to align with the demands of modern jobs.`,
    icon: "/Contact/internet-marketing.png",
  },
  {
    id: "3",
    title: "Enhancing Trainer Skills",
    description: ` Our partnership with universities allows us to enhance trainers’ skills 
through joint workshops and advanced training programs, ensuring the delivery of high-quality training 
content that aligns with the latest trends in education and training.`,
    icon: "/Contact/coaching.png",
  },
  {
    id: "4",
    title: "Enhancing Practical Experiences",
    description: `We aim to provide opportunities for students to engage in hands-on 
projects and field training through our partnerships with universities, granting them valuable practical 
experience and enhancing their future employment prospects.`,
    icon: "/Contact/mindset.png",
  },
];

export default function page() {
  const [isPartneringVisible, setIsPartneringVisible] = useState(false);
  const [isCollaboratingVisible, setIsCollaboratingVisible] = useState(false);

  const partneringRef = useRef(null);
  const collaboratingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPartneringVisible(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    if (partneringRef.current) {
      observer.observe(partneringRef.current);
    }

    return () => {
      if (partneringRef.current) {
        observer.unobserve(partneringRef.current);
      }
    };
  }, []);

  // Intersection observer for "Collaborating"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCollaboratingVisible(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    if (collaboratingRef.current) {
      observer.observe(collaboratingRef.current);
    }

    return () => {
      if (collaboratingRef.current) {
        observer.unobserve(collaboratingRef.current);
      }
    };
  }, []);

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
      <div className="py-40">
        <h1 className="text-white text-center font-brush text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Contact Us
        </h1>
        <h2 className="text-white text-center mx-4 lg:mx-0 font-brush text-xl md:text-2xl lg:text-4xl font-bold my-10">
          Partnership Invitation with Universities{" "}
        </h2>
        <p className="md:text-lg lg:text-2xl text-white text-center w-[80%] lg:w-[60%] mx-auto">
          Rasay is pleased to invite universities and academic institutions to
          collaborate with us in providing advanced and professional training
          programs. We believe in the importance of strategic partnerships in
          enhancing the quality of education and vocational training.
          Collaborating with universities presents a unique opportunity to
          achieve our shared goals of developing a qualified workforce that
          meets the changing needs of the job market.
        </p>
      </div>
      <div className="my-10" ref={partneringRef}>
        <motion.div {...motionSettingsPartnering}>
          <h2 className="text-3xl md:text-5xl font-bold font-brush text-center -rotate-3 mb-8 md:w-[50%] mx-auto">
            Why Partner with Rsay?
          </h2>
          <div className="my-10">
            <div className="max-w-7xl mx-auto px-8">
              <HoverEffectUni items={projects} />
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
                We invite you to explore collaboration opportunities with us,
                and we look forward to discussing how we can work together to
                achieve our mutual goals.
              </h3>
              <p className="my-6 text-lg lg:text-2xl">
                If you represent a university or academic institution and wish
                to learn more about our partnership, please do not hesitate to
                contact us.
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
      <div className="w-full items-start flex flex-col md:flex-row bg-gray-50 border-t-2">
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
