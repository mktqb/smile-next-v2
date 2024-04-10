import HeroHome from "@/components/hero-home";
import TutorialSection from "@/components/tutorial-section";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import HumanFaq from "@/assets/Human_faq.png";
import BusFrontal from "@/assets/Bus_Frontal.png";
import Nosotros from "@/assets/Img_nosotros.jpg";

/* 
import Aboutus from "@/assets/Img_aboutus.jpg";
import DestinationSliderSection from "@/components/destination-slider-section";
import PopularRoutesCard from "@/components/popular-routes-card";
import ContactUs from "@/components/contactus-section"; */

/* import ElegirnosCard from "@/components/elegirnos-card";
import ElegirnosCarousel from "@/components/elegirnos-carousel";
import ServicesSection from "@/components/services-section"; */
import {
  Bgtld,
  CustomFixed,
  CustomFixedRoutes,
  CustomFixedRoutesMobile,
  CustomTv,
  CustomWifi,
  CustomToilet,
  CustomCharger,
  CustomReposapies,
  CustomSeat,
  CustomAir,
  CustomIndividualLight,
} from "@/components/svg";
/* import FixedSection from "@/components/fixed-section"; */
import { Divider } from "@nextui-org/divider";
import DestinationsCarousel from "@/components/destinations-carousel";
import TerminalsSection from "@/components/terminals-section";
import ButtonToScript from "@/components/buttonToScrip";
import ServicesSlider from "@/components/services-slider";
import TutorialCard from "@/components/tutorial-card";
import TutorialCarousel from "@/components/tutorial-carousel";
import OfficesComponent from "@/components/offices-card";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
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
        }}
      />

      <main className="flex flex-col items-center justify-between pt-20">
        {/* Ejemplo del carrusel con traducciones desde el servidor */}
        <DestinationsCarousel
        /* translations={{
            title: t.raw("card_carousel.title"),
            losAngeles: t.raw("card_carousel.losAngeles"),
          }} */
        />
      </main>

      {/* Slider de Destinos, alternando arriba/abajo */}

      {/* <DestinationSliderSection
        pretitle={t("destination.pretitle")}
        title={t("destination.title")}
      /> */}

      {/* FIN tienes preguntas */}

      <div className="flex w-full flex-col items-center gap-1 pb-5 md:hidden">
        <h2 className="main-title text-black">
          Compra tus boletos <b>en 4 pasos</b>
        </h2>
      </div>
      {/* Tutorial: Compra en 4 pasos */}
      <div className="bg-tutorial parallax">
        <div className="footer-curve"></div>
        <section className="section-container relative z-10 grid grid-cols-1 gap-5 max-md:px-0 md:grid-cols-1 md:pb-32 md:pt-16 lg:grid-cols-1 xl:grid-cols-1">
          <div className="flex w-full flex-col items-center gap-1 pb-8 max-md:hidden">
            <h2 className="main-title text-white">
              Compra tus boletos <b>en 4 pasos</b>
            </h2>
          </div>
          <div className="grid grid-cols-1 px-8 py-2 md:hidden">
            <TutorialCarousel
              translations={[
                {
                  count: "01",
                  title: "¿A dónde vamos?",
                  text: "Elige tanto tu ciudad de origen y destino, como las fechas de tu viaje",
                },
                {
                  count: "02",
                  title: "Escoge el horario y tus asientos",
                  text: "Selecciona precio y horarios de salida y llegada para tu viaje, junto con tus asientos",
                },
                {
                  count: "03",
                  title: "Completa los datos del pasajero",
                  text: "Revisa los detalles de tu viaje e ingresa la información de los pasajeros",
                },
                {
                  count: "04",
                  title: "Registra tu método de pago",
                  text: "Elige tu medio de pago y completa los datos solicitados. Haz clic en Procesar Pago. ¡Y listo!",
                },
              ]}
            />
          </div>
          <div className="hidden gap-5 rounded-lg bg-white/50 p-8 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <TutorialCard
              count="01"
              title="¿A dónde vamos?"
              text="Elige tanto tu ciudad de origen y destino, como las fechas de tu viaje"
            />
            <TutorialCard
              count="02"
              title="Escoge el horario y tus asientos"
              text="Selecciona precio y horarios de salida y llegada para tu viaje, junto con tus asientos"
            />
            <TutorialCard
              count="03"
              title="Completa los datos del pasajero"
              text="Revisa los detalles de tu viaje e ingresa la información de los pasajeros"
            />
            <TutorialCard
              count="04"
              title="Registra tu método de pago"
              text="Elige tu medio de pago y completa los datos solicitados. Haz clic en Procesar Pago. ¡Y listo!"
            />
          </div>
          <div className="col-span-full flex flex-col items-center gap-x-4 gap-y-2 max-md:hidden lg:flex-row lg:justify-center xl:mt-4">
            {/* <span
              className="text-center text-white"
              dangerouslySetInnerHTML={{ __html: t.raw("tutorial.cta.text") }}
            /> */}
            <span>
              <b>Consigue tus tickets</b> ¡en pocos minutos!
            </span>
            <a
              href={process.env.PUBLIC_QUAWEB_URL}
              target="_blank"
              className="main-button"
            >
              {/* {t("tutorial.cta.button")} */}
              Compra sin salir de casa
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
        <div className="relative mt-10 h-min w-full place-items-center overflow-hidden bg-transparent max-md:rounded-t-3xl max-sm:bg-white md:my-0 md:rounded-b-[5rem] md:bg-white">
          <section className="section-container grid w-full items-center gap-0 bg-transparent py-8 md:grid-cols-5 md:gap-10 md:py-14 xl:grid-cols-2 xl:gap-6">
            <div className="flex flex-col items-center gap-4 rounded-t-xl bg-white px-4 py-8 md:col-span-3 md:items-start md:bg-transparent md:p-0 lg:gap-4 xl:col-span-1">
              <h1 className="main-title text-center text-black">
                {/* {t("about_us.title")} */}¿Quiénes somos?
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
            <div className="h-min-[300px] flex aspect-[16/9] w-[100%] items-center justify-center overflow-hidden rounded-b-3xl md:col-span-2 md:aspect-square md:rounded-xl xl:col-span-1 xl:aspect-[18/9]">
              <Image
                src={Nosotros}
                alt={"nosotros"}
                className="center h-auto w-full -translate-y-6 rounded-lg object-cover object-center"
              />
            </div>
          </section>
          <section className="section-container grid w-full items-center gap-0 bg-transparent py-8 md:grid-cols-5 md:gap-10 md:py-14 xl:grid-cols-2 xl:gap-6">
            <div className="flex flex-col items-center gap-4 rounded-t-xl bg-white px-4 py-8 md:col-span-3 md:items-start md:bg-transparent md:p-0 lg:gap-4 xl:col-span-1">
              <h1 className="main-title text-center text-black">
                {/* {t("about_us.title")} */}¿Quiénes somos?
              </h1>
              <p
                className="text-start text-sm text-black max-md:text-justify md:text-base"
                dangerouslySetInnerHTML={{ __html: t.raw("about_us.text.0") }}
              />
              <p className="hidden text-start text-sm text-black md:block md:text-base">
                {t("about_us.text.1")}
              </p>
            </div>
            <div className="h-min-[300px] flex aspect-[16/9] w-[100%] items-center justify-center overflow-hidden rounded-b-3xl md:col-span-2 md:aspect-square md:rounded-xl xl:col-span-1 xl:aspect-[18/9]">
              <video
                src="/Video_boleto.mp4"
                loop
                width={1920}
                height={1080}
                autoPlay
                muted
                playsInline
                className="relative z-10 h-full w-full object-cover max-sm:object-[60%_50%]"
              />
            </div>
          </section>
        </div>
      </div>

      {/* conoce nuestras Pricing Tarifas */}
      {/* conoce nuestras rutas */}
      <div id="terminals" className="scroll-m-20">
        <div className="relative h-min w-full place-items-center overflow-hidden bg-transparent max-sm:bg-zinc-100 md:my-0 md:bg-white">
          <TerminalsSection
            translations={{
              title:
                "Conoce nuestras terminales" /* t.raw("terminals_title") */,
            }}
          />
        </div>
      </div>

      {/* <FixedSection /> */}

      <div
        id="destinations"
        className="grid w-full scroll-m-20 place-items-center py-4 max-sm:bg-zinc-100 sm:pb-5 md:pb-6 md:pt-20"
      >
        <div className="flex items-center gap-4 md:translate-x-32 xl:translate-x-0">
          <div className="flex-col items-center">
            <h2 className="text-2xl font-bold text-black">
              {/* {t("fixed_route.title")} */}
              Rutas más visitadas
            </h2>
            <h4 className="text-center text-sm text-black xl:text-lg">
              {/* {t("fixed_route.subtitle")} */}
              Compra tu boleto en la web
            </h4>
          </div>
          <CustomFixed className="text-xl text-[#6c00f7]" />
        </div>
      </div>

      <section className="section-container pb-8 pt-2 max-sm:rounded-b-3xl max-sm:bg-zinc-100 md:hidden">
        <div className="fixed-route-bg flex w-full flex-col items-center rounded-xl p-2 pb-4 text-white">
          <CustomFixedRoutesMobile className="z-20 text-3xl duration-200 min-[400px]:text-4xl sm:text-5xl" />
          <Image
            src={BusFrontal}
            alt="bus"
            className="z-20 w-2/3 -translate-y-5"
          />
          <div className="z-20">
            <ButtonToScript
              transaltions={{
                text: "Quiero viajar" /* t("fixed_route.button") */,
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
                <h2 className="text-lg font-bold text-black">
                  {/* {t("fixed_route.title")} */}
                  Rutas más visitadas
                </h2>
                <h4 className="text-center text-xs xl:text-lg">
                  {/* {t("fixed_route.subtitle")} */}
                  Compra tu boleto en la web
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
              alt={"bus frontal"}
              className="z-[1] mt-4 px-4 sm:px-8 md:-mt-32 md:px-0"
            />
          </div>
          <div className="z-[1] col-span-1 max-md:order-1">
            <CustomFixedRoutes className="z-20 -my-6 text-3xl lg:text-4xl" />
          </div>
          <div className="z-[1] col-span-full grid place-items-center xl:col-span-1">
            <ButtonToScript transaltions={{ text: "Quiero viajar" }} />
          </div>
        </section>
      </div>

      {/**
       * INICIO de Contenedor de varias secciones:
       * - Por qué elegirnos
       * - Faqs
       */}

      {/* por qué elegirnos */}
      <section className="section-container pt-10">
        <h1 className="text-center text-xl font-bold text-green-600">
          {/* {t("why.title")} */}
          <b>¿Por qué</b> elegirnos?
        </h1>
        <p className="text-pretty pt-5 text-center text-green-500 lg:px-16">
          La empresa se compromete a ofrecer a sus clientes una experiencia
          excepcional en cada viaje. Nuestro objetivo es superar expectativas,
          garantinzando comodidad, seguridad, y puntualidad en cada trayecto.
          Estamos aquí para hacer que cada viaje sea memorable y sin
          contratiempos.
        </p>
        <div className="mx-auto mb-6 grid w-10/12 grid-cols-1 gap-10 py-4">
          <div className="title-container items-center pb-8 text-white">
            <h2 className="main-title text-green-700">
              <b>Por qué elegirnos</b>
            </h2>
            <hr className="title-line w-24 border-t-medium bg-purple-700" />
          </div>
          <ServicesSlider
            items={[
              {
                text: "Pantallas en común",
                Icon: <CustomTv />,
              },
              {
                text: "WiFi Libre",
                Icon: <CustomWifi />,
              },
              {
                text: "Baños a bordo",
                Icon: <CustomToilet />,
              },
              {
                text: "Cargador de celular",
                Icon: <CustomCharger />,
              },
              {
                text: "Reposapies",
                Icon: <CustomReposapies />,
              },
              {
                text: "Asientos reclinables",
                Icon: <CustomSeat />,
              },
              {
                text: "Aire acondicionado",
                Icon: <CustomAir />,
              },
              {
                text: "Luz individual",
                Icon: <CustomIndividualLight />,
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
        <div className="footer-curve"></div>
        <section className="section-container z-[1] grid w-full grid-cols-1 flex-col items-center gap-10 pb-0 md:flex-row lg:grid-cols-5 xl:gap-6">
          <Image
            src={HumanFaq}
            alt=""
            className="z-30 order-2 mb-[-1px] w-40 max-sm:mx-auto md:order-2 md:-mt-44 md:w-80 lg:col-span-2 xl:w-[34rem]"
          />
          <div className="order-1 col-span-1 flex flex-col items-center gap-4 text-white md:order-1 md:items-start lg:col-span-3 lg:gap-5">
            <div className="title-container items-center pb-4 md:items-start">
              {/* <h2
                className="main-title text-center font-bold md:text-start"
                dangerouslySetInnerHTML={{
                  __html: t.raw("faq.title"),
                }}
              /> */}
              <h2 className="main-title text-center font-bold md:text-start">
                ¿Tienes preguntas sobre nuestros servicios?
              </h2>
            </div>
            <p className="text-center text-sm md:text-start md:text-lg">
              {/* {t("faq.text")} */}
              Hemos reunido las preguntas más comunes para brindarte la
              información que necesitas de manera clara y concisa.
            </p>
            <Link href={"/faq"} className="main-button">
              {/* {t("faq.button")} */}
              Ver preguntas
            </Link>
          </div>
        </section>
      </div>
      {/* FIN tienes preguntas */}

      {/* <span id="contact-us"></span> */}
      {/* <ContactUs locale={locale as "en" | "es"} /> */}
      <section
        id="contactUs"
        className="section-container mt-12 flex w-full scroll-m-36 flex-col items-center bg-white md:mt-28"
      >
        <h3 className="main-title font-semibold text-black">
          Habla con nosotros
        </h3>
        <h4 className="text-sm text-black">
          Conoce nuestras oficinas principales
        </h4>
      </section>
      <OfficesComponent locale={locale} />
    </>
  );
}
