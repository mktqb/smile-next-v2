import type { Metadata } from "next/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import BannerCookies from "@/assets/Banner_cookies.jpg";
import Blog01 from "@/assets/blog-01.png";
import Blog02 from "@/assets/blog-02.png";
import Blog03 from "@/assets/blog-03.png";
import Card0 from "@/assets/card.jpeg";
import { Link } from "@/navigation";
import ButtonToTop from "@/components/button-to-top";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("Metadata.blog.title"),
    description: t("Metadata.blog.description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Blog");
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
          <article className="rounded-lg border p-4 text-neutral-900">
            <a>
              <Image
                src={Blog03}
                alt="Blog03"
                className="mb-5 h-auto max-w-full rounded"
              />
            </a>
            <span className="rounded bg-[#DA089F] px-1 text-xs text-white">
              Turismo
            </span>{" "}
            <span className="rounded bg-[#03A9EA] px-1 text-xs text-white">
              Ofertas
            </span>
            <h3 className="mt-2 text-2xl font-medium">
              Turismo en Veracruz por el día de México en Veracruz
            </h3>
            <p className="mt-2">
              Texto resumen del post, apra que se muestre en la parte inferior.
            </p>
          </article>
          <article
            className="height-auto relative
          box-border flex h-[400px] flex-col overflow-hidden border bg-content1 text-neutral-900 outline-none transition-transform-background motion-reduce:transition-none
          "
          >
            <div className="absolute bottom-1 z-10 flex w-full shrink-0 flex-col justify-start rounded-t-large p-3 subpixel-antialiased">
              {/* <span className="bg-blue-500 text-xs">Categoria</span> */}
              <h3 className="mt-2 text-2xl font-medium text-white">
                Turismo en Veracruz por el día de México en Veracruz
              </h3>

              <p className="text-white">
                Texto resumen del post, apra que se muestre en la parte
                inferior.
              </p>
            </div>
            <Image
              src={Card0}
              alt="Blog01"
              className="relative z-0 h-full w-full rounded-large object-cover shadow-none shadow-black/5 !duration-300 transition-transform-opacity motion-reduce:transition-none"
            />
          </article>
          <article
            className="height-auto relative
          box-border flex h-[400px] flex-col overflow-hidden border bg-content1 text-neutral-900 outline-none transition-transform-background motion-reduce:transition-none
          "
          >
            <div className="absolute bottom-0 z-10 flex w-full shrink-0 flex-col justify-start rounded-t-large p-3 subpixel-antialiased bg-gradient-to-b from-transparent to-green-950">
              <h3 className="mt-2 text-2xl font-medium text-white">
                Turismo en Veracruz por el día de México en Veracruz
              </h3>

              <p className="text-white">
                Texto resumen del post, apra que se muestre en la parte
                inferior.
              </p>
            </div>
            <div className=""></div>
            <Image
              src={Blog03}
              alt="Blog01"
              className="relative z-0 h-full w-full rounded-large object-cover shadow-none shadow-black/5 !duration-300 transition-transform-opacity motion-reduce:transition-none"
            />
          </article>
        </div>
      </section>
      <ButtonToTop />
    </>
  );
}
