"use client";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Image, { type StaticImageData } from "next/image";
/* import { Paraguay } from "./svg"; */
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

interface Props {
  places: {
    name: string;
    image: StaticImageData;
  }[];
}

export default function NationalSlider({ places }: Props) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let t: NodeJS.Timeout;
    clearInterval(t!);
    t = setInterval(() => {
      swiper?.slideNext();
    }, 3000);

    return () => clearInterval(t);
  }, [swiper]);

  return (
    <div className="w-full space-y-2">
      <p className="text-center text-sm font-bold lg:text-lg">Nacionales</p>
      <Swiper
        className="lg:!hidden"
        slidesPerView={1}
        spaceBetween={20}
        loop
        modules={[Pagination, Autoplay]}
        autoplay
        pagination
        wrapperClass="pb-8"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            enabled: false,
          },
        }}
      >
        {places.map((place, index) => (
          <SwiperSlide key={index} className="px-2">
            <div className="relative flex aspect-[9/14] flex-col overflow-hidden rounded-2xl shadow-xl">
              {/* <Paraguay className="absolute -top-2 left-5 z-20 text-3xl drop-shadow-[0_10px_10px_rgb(0_0_0_/_0.5)]" /> */}
              <div className="relative z-10 grid flex-1 place-items-center">
                <Image
                  src={place.image}
                  alt={place.name}
                  className="relative z-10 h-full w-full object-cover object-center"
                />
              </div>
              <div className="z-20 my-[-14px] grid w-full place-items-center">
                <span className="rounded-full bg-main-100 px-5 py-1 text-sm text-white">
                  Paraguay
                </span>
              </div>
              <div className="z-10 grid place-items-center bg-main-400 pb-5 pt-8">
                <div className="flex flex-col items-center rounded-full bg-white px-16 py-1.5">
                  <span className="text-xs">Ciudad</span>
                  <p className="text-sm font-bold">{place.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex w-full flex-row overflow-hidden rounded-2xl max-lg:hidden">
        <div className="flex-1 overflow-hidden">
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            slidesPerView={1}
            modules={[EffectFade]}
            effect="fade"
            onSlideChange={(swpr) => setActiveIndex(swpr.activeIndex)}
            rewind
            simulateTouch={false}
          >
            {places.map((place, index) => (
              <SwiperSlide key={index} className="relative">
                {/* <Paraguay className="absolute -top-2 left-10 z-20 text-4xl drop-shadow-[0_10px_10px_rgb(0_0_0_/_0.5)]" /> */}
                <Image
                  src={place.image}
                  alt={place.name}
                  className="w-full object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-main-300 p-4">
          <span className="rounded-full bg-main-100 px-10 py-1.5 text-xl font-bold text-white">
            Paraguay
          </span>
          <p className="text-sm font-bold">Ciudades</p>
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5">
            {places.map((place, index) => (
              <button
                key={index}
                onClick={() => swiper!.slideTo(index)}
                className={`font-bold duration-200 ${activeIndex === index ? "scale-110 text-main-400" : ""}`}
              >
                {place.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
