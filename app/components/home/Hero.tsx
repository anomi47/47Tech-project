import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Counter from "./Counter";

function hero() {
  return (
    <section className="hero bg-cover bg-center bg-no-repeat min-h-screen bg-black relative w-full">
      <div className="relative w-full h-screen overflow-hidden ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/images/fashion-model.webm" type="video/webm" />
        </video>
        <div className="grid grid-cols-2 gap-6 min-h-screen items-end z-10 relative mx-auto max-w-7xl pb-14">
          <div className="relative">
            <Image
              src={"/images/hero-object.webp"}
              alt="Object"
              width={93}
              height={46}
              className="mb-10"
            />
            <Heading text="Future Starts Here" level={1} />
            <div className="absolute  h-1 w-110  border-t border-[#0088FF] flex -right-70 bottom-10 mix-blend-soft-light"></div>
          </div>
          <div className="pl-50 flex flex-col gap-36 justify-between pb-4">
            <div>
              <Counter
                end={6}
                suffix="K+"
                label="clients"
                duration={1000}
                className="mb-15"
              />
              <Counter
                end={500}
                suffix="+"
                label="projects"
                duration={1000}
                className="mb-15"
              />
              <Counter
                end={5}
                suffix="+"
                label="years of experience"
                duration={1000}
              />
            </div>
            <div className="max-w-72 mr-0 ml-auto">
              <Paragraph
                text=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are a full‑stack digital agency building powerful digital experiences that help brands grow, connect & lead in a competitive world."
                className="mb-2"
              />

              <Button href="/contact" className="" variant="transparent">
                start your project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
