"use client";
import { Autoplay, EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import Image, { type StaticImageData } from "next/image";
import { Fragment } from "react";

type Props = {
  label: string;
  frontImage: StaticImageData;
  backImage: StaticImageData;
  reverse?: boolean;
};

export default function SubCard({
  label,
  reverse,
  frontImage,
  backImage,
}: Props) {
  return (
    <Fragment key={label}>
      <Swiper
        id={`${label}_swiper`}
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove={false}
        className="h-full"
        effect="flip"
        modules={[EffectFlip, Autoplay]}
        autoplay={{
          delay: 5000,
          waitForTransition: true,
        }}
        breakpoints={{
          0: {
            autoplay: false,
          },
          1024: {
            autoplay: {
              delay: 5000,
              waitForTransition: true,
            },
          },
        }}
        initialSlide={reverse ? 1 : 0}
      >
        {[0, 1].map((i) => (
          <SwiperSlide className="h-full" key={`${label}_${i}`}>
            <div
              className={`flex h-full items-center ${i === 0 ? "flex-col" : "flex-col-reverse"}`}
            >
              <div className="w-full flex-1 overflow-hidden rounded-xl">
                {i === 0 ? (
                  <Image
                    src={frontImage}
                    alt={label}
                    width={274}
                    height={463}
                    className="h-full w-full object-cover"
                    priority={frontImage.src.endsWith("9e6e62c4.png")}
                  />
                ) : (
                  <Image
                    src={backImage}
                    alt={label}
                    width={274}
                    height={463}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div
                className={`px-5 py-1 text-center uppercase tracking-[0.2em] text-white ${i === 0 ? "rounded-b-xl bg-secondary-500" : "rounded-t-xl bg-fuchsia-600"}`}
              >
                {label}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}
