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
            {/* <TutorialCard count="01" title={title0} text={text0} /> */}
            <div className="group flex h-full flex-col items-start justify-between rounded-lg bg-white p-6 hover:bg-[#03A9EA]  max-md:h-full max-md:gap-5 min-[375px]:min-h-[236px] lg:aspect-[9/14] lg:duration-200 xl:aspect-[9/16]">
              <h2 className="text-3xl font-bold text-[#21D840] group-hover:text-white md:text-4xl lg:text-5xl">
                01
              </h2>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-[#21D840] group-hover:text-white xl:text-xl 2xl:text-2xl">
                  {title0}
                </h3>
                <p className="text-pretty text-sm text-black group-hover:text-white xl:text-base">
                  {text0}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            {/* <TutorialCard count="02" title={title1} text={text1} /> */}
            <div className="group flex h-full flex-col items-start justify-between rounded-lg bg-white p-6 hover:bg-[#DA089F]  max-md:h-full max-md:gap-5 min-[375px]:min-h-[236px] lg:aspect-[9/14] lg:duration-200 xl:aspect-[9/16]">
              <h2 className="text-3xl font-bold text-[#21D840] group-hover:text-white md:text-4xl lg:text-5xl">
                02
              </h2>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-[#21D840] group-hover:text-white xl:text-xl 2xl:text-2xl">
                  {title1}
                </h3>
                <p className="text-pretty text-sm text-black group-hover:text-white xl:text-base">
                  {text1}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            {/* <TutorialCard count="03" title={title2} text={text2} /> */}
            <div className="group flex h-full flex-col items-start justify-between rounded-lg bg-white p-6 hover:bg-[#F1DE55]  max-md:h-full max-md:gap-5 min-[375px]:min-h-[236px] lg:aspect-[9/14] lg:duration-200 xl:aspect-[9/16]">
              <h2 className="text-3xl font-bold text-[#21D840] group-hover:text-white md:text-4xl lg:text-5xl">
                03
              </h2>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-[#21D840] group-hover:text-white xl:text-xl 2xl:text-2xl">
                  {title2}
                </h3>
                <p className="text-pretty text-sm text-black group-hover:text-white xl:text-base">
                  {text2}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            {/* <TutorialCard count="04" title={title3} text={text3} /> */}
            <div className="group flex h-full flex-col items-start justify-between rounded-lg bg-white p-6 hover:bg-[#591BE5]  max-md:h-full max-md:gap-5 min-[375px]:min-h-[236px] lg:aspect-[9/14] lg:duration-200 xl:aspect-[9/16]">
              <h2 className="text-3xl font-bold text-[#21D840] group-hover:text-white md:text-4xl lg:text-5xl">
                04
              </h2>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-[#21D840] group-hover:text-white xl:text-xl 2xl:text-2xl">
                  {title3}
                </h3>
                <p className="text-pretty text-sm text-black group-hover:text-white xl:text-base">
                  {text3}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
