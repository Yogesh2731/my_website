import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <footer id='contact' className='bg-(--color-bg) pt-[60px]!'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <div className='h-32 inline-flex flex-col justify-center items-center gap-2.5'>
          <div className='justify-start text-(--color-text-primary) text-4xl font-bold'>Console.log(&apos;Let&apos;s Talk!&apos;)</div>
          <div className='self-stretch inline-flex justify-center items-center gap-2.5'>
            <div className='flex-1 text-center justify-start text-(--color-text-secondary) text-lg font-normal'>
              From concepts to code, I love bringing ideas to life. Say hi and let&apos;s start something awesome
            </div>
          </div>
        </div>

        <div className='self-stretch inline-flex justify-center items-center gap-10 pb-20'>
          <Link href="https://www.linkedin.com/in/yogesh-surwade-623493387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><button className='cursor-pointer w-36 px-4 py-3.5 rounded-3xl outline -outline-offset-1 outline-(--color-text-primary) hover:outline-(--color-text-secondary) text-(--color-text-secondary) hover:text-(--color-text-primary) hover:font-semibold flex justify-center items-center gap-2.5'>Linkedin</button></Link>
          <Link href=""><button className='cursor-pointer w-36 px-4 py-3.5 rounded-3xl outline -outline-offset-1 outline-(--color-text-primary) hover:outline-(--color-text-secondary) text-(--color-text-secondary) hover:text-(--color-text-primary) hover:font-semibold flex justify-center items-center gap-2.5'>Email</button></Link>
          <Link href="https://www.instagram.com/yogeshh.s/"><button className='cursor-pointer w-36 px-4 py-3.5 rounded-3xl outline -outline-offset-1 outline-(--color-text-primary) hover:outline-(--color-text-secondary) text-(--color-text-secondary) hover:text-(--color-text-primary) hover:font-semibold flex justify-center items-center gap-2.5'>Instagram</button></Link>
          <Link href="https://github.com/Yogesh2731"><button className='cursor-pointer w-36 px-4 py-3.5 rounded-3xl outline -outline-offset-1 outline-(--color-text-primary) hover:outline-(--color-text-secondary) text-(--color-text-secondary) hover:text-(--color-text-primary) hover:font-semibold flex justify-center items-center gap-2.5'>Github</button></Link>
          

        </div>

        <div className='bg-(--color-accent) w-full h-14 px-10 flex justify-end items-center text-neutral-100'>
          &#169; Yogesh Surwade
        </div>
      </div>
    </footer>
  )
}

export default Footer