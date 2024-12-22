import { Permanent_Marker } from "next/font/google";
import { VT323 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import { ContactDialog } from "@/components/contactDialog/ContactDialog";
import Footer from "@/components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import WhatsApp from "@/components/whatsApp/WhatsApp";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

const orkney = localFont({
  src: "/fonts/Orkney Regular.woff",
  variable: "--font-orkney",
});

export const metadata = {
  title: "RSAY | رساي",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const lang = locale || "en";

  const direction = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang}>
      <body
        className={` ${orkney.variable} ${vt323.variable} ${permanentMarker.variable} antialiased`}
        style={{ direction }}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="overflow-hidden">{children}</div>
          <Footer />
          <div
            className={`fixed ${
              lang === "en" ? "right-0" : "left-0"
            } top-[50%] hover:scale-110 duration-300 z-20 shadow-md border rounded-s-xl overflow-hidden`}
          >
            <ContactDialog />
          </div>
          <WhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
