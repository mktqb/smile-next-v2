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
    <section className="section-container flex grid-cols-1 grid-rows-4 flex-col gap-4 py-10 pt-16 [grid-auto-rows:_min-content] lg:grid lg:min-h-[600px] lg:grid-cols-5">
      <div className="flex h-min items-center gap-5 lg:pl-5">
        <h2 className="text-green-700">Conoce nuestras terminales</h2>
        <CustomTerminals className="text-2xl text-purple-900" />
      </div>
      <div className="row-span-2 overflow-hidden rounded-2xl border-5 border-lime-500 sm:px-20 lg:col-span-2 lg:col-start-1 lg:row-span-3 lg:row-start-2 lg:px-5 xl:pl-5 xl:pr-0">
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
          <SwiperSlide className="p-3">
            <span className="font-bold text-green-700">
              Terminal Veracruz AV Express
            </span>
            <div className="flex items-center gap-2">
              <LocationOnOutline className="text-xs text-fuchsia-600" />
              <span className="text-xs leading-tight text-green-700">
                Av. Salvador Díaz Mirón 1892, Moreno, 91910 Veracruz, Veracruz
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <span className="font-bold text-green-700">Lotería Nacional</span>
            <div className="flex items-center gap-2">
              <LocationOnOutline className="text-xs text-fuchsia-600" />
              <span className="text-xs leading-tight text-green-700">
                Reforma 1, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <span className="font-bold text-green-700">
              City Express Junior by Marriott Puebla
            </span>
            <div className="flex items-center gap-2">
              <LocationOnOutline className="text-xs text-fuchsia-600" />
              <span className="text-xs leading-tight text-green-700">
                Cto Juan Pablo II 1743, Reserva Territorial Atlixcáyotl, La
                Noria, 72410 Heróica Puebla de Zaragoza, Puebla
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="flex items-center gap-2">
              <LocationOnOutline className="text-xs text-fuchsia-600" />
              <span className="font-bold text-green-700">
                Terminal Veracruz AV Express
              </span>
            </div>
            <span className="text-xs leading-tight text-green-700">
              Av. Salvador Díaz Mirón 1892, Moreno, 91910 Veracruz, Veracruz
            </span>
          </SwiperSlide>
          <SwiperSlide className="p-3">
            <div className="flex items-center gap-2">
              <LocationOnOutline className="text-xs text-fuchsia-600" />
              <span className="font-bold text-green-700">Lotería Nacional</span>
            </div>
            <span className="text-xs leading-tight text-green-700">
              Reforma 1, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="row-start-4 grid place-items-center max-sm:h-44 max-[470px]:scale-125 lg:col-span-3 lg:col-start-3 lg:row-span-4 lg:row-start-1">
        <Image
          src={BusLateral}
          alt="bus"
          className="translate-x-16 max-md:h-full max-md:object-contain sm:translate-x-28 md:translate-x-40 lg:translate-x-0"
        />
      </div>
    </section>
  );
}
