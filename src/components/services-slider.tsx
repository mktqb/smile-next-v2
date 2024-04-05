"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  items: {
    text: string;
    Icon: JSX.Element;
  }[];
}

export default function ServicesSlider({ items }: Props) {
  return (
    <div className="relative grid h-40 w-full place-items-center">
      <div className="absolute left-0 top-0 h-fit w-full overflow-x-hidden lg:px-10">
        <Swiper
          slidesPerView={2}
          wrapperClass="pb-10"
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          loop
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="h-full-w-full px-3">
              <div className="flex aspect-square min-h-[118px] flex-col items-center justify-center gap-2 rounded-xl bg-primary-500 p-4 text-white shadow-xl duration-200 lg:bg-white lg:text-primary-900 lg:hover:bg-orange-500 lg:hover:bg-gradient-to-t lg:hover:from-[#ff8700] lg:hover:to-[#ffe100] lg:hover:text-black">
                <span className="text-5xl">{item.Icon}</span>
                <p className="text-center text-xs leading-tight lg:text-base">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev !top-[55%] !text-primary-500 duration-200 max-lg:!hidden lg:hover:scale-110"></div>
      <div className="swiper-button-next !top-[55%] !text-primary-500 duration-200 max-lg:!hidden lg:hover:scale-110"></div>
    </div>
  );
}
