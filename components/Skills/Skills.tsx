"use client";
import { skills, skillProficiencies } from "@/Data/data";
import Image from 'next/image'
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, triggered: boolean, delay: number = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(target / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(start);
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [triggered, target, duration, delay]);
  return count;
}

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-500",
  Backend: "bg-green-500",
  Database: "bg-yellow-500",
  DevOps: "bg-orange-500",
};

const Skills = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const barsContainerRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = barsContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='bg-(--color-bg) dot-grid flex flex-col pt-[60px]! pb-20! justify-center items-center gap-16 w-full overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-10 w-full px-4 sm:px-8 lg:px-24'>

        {/* Heading */}
        <div ref={headingRef} className='reveal flex flex-col justify-center items-center gap-2.5 text-center'>
          <h2 className='text-(--color-text-primary) text-2xl! sm:text-3xl! lg:text-4xl! font-bold!'>My Technical Toolkit</h2>
          <p className="text-center text-(--color-text-secondary) text-sm sm:text-base lg:text-lg font-normal max-w-xl">From backend logic to deployment pipelines, here&apos;s what keeps my code running strong</p>
        </div>

        {/* Scrolling icons strip */}
        <div className="w-full overflow-hidden py-3">
          <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
            {skills.map((skill) => (
              <Image
                key={skill.id}
                src={skill.icon}
                alt={skill.skillName}
                width={96}
                height={96}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all mx-4 sm:mx-6 lg:mx-8 inline-block object-contain"
              />
            ))}
            {skills.map((skill) => (
              <Image
                key={`${skill.id}-duplicate`}
                src={skill.icon}
                alt={skill.skillName}
                width={96}
                height={96}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all mx-4 sm:mx-6 lg:mx-8 inline-block object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Proficiency bars */}
      <div ref={barsContainerRef} className='w-full px-4 sm:px-8 lg:px-24 flex flex-col gap-4'>
        <h3 className='text-(--color-text-primary) text-xl! sm:text-2xl! font-semibold! text-center mb-2'>Proficiency Levels</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5'>
          {skillProficiencies.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} visible={barsVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

type SkillBarProps = { skill: { name: string; level: number; category: string }; index: number; visible: boolean };

const SkillBar = ({ skill, index, visible }: SkillBarProps) => {
  const count = useCountUp(skill.level, 900, visible, index * 80);
  return (
    <div className='flex flex-col gap-1.5'>
      <div className='flex justify-between items-center'>
        <span className='text-(--color-text-primary) text-sm font-medium'>{skill.name}</span>
        <div className='flex items-center gap-2'>
          <span className={`text-xs px-2 py-0.5 rounded-full text-white ${categoryColors[skill.category] ?? "bg-gray-500"}`}>{skill.category}</span>
          <span className='text-(--color-text-secondary) text-sm font-medium tabular-nums'>{count}%</span>
        </div>
      </div>
      <div className='w-full h-2 rounded-full bg-(--color-border)'>
        <div
          className={`h-2 rounded-full ${categoryColors[skill.category] ?? "bg-gray-500"}`}
          style={{ width: visible ? `${skill.level}%` : '0%', transition: `width 1s ease ${index * 80}ms` }}
        />
      </div>
    </div>
  );
};

export default Skills
