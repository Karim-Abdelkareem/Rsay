"use client";
import ServicesIcons from "@/components/servicesIcons/ServicesIcons";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const t = useTranslations("Services");
  const locale = Cookies.get("locale") || "en";
  const [coursesToDisplay, setCoursesToDisplay] = useState([]);
  useEffect(() => {
    if (locale === "en") {
      setCoursesToDisplay(courses);
    } else {
      setCoursesToDisplay(coursesAr);
    }
  }, [locale]);
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

      <div className="my-20">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-5xl font-bold`}
        >
          {t("courses")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 gap-10 my-16">
          {coursesToDisplay.map((course, i) => {
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
        </div>
      </div>
    </>
  );
}

const courses = [
  {
    title: "Software Development and Database Management Training",
    image: "/Services/TrainingCourses/softwareengineering.jpeg",
    description:
      "This training provides the necessary skills to develop efficient software applications and manage databases securely. It covers modern programming concepts and software development tools, including popular programming languages. Participants will also learn how to use database management tools and design secure databases. The program emphasizes strategies to ensure software quality and data security, offering practical examples on performance optimization and reliability improvement.",
  },
  {
    title: "Artificial Intelligence (AI) Training",
    image: "/Services/TrainingCourses/ai-training.webp",
    description:
      "This course covers the fundamentals of AI and machine learning with practical applications in business. It explains the core concepts underpinning AI, how to analyze data, and apply predictive models. The training also explores how to integrate AI into business strategies to improve efficiency and foster innovation, with real-world examples of successful use cases across various sectors.",
  },
  {
    title: "Cloud Computing Training",
    image: "/Services/TrainingCourses/cloud-computing.jpg",
    description:
      "This training focuses on the concept of cloud computing and its use in enhancing performance and flexibility in business. It reviews various types of cloud services, such as SaaS, PaaS, and IaaS, along with guidelines on how to transition to a cloud environment securely. Participants will also learn best practices for managing cloud resources and ensuring security, gaining insights into how cloud computing can improve operations.",
  },
  {
    title: "Quality Management and Project Management Training",
    image: "/Services/TrainingCourses/quality-management.webp",
    description:
      "This program aims to enhance the skills required to ensure service and product quality within projects. It covers essential project management tools, including planning, execution, and monitoring. Participants will learn about total quality management (TQM) concepts and how to apply them across various fields, along with techniques for performance improvement and problem-solving. The course strengthens participants' ability to meet quality objectives efficiently and effectively.",
  },
  {
    title: "Systems and Network Management Training",
    image: "/Services/TrainingCourses/Systems-Network-Management-Training.jpg",
    description:
      "This training focuses on efficiently designing and managing systems and networks. It covers setting up wired and wireless networks, along with configuring the necessary hardware. Participants will learn how to troubleshoot and quickly resolve issues to ensure smooth and secure system performance. The course also reviews essential concepts of network management, including network optimization, performance enhancement, and regular updates. The goal is to equip participants with the skills needed to manage systems independently and effectively.",
  },
  {
    title: "Cybersecurity and Information Security Training",
    image: "/Services/TrainingCourses/cybersecurity.jpg",
    description:
      "This training offers comprehensive knowledge on how to protect information and systems from cyber threats. It covers identifying various types of threats, such as viruses, malware, and cyberattacks. Participants will also learn effective strategies to mitigate these threats, including the use of encryption and firewalls. The course focuses on risk management by applying risk assessment tools and developing incident response plans. Additionally, it reviews relevant laws and legal standards to ensure compliance with data protection regulations.",
  },
  {
    title: "Risk Management Training",
    image: "/Services/TrainingCourses/risk-management.jpg",
    description:
      "This program aims to empower participants to identify and manage risks effectively in the workplace. It begins by explaining how to conduct thorough risk analysis to identify potential risks and assess their impact. Participants will develop strategies to mitigate risks, including emergency planning. The course introduces modern tools and techniques, such as scenario analysis and risk matrices, while promoting a culture of risk management through continuous process improvement within the organization.",
  },
  {
    title: "Digital Transformation Technologies Training",
    image: "/Services/TrainingCourses/Digital-transformation.jpg",
    description:
      "This training provides insights into adopting digital transformation in business. It focuses on strategies for using technology to optimize operations and deliver value to customers. The program highlights the importance of digital transformation and how to identify related opportunities and challenges. It also includes practical examples of successful transformations and guidance on managing cultural change within organizations to ensure the success of digital strategies.",
  },
];

const coursesAr = [
  {
    title: "تدريب تطوير البرمجيات وإدارة قواعد البيانات",
    image: "/Services/TrainingCourses/softwareengineering.jpeg",
    description:
      "يوفر هذا التدريب للمتدربين المهارات اللازمة لتطوير برمجيات فعالة، وإدارة قواعد البيانات بشكل آمن. يتناول مفاهيم البرمجة الحديثة، وأدوات تطوير البرمجيات المتقدمة. كما يشمل التدريب على كيفية التعامل مع أدوات قراءة البيانات، وكيفية تصميم أنظمة تخزين بيانات آمنة. يركز التدريب أيضًا على استراتيجيات لضمان سرعة الأداء والكفاءة، مع تقديم أمثلة عملية عن كيفية تحسين الأداء والاعتمادية.",
  },
  {
    title: "تدريب الذكاء الاصطناعي",
    image: "/Services/TrainingCourses/ai-training.webp",
    description:
      "يستعرض هذا التدريب أساسيات الذكاء الاصطناعي والتعلم الآلي مع تطبيقات عملية في الأعمال. يتم شرح المفاهيم الأساسية التي تدعم الذكاء الاصطناعي مثل الشبكات العصبية والخوارزميات المستخدمة في تقنيات الذكاء الاصطناعي. يستهدف التدريب العاملين في استراتيجيات العمل لتحسين الكفاءة والإنتاجية، مع تقديم أمثلة عن كيفية استخدام الذكاء الاصطناعي في مختلف القطاعات.",
  },
  {
    title: "تدريب الحوسبة السحابية",
    image: "/Services/TrainingCourses/cloud-computing.jpg",
    description:
      "يركز هذا التدريب على فهم الحوسبة السحابية، وكيفية استخدامها في الأعمال لتحسين الأداء وتقليل التكاليف. يتم استعراض أمثلة لأنواع الخدمات السحابية المختلفة مثل البنية التحتية كخدمة، ومنصة كخدمة، والبرمجيات كخدمة. يتناول التدريب أيضًا أفضل الممارسات لإدارة الموارد الحاسوبية، ويشمل SaaS وPaaS وIaaS. الهدف النهائي من التدريب هو فهم كيفية تحسين العمليات باستخدام التقنيات السحابية.",
  },
  {
    title: "تدريب إدارة الجودة والامتثال",
    image: "/Services/TrainingCourses/quality-management.webp",
    description:
      "يهدف هذا التدريب إلى تعزيز المهارات اللازمة لضمان جودة الخدمات والمنتجات في المؤسسات. يشمل التدريب دورات في إدارة الجودة الشاملة والتخطيط والتنفيذ. يتم شرح مفاهيم الامتثال المؤسسي في مختلف الصناعات، بالإضافة إلى تقنيات تحسين الأداء والتعامل مع المخاطر. يبرز التدريب أهمية تطبيق المعايير الدولية في إدارة الجودة، ويقدم أمثلة على كيفية تطبيقها بفعالية.",
  },
  {
    title: "تدريب إدارة الأنظمة والشبكات",
    image: "/Services/TrainingCourses/Systems-Network-Management-Training.jpg",
    description:
      "يركز هذا التدريب على الأنظمة والشبكات بشكلٍ كامل، ويتناول بالشرح كيفية إعداد الشبكات السلكية واللاسلكية، وتكون الأجهزة اللازمة لذلك. يتم أيضاً التطرق إلى إدارة البيانات والحصول عليها بشكل آمن، إضافة إلى تطبيق المبادئ الأساسية لأنظمة الحماية لأغراض الأمن السيبراني. يتم في ذلك الأمن الشبكي وتأمين الأداء. وتهدف الدورة التدريبية إلى تأهيل المتدربين كخبراء قادرين على إدارة الأنظمة بأمان مستقل وعمل مستمر.",
  },
  {
    title: "تدريب الأمن السيبراني وأمن المعلومات",
    image: "/Services/TrainingCourses/cybersecurity.jpg",
    description:
      "يوفر هذا التدريب معرفة شاملة حول كيفية حماية المعلومات والأنظمة من التهديدات الإلكترونية. يتناول مفهوم تحديد أنواع التهديدات المختلفة مثل الفيروسات والبرمجيات الخبيثة، والهجمات السيبرانية الأخرى. كما يتضمن أسس تقنيات فعالة للحماية من هذه التهديدات، بما في ذلك التحكم في المتغيرات، وجدران الحماية. خلال التدريب، يتم تقديم أمثلة تطبيقية عن تقييم المخاطر وتطوير خطط الاستجابة للحوادث. بالإضافة إلى ذلك، يتم استعراض أفضل الأدوات التي تُستخدم لحماية البيانات الحساسة من الاختلال.",
  },
  {
    title: "تدريب إدارة المخاطر",
    image: "/Services/TrainingCourses/risk-management.jpg",
    description:
      "يهدف هذا التدريب إلى تحديد وإدارة المخاطر بشكل فعال في بيئة العمل. يبدأ التدريب بشرح كيفية إجراء تحليل شامل للمخاطر وتقييمها، ومن ثم تحديد استراتيجيات فعالة لدرء المخاطر. بما في ذلك الخطط الطوارئ. يتم توضيح المعايير التي يجب أن تُؤخذ في الاعتبار عند تقييم الخطر. وينتهي التدريب بإدارة فعالة لتلك المخاطر داخل المؤسسات من خلال تحسين مستمر لنظام الحماية.",
  },
  {
    title: "تدريب على تقنيات التحول الرقمي",
    image: "/Services/TrainingCourses/Digital-transformation.jpg",
    description:
      "يوفر هذا التدريب فهمًا كاملاً لكيفية التحول الرقمي في الأعمال. يتناول أساليب استخدام التكنولوجيا لتحسين العمليات وتقديم الحلول للعملاء. يركز التدريب على تحليل التحديات التي تواجه المؤسسات في الرحلة الرقمية، مع تقديم أمثلة عملية على التحول إلى النماذج الذكية. الهدف النهائي هو تزويد المتدربين بالمهارات الأساسية لضمان نجاح المؤسسات في البيئة الرقمية.",
  },
];
