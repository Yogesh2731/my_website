"use client";
import { testimonials as staticTestimonials } from "@/Data/data";
import { FaQuoteLeft, FaPen } from "react-icons/fa";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useRef, useState, useEffect } from "react";
import { supabase, type TestimonialRow } from "@/lib/supabase";
import TestimonialForm from "./TestimonialForm";
import Image from "next/image";

type Testimonial = {
  id: number | string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image_url?: string | null;
};

/* ── Individual card with 3D tilt ── */
const TestimonialCard = ({ t }: { t: Testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale3d(1.08, 1.08, 1.08)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="shrink-0 w-64 sm:w-72 lg:w-80 flex flex-col gap-4 p-5 sm:p-6 rounded-2xl border border-(--color-border) bg-(--color-surface) cursor-pointer"
      style={{ transition: "transform 0.15s ease", willChange: "transform" }}
    >
      <FaQuoteLeft className="text-xl sm:text-2xl text-(--color-accent) opacity-60" />

      <p className="text-(--color-text-secondary) text-sm leading-6 flex-1 line-clamp-4">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-(--color-border)">
        {t.image_url ? (
          <Image
            src={t.image_url}
            alt={t.name}
            width={40}
            height={40}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-(--color-accent) flex items-center justify-center text-white font-bold text-sm shrink-0">
            {t.name.split(" ").map((n: string) => n[0]).join("")}
          </div>
        )}
        <div>
          <p className="text-(--color-text-primary) font-semibold text-sm">{t.name}</p>
          <p className="text-(--color-text-secondary) text-xs">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
};

/* ── Main section ── */
const Testimonials = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const stripRef      = useRef<HTMLDivElement>(null);
  const containerRef  = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(staticTestimonials);
  const [showForm, setShowForm]         = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Fetch approved testimonials from Supabase
  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (!error && data && (data as TestimonialRow[]).length > 0) {
        setTestimonials(data as TestimonialRow[]);
      }
    };
    fetchTestimonials();
  }, []);

  // Check if cards overflow the container — if yes, enable marquee
  useEffect(() => {
    const check = () => {
      if (containerRef.current && stripRef.current) {
        setShouldAnimate(stripRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };
    // Small delay to let layout settle after testimonials load
    const t = setTimeout(check, 100);
    window.addEventListener("resize", check);
    return () => { clearTimeout(t); window.removeEventListener("resize", check); };
  }, [testimonials]);

  // Only duplicate items when animating
  const ITEMS = shouldAnimate
    ? [...testimonials, ...testimonials, ...testimonials, ...testimonials]
    : testimonials;

  const pause  = () => { if (stripRef.current) stripRef.current.style.animationPlayState = "paused";  };
  const resume = () => { if (stripRef.current) stripRef.current.style.animationPlayState = "running"; };

  return (
    <section className="bg-(--color-bg) dot-grid w-full pt-[60px]! pb-20!">

      {/* Heading */}
      <div ref={headingRef} className="reveal px-4 sm:px-8 lg:px-24 mb-10 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--color-text-primary)">What People Say</h2>
          <p className="text-(--color-text-secondary) text-sm sm:text-base mt-1">
            Feedback from colleagues and clients I&apos;ve worked with
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-(--color-accent) text-white text-sm font-semibold hover:bg-(--color-accent-hover) transition-colors cursor-pointer shrink-0"
        >
          <FaPen className="text-xs" />
          Share Your Experience
        </button>
      </div>

      {/* Strip wrapper */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden py-10"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div
          ref={stripRef}
          className={`flex gap-5 sm:gap-6 w-max ${shouldAnimate ? "animate-marquee" : "px-4 sm:px-8 lg:px-24"}`}
        >
          {ITEMS.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Testimonial submission form modal */}
      {showForm && <TestimonialForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Testimonials;
