import type { Metadata } from "next/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import BannerCookies from "@/assets/Banner_cookies.jpg";
import Blog01 from "@/assets/Banner_cdmx.jpg";
import Blog02 from "@/assets/Banner_xalapa.jpg";
import Blog03 from "@/assets/Destino_LV.png";
import SalsaFest2024 from "@/assets/Post_SalsaFest2024.jpg";
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
      <div className="relative h-80 w-full md:[clip-path:_ellipse(100%_90%_at_50%_0%)]">
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
          {/* <article className="rounded-lg border p-4 text-neutral-900">
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
          </article> */}
          <article className="article-listed">
            <div className="absolute bottom-0 z-10 flex w-full shrink-0 flex-col justify-start rounded-b-large bg-gradient-to-b from-transparent to-[#03A9EA] p-3 subpixel-antialiased">
              <h3 className="title">¿Qué ofrece México a los turistas?</h3>

              <p className="abstract">
                México es un gran mosaico que combina preciosos escenarios
                naturales, ciudades con herencia prehispánica, una amplia
                variedad de manjares...
              </p>
            </div>
            <div className=""></div>
            <Image src={SalsaFest2024} alt="Blog01" className="imagen" />
          </article>
          <article className="article-listed">
            <div className="absolute bottom-0 z-10 flex w-full shrink-0 flex-col justify-start rounded-b-large bg-gradient-to-b from-transparent to-[#DA089F] p-3 subpixel-antialiased">
              <h3 className="title">¿Amante de la Salsa y el Baile?</h3>

              <p className="abstract">
                Veracruz y El Salsa Fest 2024 te esperan con grandes estrellas
                del género
              </p>
            </div>
            <div className=""></div>
            <Image src={Blog02} alt="Blog01" className="imagen" />
          </article>
          <article className="article-listed">
            <div className="absolute bottom-0 z-10 flex w-full shrink-0 flex-col justify-start rounded-b-large bg-gradient-to-b from-transparent to-[#591BE5] p-3 subpixel-antialiased">
              <h3 className="title">
                ¿Cuáles son los mejores lugares que ver en Veracruz México?
              </h3>

              <p className="abstract">
                La ciudad de Córdoba es una mezcla de los atributos más
                representativos del estado de Veracruz, México.
              </p>
            </div>
            <div className=""></div>
            <Image src={Blog03} alt="Blog01" className="imagen" />
          </article>
        </div>
      </section>
      <ButtonToTop />
    </>
  );
}
