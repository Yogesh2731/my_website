import React from 'react'

const Card = () => {
  return (
    <>
    <div className="w-[520px] h-80 relative bg-black/30 rounded-2xl overflow-hidden">
    <div className="w-[520px] px-10 py-5 left-0 top-[205px] absolute bg-neutral-900/40 backdrop-blur-blur inline-flex flex-col justify-start items-start gap-5">
        <div className="self-stretch justify-start text-neutral-200 text-xl font-semibold font-['IBM_Plex_Sans']">Project 1</div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div data-property-1="Default" className="inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-orange-600 text-lg font-normal font-['IBM_Plex_Sans']">View More</div>
                <div className="w-3 h-4 origin-top-left rotate-[-89.92deg] outline outline-2 outline-offset-[-1px] outline-orange-600" />
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Card
