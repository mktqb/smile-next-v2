import type { Metadata } from "next/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import BannerCookies from "@/assets/Banner_cookies.jpg";
import { Link } from "@/navigation";
import ButtonToTop from "@/components/button-to-top";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("Metadata.travel_policies.title"),
    description: t("Metadata.travel_policies.description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("TravelPolicies");
  return (
    <>
      <div className="relative h-80 w-full">
        <Image
          src={BannerCookies}
          alt="Banner"
          className="h-full w-full object-cover object-[30%_20%] lg:object-[20%_50%] 2xl:object-[20%_70%]"
        />
        <div className="absolute left-0 top-0 z-10 grid h-full w-full place-items-center bg-black/50">
          <div className="flex flex-col items-center pt-28">
            <h1 className="text-center text-2xl font-bold text-white lg:text-4xl">
              {t("title")}
            </h1>
            <p className="text-center text-sm text-white lg:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>
      <section className="section-container grid grid-cols-1 place-items-center gap-4 py-10 pb-16 lg:my-10 lg:flex lg:place-items-start lg:gap-8">
        <div className="top-36 col-span-1 flex h-full min-w-[350px] flex-col rounded-lg text-black shadow-lg lg:sticky">
          <Link className="selector" href="#travelTicket">
            1. {t("travel_ticket.title")}
          </Link>
          <Link className="selector" href="#travelFares">
            2. {t("travel_fares.title")}
          </Link>
          <Link className="selector" href="#luggage">
            3. {t("luggage.title")}
          </Link>
          <Link className="selector" href="#meantime">
            4. {t("meantime.title")}
          </Link>
          <Link className="selector" href="#onboarding">
            5. {t("onboarding.title")}
          </Link>
          <Link className="selector" href="#kids">
            6. {t("kids.title")}
          </Link>
          <Link className="selector" href="#adults">
            7. {t("adults.title")}
          </Link>
          <Link className="selector" href="#service">
            8. {t("service.title")}
          </Link>
          <Link className="selector" href="#privacy">
            9. {t("privacy.title")}
          </Link>
          <Link className="selector" href="#web">
            10. {t("web.title")}
          </Link>
          <Link className="selector" href="#security">
            11. {t("security.title")}
          </Link>
          <Link className="selector" href="#providers">
            12. {t("providers.title")}
          </Link>
          <Link className="selector" href="#errors">
            13. {t("errors.title")}
          </Link>
          <Link className="selector" href="#complaints">
            14.{t("complaints.title")}
          </Link>
        </div>
        <div className="col-span-1 mt-10 space-y-3 text-sm text-black lg:col-span-3 lg:mt-0 lg:text-base">
          <p>{t("main.text.0")}</p>
          <p>{t("main.text.1")}</p>
          <h2
            id="travelTicket"
            className="lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
          >
            1. {t("travel_ticket.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("travel_ticket.text.0")}</li>
            <li className="list-disc">{t("travel_ticket.text.1")}</li>
            <li className="list-disc">{t("travel_ticket.text.2")}</li>
            <li className="list-disc">{t("travel_ticket.text.3")}</li>
            <li className="list-disc">{t("travel_ticket.text.4")}</li>
            <li className="list-disc">{t("travel_ticket.text.5")}</li>
            <li className="list-disc">{t("travel_ticket.text.6")}</li>
            <li className="list-disc">{t("travel_ticket.text.7")}</li>
          </ul>
          <h2
            className="lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="travelFares"
          >
            2. {t("travel_fares.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("travel_fares.text.0")}</li>
            <li className="list-disc">{t("travel_fares.text.1")}</li>
            <li className="list-disc">{t("travel_fares.text.2")}</li>
          </ul>
          <h2
            className="lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="luggage"
          >
            3. {t("luggage.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("luggage.text.0")}</li>
            <li className="list-disc">{t("luggage.text.1")}</li>
            <li className="list-disc">{t("luggage.text.2")}</li>
            <li className="list-disc">{t("luggage.text.3")}</li>
            <li className="list-disc">{t("luggage.text.4")}</li>
            <li className="list-disc">{t("luggage.text.5")}</li>
            <li className="list-disc">{t("luggage.text.6")}</li>
            <li className="list-disc">{t("luggage.text.7")}</li>
            <li className="list-disc">
              <span>{t("luggage.text.8")}</span>
              <ul className="pl-6">
                <li className="list-disc">{t("luggage.text.9")}</li>
                <li className="list-disc">{t("luggage.text.10")}</li>
              </ul>
            </li>
            <li className="list-disc">{t("luggage.text.11")}</li>
            <li className="list-disc">{t("luggage.text.12")}</li>
            <li className="list-disc">{t("luggage.text.13")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="meantime"
          >
            4. {t("meantime.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("meantime.text.0")}</li>
            <li className="list-disc">{t("meantime.text.1")}</li>
            <li className="list-disc">{t("meantime.text.2")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="onboarding"
          >
            5. {t("onboarding.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("onboarding.text.0")}</li>
            <li className="list-disc">{t("onboarding.text.1")}</li>
            <li className="list-disc">{t("onboarding.text.2")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="kids"
          >
            6. {t("kids.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("kids.text.0")}</li>
            <li className="list-disc">{t("kids.text.1")}</li>
            <li className="list-disc">{t("kids.text.2")}</li>
            <li className="list-disc">{t("kids.text.3")}</li>
            <li className="list-disc">{t("kids.text.4")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="adults"
          >
            7. {t("adults.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("adults.text.0")}</li>
            <li className="list-disc">{t("adults.text.1")}</li>
            <li className="list-disc">{t("adults.text.2")}</li>
            <li className="list-disc">
              <span>{t("adults.text.3")}</span>
              <ul className="pl-6">
                <li className="list-disc">{t("adults.text.4")}</li>
                <li className="list-disc">{t("adults.text.5")}</li>
                <li className="list-disc">{t("adults.text.6")}</li>
                <li className="list-disc">{t("adults.text.7")}</li>
                <li className="list-disc">{t("adults.text.8")}</li>
              </ul>
            </li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="service"
          >
            8. {t("service.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("service.text.0")}</li>
            <li className="list-disc">{t("service.text.1")}</li>
            <li className="list-disc">{t("service.text.2")}</li>
            <li className="list-disc">{t("service.text.3")}</li>
            <li className="list-disc">{t("service.text.4")}</li>
            <li className="list-disc">{t("service.text.5")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="privacy"
          >
            9. {t("privacy.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">
              <span>{t("privacy.text.0")}</span>
              <ul className="pl-6">
                <li className="list-disc">{t("privacy.text.1")}</li>
                <li className="list-disc">{t("privacy.text.2")}</li>
              </ul>
            </li>
            <li className="list-disc">
              <span>{t("privacy.text.3")}</span>
              <ul className="pl-6">
                <li className="list-disc">{t("privacy.text.4")}</li>
                <li className="list-disc">{t("privacy.text.5")}</li>
                <li className="list-disc">{t("privacy.text.6")}</li>
              </ul>
            </li>
            <li className="list-disc">{t("privacy.text.7")}</li>
            <li className="list-disc">{t("privacy.text.8")}</li>
            <li className="list-disc">{t("privacy.text.9")}</li>
            <li className="list-disc">{t("privacy.text.10")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="web"
          >
            10. {t("web.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("web.text.0")}</li>
            <li className="list-disc">{t("web.text.1")}</li>
            <li className="list-disc">{t("web.text.2")}</li>
            <li className="list-disc">{t("web.text.3")}</li>
            <li className="list-disc">{t("web.text.4")}</li>
            <li className="list-disc">{t("web.text.5")}</li>
            <li className="list-disc">{t("web.text.6")}</li>
            <li className="list-disc">{t("web.text.7")}</li>
            <li className="list-disc">{t("web.text.8")}</li>
            <li className="list-disc">{t("web.text.9")}</li>
            <li className="list-disc">{t("web.text.10")}</li>
            <li className="list-disc">{t("web.text.11")}</li>
            <li className="list-disc">{t("web.text.12")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="security"
          >
            11. {t("security.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("security.text.0")}</li>
            <li className="list-disc">{t("security.text.1")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="providers"
          >
            12. {t("providers.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">
              <span>{t("providers.text.0")}</span>
              <ul className="pl-6">
                <li className="list-disc">{t("providers.text.1")}</li>
                <li className="list-disc">{t("providers.text.2")}</li>
                <li className="list-disc">{t("providers.text.3")}</li>
              </ul>
            </li>
            <li className="list-disc">{t("providers.text.4")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="errors"
          >
            13. {t("errors.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("errors.text.0")}</li>
            <li className="list-disc">{t("errors.text.1")}</li>
            <li className="list-disc">{t("errors.text.2")}</li>
            <li className="list-disc">{t("errors.text.3")}</li>
          </ul>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="complaints"
          >
            14. {t("complaints.title")}
          </h2>
          <ul className="pl-6">
            <li className="list-disc">{t("complaints.text.0")}</li>
          </ul>
          <p>
            {t("complaints.text.1")}:{" "}
            <a href="mailto:ventas01@avexpress.mx">ventas01@avexpress.mx</a>
          </p>
        </div>
      </section>
      <ButtonToTop />
    </>
  );
}
