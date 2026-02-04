"use client";

import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// core version + navigation, pagination modules:
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function WhyChooseUs() {
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      image: "/images/portfolio-1.webp",
      link: "/portfolio",
    },
    {
      id: 2,
      title: "Web Development Project",
      image: "/images/portfolio-2.webp",
      link: "/portfolio",
    },
    {
      id: 3,
      title: "UI/UX Design",
      image: "/images/portfolio-1.webp",
      link: "/portfolio",
    },
    {
      id: 4,
      title: "Mobile App Development",
      image: "/images/portfolio-2.webp",
      link: "/portfolio",
    },
  ];

  return (
    <div className="text-black mx-auto container">
      {/* Header */}
      <div className="grid grid-cols-[3fr_1fr] gap-12 mb-8">
        <div>
          <Heading
            text="why choose us"
            level={6}
            className="mb-5 text-left text-black"
          />
          <Heading
            text="our portfolio"
            level={2}
            className="text-left gradient-blue-black"
          />
        </div>
        <div className="flex items-end justify-end mb-3">
          <Button href="/" variant="transparent-dark">
            view all
          </Button>
        </div>
      </div>

      {/* Portfolio Slider */}
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // index starts from 0, so we add 1 and pad with leading zero
            const number = String(index + 1).padStart(2, "0");
            return `<span class="${className}">${number}</span>`;
          },
        }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group cursor-pointer">
              <div className="items-center gap-6">
                <div className="relative w-full h-125 rounded-3xl overflow-hidden">
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
                <Link
                  href={item.link}
                  className="mt-4 flex items-center justify-between"
                >
                  <Heading text={item.title} level={5} />

                    <ArrowUpRight
                      size={40}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WhyChooseUs;
