import Link from "next/link";
import Heading from "./Heading";
import ImageSlider from "./ImageSlider";
import Paragraph from "./Paragraph";
import { navLinks } from "../constants/navLinks";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
      <Heading
        level={5}
        text="our clients"
        className="uppercase mb-8 gradient-blue-white"
      />

      <ImageSlider />

      <div className="border-t border-white/10 my-15"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-5">
          <Paragraph
            text="Let’s Build Something Remarkable."
            className="text-2xl text-white"
          />

          {/* Navigation */}
          <div className="flex justify-end">
            <nav className="flex gap-10">
              <ul>
                {navLinks.map((link) => (
                  <li className="flex">
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white text-base uppercase font-medium hover:text-black transition"
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
              <li>
                <Link href={"/"} className="text-base">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-base">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-base">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-base">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link href={"/"} className="flex text-center justify-between items-center">
        <Heading
          level={2}
          text="47TechLLC"
          className="text-[180px] leading-tight"
        />
          <Image src={'/images/big-arrow.webp'} alt="" width={140} height={140} className="object-cover" />

      </Link>
      </div>

      
    </div>
  );
};

export default Footer;
