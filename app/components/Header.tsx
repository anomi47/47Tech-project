'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants/navLinks";
import Button from "./Button";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
    id="site-header"
      className={`backdrop-blur-[38.2px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.2)_100%)] absolute z-50 w-full`}>
      <div className="mx-auto max-w-7xl py-6 grid grid-cols-[220px_1fr_220px] items-center gap-10">

        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/">
            <Image
              src="/images/logo-light-1.webp"
              alt="Logo"
              width={67}
              height={67}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-end">
          <nav className="flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white uppercase font-medium hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end">
          <Button href="/contact" >let’s connect</Button>
        </div>

      </div>
    </header>
  );
}
