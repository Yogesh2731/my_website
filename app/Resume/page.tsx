// import Resume from "./Resume"

import Link from "next/link"
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";


const Resume = () => {
  return (
    <>
      <section className="h-full max-w-[1200px] mx-auto my-0 pt-[120px]! px-24! sm:px-10! text-center">
        <h1 className="text-8xl font-light tracking-tight mb-2">Resume</h1>
        <p className="text-[32px] text-(--color-text-secondary) font-normal">Yogesh Surwade</p>
        <p className="tracking-wider text-[16px] leading-7">
          Room No: 02, Kranti Nagar, Kurla East Mumbai - 400078 <span className="text-(--color-accent) font-bold">|</span> +91 9545 006 102 <span className="text-(--color-accent) font-bold">|</span> surwadeyogesh1998@gmail.com
        </p>
        <p className="tracking-wider text-[16px] leading-7 flex gap-5 justify-center items-center">
          <Link
            href="https://github.com/Yogesh2731"
            className="relative group text-(--color-accent) font-medium flex gap-1.5 justify-center items-center"
          >
            Github <FaSquareGithub />
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-(--color-accent) transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            href="https://github.com/Yogesh2731"
            className="relative group text-(--color-accent) font-medium flex gap-1.5 justify-center items-center"
          >
            LinkedIn <FaLinkedin />
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-(--color-accent) transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </p>
      </section>
      <section className="py-12">
        <div className="px-24! max-w-[1200px] mx-auto my-0 sm:px-10!">
          <h2 className="text-[32px] font-normal text-(--color-text-primary) mb-12">Summary</h2>
          <div className="text-[18px] leading-7 text-(--color-text-secondary)">
          I am a <span className='text-(--color-accent-hover)! font-bold'>Full Stack Developer</span> with hands-on experience in building responsive, high-performing web applications using technologies like <span className='text-(--color-accent-hover)! font-bold'>Next.js, React.js, Node.js, Express.js, Django, Python, and MongoDB.</span> Over the past few years, I&apos;ve worked on multiple freelance and professional projects, From  ecommerce platforms to dynamic blog sites, Where I handled both frontend and backend development. Currently, I&apos;am working as a <span className='text-(--color-accent-hover)! font-bold'>Backend Developer</span> at <span className='text-(--color-accent-hover)! font-bold'>Radiant Techverse, </span>where I design and develop <span className='text-(--color-accent-hover)! font-bold'>REST APIs,</span>  plan <span className='text-(--color-accent-hover)! font-bold'> data flow architectures,</span> and collaborate on <span className='text-(--color-accent-hover)! font-bold'>end-to-end web solutions.</span> My experience has helped me strengthen my skills in JavaScript, DevOps, and API integration, while improving my <span className='text-(--color-accent-hover)! font-bold'>communication</span> and <span className='text-(--color-accent-hover)! font-bold'>client collaboration abilities.</span> I&apos;am passionate about writing clean, efficient code and crafting intuitive user experiences. I also enjoy experimenting with modern UI libraries like ShadCN and working with tools like Figma to bring designs to life.
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="px-24! max-w-[1200px] mx-auto my-0 sm:px-10!">
          <h2 className="text-[32px] font-normal text-(--color-text-primary) mb-12">Experience</h2>
          <div className="relative">
            {/* experience one */}
            <div className="mb-8">
              <div className="flex items-baseline gap-8 mb-4">
                <div className="text-[16px] w-[180px] font-bold text-(--color-text-primary) uppercas tracking-[1px]">02/2024 - Present</div>
                <div className="text-[16px] w-[200px] font-semibold text-(--color-text-primary)">Radiant Techverse</div>
                <div className="text-[16px] w-[150px] text-(--color-text-primary)">Bhandup, Mumbai</div>
                <div className="text-[16px] font-normal w-[150px] text-(--color-accent) flex-1 inline mb-0">Backend Developer</div>
              </div>
              <p className="text-[16px] leading-7 text-(--color-text-secondary) mt-4">
                I&apos;m currently working on a scalable HRMS platform where I build and maintain backend systems using Node.js, Express, and MongoDB. I&apos;ve developed key modules like attendance, leave, payroll, and onboarding, along with complex business logic such as payroll lock periods and role-based access. I also automate advanced Excel reports with ExcelJS and manage containerized microservices using Docker, Kubernetes, and AWS. Alongside development, I help maintain smooth CI/CD workflows and structured logging to keep deployments reliable.
              </p>
            </div>

            {/* experience two */}
            <div className="mb-8">
              <div className="flex items-baseline gap-8 mb-4">
                <div className="text-[16px] w-[180px] font-bold text-(--color-text-primary) uppercas tracking-[1px]">03/2023 - 10/2023</div>
                <div className="text-[16px] w-[200px] font-semibold text-(--color-text-primary)">Freelancing Project (Har ghar Chandan)</div>
                <div className="text-[16px] w-[150px] text-(--color-text-primary)">Kurla, Mumbai</div>
                <div className="text-[16px] font-normal w-[150px] text-(--color-accent) flex-1 inline mb-0">Frontend Developer</div>
              </div>
              <p className="text-[16px] leading-7 text-(--color-text-secondary) mt-4">
                I built a fully responsive frontend for an e-commerce application using React JS, applying hooks, components, events, and modern CSS layouts to deliver a smooth cross-device experience. I developed key features like animations, JWT-based authentication, multilingual support with react-i18next, and dynamic product listings powered by React Hooks and Context API. I collaborated closely with the client to refine requirements and ensured the final UI matched their expectations. I also optimized performance through lazy loading and efficient state management to keep the app fast and seamless.
              </p>
            </div>

            {/* experience three */}
            <div className="mb-8">
              <div className="flex items-baseline gap-8 mb-4">
                <div className="text-[16px] w-[180px] font-bold text-(--color-text-primary) uppercas tracking-[1px]">11/2022 - 01/2023</div>
                <div className="text-[16px] w-[200px] font-semibold text-(--color-text-primary)">Freelancing Project (Ideal Signs Web Application)</div>
                <div className="text-[16px] w-[150px] text-(--color-text-primary)">Kurla, Mumbai</div>
                <div className="text-[16px] font-normal w-[150px] text-(--color-accent) flex-1 inline mb-0">Fullstack Developer</div>
              </div>
              <p className="text-[16px] leading-7 text-(--color-text-secondary) mt-4">
                I developed a responsive and dynamic frontend using React JS, utilizing hooks, events, components, and props to create an intuitive user interface. On the backend, I built a robust Django application with multiple RESTful APIs powered by Django REST Framework for smooth communication between services. I integrated MongoDB with well-structured schemas and indexing to ensure fast and scalable data handling. Together, the React frontend and Django backend were seamlessly connected through REST APIs, effective state management, and asynchronous communication for a smooth full-stack experience.
              </p>
            </div>

            {/* experience four */}
            <div className="mb-8">
              <div className="flex items-baseline gap-8 mb-4">
                <div className="text-[16px] w-[180px] font-bold text-(--color-text-primary) uppercas tracking-[1px]">11/2022 - 05/2023</div>
                <div className="text-[16px] w-[200px] font-semibold text-(--color-text-primary)">Threed Verse Software Solution Pvt Ltd (Internship)</div>
                <div className="text-[16px] w-[150px] text-(--color-text-primary)">Kurla, Mumbai</div>
                <div className="text-[16px] font-normal w-[150px] text-(--color-accent) flex-1 inline mb-0">Backend Developer</div>
              </div>
              <p className="text-[16px] leading-7 text-(--color-text-secondary) mt-4">
                I completed three end-to-end projects centered around API integration, strengthening my backend development skills using Python, Django, DRF, and MongoDB. These projects gave me hands-on experience in designing data models, integrating third-party APIs, and building secure, scalable backend systems. I also learned to adapt quickly to different tools and frameworks while delivering reliable solutions in real-world development environments.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="px-24! max-w-[1200px] mx-auto my-0 sm:px-10!">
          <h2 className="text-[32px] font-normal text-(--color-text-primary) mb-12">Skills</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Skill 1 */}
            <div>
              <h3 className="text-[16px] font-normal text-(--color-text-primary) mb-6">Creative</h3>
              <div className="text-[16px] leading-7 text-(--color-text-secondary)">
                Concepting / Logo & Identity / Typography / Illustration / Audio Editing 
              </div>
            </div>

            {/* Skill 2 */}
            <div>
              <h3 className="text-[16px] font-normal text-(--color-text-primary) mb-6">Development</h3>
              <div className="text-[16px] leading-7 text-(--color-text-secondary)">
                <span className="text-(--color-accent) font-semibold mt-0 block">Expert:</span>
                HTML / CSS / JavaScript / Tailwind / Reac.Js / Node JS / MongoDB<br></br>
                <span className="text-(--color-accent) font-semibold mt-0 block">Intermediate:</span>
                Next.Js / Python / Django / SQL / Git / GitHub<br></br>
                <span className="text-(--color-accent) font-semibold mt-0 block">Beginner:</span>
                AWS / Kubernetes / CI/CD / Java<br></br>
              </div>
            </div>

            {/* Skill 3 */}
            <div>
              <h3 className="text-[16px] font-normal text-(--color-text-primary) mb-6">Management</h3>
              <div className="text-[16px] leading-7 text-(--color-text-secondary)">
                Team Building / Leadership / Problem Solving / Communication / Adaptability / Time Management / Presentation
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume