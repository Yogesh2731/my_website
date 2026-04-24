"use client";
import { abouts } from '@/Data/data'
import Carousal from '../Carousal'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { useParallaxRelative } from '@/lib/useParallax'

const About = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  const carouselRef = useParallaxRelative<HTMLDivElement>(0.08);
  return (
    <section id='about' className='bg-(--color-bg) flex flex-col pt-[60px]! pb-20! px-4! sm:px-8! lg:px-24! justify-center items-center gap-10 w-full'>
        <div ref={ref} className="reveal flex flex-col justify-center items-center gap-2.5 w-full">
            <div className="text-(--color-text-primary) text-2xl! sm:text-3xl! md:text-4xl! font-bold! py-4! text-center">Meet the Backend Brain</div>

            <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-7'>
                <div className='w-full lg:w-[569px]'>
                    <p className='text-(--color-text-primary) text-base sm:text-lg font-normal'>
                        I am a <span className='text-(--color-accent-hover)! font-bold'>Full Stack Developer</span> with hands-on experience in building responsive, high-performing web applications using technologies like <span className='text-(--color-accent-hover)! font-bold'>Next.js, React.js, Node.js, Express.js, Django, Python, and MongoDB.</span> Over the past few years, I&apos;ve worked on multiple freelance and professional projects, From ecommerce platforms to dynamic blog sites, Where I handled both frontend and backend development. Currently, I&apos;am working as a <span className='text-(--color-accent-hover)! font-bold'>Backend Developer</span> at <span className='text-(--color-accent-hover)! font-bold'>Radiant Techverse, </span>where I design and develop <span className='text-(--color-accent-hover)! font-bold'>REST APIs,</span> plan <span className='text-(--color-accent-hover)! font-bold'>data flow architectures,</span> and collaborate on <span className='text-(--color-accent-hover)! font-bold'>end-to-end web solutions.</span> My experience has helped me strengthen my skills in JavaScript, DevOps, and API integration, while improving my <span className='text-(--color-accent-hover)! font-bold'>communication</span> and <span className='text-(--color-accent-hover)! font-bold'>client collaboration abilities.</span> I&apos;am passionate about writing clean, efficient code and crafting intuitive user experiences. I also enjoy experimenting with modern UI libraries like ShadCN and working with tools like Figma to bring designs to life.
                    </p>
                </div>
                <div ref={carouselRef} className='w-full max-w-sm sm:max-w-md lg:w-96 lg:h-[434px] mx-auto lg:mx-0'>
                    <Carousal />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
