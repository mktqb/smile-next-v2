import type { Metadata } from "next";
import { Taviraj, Work_Sans } from "next/font/google";
import { locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import CookieConsent from "@/components/cookies-consent";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../globals.css";
import { Providers } from "../providers";
import { useTranslations } from "next-intl";
import { headers } from "next/headers";

// Configura Taviraj
const TavirajFont = Taviraj({
  subsets: ["latin"],
  style: ["italic"], // Solo incluir 'italic' si es el único estilo que usarás
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-taviraj",
});

// Configura Work Sans
const workSans = Work_Sans({
  subsets: ["latin"],
  style: ["italic"], // Solo incluir 'italic' si es el único estilo que usarás
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AV Express",
  description: "Home",
  icons: ["/favicon.ico"],
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const headList = headers();
  return (
    <html lang={locale}>
      <body className={`${workSans.className} ${TavirajFont.variable}`}>
        <Providers>
          <Header
            currentLocale={locale}
            translations={{
              home: t("Index.links.home"),
              about_us: t("Index.links.about_us"),
              destinations: t("Index.links.destinations"),
              terminal: t("Index.links.terminal"),
              contact_us: t("Index.links.contact_us"),
              faq: t("Index.links.faq"),
              english: t("Index.locales.english"),
              spanish: t("Index.locales.spanish"),
              language: t("Index.locales.language"),
              travelPolicy: t("Index.links.travel_policy"),
              cookies: t("Index.links.cookies"),
            }}
          />
          {children}
          <Footer
            currentLocale={locale}
            translations={{
              text: t("Index.footer.text"),
              home: t("Index.links.home"),
              about_us: t("Index.links.about_us"),
              destinations: t("Index.links.destinations"),
              contact_us: t("Index.links.contact_us"),
              faq: t("Index.links.faq"),
              travelPolicy: t("Index.links.travel_policy"),
              cookiePolicy: t("Index.links.cookies"),
              language: t("Index.locales.language"),
              english: t("Index.locales.english"),
              spanish: t("Index.locales.spanish"),
              copyright: t("Index.footer.copyright"),
            }}
          />
          {!headList.get("link")?.split(">")[0].endsWith("cookie-policies") && (
            <CookieConsent
              translations={{
                title: t("Index.cookies.title"),
                description: t("Index.cookies.description"),
                accept: t("Index.cookies.accept"),
                disable: t("Index.cookies.disable"),
                cookies: t("Index.links.cookies"),
              }}
            />
          )}
        </Providers>
      </body>
    </html>
  );
}
