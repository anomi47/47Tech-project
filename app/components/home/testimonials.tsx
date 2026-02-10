"use client";
import Heading from "../Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Paragraph from "../Paragraph";
import Image from "next/image";
import { monumentFonts } from "@/app/fonts";

const testimonials = [
  {
    name: "Alex James",
    role: "CEO",
    image: "/images/person.webp",
    website: "www.sampleweb.com",
    title:
      "We believe great design is more than aesthetics, great technology is more than code.",
    text: "We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.",
    bottomText: "Thanks",
  },
  {
    name: "John Carter",
    role: "Founder",
    image: "/images/person.webp",
    website: "www.sampleweb.com",
    title:
      "We believe great design is more than aesthetics, great technology is more than code.",
    text: "We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.",
    bottomText: "Thanks",
  },
];

const Testimonials = () => {
  return (
    <section className="py-14 w-full min-h-screen flex items-center bg-[url('/images/testimonials-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto ">
        <Heading text="testimonials" level={6} className="mb-5" />
        <Heading
          text="our happy clients"
          level={2}
          className="gradient-blue-white"
        />
        <div className="max-w-7xl mx-auto">
          <div className=" p-18 mt-15 rounded-4xl backdrop-blur-2xl bg-white/0.4 border border-white/10 bg-white/5 z-10 relative">
            <Swiper
              modules={[Pagination]}
              loop
              pagination={{
                el: ".custom-pagination-wrapper", // 👈 outside container
                type: "custom",
                renderCustom: (swiper, current, total) => {
                  const pad = (n) => String(n).padStart(2, "0");
                  const progress = (current / total) * 100;

                  return `
        <div class="custom-pagination">
          <span class="num text-base">${pad(current)}</span>
          <span class="line">
            <span class="fill" style="width:${progress}%"></span>
          </span>
          <span class="num text-base" >${pad(total)}</span>
        </div>
      `;
                },
              }}
            >
              {testimonials.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <div>
                      <div className="grid grid-cols-2 gap-10">
                        {/* Left */}
                        <div className="flex flex-col justify-between  gap-20">
                          <div className="flex items-center gap-15">
                            <Image
                              src={slide.image}
                              alt={slide.name}
                              className="rounded-3xl object-cover"
                              width={187}
                              height={187}
                            />
                            <div className="flex flex-col gap-15">
                              <Image
                                src="/images/object.webp"
                                width={29}
                                height={14}
                                alt="Object"
                              />
                              <div>
                                <Paragraph
                                  className={`${monumentFonts.className} font-regular text-[20px] text-white uppercase`}
                                  text={slide.name}
                                />
                                <Paragraph
                                  className="text-base font-normal"
                                  text={slide.role}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <Paragraph
                              className="text-base text-white"
                              text={slide.website}
                            />
                          </div>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-20">
                          <div>
                            <Paragraph
                              className="text-white mb-10 text-4xl! leading-11! font-medium"
                              text={slide.title}
                            />
                            <Paragraph
                              className="text-base text-white/70"
                              text={slide.text}
                            />
                          </div>
                          <div>
                            <Paragraph
                              className="text-base text-white"
                              text={slide.bottomText}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="custom-pagination-wrapper max-w-80 ml-0 mt-12"></div>
            <Image
              src="/images/quotes.webp"
              alt="quotes"
              className="object-contain relative ml-auto -mt-15 mr-30"
              width={185}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
