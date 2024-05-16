import type { Metadata } from "next/types";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import BannerCookies from "@/assets/Banner_cookies.jpg";
import Blog01 from "@/assets/blog-01.png";
import Blog02 from "@/assets/blog-02.png";
import SalsaFest2024 from "@/assets/Post_SalsaFest2024.jpg";
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
        <div className="absolute left-0 top-0 z-10 grid h-full w-full place-items-center bg-green-600/50">
          <div className="flex flex-col items-center pt-28">
            <h1 className="text-center text-2xl font-bold text-white lg:text-4xl">
              {/* {t("title")} */}
              Blog
            </h1>
          </div>
        </div>
      </div>
      <section className="section-container grid grid-cols-1 place-items-center gap-4 py-10 pb-16 lg:my-10 lg:flex lg:place-items-start lg:gap-8">
        <div className="grid gap-8 md:grid-cols-7">
          <article className="article-posted col-span-5 text-neutral-900 md:pr-8">
            <h4 className="mb-5 mt-2 text-center text-3xl font-medium text-green-600">
              ¿Amante de la Salsa y el Baile?
            </h4>
            <h3 className="mb-5 mt-2 text-center text-4xl font-bold">
              Veracruz y El Salsa Fest 2024 te esperan con grandes estrellas del
              género
            </h3>
            <a>
              <Image
                src={SalsaFest2024}
                alt="Salsa Fest Veracruz 2024"
                className="mb-5 h-auto max-w-full rounded"
              />
            </a>
            <div>
              <span className="pr-1 text-xs text-neutral-900">
                Publicado: 17 de mayo de 2024
              </span>
              {/* {" "}
              <span className="rounded bg-[#DA089F] px-1 text-xs text-white">
                Turismo
              </span>{" "}
              <span className="rounded bg-[#03A9EA] px-1 text-xs text-white">
                Ofertas
              </span> */}
            </div>
            <p className="mt-4 text-lg font-light">
              Cuando hablamos de música y baile es porque indudablemente nos
              referimos al <strong>SALSA FEST 2024</strong>, que este año estará
              encabezado por grandes figura del género como el reconocido Rubén
              Blandes entre otros grandes.
            </p>

            <p className="mt-4 text-lg font-light">
              Este emocionante festival de música y baile se celebra en México
              año con año, en concreto en el estado de Veracruz, y es sin duda
              alguna un gran atractivo para la zona del Caribe, debido a que la
              Salsa es el ritmo más simbólico que engloba esta parte del mundo.
            </p>
            <p className="mt-4 text-lg font-light">
              <a
                className="font-medium text-green-600"
                target="_blank"
                href="https://www.facebook.com/SalsaFestVeracruz"
              >
                El Salsódromo de Boca del Río
              </a>
              , lugar emblemático para la salsa y el baile, será testigo de este
              magno evento que hasta el momento cuenta con la confirmación de
              grandes estrellas de renombre cómo, <b>Rubén Blades</b> con{" "}
              <b>Roberto Delgado “Big Band”</b>, <b>Danny Daniel</b>,{" "}
              <b>Víctor Manuel</b>, <b>Chiquito Team Band</b>, <b>Tomboranga</b>
              , <b>Guayacán</b>,<b>Sonora Carruseles</b>, <b>Jerry Rivera</b>,{" "}
              <b>Elito Revé</b>, <b>Oscar de León</b>,{" "}
              <b>El Septeto Acarey de Renier Pérez</b>, <b>Frankie Ruiz Jr.</b>{" "}
              Y <b>Diego Morán</b>, confirmados hasta el momento.
            </p>
            <p className="mt-4 text-lg font-light">
              Para la asistencia al espectáculo, el gobierno de Veracruz y Boca
              del Río han abierto el registro para conseguir boletos a través
              del sitio{" "}
              <a
                className="font-medium text-green-600"
                target="_blank"
                href="https://www.salsafestveracruz.com"
              >
                www.salsafestveracruz.com
              </a>{" "}
              donde se espera una gran asistencia, y en donde habrá que llenar
              un sencillo formulario mediante nombre completo, edad, y el lugar
              de procedencia; además ha sido instalado un módulo para la entrega
              de boletos de acceso en las instalaciones del World Trade Center
              (WTC) de Boca del Rio, ubicado en el lobby sur del recinto en un
              horario de 9 de la mañana a 6 de la tarde, SIN NINGÚN COSTO…¡Así
              que no te lo puedes perder!, si te encuentras en el estado de
              Veracruz durante esas fechas, ¡Prepárate para disfrutar de la
              mejor salsa en este vibrante evento!
            </p>
            <p className="mt-4 text-lg font-light">
              <b>El SALSA FEST</b> se llevará a cabo los días{" "}
              <b>13, 14 y 15 de junio</b>, siendo un evento que convocará a los
              amantes del género musical, que podrán escuchar y bailar gracias a
              la exquisita oferta de artistas y bandas reconocidas, de muchas
              partes del estado y del país.
            </p>
          </article>
          <div className="col-span-2 text-neutral-900">
            <article className="mb-5 w-full rounded-lg border p-4 text-neutral-900">
              <a>
                <Image
                  src={SalsaFest2024}
                  alt="Blog03"
                  className="mb-5 h-auto max-w-5 rounded"
                />
              </a>
              {/* <span className="rounded bg-[#DA089F] px-1 text-xs text-white">
                Turismo
              </span>{" "}
              <span className="rounded bg-[#03A9EA] px-1 text-xs text-white">
                Ofertas
              </span> */}
              <h3 className="mt-2 text-xl font-medium">
                ¿Cuáles son los mejores lugares que ver en Veracruz México?
              </h3>
              <p className="mt-2">
                Texto resumen del post, apra que se muestre en la parte
                inferior.
              </p>
            </article>
            <article className="w-full rounded-lg border p-4 text-neutral-900">
              <a>
                <Image
                  src={SalsaFest2024}
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
