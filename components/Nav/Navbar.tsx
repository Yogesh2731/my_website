"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { IoSunnyOutline, IoMoonOutline, IoMenu, IoClose } from "react-icons/io5";
import { useTheme } from "next-themes";
import YSLOGO1 from "@/public/Images/YSLOGO1.png"
import YSLOGO2 from "@/public/Images/YSLOGO2.png"
import Image from 'next/image'

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = (
    <>
      <li><Link className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!' onClick={() => setMenuOpen(false)} href="/">Home</Link></li>
      <li><Link className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!' onClick={() => setMenuOpen(false)} href="#projects">Projects</Link></li>
      <li><Link className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!' onClick={() => setMenuOpen(false)} href="#about">About</Link></li>
      <li><Link className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!' onClick={() => setMenuOpen(false)} href="#contact">Contact Me</Link></li>
      <li><Link className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!' onClick={() => setMenuOpen(false)} href="/Resume">Resume</Link></li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-10 z-50 backdrop-blur-xs text-(--color-text-primary)">

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
          {navLinks}
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
        >
          {!mounted ? null : theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-(--color-bg) backdrop-blur-md md:hidden shadow-lg">
          <ul className="flex flex-col gap-6 py-6 text-center font-semibold">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
