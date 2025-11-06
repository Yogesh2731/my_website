import React from 'react'
import Image from 'next/image'
import project1 from "@/public/Images/project1.png"

const Card = () => {
  return (
    <> 
    <div className="w-[520px] h-[317px] hover:h-[330px] transition-all relative bg-black/30 rounded-2xl overflow-hidden cursor-pointer">
        <Image
        src={project1}
        alt='project1' 
        className="w-full! h-full! object-cover! rounded-2xl"
        />
        <div className="w-[520px] hover:h-64 px-10! py-5! left-0 top-[205px] bottom-0 absolute bg-neutral-900/40 backdrop-blur-blur inline-flex flex-col justify-start items-start gap-5 transition-all duration-300">
            <div className="self-stretch justify-start text-neutral-200 text-xl font-semibold">Project 1</div>
            <div className="hidden hover:block! self-stretch justify-start text-neutral-200 text-base font-normal">I'm a UX Director, Designer and Developer passionate about creating digital experiences that are both beautiful and functional. With a background in design psychology and technology</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div data-property-1="Default" className="inline-flex justify-start items-center gap-2.5">
                    <div className="justify-start text-orange-600 text-lg font-normal">View More</div>
                    <div className="w-3 h-4 origin-top-left rotate-[-89.92deg] outline-2 -outline-offset-1 outline-orange-600" />
                </div>
            </div>
        </div>
    </div>
    {/* <div className="w-[520px] h-80 relative bg-black/30 rounded-2xl overflow-hidden">
        <Image
        src={project1}
        alt='project1' 
        className="w-full h-full object-cover rounded-2xl"
        />
        <div className="w-[520px] hover:h-64 px-10 py-5 left-0 top-[205px] absolute bg-neutral-900/40 backdrop-blur-blur inline-flex flex-col justify-start items-start gap-5">
            <div className="self-stretch justify-start text-neutral-200 text-xl font-semibold font-['IBM_Plex_Sans']">Project 1</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div data-property-1="Default" className="inline-flex justify-start items-center gap-2.5">
                    <div className="justify-start text-orange-600 text-lg font-normal font-['IBM_Plex_Sans']">View More</div>
                    <div className="w-3 h-4 origin-top-left rotate-[-89.92deg] outline outline-2 outline-offset-[-1px] outline-orange-600" />
                </div>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default Card
