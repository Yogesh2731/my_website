import type { Metadata } from "next";
import Link from "next/link";
import TestimonialForm from "@/components/Testimonials/TestimonialForm";

export const metadata: Metadata = {
  title: "Leave a Testimonial — Yogesh Surwade",
  description: "Share your experience working with Yogesh Surwade — Full Stack Developer at Radiant Techverse.",
};

const TestimonialPage = () => {
  return (
    <main className="min-h-screen bg-(--color-bg) dot-grid flex flex-col items-center justify-center px-4 pt-28 pb-16">

      {/* Header */}
      <div className="text-center mb-10 max-w-2xl">

        {/* Dev-style tagline */}
        <h1 className="text-lg sm:text-3xl lg:text-4xl font-bold font-mono text-(--color-accent) mb-3 whitespace-nowrap">
          feedback.push(yourExperience)
        </h1>

        <p className="text-(--color-text-primary) text-lg sm:text-xl font-semibold mb-2">
          How was working with Yogesh?
        </p>
        <p className="text-(--color-text-secondary) text-sm sm:text-base leading-relaxed">
          Your honest feedback helps me grow and lets others know what it&apos;s like to work with me.
          Takes less than a minute — I&apos;d really appreciate it! 🙏
        </p>
      </div>

      {/* Form card */}
      <div className="w-full max-w-lg bg-(--color-surface) rounded-2xl border border-(--color-border) p-6 sm:p-8">
        <TestimonialForm standalone />
      </div>

      {/* Back link */}
      <Link
        href="/"
        className="mt-8 text-(--color-text-secondary) text-sm hover:text-(--color-text-primary) transition-colors no-underline!"
      >
        ← Back to portfolio
      </Link>

    </main>
  );
};

export default TestimonialPage;
