"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TutorialCard from "./tutorial-card";

interface Props {
  title0: string;
  text0: string;
  title1: string;
  text1: string;
  title2: string;
  text2: string;
  title3: string;
  text3: string;
}

export default function TutorialCarousel({
  title0,
  text0,
  title1,
  text1,
  title2,
  text2,
  title3,
  text3,
}: Props) {
  return (
    <div className="grid w-full place-items-center pt-8">
      <div className="h-fit w-full overflow-hidden md:px-5">
        <Swiper
          className="tutorial-carousel !pb-8"
          slidesPerView={1}
          spaceBetween={20}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
          loop
          pagination
        >
          <SwiperSlide className="relative h-full w-full">
            <TutorialCard count="01" title={title0} text={text0} />
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            <TutorialCard count="02" title={title1} text={text1} />
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            <TutorialCard count="03" title={title2} text={text2} />
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            <TutorialCard count="04" title={title3} text={text3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
