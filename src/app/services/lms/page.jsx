"use client";
import ServicesIcons from "@/components/servicesIcons/ServicesIcons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import services from "@/data/Services/LMS";
import servicesAr from "@/data/Services/LMS-Ar";
import { HoverEffectServices } from "@/components/ui/card-hover-effect-service";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

export default function Page() {
  const t = useTranslations("Services");
  const locale = Cookies.get("locale") || "en";
  const [servicesToDisplay, setServicesToDisplay] = useState([]);
  const [benefitsToDisplay, setBenefitsToDisplay] = useState([]);

  useEffect(() => {
    if (locale === "en") {
      setServicesToDisplay(services);
      setBenefitsToDisplay(benefits);
    } else {
      setServicesToDisplay(servicesAr);
      setBenefitsToDisplay(benefitsAr);
    }
  }, [locale]);
  return (
    <>
      <div className="absolute h-screen md:h-[35rem] w-full -z-10 ">
        <div className="absolute top-0 w-full h-screen md:h-[35rem] bg-black/70 "></div>
        <Image
          src="/Services/LMS.jpeg"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-screen md:h-[35rem] object-cover "
        />
      </div>
      <div className="px-6 lg:px-0 py-32 lg:justify-around w-full flex flex-col gap-10 items-center h-screen md:h-[35rem] ">
        <ServicesIcons />
        <h1 className="uppercase text-white font-brush text-3xl md:text-5xl max-w-5xl text-center">
          {t("lms")}
        </h1>
        <p className="text-center text-white font-medium text-xl max-w-5xl">
          {t("lms-description")}
        </p>
        <Link href="/contact/companies">
          <button className="bg-brand text-white font-semibold w-32 py-3 rounded-xl text-center hover:ring-4 ring-brand hover:bg-brand/25 hover:scale-105 duration-300">
            {t("lets-talk")}
          </button>
        </Link>
      </div>
      <div className="my-20">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-4xl md:text-5xl font-bold`}
        >
          {t("why")}
        </h2>
        {/* filp cards */}
        <div className="mx-auto flex justify-center py-10 sm:py-10 lg:max-w-7xl ">
          <div className="flex justify-center flex-col gap-12 sm:gap-16">
            <div className="grid gap-10 sm:gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
              {servicesToDisplay.map((service, i) => (
                <div
                  key={i}
                  className="group h-[350px] w-[320px] [perspective:1000px] mx-auto"
                >
                  <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] bg-white">
                      {service.imageUrl && (
                        <Image
                          className="h-full w-full rounded-xl object-contain"
                          src={service.imageUrl}
                          alt={service.name}
                          width={320}
                          height={320}
                        />
                      )}
                      <p className="mt-4 text-center font-bold text-xl text-gray-800">
                        {service.name}
                      </p>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 px-4 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex h-full flex-col items-center justify-center">
                        <Image
                          src={service.icon}
                          alt={service.name}
                          width={64}
                          height={64}
                          className="mb-4"
                        />
                        <h2 className="text-2xl font-bold">{service.name}</h2>
                        <p className="mt-4 text-lg">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-5xl font-bold`}
        >
          {t("features")}
        </h2>
        <div className="max-w-7xl mx-auto px-8">
          <HoverEffectServices items={benefitsToDisplay} />
        </div>
      </div>
      <div className="my-20 ">
        <h2
          className={`${"-rotate-2"} text-center font-brush text-5xl font-bold`}
        >
          {t("why-choose")}
        </h2>
        <div className="max-w-5xl mx-auto my-20 rounded-xl shadow-xl px-8 bg-slate-50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-2xl max-w-xl text-gray-600 mb-4 order-2 md:order-1">
            {t("lms-why")}
          </p>
          <Image
            src="/Services/why.png"
            alt=""
            width={400}
            height={400}
            className="order-1 md:order-2"
          />
        </div>
      </div>
    </>
  );
}
const benefits = [
  {
    title: "Easy Course Management",
    icon: "/Services/LMS/exam.png",
    description: [
      "Create and manage courses with diverse content, including text, videos, and presentations.",
      "Organize content into structured modules and lessons for a seamless learning experience.",
    ],
  },
  {
    title: "Support for Self-paced and Live Training",
    icon: "/Services/LMS/self-confidence.png",
    description: [
      "Offer flexible learning paths tailored to the schedules of individual learners.",
      "Integrate with platforms like Zoom and Microsoft Teams for live training sessions.",
    ],
  },
  {
    title: "Varied Assessments and Evaluations",
    icon: "/Services/LMS/research.png",
    description: [
      "Create multiple assessment types, such as quizzes, essays, and multiple-choice questions.",
      "Provide automated grading with instant feedback to help learners improve their performance.",
    ],
  },
  {
    title: "Automated Certificate Issuance",
    icon: "/Services/LMS/certificate.png",
    description: [
      "Generate certificates automatically upon course completion.",
      "Customize certificates with the organization’s logo and course details to enhance brand identity.",
    ],
  },
  {
    title: "Effective Student and Trainee Management",
    icon: "/Services/LMS/skills.png",
    description: [
      "Use a comprehensive dashboard to manage and track learner progress.",
      "Assign different roles and permissions (e.g., instructor, trainee, administrator).",
    ],
  },
  {
    title: "Payment and Subscription Management",
    icon: "/Services/LMS/subscription-business-model.png",
    description: [
      "Sell courses through integrated payment gateways.",
      "Offer subscription models or one-time payment plans to suit client needs.",
    ],
  },
  {
    title: "Flexible and Responsive User Interface",
    icon: "/Services/LMS/responsive.png",
    description: [
      "Provide an easy-to-use interface compatible with all devices (desktop, mobile, tablet).",
      "Support both Arabic and English to cater to diverse user needs.",
    ],
  },
  {
    title: "Advanced Analytics and Reporting",
    icon: "/Services/LMS/monitor.png",
    description: [
      "Generate detailed reports on learner performance and course completion rates.",
      "Provide insights to support data-driven educational decisions.",
    ],
  },
  {
    title: "Integration with Other Systems",
    icon: "/Services/LMS/integration.png",
    description: [
      "Integrate with HR systems and marketing platforms to streamline operations.",
      "Offer APIs to ensure seamless connection with external tools.",
    ],
  },
  {
    title: "Interactive Learning Environment",
    icon: "/Services/LMS/learning (1).png",
    description: [
      "Facilitate discussion forums to promote engagement among learners.",
      "Send notifications and messages to encourage continuous participation.",
    ],
  },
];

