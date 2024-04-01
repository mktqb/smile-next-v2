"use client";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


type Props = {
  title0: string;
  text0: string;
  title1: string;
  text1: string;
  title2: string;
  text2: string;
  title3: string;
  text3: string;
  title: string;
  text: string | TrustedHTML;
  button: string;
};

export default function TutorialSection({
  title0,
  text0,
  title1,
  text1,
  title2,
  text2,
  title3,
  text3,
  title,
  text,
  button
}: Props) {
  return (
    <section
      id="tutorial"
      className="container py-10 max-sm:px-0 md:space-y-6 lg:py-16"
    >
      <div className="mx-auto w-full text-center md:w-2/3">
        <div className="flex items-center justify-center space-x-2 py-4">
          <div className="flex-1 border-t-2 border-black max-md:hidden"></div>
          <h2 className="text-center text-2xl font-bold text-black md:px-4 xl:text-3xl">
            {title}
          </h2>
          <div className="flex-1 border-t-2 border-black max-md:hidden"></div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-neutral-100 p-6 sm:rounded-lg sm:bg-neutral-300">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Autoplay, Pagination]}
          pagination={{
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
          }}
          wrapperClass="max-lg:!pb-9"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
              enabled: false,
            },
          }}
        >
          <SwiperSlide>
            <div className="group m-1 flex aspect-video flex-col items-start justify-between rounded-xl bg-white p-4 text-black shadow-md hover:bg-secondary-500 hover:text-white sm:p-8 md:p-4 lg:aspect-[9/16] lg:hover:bg-secondary-500 xl:p-6">
              <span className="text-5xl font-extrabold sm:text-7xl md:text-3xl lg:text-5xl 2xl:text-6xl">
                01
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{title0}</h3>
                <p className="text-sm">{text0}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group m-1 flex aspect-video flex-col items-start justify-between rounded-xl bg-white p-4 text-black shadow-md hover:bg-secondary-500 hover:text-white sm:p-8 md:p-4 lg:aspect-[9/16] lg:hover:bg-[#f69c00] xl:p-6">
              <span className="text-5xl font-extrabold sm:text-7xl md:text-3xl lg:text-5xl 2xl:text-6xl">
                02
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{title1}</h3>
                <p className="text-sm">{text1}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group m-1 flex aspect-video flex-col items-start justify-between rounded-xl bg-white p-4 text-black shadow-md hover:bg-secondary-500 hover:text-white sm:p-8 md:p-4 lg:aspect-[9/16] lg:hover:bg-secondary-500">
              <span className="text-5xl font-extrabold sm:text-7xl md:text-3xl lg:text-5xl 2xl:text-6xl">
                03
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{title2}</h3>
                <p className="text-sm">{text2}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group m-1 flex aspect-video flex-col items-start justify-between rounded-xl bg-white p-4 text-black shadow-md hover:bg-secondary-500 hover:text-white sm:p-8 md:p-4 lg:aspect-[9/16] lg:hover:bg-[#f69c00]">
              <span className="text-5xl font-extrabold sm:text-7xl md:text-3xl lg:text-5xl 2xl:text-6xl">
                04
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{title3}</h3>
                <p className="text-sm">{text3}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-full flex flex-col items-center gap-x-4 gap-y-2 text-black max-md:hidden lg:flex-row lg:justify-center xl:mt-4">
        <span
          className="text-center text-black"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <a
          href={process.env.PUBLIC_QUAWEB_URL}
          target="_blank"
          className="main-button"
        >
          {button}
        </a>
      </div>
    </section>
  );
}
