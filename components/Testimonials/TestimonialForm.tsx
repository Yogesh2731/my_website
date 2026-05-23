"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { FaTimes, FaCamera } from "react-icons/fa";
import Image from "next/image";

type Props = {
  onClose?: () => void;
  standalone?: boolean; // true = full page, false/undefined = modal
};

type FormState = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

const TestimonialForm = ({ onClose, standalone = false }: Props) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    role: "",
    company: "",
    quote: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setErrorMsg("Image must be under 2MB");
      return;
    }
    setErrorMsg("");
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      let image_url: string | null = null;

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from("testimonial-avatars")
          .upload(filename, imageFile, { contentType: imageFile.type });

        if (uploadError) throw new Error("Image upload failed. Please try without a photo.");

        const { data: urlData } = supabase.storage
          .from("testimonial-avatars")
          .getPublicUrl(filename);

        image_url = urlData.publicUrl;
      }

      const { error: insertError } = await supabase
        .from("testimonials")
        .insert([{ ...form, image_url, approved: true }]);

      if (insertError) throw new Error("Submission failed. Please try again.");

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-(--color-border) bg-(--color-bg) text-(--color-text-primary) text-sm placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-accent) transition-colors";

  const formContent = (
    <div className={standalone ? "w-full max-w-lg mx-auto" : "w-full max-w-lg bg-(--color-surface) rounded-2xl border border-(--color-border) p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"}>

      {/* Close button — modal only */}
      {!standalone && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors cursor-pointer p-1"
        >
          <FaTimes className="text-lg" />
        </button>
      )}

      {/* Success state */}
      {status === "success" ? (
        <div className="text-center py-10">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-(--color-text-primary) text-xl font-bold mb-2">Thank you!</h3>
          <p className="text-(--color-text-secondary) text-sm leading-6 max-w-xs mx-auto">
            Your testimonial has been submitted and will appear on the site after a quick review.
          </p>
          {standalone ? (
            <a
              href="/"
              className="mt-6 inline-block px-6 py-2.5 bg-(--color-accent) text-white! rounded-xl text-sm font-semibold hover:bg-(--color-accent-hover) transition-colors no-underline!"
            >
              Back to Portfolio
            </a>
          ) : (
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-(--color-accent) text-white rounded-xl text-sm font-semibold hover:bg-(--color-accent-hover) transition-colors cursor-pointer"
            >
              Close
            </button>
          )}
        </div>
      ) : (
        <>
          {!standalone && (
            <>
              <h3 className="text-(--color-text-primary) text-xl font-bold mb-1">Share Your Experience</h3>
              <p className="text-(--color-text-secondary) text-sm mb-6">
                Your feedback means a lot — it&apos;ll appear after a quick review.
              </p>
            </>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Profile photo */}
            <div className="flex items-center gap-4">
              <label className="relative cursor-pointer shrink-0">
                <div className="w-16 h-16 rounded-full bg-(--color-border) flex items-center justify-center overflow-hidden ring-2 ring-(--color-border) hover:ring-(--color-accent) transition-all">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="preview"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <FaCamera className="text-(--color-text-secondary) text-xl" />
                  )}
                </div>
                <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
              </label>
              <div>
                <p className="text-(--color-text-primary) text-sm font-medium">Profile Photo</p>
                <p className="text-(--color-text-secondary) text-xs mt-0.5">
                  Optional · Click the circle to upload · Max 2MB
                </p>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="text-(--color-text-primary) text-sm font-medium block mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Rahul Desai"
                className={inputClass}
              />
            </div>

            {/* Role + Company */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-(--color-text-primary) text-sm font-medium block mb-1.5">
                  Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Product Manager"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-(--color-text-primary) text-sm font-medium block mb-1.5">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Google"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Quote */}
            <div>
              <label className="text-(--color-text-primary) text-sm font-medium block mb-1.5">
                Your Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                name="quote"
                value={form.quote}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Share your experience working with Yogesh..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Error */}
            {errorMsg && (
              <p className="text-red-500 text-sm bg-red-500/10 px-4 py-2.5 rounded-xl">
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 bg-(--color-accent) text-white rounded-xl text-sm font-semibold hover:bg-(--color-accent-hover) transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-1"
            >
              {status === "submitting" ? "Submitting…" : "Submit Testimonial"}
            </button>
          </form>
        </>
      )}
    </div>
  );

  // Modal mode
  if (!standalone) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
      >
        {formContent}
      </div>
    );
  }

  // Standalone page mode
  return formContent;
};

export default TestimonialForm;
