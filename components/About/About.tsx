import Image from 'next/image'
import { abouts } from '@/Data/data'
import Carousal from '../Carousal'

const About = () => {
  return (
    <section id='about' className='bg-(--color-bg) flex flex-col pt-[60px]! pb-20! px-10 justify-center items-center gap-10'>
        <div className="flex flex-col justify-center items-center gap-2.5">
            <div className="text-(--color-text-primary) text-4xl! font-bold! h-[132px]">Meet the Backend Brain</div>

            <div className='inline-flex justify-center items-start gap-7'>
                <div className='flex justify-center items-center gap-7'>
                    <div className='w-[569px]  flex-1 justify-start'>
                        <p className='text-(--color-text-primary) text-lg font-normal'>
                            I am a <span className='text-(--color-accent-hover)! font-bold'>Full Stack Developer</span> with hands-on experience in building responsive, high-performing web applications using technologies like <span className='text-(--color-accent-hover)! font-bold'>Next.js, React.js, Node.js, Express.js, Django, Python, and MongoDB.</span> Over the past few years, I&apos;ve worked on multiple freelance and professional projects, From  ecommerce platforms to dynamic blog sites, Where I handled both frontend and backend development. Currently, I&apos;am working as a <span className='text-(--color-accent-hover)! font-bold'>Backend Developer</span> at <span className='text-(--color-accent-hover)! font-bold'>Radiant Techverse, </span>where I design and develop <span className='text-(--color-accent-hover)! font-bold'>REST APIs,</span>  plan <span className='text-(--color-accent-hover)! font-bold'> data flow architectures,</span> and collaborate on <span className='text-(--color-accent-hover)! font-bold'>end-to-end web solutions.</span> My experience has helped me strengthen my skills in JavaScript, DevOps, and API integration, while improving my <span className='text-(--color-accent-hover)! font-bold'>communication</span> and <span className='text-(--color-accent-hover)! font-bold'>client collaboration abilities.</span> I&apos;am passionate about writing clean, efficient code and crafting intuitive user experiences. I also enjoy experimenting with modern UI libraries like ShadCN and working with tools like Figma to bring designs to life.
                        </p>
                    </div>
                    <div className='w-96 h-[434px] relative'>
                        <Carousal />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default About