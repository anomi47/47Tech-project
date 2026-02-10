"use client";
import { useEffect, useState } from "react";
import Paragraph from "../Paragraph";
import { monumentFonts } from "@/app/fonts";
import Heading from "../Heading";

export default function Counter({
  end = 6000,
  duration = 2000,
  prefix = "",
  suffix = "",
  label = "Clients",
  className = "",
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className={`text-right ${className}`}>
      <Heading
        level={4}
        text={` ${prefix}${count.toLocaleString()}${suffix}`}
        className={`text-4xl text-white font-normal! ${monumentFonts.className}`}
      ></Heading>
      <Paragraph
        text={label}
        className={`text-[20px] text-white max-w-40 mr-0 ml-auto uppercase font-normal leading-tight ${monumentFonts.className}`}
      />
    </div>
  );
}
