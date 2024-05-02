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
    <main className="relative h-[740px] w-full md:h-[550px] lg:h-[550px] xl:h-[850px] xl:[clip-path:_ellipse(100%_90%_at_50%_0%)] 2xl:h-[880px]">
      {/* <div className="absolute bottom-0 left-0 z-10 h-1/4 w-full bg-white [clip-path:_ellipse(60%_75%_at_50%_0%)]"></div> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
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
            <span className="font-taviraj text-center text-6xl font-bold text-white underline decoration-primary-300 underline-offset-4 [text-shadow:_0_5px_10px_rgba(0,_0,_0,_0.5)]">
              CDMX
            </span>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute left-0 top-12 z-10 grid h-full w-full pt-44 max-[375px]:top-10 sm:pt-32 md:top-10 md:pt-32 lg:pt-36 xl:pt-36 2xl:top-10 2xl:pt-28">
        {withSearcher && (
          <section className="section-container position-initial z-50 mt-20 max-lg:pt-4">
            <div className="w-full lg:max-w-72 xl:max-w-[21rem]">
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
