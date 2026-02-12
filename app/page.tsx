"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Lenis from "@studio-freight/lenis";

import Hero from "./components/home/Hero";
import { AboutUs } from "./components/home/AboutUs";
import WhatWeDo from "./components/home/ServicesSection";
import OurProcess from "./components/home/OurProcess";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ContactUs from "./components/home/ContactUs";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const panels = panelsRef.current;
    if (!scroller || !panels.length) return;

    let index = 0;
    let isAnimating = false;
    let lastTime = 0;
    const COOLDOWN = 500;

    // -------------------------
    // LENIS
    // -------------------------
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // -------------------------
    // SNAP FUNCTION
    // -------------------------
    function goToPanel(i: number) {
      const now = Date.now();
      if (
        i < 0 ||
        i >= panels.length ||
        isAnimating ||
        now - lastTime < COOLDOWN
      )
        return;

      lastTime = now;
      isAnimating = true;
      index = i;

      // HEADER ANIMATION
      const header = document.getElementById("site-header");

      if (header) {
        if (i > 0) {
          gsap.to(header, {
            y: -80,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            pointerEvents: "none",
          });
        } else {
          gsap.to(header, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            pointerEvents: "auto",
          });
        }
      }

      gsap.to(scroller, {
        scrollTo: panels[i],
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          isAnimating = false;
        },
      });

      document.body.className = `color-${panels[i].dataset.color}`;
    }

    // -------------------------
    // WHEEL INTENT (NO DIRECTION INVERSION)
    // -------------------------
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        goToPanel(index + 1); // scroll down
      } else {
        goToPanel(index - 1); // scroll up
      }
    };

    // -------------------------
    // KEYBOARD SUPPORT
    // -------------------------
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        goToPanel(index + 1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        goToPanel(index - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    document.body.className = "color-black";

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={scrollerRef} className="scroller">
      <section
        ref={(el) => el && (panelsRef.current[0] = el)}
        data-color="black"
        className="panel"
      >
        <Hero />
      </section>

      <section
        ref={(el) => el && (panelsRef.current[1] = el)}
        data-color="black"
        className="panel"
      >
        <AboutUs />
      </section>

      <section
        ref={(el) => el && (panelsRef.current[2] = el)}
        data-color="white"
        className="panel overflow-hidden "
      >
        <WhatWeDo />
      </section>

      <section
        ref={(el) => el && (panelsRef.current[3] = el)}
        data-color="black"
        className="panel overflow-hidden"
      >
        <OurProcess />
      </section>

      <section
        ref={(el) => el && (panelsRef.current[4] = el)}
        data-color="white"
        className="panel"
      >
        <WhyChooseUs />
      </section>

      <section
        ref={(el) => el && (panelsRef.current[5] = el)}
        data-color="black"
        className="panel"
      >
        <Testimonials />
      </section>

      <section
        ref={(el) => el && (panelsRef.current[6] = el)}
        data-color="white"
        className="panel"
      >
        <ContactUs />
      </section>

      <footer
        ref={(el) => el && (panelsRef.current[7] = el)}
        data-color="white"
        className="panel bg-[url('/images/footer-bg.webp')] bg-cover bg-center bg-no-repeat bg-black"
      >
        <Footer />
      </footer>
    </div>
  );
}
