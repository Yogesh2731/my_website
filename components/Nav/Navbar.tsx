"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { IoSunnyOutline, IoMoonOutline, IoMenu, IoClose } from "react-icons/io5";
import { useTheme } from "next-themes";
import YSLOGO1 from "@/public/Images/YSLOGO1.png"
import YSLOGO2 from "@/public/Images/YSLOGO2.png"
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Home',       href: '/',           section: 'hero'       },
  { label: 'Projects',   href: '#projects',   section: 'projects'   },
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'About',      href: '#about',      section: 'about'      },
  { label: 'Contact',    href: '#contact',    section: 'contact'    },
  { label: 'Resume',     href: '/Resume',     section: null         },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted]         = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState('hero');

  useEffect(() => setMounted(true), []);

  // Active section detection — thin horizontal line at viewport center
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.section).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (section: string | null) => {
    const isActive = section && activeSection === section;
    return [
      'text-base! font-semibold! transition-colors duration-200',
      isActive
        ? 'text-(--color-accent)!'
        : 'text-(--color-text-primary)! hover:text-(--color-accent-hover)!',
    ].join(' ');
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-10 z-50 bg-(--color-bg)/90 backdrop-blur-sm border-b border-(--color-border)/50 text-(--color-text-primary)">

      {/* Logo */}
      <div className="font-bold tracking-wide pt-1">
        <Image
          src={!mounted ? YSLOGO1 : theme === "light" ? YSLOGO2 : YSLOGO1}
          alt="logo"
          width={70}
          height={70}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-5 text-base font-semibold">
          {NAV_LINKS.map(({ label, href, section }) => (
            <li key={label}>
              <Link className={linkClass(section)} href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => mounted && setTheme(theme === "light" ? "dark" : "light")}
          className="text-xl hover:text-(--color-accent)"
          aria-label="Toggle Theme"
        >
          {!mounted ? null : theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => mounted && setTheme(theme === "light" ? "dark" : "light")}
          className="text-xl"
          aria-label="Toggle Theme"
        >
          {!mounted ? null : theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl" aria-label="Toggle Menu">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Dropdown — slide-in animation */}
      <div
        className={`absolute top-20 left-0 w-full bg-(--color-bg) backdrop-blur-md md:hidden shadow-lg overflow-hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          opacity: menuOpen ? 1 : 0,
          transition: 'max-height 0.3s ease-in-out, opacity 0.25s ease-in-out',
        }}
      >
        <ul className="flex flex-col gap-6 py-6 text-center font-semibold">
          {NAV_LINKS.map(({ label, href, section }) => (
            <li key={label}>
              <Link
                className={linkClass(section)}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
