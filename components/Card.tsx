import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type CardProps = {
  projects: {
    title: string;
    description: string;
    img: string;
    alt: string;
    githubUrl?: string;
    liveUrl?: string;
  }[];
};

const Card = ({ projects }: CardProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <div
          className="group w-full sm:w-[400px] lg:w-[520px] h-[220px] sm:h-[270px] lg:h-[317px] hover:h-[230px] sm:hover:h-[285px] lg:hover:h-[330px] transition-all relative bg-black/30 rounded-2xl overflow-hidden cursor-pointer"
          key={index}
        >
          <Image
            src={project.img}
            alt={project.alt}
            width={520}
            height={317}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="w-full px-6! sm:px-8! lg:px-10! py-4! lg:py-5! absolute left-0 top-[148px] sm:top-[188px] lg:top-[205px] group-hover:top-8 sm:group-hover:top-14 lg:group-hover:top-20 h-64 bg-neutral-900/40 backdrop-blur-lg inline-flex flex-col justify-start items-start gap-3 lg:gap-4 transition-all duration-300">

            <div className="text-neutral-200 text-base sm:text-lg lg:text-xl font-semibold">{project.title}</div>

            <div className="hidden group-hover:block text-neutral-200 text-sm lg:text-base font-normal leading-relaxed">
              {project.description}
            </div>

            {/* Links row */}
            <div className="w-full flex items-center gap-4 mt-auto">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="flex items-center gap-1.5 text-neutral-300 hover:text-white! text-sm font-medium transition-colors no-underline!"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300! text-sm font-medium transition-colors no-underline!"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>

          </div>
        </div>
      ))}
    </>
  )
}

export default Card
