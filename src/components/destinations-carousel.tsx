"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SubCard from "./sub-card";

import CDMX1 from "@/assets/Destino_cdmx.jpg";
import CDMX2 from "@/assets/Destino_cdmx2.jpg";
import Veracruz1 from "@/assets/Destino_veracruz.jpg";
import Veracruz2 from "@/assets/Destino_veracruz2.jpg";
import Puebla1 from "@/assets/Destino_puebla.jpg";
import Puebla2 from "@/assets/Destino_puebla2.jpg";
import Xalapa1 from "@/assets/Destino_xalapa.jpg";
import Xalapa2 from "@/assets/Destino_xalapa2.jpg";

import "swiper/css";

interface Props {
  translations: {
    title: any;
  };
}

export default function DestinationsCarousel({ translations }: Props) {
  return (
    <section className="section-container py-10">
      <div className="main-title title-container items-center pb-8 xl:pb-12">
        <h2
          className="text-black"
          dangerouslySetInnerHTML={{ __html: translations.title }}
        />
        <hr className="title-line w-20 border-primary-300" />
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
          <SubCard label="CDMX" frontImage={CDMX1} backImage={CDMX2} />
        </SwiperSlide>
        <SwiperSlide className="aspect-[9/12] duration-200 xl:aspect-[9/16]">
          <SubCard
            label="Veracruz"
            reverse
            frontImage={Veracruz1}
            backImage={Veracruz2}
          />
        </SwiperSlide>
        <SwiperSlide className="aspect-[9/12] duration-200 xl:aspect-[9/16]">
          <SubCard label="Puebla" frontImage={Puebla1} backImage={Puebla2} />
        </SwiperSlide>
        <SwiperSlide className="aspect-[9/12] duration-200 xl:aspect-[9/16]">
          <SubCard
            label="Xalapa"
            reverse
            frontImage={Xalapa1}
            backImage={Xalapa2}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
