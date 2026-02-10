"use client";

import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function WhyChooseUs() {
  const portfolioItems = [
    { id: 1, title: "Brand Identity Design", image: "/images/portfolio-1.webp" },
    { id: 2, title: "Web Development Project", image: "/images/portfolio-2.webp" },
    { id: 3, title: "UI/UX Design", image: "/images/portfolio-1.webp" },
    { id: 4, title: "Mobile App Development", image: "/images/portfolio-2.webp" },
  ];

  return (
    <div className="text-black mx-auto container">
      {/* Header */}
      <div className="grid grid-cols-[3fr_1fr] gap-12 mb-8">
        <div>
          <Heading text="why choose us" level={6} className="mb-5 text-left text-black" />
          <Heading text="our portfolio" level={2} className="text-left gradient-blue-black" />
        </div>
        <div className="flex items-end justify-end mb-3">
          <Button href="/" variant="transparent-dark">view all</Button>
        </div>
      </div>

      {/* Portfolio Slider */}

<Swiper
  modules={[Pagination]}
  slidesPerView={2}
  spaceBetween={24}
  pagination={{
    type: "custom",
    renderCustom: (swiper, current, total) => {
      const pad = (n) => String(n).padStart(2, "0");
      const progress = (current / total) * 100;

      return `
        <div class="flex items-center gap-4 w-full max-w-150 mx-auto">
          
          <span class="text-sm font-medium">
            ${pad(current)}
          </span>

          <div class="flex-1 h-0.5  relative">
            <span 
              class="absolute left-0 top-0  bg-[#0095FF] rounded-[100%] h-1"
              style="width:${progress}%"
            ></span>
          </div>

          <span class="text-sm font-medium">
            ${pad(total)}
          </span>

        </div>
      `;
    },
  }}
>

        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group pb-6 cursor-pointer">
              <div className="items-center gap-6">
                <div className="relative w-full h-125 rounded-3xl overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Heading text={item.title} level={5} />
                  <span className="text-2xl transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WhyChooseUs;
