"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const images = [
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
  "/images/logo-1.webp",
];

export default function ImageSlider() {
  return (
    <div className="-mx-3">
      <Swiper
        modules={[ Autoplay]}
        slidesPerView={8}
        spaceBetween={12}
        //   navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        // centeredSlides={true}
        className="w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-[37.5] p-10">
              <Image
                src={src}
                alt={`Slide ${i}`}
                width={122}
                height={24}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
