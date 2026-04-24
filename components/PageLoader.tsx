"use client";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("loaded")) return;
    sessionStorage.setItem("loaded", "true");
    setVisible(true);

    const fadeTimer = setTimeout(() => setFading(true), 1600);
    const hideTimer = setTimeout(() => setVisible(false), 2100);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-(--color-bg) flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
    >
      {/* Initials */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-24 h-24 rounded-full border-2 border-(--color-accent) opacity-20 animate-ping" />
        <div className="w-20 h-20 rounded-full border-2 border-(--color-accent) flex items-center justify-center">
          <span className="text-3xl font-bold text-(--color-accent) tracking-widest">YS</span>
        </div>
      </div>

      {/* Loading bar */}
      <div className="w-32 h-0.5 bg-(--color-border) rounded-full overflow-hidden mt-2">
        <div className="h-full bg-(--color-accent) rounded-full animate-[loading_1.6s_ease-in-out_forwards]" />
      </div>
    </div>
  );
};

export default PageLoader;
