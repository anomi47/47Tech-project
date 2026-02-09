"use client";

import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string; // optional if used as form button
  type?: "button" | "submit" | "reset"; // for form usage
  className?: string;
  variant?: "solid" | "transparent" | "transparent-dark";
};

export default function Button({
  children,
  href,
  type = "button",
  className = "",
  variant = "solid",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-8 py-4 text-[16px] rounded-full font-medium uppercase transition-all border border-[#0a0a0e33] group";

  const variantClasses = {
    solid: "bg-white text-black hover:bg-black hover:text-white",
    transparent:
      "bg-transparent border-[#FFFFFF33] text-white hover:bg-white hover:text-black cursor-pointer",
    "transparent-dark":
      "bg-transparent text-black hover:bg-black hover:text-white",
  };

  if (href) {
    // Render as a Link
    return (
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    );
  }

  // Render as a button for forms
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}
