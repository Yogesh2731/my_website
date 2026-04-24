"use client";
import { experience } from "@/Data/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Timeline = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="bg-(--color-bg) dot-grid flex flex-col pt-[60px]! pb-20! gap-10 w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <div ref={headingRef} className="reveal flex flex-col gap-2.5">
        <h2 className="text-(--color-text-primary) text-2xl! sm:text-3xl! lg:text-4xl! font-bold!">Experience</h2>
        <p className="text-(--color-text-secondary) text-sm sm:text-base lg:text-lg font-normal max-w-xl">
          The journey that shaped my skills and perspective as a developer
        </p>
      </div>

      <div className="relative w-full">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-(--color-border)" />

        <div className="flex flex-col gap-12">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  tags: string[];
};

const TimelineItem = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="reveal relative pl-10"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Dot */}
      <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-(--color-bg) border-2 border-(--color-accent) flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-(--color-accent)" />
      </div>

      {/* Card */}
      <div className="bg-(--color-surface) border border-(--color-border) rounded-2xl p-5 sm:p-6 flex flex-col gap-3 hover:border-(--color-accent) transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="text-(--color-text-primary) text-lg font-semibold">{item.role}</h3>
            <p className="text-(--color-accent-hover) text-sm font-medium">{item.company}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-0.5">
            <span className="text-(--color-text-secondary) text-sm">{item.duration}</span>
            <span className="text-(--color-text-secondary) text-xs">{item.location}</span>
          </div>
        </div>

        <p className="text-(--color-text-secondary) text-sm leading-relaxed">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-(--color-border) text-(--color-text-secondary) bg-(--color-bg)"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
