"use client";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollReveal } from "@/lib/useScrollReveal";
import Link from "next/link";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!SCRIPT_URL) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass =
    "w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-4 py-3 text-(--color-text-primary) text-sm placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent) transition-colors duration-200";

  return (
    <section id="contact" className="bg-(--color-bg) dot-grid flex flex-col pt-[60px]! pb-20! justify-center items-center gap-10 w-full">
      {/* Heading */}
      <div ref={headingRef} className="reveal flex flex-col items-center gap-2.5 text-center px-4 sm:px-8 lg:px-24 w-full">
        <h2 className="text-(--color-text-primary) text-2xl! sm:text-3xl! lg:text-4xl! font-bold!">Let&apos;s Work Together</h2>
        <p className="text-(--color-text-secondary) text-sm sm:text-base lg:text-lg font-normal max-w-xl">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div ref={cardRef} className="reveal w-full px-4 sm:px-8 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left — contact info */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-(--color-text-primary) text-xl font-semibold">Get in Touch</h3>
            <p className="text-(--color-text-secondary) text-sm leading-relaxed">
              I&apos;m currently open to full-time roles, freelance projects, and interesting collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-(--color-text-secondary) text-sm">
              <FaEnvelope className="text-(--color-accent) text-lg shrink-0" />
              <span>surwadeyogesh1998@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-(--color-text-secondary) text-sm">
              <FaMapMarkerAlt className="text-(--color-accent) text-lg shrink-0" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/Yogesh2731"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-(--color-border) flex items-center justify-center text-(--color-text-secondary) hover:text-(--color-accent) hover:border-(--color-accent) transition-colors duration-200 no-underline!"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yogesh-surwade-623493387/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-(--color-border) flex items-center justify-center text-(--color-text-secondary) hover:text-(--color-accent) hover:border-(--color-accent) transition-colors duration-200 no-underline!"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </Link>
            <Link
              href="mailto:yogesh.surwade@rtechverse.com"
              className="w-10 h-10 rounded-full border border-(--color-border) flex items-center justify-center text-(--color-text-secondary) hover:text-(--color-accent) hover:border-(--color-accent) transition-colors duration-200 no-underline!"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </Link>
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-(--color-surface) border border-(--color-border) rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-(--color-text-secondary) text-xs font-medium uppercase tracking-wide">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Yogesh Surwade"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-(--color-text-secondary) text-xs font-medium uppercase tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-(--color-text-secondary) text-xs font-medium uppercase tracking-wide">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project or just say hi..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full py-3 rounded-xl bg-(--color-accent) text-white font-semibold text-sm hover:bg-(--color-accent-hover) transition-colors duration-200 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Message sent! I'll get back to you soon." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-xs text-center">Something went wrong. Please email me directly at surwadeyogesh1998@gmail.com</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
