"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useScrollReveal } from "@/lib/useScrollReveal";

const username = "Yogesh2731";

const GithubStats = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const ref = useScrollReveal<HTMLDivElement>();

  const isDark = mounted && theme === "dark";

  const bg    = isDark ? "171717" : "faf7f2";
  const text  = isDark ? "fafafa" : "0f0f0f";
  const icon  = isDark ? "ea580c" : "000068";
  const title = isDark ? "ea580c" : "000068";
  const border = isDark ? "404040" : "e5e5e5";

  const base = `bg_color=${bg}&text_color=${text}&icon_color=${icon}&title_color=${title}&border_color=${border}&border_radius=12`;

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&${base}`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&${base}`;

  return (
    <section className="bg-(--color-bg) pt-0! pb-20! w-full">
      <div ref={ref} className="reveal max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--color-text-primary)">GitHub Activity</h2>
            <p className="text-(--color-text-secondary) text-sm sm:text-base mt-1">Real-time stats pulled from my GitHub profile</p>
          </div>
          <Link
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-(--color-accent) text-(--color-accent)! rounded-full text-sm font-semibold hover:bg-(--color-accent) hover:text-white! transition-all duration-300 no-underline! w-fit"
          >
            <FaGithub className="text-lg" />
            View Profile
          </Link>
        </div>

        {/* Stats Cards */}
        {/* <div className="w-full lg:flex-1">
          <img src={statsUrl} alt="GitHub Stats" className="w-full rounded-xl" />
        </div> */}

        {/* Top Languages */}
        <div className="w-full sm:w-[400px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={langsUrl}
            alt="Top Languages"
            className="w-full rounded-xl"
          />
        </div>

        {/* Contribution Graph */}
        <div className="mt-5 w-full rounded-xl overflow-hidden border border-(--color-border)">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/${isDark ? "ea580c" : "000068"}/${username}`}
            alt="GitHub Contribution Graph"
            className={`w-full ${isDark ? "invert-[0.15]" : ""}`}
          />
        </div>

      </div>
    </section>
  );
};

export default GithubStats;
