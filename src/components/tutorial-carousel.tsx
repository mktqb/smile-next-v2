"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TutorialCard from "./tutorial-card";

interface Props {
  translations: {
    count: string;
    title: string;
    text: string;
  }[];
}

export default function TutorialCarousel({ translations }: Props) {
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
            <TutorialCard
              count="01"
              title="¿A dónde vamos?"
              text="Elige tanto tu ciudad de origen y destino, como las fechas de tu viaje"
            />
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            <TutorialCard
              count="02"
              title="Escoge el horario y tus asientos"
              text="Selecciona precio y horarios de salida y llegada para tu viaje, junto con tus asientos"
            />
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            <TutorialCard
              count="03"
              title="Completa los datos del pasajero"
              text="Revisa los detalles de tu viaje e ingresa la información de los pasajeros"
            />
          </SwiperSlide>
          <SwiperSlide className="relative h-full w-full">
            <TutorialCard
              count="04"
              title="Registra tu método de pago"
              text="Elige tu medio de pago y completa los datos solicitados. Haz clic en Procesar Pago. ¡Y listo!"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
