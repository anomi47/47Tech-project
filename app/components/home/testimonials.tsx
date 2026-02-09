"use client";
import Heading from "../Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Paragraph from "../Paragraph";

const slides = [
  {
    name: "Alex James",
    role: "CEO",
    image: "/images/person.webp",
    title:
      "We believe great design is more than aesthetics, great technology is more than code.",
    text: "We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.",
  },
  {
    name: "John Carter",
    role: "Founder",
    image: "/images/person.webp",
    title: "Innovation comes from blending design and technology perfectly.",
    text: "We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 w-full min-h-screen bg-[url('/images/testimonials-bg.webp')] bg-cover bg-center bg-no-repeat ">
      <div className="container mx-auto ">
        <Heading text="testimonials" level={6} className="mb-5" />
        <Heading text="our happy clients" level={2} />
        <div className="max-w-7xl mx-auto p-20 mt-15 rounded-4xl backdrop-blur-2xl bg-white/0.4 border border-white/20 bg-white/5">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop
            className=""
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div>
                  <div className="text-white">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                      {/* Left */}
                      <div className="flex items-center gap-5">
                        <img
                          src={slide.image}
                          className="w-20 h-20 rounded-xl object-cover"
                          alt=""
                        />
                        <div>
                          <h4 className="font-semibold">{slide.name}</h4>
                          <p className="text-sm opacity-70">{slide.role}</p>
                        </div>
                      </div>

                      {/* Right */}
                      <div>
                        <Heading
                          text={slide.title}
                          level={4}
                          className="text-white mb-10"
                        />
                        <Paragraph
                          className="text-base text-white/70"
                          text={slide.text}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
