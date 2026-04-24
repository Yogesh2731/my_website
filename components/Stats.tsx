"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 3, suffix: "+", label: "Years Experience" },
  { number: 10, suffix: "+", label: "Projects Delivered" },
  { number: 5, suffix: "+", label: "Happy Clients" },
  { number: 15, suffix: "+", label: "Technologies" },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
}

function StatItem({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const count = useCountUp(number, 1000, true);
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-4xl sm:text-5xl font-bold text-(--color-accent)">
        {count}{suffix}
      </span>
      <span className="text-sm sm:text-base text-(--color-text-secondary) font-medium tracking-wide">{label}</span>
    </div>
  );
}

const Stats = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-(--color-bg) border-y border-(--color-border) py-12 md:py-16 w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            triggered ? <StatItem key={stat.label} {...stat} /> :
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <span className="text-4xl sm:text-5xl font-bold text-(--color-accent)">0{stat.suffix}</span>
              <span className="text-sm sm:text-base text-(--color-text-secondary) font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
