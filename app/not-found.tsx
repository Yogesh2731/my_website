import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-(--color-bg) flex flex-col items-center justify-center px-4 text-center">

      {/* 404 */}
      <div className="relative mb-6">
        <span className="text-[120px] sm:text-[180px] font-bold text-(--color-accent) opacity-10 leading-none select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl sm:text-7xl font-bold text-(--color-accent) tracking-tight">
            404
          </span>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-(--color-text-primary) mb-3">
        Page Not Found
      </h1>
      <p className="text-(--color-text-secondary) text-base sm:text-lg max-w-md mb-10">
        Looks like this endpoint doesn&apos;t exist. Even the best APIs return a 404 sometimes.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-(--color-accent) text-white! rounded-full font-semibold text-sm sm:text-base hover:opacity-85 transition-all no-underline!"
        >
          Back to Home
        </Link>
        <Link
          href="/#projects"
          className="px-6 py-3 border-2 border-(--color-accent) text-(--color-accent)! rounded-full font-semibold text-sm sm:text-base hover:bg-(--color-accent) hover:text-white! transition-all no-underline!"
        >
          View Projects
        </Link>
      </div>

      <p className="text-(--color-text-secondary) text-xs mt-16 opacity-40">
        Yogesh Surwade · Full Stack Developer
      </p>
    </div>
  );
}
