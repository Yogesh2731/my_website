import React from 'react'
import Card from "@/components/Card"
import {projects} from "@/Data/data"

const Project = () => {
  return (
    <section id='projects' className='bg-(--color-bg) flex flex-col pt-[60px]! pb-20! justify-center items-center gap-10'>
      <div className='w-full h-32 inline-flex justify-center items-center gap-2.5'>
        <h2 className='text-(--color-text-primary) text-4xl! font-bold!'>My_Project_Journey.log()</h2>
      </div>
      <div>
        <div className='w-full h-[360px] bg-(--color-bg) px-[180px]! py-5! inline-flex justify-center items-end gap-x-10 flex-wrap content-end'>
          <Card projects={projects}/>
        </div>
      </div>
    </section>
    )
}

export default Project