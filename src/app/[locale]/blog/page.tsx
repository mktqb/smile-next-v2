import type { Metadata } from "next/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import BannerCookies from "@/assets/Banner_cookies.jpg";
import Blog01 from "@/assets/blog-01.png";
import Blog02 from "@/assets/blog-02.png";
import Blog03 from "@/assets/blog-03.png";
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
              {/* {t("title")} */}
              Blog
            </h1>
          </div>
        </div>
      </div>
      <section className="section-container grid grid-cols-1 place-items-center gap-4 py-10 pb-16 lg:my-10 lg:flex lg:place-items-start lg:gap-8">
        <div className="grid gap-8 md:grid-cols-3">
          <article className="rounded border p-4 text-neutral-900">
            <h3>Título del post</h3>
            <p className="">
              Texto resumen del post, apra que se muestre en la parte inferior.
            </p>
          </article>
          <article className="rounded border p-4 text-neutral-900">
            <a>
              <Image
                src={Blog01}
                alt="Blog01"
                className="rounded mb-5 h-auto max-w-full"
              />
            </a>
            <span className="bg-blue-500 text-xs">Categoria</span>
            <h3>Título del post</h3>
            <p className="">
              Texto resumen del post, apra que se muestre en la parte inferior.
            </p>
          </article>
          <article className="rounded border p-4 text-neutral-900">
            <h3>Título del post</h3>
            <p className="">
              Texto resumen del post, apra que se muestre en la parte inferior.
            </p>
          </article>
        </div>
      </section>
      <ButtonToTop />
    </>
  );
}
