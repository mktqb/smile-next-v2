"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { Searcher } from "@/searchlib/components/Searcher";

/* import BannerSalsaFest2024 from "@/assets/Banner_SalsaFest2024.jpg";
import LogoSalsaFest2024 from "@/assets/logo_salsa.png";
import LogoSalsaFest2024Mobile from "@/assets/logo_salsa_mobile.png"; */
import Banner01 from "@/assets/Banner_slogan.jpg";
import Banner02 from "@/assets/Banner_puebla.jpg";
import Banner03 from "@/assets/Banner_veracruz.jpg";
import Banner04 from "@/assets/Banner_xalapa.jpg";
import Banner05 from "@/assets/Banner_cdmx.jpg";

interface Props {
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
  title,
  subtitle,
  withSearcher,
  translations,
}: Props) {
  return (
    <main className="relative h-[780px] w-full [clip-path:_ellipse(150%_100%_at_50%_0%)] md:h-[820px] lg:h-[680px] lg:[clip-path:_ellipse(100%_90%_at_50%_0%)] xl:h-[850px] 2xl:h-[880px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000 }}
        className="h-full"
        loop
      >
        {/* <SwiperSlide className="relative h-full w-full">
          <div className="absolute left-0 top-0 z-10 h-full w-full max-xl:hidden"></div>
          <Image
            src={BannerSalsaFest2024}
            alt="main"
            width={1920}
            height={1080}
            className="h-full object-cover object-center max-xl:max-w-none xl:w-full"
            priority
          />
          <div className="absolute left-[5%] top-40 z-20 flex flex-col max-lg:items-center gap-5 max-lg:w-[90%] md:top-40 lg:left-1/2 lg:top-36 lg:w-1/2">
            <Image
              src={LogoSalsaFest2024}
              alt="Logo SalsaFest Veracruz 2024"
              className="h-full max-w-[400px] object-cover object-center max-lg:hidden md:max-w-[500px] lg:max-w-[400px] xl:w-full xl:max-w-[500px]"
              priority
            />
            <Image
              src={LogoSalsaFest2024Mobile}
              alt="Logo SalsaFest Veracruz 2024"
              className="h-full object-cover object-center max-xl:max-w-[400px] lg:hidden xl:w-full xl:max-w-[500px]"
              priority
            />
          </div>
        </SwiperSlide> */}
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
            <span className="font-taviraj text-center text-3xl font-bold text-white [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)] max-xl:text-balance lg:text-center lg:text-5xl">
              {translations.slogan}
            </span>
            <p className="mt-1 rounded-xl bg-white px-2 py-1 text-center text-sm font-bold text-primary-300 drop-shadow-2xl md:mt-5 lg:px-5 lg:text-base xl:text-lg">
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              Puebla
            </span>
            <p className="mt-1 rounded-xl bg-white px-2 py-1 text-center text-sm font-bold text-primary-300 drop-shadow-2xl md:mt-5 lg:px-5 lg:text-base xl:text-lg">
              {translations.slogan}
            </p>
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              Veracruz
            </span>
            <p className="mt-1 rounded-xl bg-white px-2 py-1 text-center text-sm font-bold text-primary-300 drop-shadow-2xl md:mt-5 lg:px-5 lg:text-base xl:text-lg">
              {translations.slogan}
            </p>
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              Xalapa
            </span>
            <p className="mt-1 rounded-xl bg-white px-2 py-1 text-center text-sm font-bold text-primary-300 drop-shadow-2xl md:mt-5 lg:px-5 lg:text-base xl:text-lg">
              {translations.slogan}
            </p>
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              CDMX
            </span>
            <p className="mt-1 rounded-xl bg-white px-2 py-1 text-center text-sm font-bold text-primary-300 drop-shadow-2xl md:mt-5 lg:px-5 lg:text-base xl:text-lg">
              {translations.slogan}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="absolute left-0 top-12 z-10 grid h-[500px] w-full lg:w-1/2 pt-44 max-[375px]:top-10 sm:pt-32 md:top-10 md:pt-32 lg:pt-36 xl:pt-36 2xl:top-10 2xl:pt-28"></div> */}
      <div className="absolute left-0 top-64 z-10 grid h-[500px] w-full max-[375px]:top-64 md:top-60 lg:top-16 lg:w-1/2 xl:top-40">
        {withSearcher && (
          <section className="relative z-50 mt-16 md:mt-28 lg:mt-20">
            <div className="absolute right-[5%] w-[90%] lg:right-20 lg:w-full lg:max-w-96 xl:right-36 xl:max-w-[26rem]">
              <Searcher
                url="https://privado.smilebus.com.mx/"
                variant="transparent"
                vertical
                lang={translations.locale}
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
