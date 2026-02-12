import Link from "next/link";
import Heading from "./Heading";
import ImageSlider from "./ImageSlider";
import Paragraph from "./Paragraph";
import { navLinks } from "../constants/navLinks";
import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-full py-5">
      <Heading
        level={5}
        text="our clients"
        className="uppercase mb-8 gradient-blue-white font-extrabold"
      />

      <ImageSlider />

      <div className="border-t border-white/10 my-12"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-5">
          <div className="pr-20">
            <Paragraph
              text="Let’s Build Something Remarkable."
              className="text-2xl text-white"
            />
          </div>

          {/* Navigation */}
          <div>
            <nav className="flex gap-10">
              <ul>
                {navLinks.map((link) => (
                  <li className="flex">
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white text-base uppercase font-regular hover:underline underline-offset-8 transition mb-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <ul>
              <li className="flex mb-2">
                <Link href={"/"} className="text-base uppercase hover:underline underline-offset-8">
                  Instagram
                </Link>
              </li>
              <li className="flex mb-2">
                <Link href={"/"} className="text-base uppercase hover:underline underline-offset-8">
                  facebook
                </Link>
              </li>
              <li className="flex">
                <Link href={"/"} className="text-base uppercase hover:underline underline-offset-8">
                  linkedin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Paragraph text="2025 @ 47techllc." className="uppercase mb-2" />
            <Paragraph text="all right reserved." className="uppercase" />
          </div>

          <div className="flex flex-col items-start">
            <Link
              href={"tel:+971555018278"}
              className="text-base uppercase mb-2 hover:underline underline-offset-8"
            >
              +971 55 5018278
            </Link>
            <Link
              href={"mailto:info@47tech.llc"}
              className="text-base uppercase hover:underline underline-offset-8"
            >
              info@47tech.llc
            </Link>
            <Button variant="transparent" className="mt-8">
              let’s talk
            </Button>
          </div>
        </div>
        <div className="object-contain flex justify-center mt-23 mb-15">
          <Link href={"/"}>
            <Image
              src={"/images/logo-light-1.webp"}
              width={140}
              height={140}
              alt="Logo"
            />
          </Link>
        </div>
        <Link
          href={"/"}
          className="flex text-center justify-between items-center"
        >
          <Heading
            level={2}
            text="47TechLLC"
            className="text-[180px] leading-35"
          />
          <Image
            src={"/images/big-arrow.webp"}
            alt=""
            width={140}
            height={140}
            className="object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
