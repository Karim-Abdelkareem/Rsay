import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import courses from "@/data/training-courses.json";
import coursesAr from "@/data/training-coursesAr.json";
import { useTranslations } from "next-intl";

const TrainingCourses = () => {
  const locale = Cookies.get("locale") || "en";
  const [courseToDisplay, setCourseToDisplay] = useState([]);

  useEffect(() => {
    setCourseToDisplay(locale === "en" ? courses : coursesAr);
  }, [locale]);

  return (
    <>
      <div className="hidden lg:block my-20 mx-4 md:mx-10">
        {courseToDisplay.map((course, index) => (
          <div
            key={course.id}
            id={course.id}
            className="flex flex-col md:flex-row gap-20 mb-10 border-b-2 py-10"
          >
            {index % 2 === 0 ? (
              <>
                <MotionDivWithInView index={index}>
                  <Image
                    src={course.image}
                    width={500}
                    height={400}
                    alt="..."
                    className="rounded-lg md:h-[400px] h-[300px] w-full"
                  />
                </MotionDivWithInView>
                <Content course={course} locale={locale} />
              </>
            ) : (
              <>
                <Content course={course} locale={locale} />
                <MotionDivWithInView index={index}>
                  <Image
                    src={course.image}
                    width={500}
                    height={400}
                    alt="..."
                    className="rounded-lg md:h-[400px] h-[300px] w-full"
                  />
                </MotionDivWithInView>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="block lg:hidden my-20 mx-4 md:mx-10">
        {courseToDisplay.map((course, index) => (
          <div
            key={course.id}
            id={course.id}
            className="flex flex-col gap-20 mb-10 border-b-2 py-10"
          >
            <MotionDivWithInView index={index}>
              <Image
                src={course.image}
                width={500}
                height={400}
                alt="..."
                className="rounded-lg md:h-[400px] h-[300px] w-full"
              />
            </MotionDivWithInView>
            <Content course={course} locale={locale} />
          </div>
        ))}
      </div>
    </>
  );
};

const MotionDivWithInView = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isInView ? 0 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      className="lg:w-[50%]"
    >
      {children}
    </motion.div>
  );
};

const Content = ({ course, locale }) => {
  const t = useTranslations("Services");

  const textDirection = locale === "en" ? "left" : "right";

  return (
    <MotionDivWithInView>
      <div className="lg:mt-16">
        <h2
          className={`uppercase text-black font-brush text-2xl text-center ${
            locale === "en" ? "lg:text-left lg:mx-0" : "lg:text-right lg:mx-0"
          } md:mx-20`}
        >
          {course.title}
        </h2>
        <p
          className={`mt-6 text-center lg:max-w-[90%] text-gray-600 ${
            locale === "en" ? "lg:text-left" : "lg:text-right"
          }`}
        >
          {course.description}
        </p>
        <div className="mt-10">
          <h3
            className={`uppercase text-black font-semibold text-center mx-auto text-xl ${
              locale === "en" ? "lg:text-left" : "lg:text-right"
            }`}
          >
            {t("most-popular")}
          </h3>
          <ul
            className={`list-disc ${
              locale === "en" ? "ml-10" : "mr-10"
            } mt-4 lg:max-w-[60%]`}
          >
            {course.popularCourses.map((item, i) => (
              <li key={i}>
                <span
                  className={`${
                    locale === "en"
                      ? "hover:translate-x-2"
                      : "hover:-translate-x-2"
                  } cursor-pointer hover:text-brand duration-300 inline-flex`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionDivWithInView>
  );
};

export default TrainingCourses;
