import Button from "../Button";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

function hero() {
  return (
    <section className="hero bg-cover bg-center bg-no-repeat min-h-screen bg-black relative w-full">
      <div className="mx-auto max-w-7xl "></div>
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
        {/* <div className="absolute inset-0 bg-[url('/images/hero-gradient.webp')]"></div> */}
        <div className="grid grid-cols-2 gap-6 min-h-screen items-end z-10 relative mx-auto max-w-7xl pb-12">
          <div>
            <Heading text="Future Starts Here" level={1} />
          </div>
          <div className="pl-50">
            <Paragraph text="We are a full‑stack digital agency building powerful digital experiences that help brands grow, connect & lead in a competitive world." />
            <div>
            <Button href="/contact" className="">start your project</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
