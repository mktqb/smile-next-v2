import type { Metadata } from "next/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import BannerTerms from "@/assets/Banner_terms.jpg";
import { Link } from "@/navigation";
import ButtonToTop from "@/components/button-to-top";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("Metadata.privacy_policies.title"),
    description: t("Metadata.privacy_policies.description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("CookiePolicies");
  return (
    <>
      <div className="relative h-80 w-full">
        <Image
          src={BannerTerms}
          alt="Banner"
          className="h-full w-full object-cover object-[30%_20%] lg:object-[20%_50%] 2xl:object-[20%_70%]"
        />
        <div className="absolute left-0 top-0 z-10 grid h-full w-full place-items-center bg-black/50">
          <div className="flex flex-col items-center pt-28">
            <h1 className="text-center text-2xl font-bold text-white lg:text-4xl">
              {t("title")}
            </h1>
          </div>
        </div>
      </div>
      <section className="section-container grid grid-cols-1 place-items-center gap-4 py-10 pb-16 lg:my-10 lg:flex lg:place-items-start lg:gap-8">
        <div className="top-36 col-span-1 flex h-full min-w-[350px] flex-col rounded-lg text-black shadow-lg lg:sticky">
          <Link className="selector" href="#interpretation">
            {t("interpretation.title")}
          </Link>
          <Link className="selector" href="#definition">
            {t("definition.title")}
          </Link>
          <Link className="selector" href="#types">
            {t("types.title")}
          </Link>
          <Link className="selector" href="#configuration">
            {t("configuration.title")}
          </Link>
          <Link className="selector" href="#moreInfo">
            {t("more_info.title")}
          </Link>
          <Link className="selector" href="#contactUs">
            {t("contact_us.title")}
          </Link>
        </div>
        <div className="col-span-1 mt-10 space-y-3 text-sm text-black lg:col-span-3 lg:mt-0 lg:text-base">
          <p>{t("main_text.0")}</p>
          <p>{t("main_text.1")}</p>
          <p>{t("main_text.2")}</p>
          <p>{t("main_text.3")}</p>
          <h2
            id="interpretation"
            className="scroll-m-4 text-lg font-bold text-black lg:scroll-m-36"
          >
            {t("interpretation.title")}
          </h2>
          <p>{t("interpretation.text.0")}</p>
          <p>{t("interpretation.text.1")}</p>
          <h2
            id="definition"
            className="scroll-m-4 text-lg font-bold text-black lg:scroll-m-36"
          >
            {t("definition.title")}
          </h2>
          <p>{t("definition.text.0")}:</p>
          <ul className="pl-6">
            <li
              className="list-disc"
              dangerouslySetInnerHTML={{ __html: t.raw("definition.text.1") }}
            />
            <li className="list-disc">{t("definition.text.2")}</li>
            <li className="list-disc">{t("definition.text.3")}</li>
            <li
              className="list-disc"
              dangerouslySetInnerHTML={{ __html: t.raw("definition.text.4") }}
            />
          </ul>
          <h2
            id="types"
            className="scroll-m-4 text-lg font-bold text-black lg:scroll-m-36"
          >
            {t("types.title")}
          </h2>
          <p>{t("types.text.0")}</p>
          <p>{t("types.text.1")}</p>
          <h3 className="font-semibold">{t("types.text.2")}</h3>
          <p className="text-sm">{t("types.text.3")}</p>
          <p className="text-sm">{t("types.text.4")}</p>
          <p className="pt-4">{t("types.text.5")}</p>
          <h3 className="font-semibold">{t("types.text.6")}</h3>
          <p className="text-sm">{t("types.text.7")}</p>
          <p className="text-sm">{t("types.text.4")}</p>
          <p className="pt-4">{t("types.text.8")}</p>
          <h2
            id="configuration"
            className="scroll-m-4 text-lg font-bold text-black lg:scroll-m-36"
          >
            {t("configuration.title")}
          </h2>
          <p>{t("configuration.text.0")}</p>
          <p>{t("configuration.text.1")}</p>
          <p>{t("configuration.text.2")}</p>
          <ul className="pl-6">
            <li
              className="list-disc"
              dangerouslySetInnerHTML={{
                __html: t.raw("configuration.text.5"),
              }}
            />
            <li
              className="list-disc"
              dangerouslySetInnerHTML={{
                __html: t.raw("configuration.text.6"),
              }}
            />
            <li
              className="list-disc"
              dangerouslySetInnerHTML={{
                __html: t.raw("configuration.text.7"),
              }}
            />
            <li
              className="list-disc"
              dangerouslySetInnerHTML={{
                __html: t.raw("configuration.text.8"),
              }}
            />
          </ul>
          <p>{t("configuration.text.9")}</p>
          <h2
            id="moreInfo"
            className="scroll-m-4 text-lg font-bold text-black lg:scroll-m-36"
          >
            {t("more_info.title")}
          </h2>
          <p>{t("more_info.text.0")}</p>
          <ul className="pl-6">
            <li className="list-disc">
              Network Advertising Initiative:{" "}
              <a
                className="text-black duration-200 lg:hover:text-orange-700"
                href="http://www.networkadvertising.org/"
                target="_blank"
              >
                Network Advertising
              </a>
            </li>
          </ul>
          <h2
            id="contactUs"
            className="scroll-m-4 text-lg font-bold text-black lg:scroll-m-36"
          >
            {t("contact_us.title")}
          </h2>
          <p>{t("contact_us.text.0")}</p>
          <ul className="pl-6">
            <li className="list-disc">
              {t("contact_us.text.1")}:{" "}
              <a href="mailto:tickets@autobusesloschavez.com">
                tickets@autobusesloschavez.com
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ButtonToTop />
    </>
  );
}
