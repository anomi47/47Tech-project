"use client";
import { useState } from "react";
import Image from "next/image";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ServicesAccordion = ({ data }: any) => {
  const [active, setActive] = useState<number | null>(null); // <-- null means all closed

  return (
    <div className="services-section">
      {data.map((item, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          className={`border-b border-black/10 pl-25 pr-20 py-7 cursor-pointer transition-all duration-300
            ${active === i ? "bg-white shadow-xl py-10" : "bg-transparent"}
          `}
        >
          <div className="grid grid-cols-2 gap-90 items-center justify-between">
            <div className="relative">
              <Paragraph
                text={item.id}
                className="text-black! absolute -left-10 font-medium"
              />
              <Heading
                level={5}
                text={item.title}
                className="text-black text-left"
              />

              {/* Only show desc if this accordion is active */}
              {active === i && (
                <Paragraph text={item.desc} className="text-black/87!" />
              )}
            </div>

            <div
              className={`flex items-center justify-between gap-10 transition-all duration-500  ${
                active === i ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.image && active === i && (
                <div
                  className={`relative w-85 h-110 -mt-70 cursor-default rounded-3xl 
  shadow-[-60px_80px_150px_rgba(25,89,132,0.7)] contactGradientBorder
  ${active === 0 ? "-mb-100" : active === 1 ? "-mb-80" : "-mb-25"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover z-20 rounded-3xl p-2 "
                  />
                </div>
              )}
              {active === i && (
                <Link
                  href={`/services/${item.slug}`}
                  className="bg-black rounded-full w-fit h-fit p-4 hover:bg-blue-500"
                >
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesAccordion;
