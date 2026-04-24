"use client";
import React from 'react'
import Card from "@/components/Card"
import {projects} from "@/Data/data"
import { useScrollReveal } from "@/lib/useScrollReveal";

const Project = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  return (
    <section id='projects' className='bg-(--color-bg) flex flex-col pt-[60px]! pb-20! justify-center items-center gap-10 w-full'>
      <div ref={headingRef} className='reveal w-full flex justify-center items-center px-4'>
        <h2 className='text-(--color-text-primary) text-base! sm:text-2xl! md:text-3xl! lg:text-4xl! font-bold! text-center'>My_Project_Journey.log()</h2>
      </div>
      <div ref={cardsRef} className='reveal w-full px-4! sm:px-8! lg:px-24! py-5! flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap'>
        <Card projects={projects}/>
      </div>
    </section>
    )
}

export default Project
