import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

  type CardProps = {
  projects: {
    title: string;
    description: string;
    img: string;
    alt: string;
  }[];
};

const Card = ({ projects }: CardProps) => {


  
  return (
    <>
    {projects.map((project, index) => (
      <div className="group w-[520px] h-[317px] hover:h-[330px] transition-all relative bg-black/30 rounded-2xl overflow-hidden cursor-pointer" key={index}>
        <div className="group w-[520px] h-[317px] hover:h-[330px] transition-all relative bg-black/30 rounded-2xl overflow-hidden cursor-pointer">

          <Image
            src={project.img}
            alt={project.alt}
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="w-[520px] px-10! py-5! absolute left-0 top-[205px] group-hover:top-20 h-64 bg-neutral-900/40 backdrop-blur-lg inline-flex flex-col justify-start items-start gap-5 transition-all duration-300">

            <div className="text-neutral-200 text-xl font-semibold">{project.title}</div>

            <div className="hidden group-hover:block text-neutral-200 text-base font-normal">
              {project.description}
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2.5 group-hover:border-b-2! pb-1! group-hover:border-orange-600! transition-all duration-300">
              <div className="inline-flex justify-start items-center gap-2.5 ">
                <div className="text-orange-600 text-lg font-normal">View More</div>
                <FaArrowRight className='text-orange-600' />
              </div>
            </div>

          </div>

        </div>

      </div>
    ))}
    </>
  )
}

export default Card
