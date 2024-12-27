"use client";
import ServicesIcons from "@/components/servicesIcons/ServicesIcons";
import TrainingCourses from "@/components/trainingCourses/TrainingCourses";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("Services");
  const courses = [
    {
      title: t("coursess.0.title"),
      image: t("coursess.0.image"),
      description: t("coursess.0.description"),
    },
    {
      title: t("coursess.1.title"),
      image: t("coursess.1.image"),
      description: t("coursess.1.description"),
    },
    {
      title: t("coursess.2.title"),
      image: t("coursess.2.image"),
      description: t("coursess.2.description"),
    },
    {
      title: t("coursess.3.title"),
      image: t("coursess.3.image"),
      description: t("coursess.3.description"),
    },
    {
      title: t("coursess.4.title"),
      image: t("coursess.4.image"),
      description: t("coursess.4.description"),
    },
    {
      title: t("coursess.5.title"),
      image: t("coursess.5.image"),
      description: t("coursess.5.description"),
    },
    {
      title: t("coursess.6.title"),
      image: t("coursess.6.image"),
      description: t("coursess.6.description"),
    },
    {
      title: t("coursess.7.title"),
      image: t("coursess.7.image"),
      description: t("coursess.7.description"),
    },
  ];

  return (
    <>
      <div className="absolute h-[40rem] w-full -z-10 ">
        <div className="absolute top-0 w-full h-[40rem] bg-black/70 "></div>
        <Image
          src="/Services/training.jpeg"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-[40rem] object-cover "
        />
      </div>
      <div className="px-6 lg:px-0 py-32 lg:justify-around w-full flex flex-col gap-10 items-center h-[40rem] ">
        <ServicesIcons />
        <h1 className="uppercase text-white font-brush text-3xl md:text-7xl max-w-5xl text-center">
          {t("at-rsay")}
        </h1>
        <p className="text-center text-white font-medium text-xl max-w-2xl">
          {t("at-rsay-description")}
        </p>
      </div>

      <div className="mt-20">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-5xl font-bold`}
        >
          {t("courses")}
        </h2>
        <TrainingCourses />

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10 my-16">
          {courses.map((course, i) => {
            return (
              <div
                key={i}
                className="border-2 rounded-lg overflow-hidden group shadow-xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src={course.image}
                    alt=""
                    width={400}
                    height={200}
                    className="group-hover:scale-110 duration-300 object-cover h-[250px]"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-base sm:text-xl font-bold group-hover:text-brand text-black mt-4 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-sm text-neutral-600">
                    {course.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* <div className="mt-20">
          <StickyScroll content={content} />
        </div> */}
      </div>
    </>
  );
}

const content = [
  {
    title: "Software Development and Database Management Training",
    description:
      "This training provides the necessary skills to develop efficient software applications and manage databases securely. It covers modern programming concepts and software development tools, including popular programming languages. Participants will also learn how to use database management tools and design secure databases. The program emphasizes strategies to ensure software quality and data security, offering practical examples on performance optimization and reliability improvement.",
    content: (
      <Image
        src="/Services/TrainingCourses/softwareengineering.jpeg"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Artificial Intelligence (AI) Training",
    description:
      "This course covers the fundamentals of AI and machine learning with practical applications in business. It explains the core concepts underpinning AI, how to analyze data, and apply predictive models. The training also explores how to integrate AI into business strategies to improve efficiency and foster innovation, with real-world examples of successful use cases across various sectors.",
    content: (
      <Image
        src="/Services/TrainingCourses/ai-training.webp"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Cloud Computing Training",
    description:
      "This course covers the fundamentals of AI and machine learning with practical applications in business. It explains the core concepts underpinning AI, how to analyze data, and apply predictive models. The training also explores how to integrate AI into business strategies to improve efficiency and foster innovation, with real-world examples of successful use cases across various sectors.",
    content: (
      <Image
        src="/Services/TrainingCourses/cloud-computing.jpg"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Quality Management and Project Management Training",
    description:
      "This program aims to enhance the skills required to ensure service and product quality within projects. It covers essential project management tools, including planning, execution, and monitoring. Participants will learn about total quality management (TQM) concepts and how to apply them across various fields, along with techniques for performance improvement and problem-solving. The course strengthens participants' ability to meet quality objectives efficiently and effectively.",
    content: (
      <Image
        src="/Services/TrainingCourses/quality-management.webp"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Systems and Network Management Training",
    description:
      "This training focuses on efficiently designing and managing systems and networks. It covers setting up wired and wireless networks, along with configuring the necessary hardware. Participants will learn how to troubleshoot and quickly resolve issues to ensure smooth and secure system performance. The course also reviews essential concepts of network management, including network optimization, performance enhancement, and regular updates. The goal is to equip participants with the skills needed to manage systems independently and effectively.",
    content: (
      <Image
        src="/Services/TrainingCourses/Systems-Network-Management-Training.jpg"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Cybersecurity and Information Security Training",
    description:
      "This training offers comprehensive knowledge on how to protect information and systems from cyber threats. It covers identifying various types of threats, such as viruses, malware, and cyberattacks. Participants will also learn effective strategies to mitigate these threats, including the use of encryption and firewalls. The course focuses on risk management by applying risk assessment tools and developing incident response plans. Additionally, it reviews relevant laws and legal standards to ensure compliance with data protection regulations.",
    content: (
      <Image
        src="/Services/TrainingCourses/cybersecurity.jpg"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Risk Management Training",
    description:
      "This program aims to empower participants to identify and manage risks effectively in the workplace. It begins by explaining how to conduct thorough risk analysis to identify potential risks and assess their impact. Participants will develop strategies to mitigate risks, including emergency planning. The course introduces modern tools and techniques, such as scenario analysis and risk matrices, while promoting a culture of risk management through continuous process improvement within the organization.",
    content: (
      <Image
        src="/Services/TrainingCourses/risk-management.jpg"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Digital Transformation Technologies Training",
    description:
      "This training provides insights into adopting digital transformation in business. It focuses on strategies for using technology to optimize operations and deliver value to customers. The program highlights the importance of digital transformation and how to identify related opportunities and challenges. It also includes practical examples of successful transformations and guidance on managing cultural change within organizations to ensure the success of digital strategies.",
    content: (
      <Image
        src="/Services/TrainingCourses/Digital-transformation.jpg"
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];
