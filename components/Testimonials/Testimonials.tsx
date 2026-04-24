"use client";
import { testimonials } from "@/Data/data";
import { FaQuoteLeft } from "react-icons/fa";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Testimonials = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-(--color-bg) dot-grid w-full pt-0! pb-20! px-4 sm:px-8 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

        <div ref={headingRef} className="reveal mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--color-text-primary)">What People Say</h2>
          <p className="text-(--color-text-secondary) text-sm sm:text-base mt-1">Feedback from colleagues and clients I&apos;ve worked with</p>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-(--color-border) bg-(--color-bg) hover:border-(--color-accent) transition-all duration-300 hover:shadow-lg"
            >
              <FaQuoteLeft className="text-2xl text-(--color-accent) opacity-60" />

              <p className="text-(--color-text-secondary) text-sm sm:text-base leading-7 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-(--color-border)">
                <div className="w-10 h-10 rounded-full bg-(--color-accent) flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-(--color-text-primary) font-semibold text-sm">{t.name}</p>
                  <p className="text-(--color-text-secondary) text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <p className="text-center text-(--color-text-secondary) text-xs mt-8 opacity-60">
          * Testimonials are representative. Replace with real recommendations from LinkedIn or colleagues.
        </p> */}
      </div>
    </section>
  );
};

export default Testimonials;
