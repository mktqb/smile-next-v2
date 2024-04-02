import HeroHome from "@/components/hero-home";
import TutorialSection from "@/components/tutorial-section";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

/* import Van from "@/assets/Van.png";
import HumanFaq from "@/assets/Human_faq.png";
import HumanInland from "@/assets/Human_inland.png";
*/
import BannerInlandEmpire from "@/assets/Banner-Inland-Empire.jpg";
import BannerSanDiego from "@/assets/Banner-San-Diego.jpg";
import BannerSanYsidro from "@/assets/Banner-San-Ysidro.jpg";
import BannerTijuana from "@/assets/Banner-Tijuana.jpg";

/* 
import Aboutus from "@/assets/Img_aboutus.jpg";
import DestinationSliderSection from "@/components/destination-slider-section";
import PopularRoutesCard from "@/components/popular-routes-card";
import ContactUs from "@/components/contactus-section"; */

/* import ElegirnosCard from "@/components/elegirnos-card";
import ElegirnosCarousel from "@/components/elegirnos-carousel";
import ServicesSection from "@/components/services-section"; */
import { Bgtld } from "@/components/svg";
/* import FixedSection from "@/components/fixed-section"; */
import { Divider } from "@nextui-org/divider";
import DestinationsCarousel from "@/components/destinations-carousel";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  return (
    <>
      <HeroHome
        title={t.raw("hero.title")}
        background={{
          type: "slider",
          image: [
            BannerInlandEmpire,
            BannerSanDiego,
            BannerSanYsidro,
            BannerTijuana,
          ],
        }}
        subtitle={t.raw("hero.text")}
        withSearcher
        translations={{
          locale: locale as "es" | "en",
        }}
      />

      <main className="flex flex-col items-center justify-between pt-20 md:min-h-[900px]">
        {/* Ejemplo del carrusel con traducciones desde el servidor */}
        <DestinationsCarousel
          translations={{
            title: t.raw("card_carousel.title"),
            losAngeles: t.raw("card_carousel.losAngeles"),
          }}
        />
      </main>

      {/* Slider de Destinos, alternando arriba/abajo */}

      {/* <DestinationSliderSection
        pretitle={t("destination.pretitle")}
        title={t("destination.title")}
      /> */}

      {/* Human Inland Empire */}
      <div className="relative grid h-min w-full place-items-center overflow-visible bg-cover bg-center bg-no-repeat max-md:rounded-t-2xl md:mb-0 md:mt-24">
        <section className="section-container grid w-full grid-cols-1 flex-col items-center gap-10 pb-0 max-lg:pt-5 md:flex-row lg:grid-cols-5 xl:gap-6">
          <div className="order-1 col-span-1 flex flex-col items-center gap-4 text-white md:order-1 md:items-start lg:col-span-3 lg:gap-5">
            <h2
              className="main-title text-center max-md:text-2xl md:text-start md:text-3xl"
              dangerouslySetInnerHTML={{
                __html: t.raw("banner.text"),
              }}
            />
            <a
              target="_blank"
              href={process.env.PUBLIC_QUAWEB_URL}
              className="secondary-button"
            >
              {t("banner.button")}
            </a>
          </div>
          {/* <Image
            src={HumanInland}
            alt=""
            className="order-2 w-40 max-sm:mx-auto md:order-2 md:-mt-20 md:w-80 lg:col-span-2 xl:w-80"
          /> */}
        </section>
      </div>
      {/* FIN tienes preguntas */}

      <TutorialSection
        title={t("tutorial.title")}
        title0={t("tutorial.0.title")}
        text0={t("tutorial.0.text")}
        title1={t("tutorial.1.title")}
        text1={t("tutorial.1.text")}
        title2={t("tutorial.2.title")}
        text2={t("tutorial.2.text")}
        title3={t("tutorial.3.title")}
        text3={t("tutorial.3.text")}
        text={t.raw("tutorial.cta.text")}
        button={t("tutorial.cta.button")}
      />
      <section id="aboutUs" className="relative space-y-4 pb-10">
        <Bgtld className="absolute left-0 top-0 max-md:hidden" />
        <div className="w-full bg-primary-600 py-10">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 rounded-xl bg-primary-500 p-5 text-white shadow-xl lg:grid-cols-2">
              <div className="flex flex-col gap-5 md:pr-5">
                <h3 className="text-xl font-bold max-md:hidden max-sm:text-center xl:text-xl 2xl:text-2xl">
                  {t("about_us.title")}
                </h3>
                <div className="mx-auto w-full text-center md:hidden md:w-2/3">
                  {/* <h3 className="uppercase tracking-widest text-lg">Nuestros destinos</h3> */}
                  <div className="flex items-center justify-center space-x-2 py-4">
                    <div className="flex-1 border-t-2 border-white"></div>
                    <h2 className="px-4 text-center text-2xl font-bold text-white md:px-4 xl:text-3xl">
                      {t("about_us.title")}
                    </h2>
                    <div className="flex-1 border-t-2 border-white"></div>
                  </div>
                </div>
                <p className="text-pretty text-sm max-sm:text-justify xl:text-base">
                  {t("about_us.text.0")}
                </p>
                <p className="text-pretty text-sm max-sm:text-justify xl:text-base">
                  {t("about_us.text.1")}
                </p>
                <Link
                  href="/nosotros"
                  className="secondary-button mt-5 w-fit font-semibold text-white duration-200 max-lg:hidden lg:hover:bg-neutral-600"
                >
                  {t("about_us.button")}
                </Link>
              </div>
              {/* <video
                src="/Video_Home.webm"
                className="w-full rounded-xl lg:place-self-center"
                controls
              /> */}
              {/* <Image
                src={Aboutus}
                alt=""
                className="center z-[1] h-full w-auto rounded-2xl object-cover object-center"
              /> */}
              <div className="grid place-items-center lg:hidden">
                <Link
                  href="/nosotros"
                  className="secondary-button rounded-lg border border-white bg-neutral-500 px-3 py-1 font-semibold text-white"
                >
                  Conócenos más aquí
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* conoce nuestras Pricing Tarifas */}
      <div className="relative z-[12] my-10 -mt-10 grid h-min w-full place-items-center overflow-hidden rounded-t-3xl bg-transparent md:my-0 md:rounded-t-[5rem]">
        <section className="section-container z-[1] grid w-full grid-cols-1 flex-col items-center py-10 md:flex-row md:pt-20 lg:grid-cols-5 xl:grid-cols-6 xl:gap-6">
          <div className="col-span-1 flex flex-col items-center gap-2 md:items-start lg:col-span-2 lg:gap-4 xl:col-span-2">
            <div className="order-1 flex min-w-[58%] items-start gap-5 max-md:w-full">
              {/* <h2
                  className="main-title w-fit min-w-[200px]"
                  dangerouslySetInnerHTML={{ __html: t.raw("routes.title") }}
                /> */}
              <div className="main-title title-container min-w-60 max-w-72 pb-4 text-left leading-3 text-black">
                <h3 className="text-xl">Conoce nuestras</h3>
                <div className="flex items-center justify-center space-x-2 py-0">
                  <h2 className="uppercase tracking-widest">Tarifas</h2>
                  <div className="flex-1 border-t-2 border-black"></div>
                </div>
              </div>
            </div>

            <div className="custom-shadow order-2 w-fit rounded-lg bg-white p-3 max-md:w-full md:order-3 md:p-6 xl:px-8 xl:py-7">
              {/* <PopularRoutesCard
                Icon={<PricingAdult />}
                origin="Adultos Express"
                schedule="7"
                vehicle="14"
              /> */}
              <Divider className="mx-2 h-[1px] w-[calc(100%_-_16px)] bg-neutral-400" />
              {/* <PopularRoutesCard
                Icon={<PricingSenior />}
                origin="Senior Express"
                schedule="5"
                vehicle="14"
              /> */}
              <Divider className="mx-2 h-[1px] w-[calc(100%_-_16px)] bg-neutral-400" />
              {/* <PopularRoutesCard
                Icon={<PricingSenior />}
                origin="Niños Express"
                schedule="5"
                vehicle="14"
              /> */}
            </div>
          </div>
          <div className="grid justify-center gap-4 lg:col-span-3 xl:col-span-4">
            {/* <Image
              src={Van}
              alt=""
              className="z-[1] px-4 max-md:relative max-md:-mr-24 max-md:-mt-10 max-md:w-full max-md:px-0 sm:px-8 md:px-0"
            /> */}

            <div className="col-span-full flex flex-col items-center gap-x-4 gap-y-2 lg:flex-row lg:justify-center">
              <span
                className="text-center text-black"
                dangerouslySetInnerHTML={{
                  __html: t.raw("tutorial.cta.text"),
                }}
              />
              <a
                href="" /* {process.env.PUBLIC_QUAWEB_URL} */
                target="_blank"
                className="main-button"
              >
                {t("tutorial.cta.button")}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* <FixedSection /> */}
      {/* por qué elegirnos */}
      <div className="parallax relative z-10 grid h-fit w-full place-items-center overflow-hidden md:my-0 md:pb-24">
        <section className="section-container z-[1] grid w-full grid-cols-1 items-center gap-6 py-10 md:flex-row md:pt-36 xl:gap-6">
          {/* <div className="title-container items-center pb-8 text-white">
            <h2 className="main-title">
              <b>{t("choose_us.title")}</b>
            </h2>
            <hr className="title-line w-24 border-t-medium" />
          </div> */}
          <div className="mx-auto w-full text-center md:w-2/3">
            {/* <h3 className="uppercase tracking-widest text-lg">Nuestros destinos</h3> */}
            <div className="flex items-center justify-center space-x-2 py-4">
              <div className="flex-1 border-t-2 border-white"></div>
              <h2 className="px-4 text-center text-3xl font-bold text-white">
                {t("choose_us.title")}
              </h2>
              <div className="flex-1 border-t-2 border-white"></div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-7 md:hidden md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {/* <ElegirnosCarousel
              translations={[
                {
                  title: t("choose_us.why.0.title"),
                  text: t("choose_us.why.0.text"),
                },
                {
                  title: t("choose_us.why.1.title"),
                  text: t("choose_us.why.1.text"),
                },
                {
                  title: t("choose_us.why.2.title"),
                  text: t("choose_us.why.2.text"),
                },
              ]}
            /> */}
          </div>
          <div className="hidden w-full grid-cols-1 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {/* <ElegirnosCard
              title={t("choose_us.why.0.title")}
              text={t("choose_us.why.0.text")}
            />
            <ElegirnosCard
              title={t("choose_us.why.1.title")}
              text={t("choose_us.why.1.text")}
            />
            <ElegirnosCard
              title={t("choose_us.why.2.title")}
              text={t("choose_us.why.2.text")}
            /> */}
          </div>

          <h1
            className="main-title mt-12 text-center font-semibold text-black"
            dangerouslySetInnerHTML={{
              __html: t.raw("choose_us.services.title"),
            }}
          />

          <div className="mb-6 grid h-auto w-full grid-cols-1 gap-10 py-4">
            {/* <ServicesSection
              translations={{
                Service01: t("choose_us.services.Service01"),
                Service02: t("choose_us.services.Service02"),
                Service03: t("choose_us.services.Service03"),
                Service04: t("choose_us.services.Service04"),
                Service05: t("choose_us.services.Service05"),
                Service06: t("choose_us.services.Service06"),
              }}
            /> */}
          </div>
          {/* Acá va un slider */}
        </section>
      </div>

      {/* tienes preguntas */}
      <div className="bg-faq dark:bg-faq-dark relative z-[11] grid h-min w-full place-items-center overflow-visible bg-cover bg-center bg-no-repeat max-md:rounded-b-2xl max-sm:pt-8 md:my-0 md:rounded-b-[5rem]">
        <section className="section-container z-[1] grid w-full grid-cols-1 flex-col items-center gap-10 pb-0 md:flex-row lg:grid-cols-5 xl:gap-6">
          {/* <Image
            src={HumanFaq}
            alt=""
            className="z-30 order-2 mb-[-1px] w-40 max-sm:mx-auto md:order-1 md:-mt-20 md:w-80 lg:col-span-2 xl:w-96"
          /> */}
          <div className="order-1 col-span-1 flex flex-col items-center gap-4 text-black md:order-2 md:items-start lg:col-span-3 lg:gap-5">
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
    </>
  );
}
