import Image from "next/image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

function OurProcess() {
  return (
      <div className="text-white mx-auto container">
        <Heading text="our process" level={6} className="mb-5 text-white" />
        <Heading
          text="We Don’t Guess <br> We Strategize"
          className="gradient-blue-white"
          level={2}
        />

        <div className="mt-12 space-y-5">
          <div className="rounded-3xl px-16 py-12  grid grid-cols-2 justify-between gap-165 bg-[linear-gradient(90deg,#0055A93B_0%,#0A0A0E00_100%)] relative gradientBorderLtoR">
            <div>
              <Heading
                level={4}
                text="Discover <br> & Strategize"
                className="text-white mb-3"
              />
              <Paragraph
                text="We understand your business, audience, and goals to define a clear roadmap."
                className="text-white/83"
              />
            </div>
            <div>
              <Heading
                level={4}
                text="Design <br> & Build"
                className="text-white mb-3"
              />
              <Paragraph
                text="We design intuitive experiences and develop reliable, scalable solutions."
                className="text-white/83"
              />
            </div>
          </div>

          <div className="rounded-3xl px-16 py-12 grid grid-cols-2 justify-between gap-165 bg-[linear-gradient(-90deg,#0055A93B_0%,#0A0A0E00_100%)] relative gradientBorderRtoL">
            <div>
              <Heading
                level={4}
                text="Launch <br> & Optimize"
                className="text-white mb-3"
              />
              <Paragraph
                text="We launch with precision and optimize continuously for better performance."
                className="text-white/83"
              />
            </div>
            <div>
              <Heading
                level={4}
                text="Grow <br> & Scale"
                className="text-white mb-3"
              />
              <Paragraph
                text="We support long‑term growth through improvements, updates, and insights."
                className="text-white/83"
              />
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/images/hand.webp"}
              alt="Hand"
              width={850}
              height={100}
              className="absolute -bottom-105 left-[50%] -translate-x-[30%] pointer-events-none"
            />
          </div>
        </div>
      </div>
  );
}

export default OurProcess;
