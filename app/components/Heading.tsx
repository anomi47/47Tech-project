'use client';

import { monumentFonts } from "@/app/fonts";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 2, text, className = "" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const levelStyles: { [key: number]: string } = {
    1: `${monumentFonts.className} uppercase text-[120px] leading-[100px] font-semibold text-white`,
    2: `${monumentFonts.className} uppercase text-[80px] leading-[70px] font-semibold  text-center`,
    3: "text-4xl font-semibold text-gray-800",
    4: "text-3xl font-semibold text-gray-800",
    5: `${monumentFonts.className} uppercase text-[24px] leading-[34px] font-regular text-center`,
    6: "text-lg font-bold text-center uppercase tracking-[30]",
  };

  return (
    <Tag
      className={`${levelStyles[level]} ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Heading;
