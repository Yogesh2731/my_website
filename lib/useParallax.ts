"use client";
import { useEffect, useRef } from "react";

// factor > 0 → element drifts down as you scroll (appears slower than page = classic parallax)
// Only active on desktop (pointer: fine) — disabled on mobile/iOS
export function useParallax<T extends HTMLElement>(factor: number = 0.2) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    el.style.willChange = "transform";
    let rafId: number;

    const update = () => {
      el.style.transform = `translateY(${window.scrollY * factor}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      el.style.willChange = "";
      el.style.transform = "";
    };
  }, [factor]);

  return ref;
}

// Relative parallax — offset based on how far the element is into the viewport
// Good for mid-page sections like About carousel
export function useParallaxRelative<T extends HTMLElement>(factor: number = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    el.style.willChange = "transform";
    let rafId: number;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${centerOffset * factor}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      el.style.willChange = "";
      el.style.transform = "";
    };
  }, [factor]);

  return ref;
}
