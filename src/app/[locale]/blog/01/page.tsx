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
          <article className="col-span-2 text-neutral-900 md:pr-8">
            <h3 className="mb-5 mt-2 text-center text-4xl font-medium">
              Turismo en Veracruz por el día de México en Veracruz
            </h3>
            <a>
              <Image
                src={Blog03}
                alt="Blog03"
                className="mb-5 h-auto max-w-full rounded"
              />
            </a>
            <div>
              <span className="pr-1 text-xs text-neutral-900">
                Publicado: 15 de mayo de 2024
              </span>{" "}
              <span className="rounded bg-[#DA089F] px-1 text-xs text-white">
                Turismo
              </span>{" "}
              <span className="rounded bg-[#03A9EA] px-1 text-xs text-white">
                Ofertas
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-medium">
              Turismo en Veracruz por el día de México en Veracruz
            </h3>
            <p className="mt-2 text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3 className="mt-5 text-2xl font-medium">
              Turismo en Veracruz por el día de México en Veracruz
            </h3>
            <p className="mt-2 text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-2 text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <div className="col-span-1 text-neutral-900">
            <article className="mb-5 w-full rounded-lg border p-4 text-neutral-900">
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
              <h3 className="mt-2 text-xl font-medium">
                Turismo en Veracruz por el día de México en Veracruz
              </h3>
              <p className="mt-2">
                Texto resumen del post, apra que se muestre en la parte
                inferior.
              </p>
            </article>
            <article className="w-full rounded-lg border p-4 text-neutral-900">
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
                Texto resumen del post, apra que se muestre en la parte
                inferior.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ButtonToTop />
    </>
  );
}
