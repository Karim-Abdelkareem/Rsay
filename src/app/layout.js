import { Permanent_Marker } from "next/font/google";
import { VT323 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import { ContactDialog } from "@/components/contactDialog/ContactDialog";
import Footer from "@/components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import WhatsApp from "@/components/whatsApp/WhatsApp";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
  preload: true,
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
  preload: true,
});

const orkney = localFont({
  src: "/fonts/Orkney Regular.woff",
  variable: "--font-orkney",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "RSAY | رساي - شركة تكنولوجيا المعلومات والتدريب المهني",
  description:
    "شركة رساي لتكنولوجيا المعلومات - نقدم خدمات التدريب المهني المعتمدة دولياً، تطوير المواقع الإلكترونية، تطبيقات الموبايل، ونظام إدارة التعلم المتكامل (LMS).",
  keywords:
    "رساي, RSAY, تدريب مهني, تكنولوجيا المعلومات, تطوير مواقع, تطبيقات موبايل, LMS, تعليم عن بعد, شهادات معتمدة",
  authors: [{ name: "RSAY ITC" }],
  creator: "RSAY ITC",
  publisher: "RSAY ITC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.rsaay.com/"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "RSAY | رساي - شركة تكنولوجيا المعلومات والتدريب المهني",
    description:
      "شركة رساي لتكنولوجيا المعلومات - نقدم خدمات التدريب المهني المعتمدة دولياً، تطوير المواقع الإلكترونية، تطبيقات الموبايل، ونظام إدارة التعلم المتكامل (LMS).",
    url: "https://www.rsaay.com/",
    siteName: "RSAY ITC",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RSAY ITC",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSAY | رساي - شركة تكنولوجيا المعلومات والتدريب المهني",
    description:
      "شركة رساي لتكنولوجيا المعلومات - نقدم خدمات التدريب المهني المعتمدة دولياً، تطوير المواقع الإلكترونية، تطبيقات الموبايل، ونظام إدارة التعلم المتكامل (LMS).",
    images: ["/images/twitter-image.jpg"],
    creator: "@rsayitc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const lang = locale || "en";
  const direction = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang}>
      <head>
        <link
          rel="preload"
          href="/fonts/Orkney Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${orkney.variable} ${vt323.variable} ${permanentMarker.variable} antialiased custom-scrollbar`}
        style={{ direction }}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="overflow-hidden custom-scrollbar">{children}</div>
          <Footer />
          <div
            className={`fixed ${
              lang === "en" ? "right-0" : "left-0"
            } top-[50%] hover:scale-110 duration-300 z-20 shadow-md border rounded-s-xl overflow-hidden custom-scrollbar`}
          >
            <ContactDialog />
          </div>
          <WhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
