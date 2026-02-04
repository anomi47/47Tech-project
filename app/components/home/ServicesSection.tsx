"use client";

import Image from "next/image";
import { useState } from "react";
import Heading from "../Heading";
import Button from "../Button";

const services = [
  {
    id: "01",
    title: "DIGITAL MARKETING",
    desc: "At 47 Tech, we blend creativity, technology, and strategy to craft digital solutions that deliver real business impact.",
  },
  {
    id: "02",
    title: "CONTENT CREATION",
    desc: "At 47 Tech, we blend creativity, technology, and strategy to craft digital solutions that deliver real business impact.",
  },
  {
    id: "03",
    title: "VISUAL DESIGN",
    desc: "At 47 Tech, we blend creativity, technology, and strategy to craft digital solutions that deliver real business impact.",
  },
  {
    id: "04",
    title: "UI/UX DESIGN",
    desc: "At 47 Tech, we blend creativity, technology, and strategy to craft digital solutions that deliver real business impact.",
  },
  {
    id: "05",
    title: "E-COMMERCE SOLUTION",
    desc: "At 47 Tech, we blend creativity, technology, and strategy to craft digital solutions that deliver real business impact.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen flex items-center">
      <div className="container px-6 grid items-center">
       <div className="grid grid-cols-[3fr_1fr] gap-12">
          <div>
            <Heading
              text="What We Do"
              level={6}
              className="mb-5 text-left text-black"
            />
            <Heading
              text="Full-Stack <br> Digital Services"
              level={2}
              className=" text-left gradient-blue-black"
            />
          </div>
          <div className="flex items-end justify-end mb-3">
            <Button href="/" variant="transparent-dark">view all services</Button>
          </div>
        </div>

        
      </div>
    </section>
  );
}
