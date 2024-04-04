"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SubCard from "./sub-card";

import LV1 from "@/assets/Destino_LV.png";
import LV2 from "@/assets/Destino_LV2.png";
import LA1 from "@/assets/Destino_LA.png";
import LA2 from "@/assets/Destino_LA2.png";
import SD1 from "@/assets/Destino_SD.png";
import SD2 from "@/assets/Destino_SD2.png";
import TJ1 from "@/assets/Destino_TJ.png";
import TJ2 from "@/assets/Destino_TJ2.png";

import "swiper/css";

/* interface Props {
  translations: {
    title: any;
    losAngeles: string;
  };
}
 */
export default function DestinationsCarousel(/* { translations }: Props */) {
  return (
    <section className="section-container py-10">
      <div className="main-title title-container items-center pb-8 xl:pb-12">
        {/* <h2 dangerouslySetInnerHTML={{ __html: translations.title }} /> */}
        <h2 className="text-lime-500">
          ¡Es momento <b>de viajar!</b>
        </h2>
        <hr className="title-line w-20 border-secondary-500" />
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        draggable
        className="cardCarousel xl:!overflow-visible"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="aspect-[9/12] duration-200 xl:aspect-[9/16]">
          <SubCard label="Veracruz" frontImage={LV1} backImage={LV2} />
        </SwiperSlide>
        <SwiperSlide className="aspect-[9/12] duration-200 xl:aspect-[9/16]">
          <SubCard label="Puebla" reverse frontImage={LA2} backImage={LA1} />
        </SwiperSlide>
        <SwiperSlide className="aspect-[9/12] duration-200 xl:aspect-[9/16]">
          <SubCard label="Xalapa" frontImage={TJ1} backImage={TJ2} />
        </SwiperSlide>
        <SwiperSlide className="aspect-[9/12] duration-200 xl:aspect-[9/16]">
          <SubCard label="CDMX" reverse frontImage={SD2} backImage={SD1} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
