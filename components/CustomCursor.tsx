"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const pos      = useRef({ x: 0, y: 0 });
  const trail    = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only enable on pointer-fine (mouse) devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsTouch(false);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let rafId: number;
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12;
      trail.current.y += (pos.current.y - trail.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${trail.current.x - 16}px, ${trail.current.y - 16}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Small solid dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-(--color-accent) pointer-events-none z-[9999] transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-(--color-accent) pointer-events-none z-[9998] opacity-50 transition-opacity duration-200 ${visible ? "opacity-50" : "opacity-0"}`}
      />
    </>
  );
};

export default CustomCursor;
