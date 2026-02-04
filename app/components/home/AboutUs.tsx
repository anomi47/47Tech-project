import Button from "../Button";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

export const AboutUs = () => {
  return (
    <section className="gradient-border w-[99vw] h-[99vh] bg-black pt-30 ">
      <div className="mx-auto container text-center overflow-hidden">
        <Heading text="About Us" level={6} className="mb-5 color-white" />
        <Heading
          text="Igniting Ideas <br> Amplifying Brands"
          level={2}
          className="mb-5 gradient-blue-white"
        />
        <Paragraph
          text="At 47 Tech, we blend creativity, technology, and strategy to craft digital solutions that deliver real business impact. From concept to execution, we partner with brands to transform ideas into meaningful digital products."
          className="max-w-225 mx-auto mb-5"
        />

        <Paragraph
          text="We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire.We believe great design is more than aesthetics, great technology is more than code, and great marketing is more than reach — it’s about creating experiences that convert and inspire."
          className="max-w-225 mx-auto mb-5"
        />
        <Button href="/contact" variant="transparent" className="z-10 relative">
          start your project
        </Button>
        <div className="overflow-hidden h-87 relative w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover object-top"
          >
            <source src="/images/object.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
