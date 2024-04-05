import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import CookieConsent from "@/components/cookies-consent";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../globals.css";
import { Providers } from "../providers";
import { useTranslations } from "next-intl";
import { headers } from "next/headers";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AV Express",
  description: "Home",
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
      <body className={`${poppins.className}`}>
        <Providers>
          <Header
            currentLocale={locale}
            translations={{
              home: t("Index.links.home"),
              about_us: t("Index.links.about_us"),
              destinations: t("Index.links.destinations"),
              contact_us: t("Index.links.contact_us"),
              faq: t("Index.links.faq"),
              english: t("Index.locales.english"),
              spanish: t("Index.locales.spanish"),
              /* language: t("Index.links.language"), */
              travelPolicy: t("Index.links.travel_policy"),
              cookies: t("Index.links.cookies"),
            }}
          />
          {children}
          <Footer
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
