"use client";

import React from "react";
import { generalSansFonts } from "@/app/fonts"; 

interface ParagraphProps {
  text: string;
  className?: string; // optional custom classes
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`text-white text-base leading-relaxed ${className} `}
    >
      {text}
    </p>
  );
};

export default Paragraph;
