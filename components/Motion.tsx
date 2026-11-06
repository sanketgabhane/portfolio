"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Smooth scroll + scroll-reveal + hero parallax. Renders nothing. */
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let io: IntersectionObserver | undefined;
    const ctx = gsap.context(() => {
      gsap.set(".reveal", { opacity: 0, y: 28 });
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            io?.unobserve(en.target);
            gsap.to(en.target, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", clearProps: "transform" });
          }),
        { rootMargin: "0px 0px -8% 0px" },
      );
      document.querySelectorAll(".reveal").forEach((el) => io?.observe(el));

      gsap.to(".hero__name", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.from(".hero-in", { opacity: 0, y: 30, duration: 0.9, stagger: 0.12, ease: "power3.out" });
    }, document.body);

    return () => {
      io?.disconnect();
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return null;
}
