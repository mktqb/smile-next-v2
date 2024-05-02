"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { Searcher } from "@/searchlib/components/Searcher";

import Banner01 from "@/assets/Banner_slogan.jpg";
import Banner02 from "@/assets/Banner_puebla.jpg";
import Banner03 from "@/assets/Banner_veracruz.jpg";
import Banner04 from "@/assets/Banner_xalapa.jpg";
import Banner05 from "@/assets/Banner_cdmx.jpg";

interface Props {
  /* background:
    | { type: "static"; image: StaticImageData }
    | { type: "slider"; image: StaticImageData[] }; */
  title?: string | TrustedHTML;
  subtitle?: string | TrustedHTML;
  withSearcher?: boolean;
  translations: {
    locale: "es" | "en";
    slogan: string;
    text: string;
  };
}

export default function HeroHome({
  /* background, */
  title,
  subtitle,
  withSearcher,
  translations
}: Props) {
  return (
    <main className="relative h-[740px] w-full md:h-[550px] lg:h-[550px] xl:h-[850px] 2xl:h-[880px]">
      <div className="bg-curves absolute bottom-0 z-[2] w-full bg-repeat-x lg:h-56 xl:h-72 2xl:h-80"></div>
      {/* <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-black to-transparent max-lg:via-transparent md:[clip-path:_ellipse(100%_100%_at_50%_0%)]"></div> */}
      {/* <div className="header-curve-container absolute -bottom-1 z-[2] w-full bg-repeat-x xl:h-56">
        <div className="header-curve-shape"></div>
      </div> */}
      {/* {background.type === "static" && (
        <Image
          src={background.image}
          alt=""
          className="z-0 h-full object-cover object-center md:max-h-[410px]  xl:h-[850px] xl:w-full 2xl:h-[880px]"
        />
      )} */}
      {/* {background.type === "slider" && ( */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {/* {background.image.map((image, index) => (
            <SwiperSlide key={"home_wspr_" + index} className="!relative">
              <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-[#3cbc00]/75 via-transparent via-30% to-transparent"></div>
              <Image
                src={image}
                alt={`banner ${index + 1}`}
                className="z-0 h-full object-cover object-center sm:max-h-[650px] md:max-h-[500px] xl:max-h-[550px] xl:w-full 2xl:max-h-[850px]"
              />
            </SwiperSlide>
          ))} */}
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black via-secondary-400/20 via-30% to-transparent to-40% max-xl:hidden"></div>
          <Image
            src={Banner01}
            alt="main"
            width={1920}
            height={1080}
            className="h-full object-cover object-center max-xl:max-w-none xl:w-full"
            priority
          />
          <div className="absolute left-0 top-40 z-20 flex flex-col items-center gap-5 max-lg:w-full lg:left-1/2 lg:top-60 lg:-translate-x-24 xl:w-2/5 2xl:w-1/3">
            <span className="text-center font-taviraj text-3xl font-bold text-white [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)] max-xl:text-balance lg:text-center lg:text-5xl">
              {translations.slogan}
            </span>
            <p className="mt-1 rounded-xl bg-white px-2 py-1 text-center text-xs font-bold text-primary-300 drop-shadow-2xl md:mt-5 lg:px-5 lg:text-base xl:text-lg">
              {translations.text}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black via-secondary-400/20 via-30% to-transparent to-40% max-xl:hidden"></div>
          <Image
            src={Banner02}
            alt="Puebla"
            width={1920}
            height={1080}
            className="h-full object-cover object-center max-xl:max-w-none xl:w-full"
            priority
          />
          <div className="absolute left-0 top-40 z-20 grid w-full place-items-center lg:left-1/4 lg:top-72 lg:-translate-x-28 xl:-translate-x-64">
            <span className="text-center font-taviraj text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              Puebla
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black via-secondary-400/20 via-30% to-transparent to-40% max-xl:hidden"></div>
          <Image
            src={Banner03}
            alt="Veracruz"
            width={1920}
            height={1080}
            className="h-full object-cover object-center max-xl:max-w-none xl:w-full"
            priority
          />
          <div className="absolute left-0 top-40 z-20 grid w-full place-items-center lg:left-1/4 lg:top-72 lg:-translate-x-28 xl:-translate-x-64">
            <span className="text-center font-taviraj text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              Veracruz
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black via-secondary-400/20 via-30% to-transparent to-40% max-xl:hidden"></div>
          <Image
            src={Banner04}
            alt="Xalapa"
            width={1920}
            height={1080}
            className="h-full object-cover object-center max-xl:max-w-none xl:w-full"
            priority
          />
          <div className="absolute left-0 top-40 z-20 grid w-full place-items-center lg:left-1/4 lg:top-72 lg:-translate-x-28 xl:-translate-x-64">
            <span className="text-center font-taviraj text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              Xalapa
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black via-secondary-400/20 via-30% to-transparent to-40% max-xl:hidden"></div>
          <Image
            src={Banner05}
            alt="CDMX"
            width={1920}
            height={1080}
            className="h-full object-cover object-center max-xl:max-w-none xl:w-full"
            priority
          />
          <div className="absolute left-0 top-40 z-20 grid w-full place-items-center lg:left-1/4 lg:top-72 lg:-translate-x-28 xl:-translate-x-64">
            <span className="text-center font-taviraj text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              CDMX
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* )} */}
      <div
        className="absolute left-0 top-12 z-10 grid h-full w-full pt-44 max-[375px]:top-10
      sm:pt-32
      md:top-10 md:pt-32 lg:pt-36 xl:pt-36 2xl:top-10 2xl:pt-28"
      >
        {/* <div className="container flex flex-col"> */}
        {/* <div className="flex flex-col items-center gap-3">
            {title && (
              <h1
                className="text-shadow-xl text-balance text-center text-3xl font-bold text-white xl:text-4xl"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
            )}
            {subtitle && (
              <p
                className="text-shadow-xs text-center font-bold text-white xl:text-lg"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              ></p>
            )}
          </div> */}
        {withSearcher && (
          <section className="section-container position-initial z-50 mt-20 max-lg:pt-4">
            <div className="w-full lg:max-w-72 xl:max-w-[21rem]">
              <Searcher
                url="https://privado.avexpress.mx/"
                variant="transparent"
                vertical
                lang={translations.locale}
              />
            </div>
          </section>
        )}
        {/*         </div>
         */}{" "}
      </div>
    </main>
  );
}
