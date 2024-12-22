"use client";
import ServicesIcons from "@/components/servicesIcons/ServicesIcons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import services from "@/data/Services/mobile-application";
import servicesAr from "@/data/Services/mobile-applicationAr";
import { HoverEffectServices } from "@/components/ui/card-hover-effect-service";
import Link from "next/link";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

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
      <div className="absolute h-[45rem] md:h-[35rem] w-full -z-10 ">
        <div className="absolute top-0 w-full h-[45rem] md:h-[35rem] bg-black/70 "></div>
        <Image
          src="/Services/mobile application.jpeg"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-[45rem] md:h-[35rem] object-cover "
        />
      </div>
      <div className="px-6 lg:px-0 py-32 lg:justify-around w-full flex flex-col gap-10 items-center h-[45rem] md:h-[35rem] ">
        <ServicesIcons />
        <h1 className="uppercase text-white font-brush text-3xl md:text-5xl max-w-5xl text-center">
          {t("mobile-application")}
        </h1>
        <p className="text-center text-white font-medium text-xl max-w-5xl">
          {t("mobile-description")}
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
            {t("why-description")}
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
    title: "Exceptional User Experience",
    imageUrl: "/Services/user-experince1.jpg",
    icon: "/Services/user-experience.png",
    description: [
      "Intuitive and attractive design to enhance user engagement.",
      "Smooth performance across all devices, ensuring customer satisfaction.",
    ],
  },
  {
    title: "Custom-Built Applications",
    imageUrl: "/Services/custom.jpg",
    icon: "/Services/browser-setting.png",
    description: [
      "Fully tailored apps designed to align with your business needs and goals.",
      "Scalable solutions to grow with your business over time.",
    ],
  },
  {
    title: "Seamless System Integration",
    imageUrl: "/Services/integration.jpg",
    icon: "/Services/integration.png",
    description: [
      "Easy integration with internal systems like resource management and payment gateways.",
      "Support for social media connectivity and multiple API integrations.",
    ],
  },
  {
    title: "Real-Time Push Notifications",
    imageUrl: "/Services/notification.jpeg",
    icon: "/Services/notification.png",
    description: [
      "Stay connected with users by sending timely notifications about offers and updates.",
    ],
  },
  {
    title: "High Performance and Reliability",
    imageUrl: "/Services/performance.jpeg",
    icon: "/Services/high-speed.png",
    description: [
      "Applications built for fast response times and stable operation, even under heavy use.",
    ],
  },
  {
    title: "Secure and Easy Payment Management",
    imageUrl: "/Services/transaction.jpeg",
    icon: "/Services/trustworthy.png",
    description: [
      "Integration with various payment methods to facilitate smooth transactions.",
      "High-level security to protect user data and financial transactions.",
    ],
  },
  {
    title: "Continuous Maintenance and Support",
    imageUrl: "/Services/Market-Expansion.jpg",
    icon: "/Services/market.png",
    description: [
      "Ongoing updates and quick maintenance to keep your app up-to-date with the latest trends.",
    ],
  },
];

const benefitsAr = [
  {
    title: "تجربة مستخدم ممتازة",
    description: [
      "تصميم تطبيقات بواجهات جذابة وسهلة الاستخدام لتحسين تفاعل المستخدمين.",
      "تقديم تجربة سلسة على جميع الأجهزة، مما يضمن رضا المستخدمين.",
    ],
    imageUrl: "/Services/user-experince1.jpg",
    icon: "/Services/user-experience.png",
  },
  {
    title: "تطبيقات مصممة حسب الطلب",
    description: [
      "تطوير تطبيقات مخصصة بالكامل بناءً على احتياجات العمل وأهداف العملاء.",
      "توفير حلول مرنة قابلة للتوسع والنمو مع تطور الأعمال.",
    ],
    imageUrl: "/Services/custom.jpg",
    icon: "/Services/browser-setting.png",
  },
  {
    title: "تكامل كامل مع الأنظمة الأخرى",
    description: [
      "ربط التطبيق بسهولة مع الأنظمة الداخلية، مثل أنظمة إدارة الموارد أو الدفع الإلكتروني.",
      "توفير إمكانيات الربط مع منصات التواصل الاجتماعي وواجهات برمجية (APIs) متعددة.",
    ],
    imageUrl: "/Services/integration.jpg",
    icon: "/Services/integration.png",
  },
  {
    title: "دعم إشعارات فورية",
    description: [
      "تفعيل الإشعارات لتعزيز التواصل المستمر مع المستخدمين وإبقائهم على اطلاع بأحدث العروض والخدمات.",
    ],
    imageUrl: "/Services/notification.jpeg",
    icon: "/Services/notification.png",
  },
  {
    title: "أداء موثوق وسريع",
    description: [
      "تطوير تطبيقات عالية الأداء تضمن سرعة استجابة واستقرار حتى في ظل الاستخدام الكثيف.",
    ],
    imageUrl: "/Services/performance.jpeg",
    icon: "/Services/high-speed.png",
  },
  {
    title: "إدارة دفع سهلة وآمنة",
    description: [
      "دمج خيارات دفع متنوعة لتسهيل عمليات الشراء عبر التطبيق.",
      "توفير أمان عالي لحماية بيانات المستخدمين والمعاملات المالية.",
    ],
    imageUrl: "/Services/transaction.jpeg",
    icon: "/Services/trustworthy.png",
  },
  {
    title: "صيانة ودعم مستمر",
    description: [
      "تقديم خدمات صيانة فورية وتحديثات مستمرة لضمان بقاء التطبيق مواكبًا لأحدث المتطلبات.",
    ],
    imageUrl: "/Services/Market-Expansion.jpg",
    icon: "/Services/market.png",
  },
];
