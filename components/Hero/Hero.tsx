"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import ParticlesComponent from "@/components/Particalbackground";
import BlurText from "../BlurText";
import TextType from "../TextType";

const Hero = () => {
  const [showFixedButton, setShowFixedButton] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowFixedButton(!entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="h-full w-full" id="hero">
      <div className="relative w-full h-screen overflow-hidden self-stretch">
        <ParticlesComponent id="tsparticles" />

        <div className="flex flex-col justify-center items-center gap-40 z-10">
          <div className="absolute inset-0 inline-flex flex-col justify-center items-center gap-4 z-10 px-4">
            <BlurText
              text="I Speak in Endpoints,"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center justify-start text-(--color-accent) text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-bold!"
            />
            <BlurText
              text="Dream in JSON"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center justify-start text-(--color-text-secondary) text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-bold!"
            />
            <TextType
              text={["Creating seamless web experiences with clean design and powerful backend logic"]}
              typingSpeed={50}
              className="text-center justify-start text-(--color-text-secondary) text-sm! sm:text-base! md:text-xl! lg:text-2xl! font-normal!"
            />

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-4 flex-wrap justify-center">
              <Link
                href="#projects"
                className="px-6 py-3 bg-(--color-accent) text-white! rounded-full font-semibold text-sm sm:text-base hover:opacity-85 transition-all duration-300 no-underline!"
              >
                View My Work
              </Link>
              <Link
                href="/Resume"
                className="px-6 py-3 border-2 border-(--color-accent) text-(--color-accent)! rounded-full font-semibold text-sm sm:text-base hover:bg-(--color-accent) hover:text-white! transition-all duration-300 no-underline!"
              >
                View Resume
              </Link>
            </div>
          </div>

          {/* Scroll down arrow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 px-6! py-5! rounded-[30.42px] outline -outline-offset-2 outline-(--color-accent) flex justify-center items-center gap-2.5 z-10 cursor-pointer">
              <svg width="17" height="20" viewBox="0 0 17 20" fill="currentColor" style={{ color: "var(--color-bg)" }} xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                <path d="M14.6392 11.5568L8.02668 18.1925L1.41418 11.5568M8.02668 16.6844V1" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </div>
          </div>

          {/* Scroll-to-top fixed button */}
          <div className={`fixed bottom-10 right-10 z-50 transition-opacity duration-300 ${showFixedButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="w-16 h-16 px-6! py-5! rounded-[50px] outline -outline-offset-2 outline-(--color-accent) flex justify-center items-center gap-2.5 z-10 cursor-pointer bg-(--color-accent)">
              <svg width="17" height="20" viewBox="0 0 17 20" fill="currentColor" style={{ color: "var(--color-white)" }} xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                <path d="M14.6392 11.5568L8.02668 18.1925L1.41418 11.5568M8.02668 16.6844V1" stroke="var(--color-white)" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
