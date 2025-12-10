"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { IoSunnyOutline, IoMoonOutline  } from "react-icons/io5";
import { useTheme } from "next-themes";
import YSLOGO1 from "@/public/Images/YSLOGO1.png"
import YSLOGO2 from "@/public/Images/YSLOGO2.png"
import Image from 'next/image'

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex justify-between items-center pl-10! pr-10! z-50 text-(--color-text-primary) backdrop-blur-xs">
      {/* Brand / Logo */}
      {/* <div className="text-xl font-bold text-(--color-text-primary) tracking-wide">
        Yogesh Surwade
      </div> */}
      <div className="text-xl font-bold text-(--color-text-primary) tracking-wide h-full w-fit p-4!">
        {theme === "light" ? 
        <Image
        src={YSLOGO2}
        alt= "logo"
        width={80}
        height={80}
        /> : 
        <Image
        src={YSLOGO1}
        alt= "logo"
        width={80}
        height={80}
        />}
        
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center gap-5">
        <ul className="flex justify-between items-center gap-5  text-base font-semibold">
          <li><Link href="/" className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!'>Home</Link></li>
          <li><Link href="#projects" className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!'>Projects</Link></li>
          <li><Link href="#about" className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!'>About</Link></li>
          <li><Link href="#contact" className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!'>Contact Me</Link></li>
          <li><Link href="/Resume" className='text-(--color-text-primary)! text-base! font-semibold! hover:text-(--color-accent-hover)!'>Resume</Link></li>
        </ul>

        {/* Theme Toggle Icon */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="text-xl cursor-pointer hover:text-(--color-accent) transition-colors duration-300"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar