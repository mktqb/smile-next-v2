"use client";

import Image from "next/image";
import BusLateral from "@/assets/Bus_Perfil.png";
import { CallOutline, CustomTerminals, LocationOnOutline } from "./svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { terminals } from "@/utils/model";

interface Props {
  translations: {
    title: string;
  };
}

export default function TerminalsSection({ translations }: Props) {
  return (
    <section className="section-container flex grid-cols-1 grid-rows-4 flex-col gap-4 [grid-auto-rows:_min-content] lg:grid lg:min-h-[500px] lg:grid-cols-5">
      <div className="col-span-2 flex h-min items-center gap-5 pt-10 lg:pl-5">
        {/* <h2 className="text-black">Conoce nuestras terminales</h2> */}
        <h2
          className="text-black"
          dangerouslySetInnerHTML={{
            __html: translations.title,
          }}
        />
        <CustomTerminals className="text-2xl text-primary-300" />
      </div>
      <div className="row-span-2 overflow-hidden rounded-2xl border-5 border-primary-300 bg-white sm:px-20 lg:col-span-2 lg:col-start-1 lg:row-span-3 lg:row-start-2 lg:px-5 md:pl-3 !pr-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ type: "progressbar" }}
          autoplay
          slidesPerView={4}
          direction="vertical"
          autoHeight
          className="!h-96 w-full rounded-xl !py-2 lg:!h-full"
          loop
        >
          <SwiperSlide className="p-2 md:p-3">
            <span className="font-bold text-black">
              Terminal Veracruz AV Express
            </span>
            <div className="flex items-center gap-1">
              <span>
                <LocationOnOutline className="text-xs text-secondary-700" />
              </span>
              <span className="text-xs leading-tight text-black">
                Av. Salvador Díaz Mirón 1892, Moderno, 91910 Veracruz, Veracruz
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-2 md:p-3">
            <span className="font-bold text-black">Lotería Nacional</span>
            <div className="flex items-center gap-1">
              <span>
                <LocationOnOutline className="text-xs text-secondary-700" />
              </span>
              <span className="text-xs leading-tight text-black">
                Reforma 1, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-2 md:p-3">
            <span className="font-bold text-black">
              City Express Junior by Marriott Puebla
            </span>
            <div className="flex items-center gap-1">
              <span>
                <LocationOnOutline className="text-xs text-secondary-700" />
              </span>
              <span className="text-xs leading-tight text-black">
                Cto. Juan Pablo II 1743, Reserva Territorial Atlixcáyotl, La
                Noria, 72410 Heroica Puebla de Zaragoza, Puebla
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-2 md:p-3">
            <span className="font-bold text-black">
              Omnibus turísticos Ocaso Xalapa
            </span>
            <div className="flex items-center gap-1">
              <span>
                <LocationOnOutline className="text-xs text-secondary-700" />
              </span>
              <span className="text-xs leading-tight text-black">
                Blvd. Jalapa-Banderilla 109, 21 de Marzo, 91010 Xalapa-Enríquez,
                Veracruz
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-2 md:p-3">
            <span className="font-bold text-black">
              Soriana Híper Boca del Río
            </span>
            <div className="flex items-center gap-1">
              <span>
                <LocationOnOutline className="text-xs text-secondary-700" />
              </span>
              <span className="text-xs leading-tight text-black">
                Calz Juan Pablo II 1350, Sutsem, 94299 Veracruz, Veracruz
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="row-start-4 grid place-items-center lg:col-span-3 lg:col-start-3 lg:row-span-4 lg:row-start-1">
        <Image
          src={BusLateral}
          alt="bus"
          className="translate-x-3 max-md:h-full max-md:-translate-y-7 max-md:object-contain sm:translate-x-28 md:translate-x-40 lg:translate-x-0"
        />
      </div>
    </section>
  );
}