const benefitsAr = [
  {
    title: "إدارة الدورات التدريبية بسهولة",
    description: [
      "إنشاء وإدارة دورات تدريبية باستخدام محتويات متنوعة مثل النصوص، الفيديوهات، والعروض التقديمية.",
      "تنظيم المحتوى في وحدات متسلسلة ودروس لضمان تجربة تعليمية مترابطة.",
    ],
    icon: "/Services/LMS/exam.png",
  },
  {
    title: "دعم التعلم الذاتي والجلسات الحية",
    description: [
      "إمكانية إنشاء مسارات تعليمية ذاتية وفق جداول مرنة تتناسب مع كل متدرب.",
      "التكامل مع أدوات البث الحي مثل Zoom وTeams لإدارة جلسات تدريب مباشرة.",
    ],
    icon: "/Services/LMS/self-confidence.png",
  },
  {
    title: "إنشاء اختبارات وتقييمات متنوعة",
    description: [
      "دعم أنواع متعددة من التقييمات مثل الاختبارات الاختيارية والأسئلة المقالية.",
      "التصحيح الآلي مع تقديم تغذية راجعة فورية للمتعلمين لتحسين الأداء.",
    ],
    icon: "/Services/LMS/research.png",
  },
  {
    title: "إصدار شهادات مخصصة",
    description: [
      "إنشاء شهادات تلقائيًا عند إتمام الدورات بنجاح.",
      "تخصيص الشهادات بشعار المؤسسة وبيانات الدورة لتعزيز هوية المؤسسة.",
    ],
    icon: "/Services/LMS/certificate.png",
  },
  {
    title: "إدارة فعالة للطلاب والمتدربين",
    description: [
      "لوحة تحكم شاملة لتسجيل المتدربين ومتابعة أدائهم.",
      "تخصيص أدوار وصلاحيات مختلفة (مثل مدرب، متدرب، مشرف).",
    ],
    icon: "/Services/LMS/skills.png",
  },
  {
    title: "دعم المدفوعات والاشتراكات",
    description: [
      "تمكين بيع الدورات التدريبية من خلال بوابات دفع إلكترونية.",
      "تقديم خطط اشتراك شهرية أو مدفوعة حسب احتياجات العملاء.",
    ],
    icon: "/Services/LMS/subscription-business-model.png",
  },
  {
    title: "واجهة مستخدم مرنة ومتجاوبة",
    description: [
      "تصميم واجهة سهلة الاستخدام ومتوافقة مع جميع الأجهزة (حاسب، هاتف، جهاز لوحي).",
      "دعم اللغة العربية والإنجليزية لتلبية احتياجات جميع المستخدمين.",
    ],
    icon: "/Services/LMS/responsive.png",
  },
  {
    title: "تحليلات وتقارير متقدمة",
    description: [
      "تقديم تقارير دقيقة عن أداء المتدربين ونسب إتمام الدورات.",
      "إحصائيات شاملة تساعد في اتخاذ قرارات تعليمية مدروسة.",
    ],
    icon: "/Services/LMS/monitor.png",
  },
  {
    title: "تكامل مع الأنظمة الأخرى",
    description: [
      "إمكانية الربط مع أنظمة إدارة الموارد البشرية والتسويق.",
      "توفير واجهات برمجية (APIs) لتكامل سهل مع الأنظمة الأخرى.",
    ],
    icon: "/Services/LMS/integration.png",
  },
  {
    title: "دعم التفاعل والمجتمع التعليمي",
    description: [
      "إنشاء منتديات نقاش لتعزيز التواصل بين المتدربين.",
      "إرسال إشعارات ورسائل لتحفيز التفاعل المستمر.",
    ],
    icon: "/Services/LMS/learning (1).png",
  },
];
