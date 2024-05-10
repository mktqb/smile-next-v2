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
  const t = useTranslations("AvisoPrivacidad");
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
          </div>
        </div>
      </div>
      <section className="section-container grid grid-cols-1 place-items-center gap-4 py-10 pb-16 lg:my-10 lg:flex lg:place-items-start lg:gap-8">
        <div className="col-span-1 mt-10 space-y-3 text-sm text-black lg:col-span-3 lg:mt-0 lg:text-base">
          <p>{t("text")}</p>
          <h2 className="lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            1. {t("responsable.title")}
          </h2>
          <p>{t("responsable.text.0")}</p>
          <p>{t("responsable.text.1")}</p>
          <h2 className="lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            2. {t("forma.title")}
          </h2>
          <p>{t("forma.text")}</p>
          <h2 className="lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            3. {t("datos.title")}
          </h2>
          <p>{t("datos.text.0")}</p>
          <p>{t("datos.text.1")}</p>
          <p>{t("datos.text.2")}</p>
          <p>{t("datos.text.3")}</p>
          <p>{t("datos.text.4")}</p>
          <p>{t("datos.text.5")}</p>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="meantime"
          >
            3.1. {t("personales.title")}
          </h2>
          <p>{t("personales.text.0")}</p>
          <p>{t("personales.text.1")}</p>
          <p>{t("personales.text.2")}</p>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            3.2. {t("sensibles.title")}
          </h2>
          <p>{t("sensibles.text")}</p>
          <h2
            className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300"
            id="kids"
          >
            4. {t("finalidades.title")}
          </h2>
          <p>{t("finalidades.text.0")}</p>
          <p>{t("finalidades.text.1")}</p>
          <ul className="pl-6">
            <li className="list-disc">{t("finalidades.text.2")}</li>
            <li className="list-disc">{t("finalidades.text.3")}</li>
            <li className="list-disc">{t("finalidades.text.4")}</li>
            <li className="list-disc">{t("finalidades.text.5")}</li>
            <li className="list-disc">{t("finalidades.text.6")}</li>
            <li className="list-disc">{t("finalidades.text.7")}</li>
            <li className="list-disc">{t("finalidades.text.8")}</li>
            <li className="list-disc">{t("finalidades.text.9")}</li>
          </ul>
          <p>{t("finalidades.text.10")}</p>
          <ul className="pl-6">
            <li className="list-disc">{t("finalidades.text.11")}</li>
            <li className="list-disc">{t("finalidades.text.12")}</li>
            <li className="list-disc">{t("finalidades.text.13")}</li>
            <li className="list-disc">{t("finalidades.text.14")}</li>
            <li className="list-disc">{t("finalidades.text.15")}</li>
          </ul>
          <p>{t("finalidades.text.16")}</p>
          <p>{t("finalidades.text.17")}</p>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            5. {t("limitaciones.title")}
          </h2>
          <p>{t("limitaciones.text.0")}</p>
          <p>{t("limitaciones.text.1")}</p>

          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            6. {t("derechos.title")}
          </h2>
          <p>{t("limitaciones.text.1")}</p>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            6.1. {t("mecanismos.title")}
          </h2>
          <p>{t("mecanismos.text.0")}</p>
          <p>{t("mecanismos.text.1")}</p>
          <p>{t("mecanismos.text.2")}</p>
          <p>{t("mecanismos.text.3")}</p>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            7. {t("transferencia.title")}
          </h2>
          <p>{t("transferencia.text.0")}</p>
          <ul className="pl-6">
            <li className="list-disc">{t("transferencia.text.1")}</li>
            <li className="list-disc">{t("transferencia.text.2")}</li>
            <li className="list-disc">{t("transferencia.text.3")}</li>
            <li className="list-disc">{t("transferencia.text.4")}</li>
            <li className="list-disc">{t("transferencia.text.5")}</li>
          </ul>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            8. {t("informacion.title")}
          </h2>
          <p>{t("informacion.text")}</p>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            8.1. {t("exclusion.title")}
          </h2>
          <p>{t("exclusion.text")}</p>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            9. {t("conservacion.title")}
          </h2>
          <p>{t("conservacion.text.0")}</p>
          <p>{t("conservacion.text.1")}</p>
          <h2 className="text-orange lg:croll-m-36 scroll-m-4 text-lg font-bold text-primary-300">
            10. {t("modificaciones.title")}
          </h2>
          <p>{t("modificaciones.text")}</p>
        </div>
      </section>
      <ButtonToTop />
    </>
  );
}
