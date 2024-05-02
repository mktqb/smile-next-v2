import HeroHome from "@/components/hero-home";
import TutorialSection from "@/components/tutorial-section";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import type { Metadata } from "next/types";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import HumanFaq from "@/assets/Human_faq.png";
import BusFrontal from "@/assets/Bus_frontal.png";
import BusLateral from "@/assets/Bus_perfil.png";

import {
  CustomFixed,
  CustomFixedRoutes,
  CustomFixedRoutesMobile,
  CustomTv,
  CustomToilet,
  CustomCharger,
  CustomReposapies,
  CustomSeat,
  CustomAir,
  CustomIndividualLight,
  CustomHeating,
} from "@/components/svg";

import { Divider } from "@nextui-org/divider";
import DestinationsCarousel from "@/components/destinations-carousel";
import TerminalsSection from "@/components/terminals-section";
import ButtonToScript from "@/components/buttonToScrip";
import ServicesSlider from "@/components/services-slider";
import TutorialCard from "@/components/tutorial-card";
import TutorialCarousel from "@/components/tutorial-carousel";
import OfficesComponent from "@/components/offices-card";
import AllTerminals from "@/components/allterminals-section";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("Metadata.home.title"),
    description: t("Metadata.home.description"),
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  return (
    <>
      <HeroHome
        title={t.raw("hero.title")}
        /* background={{
          type: "slider",
             image: [
            BannerInlandEmpire,
            BannerSanDiego,
            BannerSanYsidro,
            BannerTijuana,
          ],
        }} */
        subtitle={t.raw("hero.text")}
        withSearcher
        translations={{
          locale: locale as "es" | "en",
          slogan: t("hero.slogan"),
          text: t("hero.text"),
        }}
      />

      <main className="flex flex-col items-center justify-between pt-5 md:pt-20">
        {/* Ejemplo del carrusel con traducciones desde el servidor */}
        <DestinationsCarousel
          translations={{
            title: t.raw("destinations_carousel.title"),
          }}
        />
      </main>

      {/* Slider de Destinos, alternando arriba/abajo */}

      {/* <DestinationSliderSection
        pretitle={t("destination.pretitle")}
        title={t("destination.title")}
      /> */}

      {/* FIN tienes preguntas */}

      <div className="flex w-full flex-col items-center gap-1 pb-5 md:hidden">
        <h2
          className="main-title text-black"
          dangerouslySetInnerHTML={{ __html: t.raw("tutorial.title") }}
        />
      </div>
      {/* Tutorial: Compra en 4 pasos */}
      <div className="bg-tutorial parallax">
        <div className="footer-curve -translate-y-[1px]"></div>
        <section className="section-container relative z-10 grid grid-cols-1 gap-5 max-md:px-0 md:grid-cols-1 md:pb-32 md:pt-16 lg:grid-cols-1 xl:grid-cols-1">
          <div className="flex w-full flex-col items-center gap-1 pb-8 max-md:hidden">
            <h2
              className="main-title text-white"
              dangerouslySetInnerHTML={{ __html: t.raw("tutorial.title") }}
            />
          </div>
          <div className="grid grid-cols-1 px-8 py-2">
            <TutorialCarousel
              title0={t("tutorial.0.title")}
              text0={t("tutorial.0.text")}
              title1={t("tutorial.1.title")}
              text1={t("tutorial.1.text")}
              title2={t("tutorial.2.title")}
              text2={t("tutorial.2.text")}
              title3={t("tutorial.3.title")}
              text3={t("tutorial.3.text")}
            />
          </div>
          <div className="col-span-full flex flex-col items-center gap-x-4 gap-y-2 max-md:hidden lg:flex-row lg:justify-center xl:mt-4">
            <span
              className="text-center text-white"
              dangerouslySetInnerHTML={{ __html: t.raw("tutorial.cta.text") }}
            />
            <a
              href={process.env.PUBLIC_QUAWEB_URL}
              target="_blank"
              className="main-button"
            >
              {t("tutorial.cta.button")}
            </a>
          </div>
        </section>
      </div>
      <div className="col-span-full mt-5 flex flex-col items-center gap-x-4 gap-y-2 md:hidden">
        <span
          className="text-center text-black"
          dangerouslySetInnerHTML={{ __html: t.raw("tutorial.cta.text") }}
        />
        <a
          href={process.env.PUBLIC_QUAWEB_URL}
          target="_blank"
          className="main-button"
        >
          {t("tutorial.cta.button")}
        </a>
      </div>
      {/* quienes somos */}
      <div className="scroll-m-28" id="aboutUs">
        <div className="relative mt-10 h-min w-full place-items-center overflow-hidden bg-transparent max-md:rounded-t-3xl max-sm:bg-primary-100 md:my-0 md:rounded-b-[5rem] md:bg-white">
          <section className="section-container grid w-full items-center gap-0 bg-transparent py-8 max-lg:pb-0 max-md:px-8 md:grid-cols-5 md:gap-10 md:py-14 xl:grid-cols-2 xl:gap-6">
            <div className="flex flex-col items-center gap-4 rounded-t-xl bg-white px-6 py-8 md:col-span-3 md:items-start md:bg-transparent md:p-0 lg:gap-4 xl:col-span-1">
              <h1 className="main-title text-center font-semibold text-black">
                {t("about_us.title")}
              </h1>
              <p
                className="text-start text-sm text-black max-md:text-justify md:text-base"
                dangerouslySetInnerHTML={{ __html: t.raw("about_us.text.0") }}
              />
              <p className="hidden text-start text-sm text-black md:block md:text-base">
                {t("about_us.text.1")}
              </p>
              <a
                href={process.env.PUBLIC_QUAWEB_URL}
                target="_blank"
                className="main-button"
              >
                {t("about_us.button")}
              </a>
            </div>
            <div className="h-min-[300px] relative flex w-full items-center justify-center rounded-b-3xl max-md:aspect-[16/9] md:col-span-2 md:h-full xl:col-span-1">
              <div className="absolute left-0 top-0 h-full w-max max-md:hidden">
                <Image
                  src={BusLateral}
                  alt="Smile Bus"
                  className="h-full w-auto"
                />
              </div>
              <Image
                src={BusLateral}
                alt="Smile Bus"
                className="h-full translate-x-3 max-md:-translate-y-7 max-md:object-contain sm:translate-x-28 md:hidden"
              />
            </div>
          </section>
        </div>
      </div>

      {/* conoce nuestras Pricing Tarifas */}
      {/* conoce nuestras rutas */}
      <div id="terminal" className="scroll-m-20">
        <div className="relative h-min w-full place-items-center overflow-hidden bg-primary-300 bg-transparent max-sm:bg-zinc-100 md:my-0 md:bg-primary-100">
          <div className="footer-curve"></div>
          <section className="section-container flex flex-col gap-4 [grid-auto-rows:_min-content] lg:grid">
            <div className="grid w-full scroll-m-20 place-items-center bg-primary-100 py-4 max-sm:hidden max-sm:bg-zinc-100 sm:pb-5 md:pb-6 md:pt-20">
              <div className="flex items-center gap-4 md:translate-x-32 xl:translate-x-0">
                <div className="flex-col items-center">
                  <h2
                    className="font-taviraj text-2xl font-bold text-black"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("terminals_title"),
                    }}
                  />
                </div>
                <CustomFixed className="text-xl text-primary-300" />
              </div>
            </div>
          </section>
          <AllTerminals locale={locale} />
        </div>
      </div>

      {/* <FixedSection /> */}

      <span id="destinations" className="scroll-m-20"></span>
      <div className="grid w-full scroll-m-20 place-items-center bg-primary-100 py-4 max-sm:hidden max-sm:bg-zinc-100 sm:pb-5 md:pb-6 md:pt-20">
        <div className="flex items-center gap-4 md:translate-x-32 xl:translate-x-0">
          <div className="flex-col items-center">
            <h2 className="font-taviraj text-2xl font-bold text-black">
              {t("fixed_route.title")}
            </h2>
            <h4 className="text-center font-taviraj text-sm text-black xl:text-lg">
              {t("fixed_route.subtitle")}
            </h4>
          </div>
          <CustomFixed className="text-xl text-primary-300" />
        </div>
      </div>

      <section className="section-container from-zinc-100 to-white pb-8 pt-2 max-md:px-3 max-sm:rounded-b-3xl max-sm:bg-gradient-to-b md:hidden">
        <div className="fixed-route-bg flex w-full flex-col items-center rounded-xl p-2 pb-4 text-white">
          <div className="z-30 my-8">
            <div className="flex items-center gap-4 md:translate-x-32 xl:translate-x-0">
              <div className="flex-col items-center">
                <h2 className="font-taviraj text-2xl font-bold text-white">
                  {t("fixed_route.title")}
                </h2>
                <h4 className="text-center font-taviraj text-sm text-white xl:text-lg">
                  {t("fixed_route.subtitle")}
                </h4>
              </div>
              <CustomFixed className="text-xl text-white" />
            </div>
          </div>

          <CustomFixedRoutesMobile className="z-20 text-3xl duration-200 min-[400px]:text-4xl sm:text-5xl" />
          <Image
            src={BusFrontal}
            alt="bus"
            className="z-20 w-2/3 md:-translate-y-5"
          />
          <div className="z-20">
            <ButtonToScript
              transaltions={{
                text: t("fixed_route.button"),
              }}
            />
          </div>
        </div>
        <div className="z-[1] col-span-full grid place-items-center xl:col-span-2"></div>
      </section>
      <div
        id="destinations"
        className="relative z-20 w-full scroll-m-20 py-8 text-white max-md:hidden"
      >
        <section className="section-container grid md:hidden">
          <div className="z-50 flex flex-col items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="flex-col items-center">
                <h2 className="text-lg font-bold text-[#591BE5]">
                  {t("fixed_route.title")}
                </h2>
                <h4 className="text-center text-xs xl:text-lg">
                  {t("fixed_route.subtitle")}
                </h4>
              </div>
              <CustomFixed className="text-xl text-black" />
            </div>
          </div>
        </section>
        <div className="fixed-route-bg absolute left-0 top-0 h-full w-full overflow-hidden"></div>
        <section className="section-container grid grid-cols-2 xl:grid-cols-3">
          <div className="z-[1] col-span-1 max-md:mb-4">
            <Image
              src={BusFrontal}
              alt="Smile Bus"
              className="z-[1] mt-4 px-4 sm:px-8 md:-mt-32 md:px-0"
            />
          </div>
          <div className="z-[1] col-span-1 max-md:order-1">
            <CustomFixedRoutes className="z-20 -my-6 text-3xl lg:text-4xl" />
          </div>
          <div className="z-[1] col-span-full grid place-items-center xl:col-span-1">
            <ButtonToScript transaltions={{ text: t("fixed_route.button") }} />
          </div>
        </section>
      </div>

      {/**
       * INICIO de Contenedor de varias secciones:
       * - Por qué elegirnos
       * - Faqs
       */}

      {/* por qué elegirnos */}
      <section className="section-container py-10">
        <div className="main-title title-container mt-4 items-center pb-6 xl:pb-8">
          <h2
            className="text-[#21D840]"
            dangerouslySetInnerHTML={{ __html: t.raw("why.title") }}
          />
          <hr className="title-line w-20 border-[#591BE5]" />
        </div>
        <p className="text-pretty pt-5 text-center text-[#407101] lg:px-16">
          {t("why.text")}
        </p>
        <div className="mx-auto mb-6 mt-14 grid w-10/12 grid-cols-1 gap-10 py-4">
          <div className="main-title title-container items-center pb-6 xl:pb-8">
            <h2
              className="text-[#21D840]"
              dangerouslySetInnerHTML={{ __html: t.raw("why.services.title") }}
            />
            <hr className="title-line w-20 border-[#591BE5]" />
          </div>
          <ServicesSlider
            items={[
              {
                text: t("why.services.service01"),
                Icon: <CustomToilet />,
              },
              {
                text: t("why.services.service02"),
                Icon: <CustomSeat />,
              },
              {
                text: t("why.services.service03"),
                Icon: <CustomAir />,
              },
              {
                text: t("why.services.service04"),
                Icon: <CustomHeating />,
              },
              {
                text: t("why.services.service05"),
                Icon: <CustomTv />,
              },
              {
                text: t("why.services.service06"),
                Icon: <CustomCharger />,
              },
              {
                text: t("why.services.service07"),
                Icon: <CustomIndividualLight />,
              },
              {
                text: t("why.services.service08"),
                Icon: <CustomReposapies />,
              },
            ]}
          />
        </div>
      </section>

      {/* tienes preguntas */}

      {/* FIN tienes preguntas */}

      {/* por qué elegirnos */}

      {/* tienes preguntas */}
      <div className="bg-faq parallax relative z-[11] grid h-min w-full place-items-center overflow-visible bg-cover bg-center bg-no-repeat max-md:rounded-b-2xl max-sm:pt-8 md:my-0">
        <div className="footer-curve -translate-y-[1px]"></div>
        <section className="section-container z-[1] grid w-full grid-cols-1 flex-col items-center gap-10 pb-0 md:flex-row lg:grid-cols-5 xl:gap-6">
          <Image
            src={HumanFaq}
            alt=""
            className="z-30 order-2 mb-[-1px] w-40 max-sm:mx-auto md:order-2 md:-mt-44 md:w-80 lg:col-span-2 xl:w-[34rem]"
          />
          <div className="order-1 col-span-1 flex flex-col items-center gap-4 text-white md:order-1 md:items-start lg:col-span-3 lg:gap-5">
            <div className="title-container items-center pb-4 md:items-start">
              <h2
                className="main-title text-center font-bold md:text-start"
                dangerouslySetInnerHTML={{
                  __html: t.raw("faq.title"),
                }}
              />
            </div>
            <p className="text-center text-sm md:text-start md:text-lg">
              {t("faq.text")}
            </p>
            <Link href={"/faq"} className="main-button">
              {t("faq.button")}
            </Link>
          </div>
        </section>
      </div>
      {/* FIN tienes preguntas */}

      {/* <span id="contact-us"></span> */}
      {/* <ContactUs locale={locale as "en" | "es"} /> */}
      <section
        id="contacto"
        className="section-container mt-12 flex w-full scroll-m-36 flex-col items-center bg-white md:mt-28"
      >
        <div className="main-title title-container items-center pb-6 xl:pb-8">
          <h2
            className="font-taviraj text-black"
            dangerouslySetInnerHTML={{ __html: t.raw("contact_us.title") }}
          />
          <hr className="title-line w-20 border-primary-300" />
          <h3 className="text-sm text-black">{t("contact_us.subtitle")}</h3>
        </div>
        {/* <h3 className="main-title font-semibold text-black">
          {t("contact_us.subtitle")}
        </h3>
        <h4 className="text-sm text-black">{t("contact_us.title")}</h4> */}
      </section>
      <OfficesComponent locale={locale} />
    </>
  );
}
