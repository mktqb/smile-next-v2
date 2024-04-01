"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { Searcher } from "@/searchlib/components/Searcher";

interface Props {
  background:
    | { type: "static"; image: StaticImageData }
    | { type: "slider"; image: StaticImageData[] };
  title?: string | TrustedHTML;
  subtitle?: string | TrustedHTML;
  withSearcher?: boolean;
  translations: {
    locale: "es" | "en";
  };
}

export default function HeroHome({
  background,
  title,
  subtitle,
  withSearcher,
  translations
}: Props) {
  return (
    <main className="relative h-[840px] w-full md:h-[550px] lg:h-[550px] xl:h-[550px] 2xl:max-h-[550px]">
      {background.type === "static" && (
        <Image
          src={background.image}
          alt=""
          className="z-0 h-full object-cover object-center md:max-h-[410px] xl:w-full 2xl:max-h-[550px]"
        />
      )}
      {background.type === "slider" && (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {background.image.map((image, index) => (
            <SwiperSlide key={"home_wspr_" + index}>
              <Image
                src={image}
                alt={`banner ${index + 1}`}
                className="z-0 h-full object-cover object-center sm:max-h-[650px] md:max-h-[500px] xl:max-h-[550px] xl:w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div
        className="absolute left-0 top-12 z-10 grid h-full w-full pt-44 max-[375px]:top-10
      sm:pt-32
      md:top-20 md:pt-32 lg:pt-36 xl:pt-36 2xl:top-10 2xl:pt-52"
      >
        <div className="container flex flex-col">
          <div className="flex flex-col items-center gap-3">
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
          </div>
          {withSearcher && (
            <div className="mt-20 w-full rounded-xl shadow-lg sm:mt-20 lg:mt-20 xl:mt-36 2xl:mt-44">
              <Searcher
                variant="transparent"
                lang={translations.locale}
                url="https://private.zerimarexpress.com/"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
