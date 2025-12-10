"use client";
import { useState } from 'react'
import Image from 'next/image'
// import AboutOne from '@/public/Images/AboutOne.jpg'
import { abouts } from '@/Data/data';

const Carousal = () => {
  const [current, setCurrent] = useState(0);
  const goToSlide = (index: number) => {
    setCurrent(index);
  };
  return (
    <>
      <div className='w-full max-w-3xl mx-auto'>
        <div className='relative overflow-hidden w-full rounded-xl'>
          <div className='flex transition-transform duration-700' style={{ transform: `translateX(-${current * 100}%)` }}>
            {abouts.map((about) => (
              <div key={about.id} className='group min-w-full h-96 rounded-2xl relative overflow-hidden transition-all cursor-grab'>
                <Image
                  src={about.img}
                  alt={about.alt}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-2xl"
                />

                <div className='w-full px-10! py-2! h-64 left-0 top-[334px] group-hover:top-[272px] absolute bg-neutral-900/40 backdrop-blur-lg inline-flex flex-col justify-start items-start gap-2.5 transition-all duration-300'>
                  <div className='text-neutral-200 text-xl font-semibold'>{about.title}</div>
                  <div className="hidden group-hover:block text-neutral-300 text-base font-normal">
                    {about.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-4 gap-14'>
          {abouts.map((about, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 cursor-pointer rounded-full ${current === index ? "bg-(--color-accent-hover)" : "bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousal