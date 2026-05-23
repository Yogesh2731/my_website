"use client";
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { abouts } from '@/Data/data';

const AUTOPLAY_DELAY = 3500;

const Carousal = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % abouts.length);
    }, AUTOPLAY_DELAY);
  }, [stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  return (
    <div className='w-full max-w-3xl mx-auto'>
      <div
        className='relative overflow-hidden w-full rounded-xl'
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className='flex transition-transform duration-700' style={{ transform: `translateX(-${current * 100}%)` }}>
          {abouts.map((about) => (
            <div key={about.id} className='group min-w-full h-96 rounded-2xl relative overflow-hidden transition-all cursor-grab'>
              <Image
                src={about.img}
                alt={about.alt}
                width={600}
                height={384}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className='w-full px-10! py-2! h-64 left-0 top-[334px] group-hover:top-[272px] absolute bg-neutral-900/40 backdrop-blur-lg inline-flex flex-col justify-start items-start gap-2.5' style={{ transition: 'top 0.5s ease-in-out' }}>
                <div className='text-neutral-200 text-xl font-semibold'>{about.title}</div>
                <div className="hidden group-hover:block text-neutral-300 text-base font-normal">
                  {about.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar showing autoplay timing */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20">
          <div
            key={current}
            className="h-full bg-(--color-accent)"
            style={{ animation: `loading ${AUTOPLAY_DELAY}ms linear forwards` }}
          />
        </div>
      </div>

      {/* Dots */}
      <div className='flex justify-center mt-4 gap-14'>
        {abouts.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrent(index); startAutoplay(); }}
            className={`h-3 w-3 cursor-pointer rounded-full transition-colors duration-300 ${
              current === index ? "bg-(--color-accent-hover)" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousal;
