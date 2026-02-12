"use client";

import Heading from "../Heading";
import Button from "../Button";
import ServicesAccordion from "./ServicesAccordion";
import { accordionData } from "@/app/data";

export default function ServicesSection() {
  return (
    <section className="min-h-screen flex items-center w-full">
      <div className="container mx-auto px-6 grid items-center">
        <div className="grid grid-cols-[3fr_1fr] gap-12 mb-20">
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
            <Button href="/" variant="transparent-dark">
              view all services
            </Button>
          </div>
        </div>

        <div className="mt-5">
          <ServicesAccordion data={accordionData} />
        </div>
      </div>
    </section>
  );
}
