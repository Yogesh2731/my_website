import Link from "next/link"
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const sectionPadding = "px-4! sm:px-8! md:px-16! lg:px-24! max-w-[1200px] mx-auto my-0 w-full";

const Resume = () => {
  return (
    <>
      <section className={`h-full pt-[100px]! pb-6! text-center ${sectionPadding}`}>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight mb-2">Resume</h1>
        <p className="text-xl sm:text-2xl md:text-[32px] text-(--color-text-secondary) font-normal">Yogesh Surwade</p>
        <p className="text-[14px] sm:text-[16px] text-(--color-accent) font-medium mb-1">Full-Stack Developer &nbsp;|&nbsp; Node.js · React.js · AWS · Docker · CI/CD</p>
        <p className="tracking-wider text-[13px] sm:text-[15px] md:text-[16px] leading-7 flex flex-wrap gap-x-2 gap-y-1 justify-center items-center">
          <span>Kranti Nagar, Kurla East, Mumbai - 400070</span>
          <span className="hidden sm:inline text-(--color-accent) font-bold">|</span>
          <span>+91 9545006102</span>
          <span className="hidden sm:inline text-(--color-accent) font-bold">|</span>
          <span>surwadeyogesh1998@gmail.com</span>
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
            href="https://www.linkedin.com/in/yogesh-surwade-623493387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="relative group text-(--color-accent) font-medium flex gap-1.5 justify-center items-center"
          >
            LinkedIn <FaLinkedin />
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-(--color-accent) transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </p>
      </section>

      <section className="py-8 md:py-12">
        <div className={sectionPadding}>
          <h2 className="text-2xl md:text-[32px] font-normal text-(--color-text-primary) mb-6 md:mb-12">Summary</h2>
          <div className="text-[15px] md:text-[18px] leading-7 text-(--color-text-secondary)">
            Results-driven <span className='text-(--color-accent-hover)! font-bold'>Full-Stack Developer</span> with <span className='text-(--color-accent-hover)! font-bold'>3+ years of experience</span> building scalable APIs and high-performance web applications using <span className='text-(--color-accent-hover)! font-bold'>Node.js, React.js,</span> and <span className='text-(--color-accent-hover)! font-bold'>Express.js.</span> Proficient in designing <span className='text-(--color-accent-hover)! font-bold'>RESTful APIs,</span> implementing <span className='text-(--color-accent-hover)! font-bold'>CI/CD pipelines,</span> and containerizing services with <span className='text-(--color-accent-hover)! font-bold'>Docker &amp; Kubernetes</span> on <span className='text-(--color-accent-hover)! font-bold'>AWS.</span> Committed to quality-first development — writing clean, readable, well-documented code and delivering seamless user experiences through responsive <span className='text-(--color-accent-hover)! font-bold'>React.js</span> frontends. Strong communicator with experience collaborating across development and design teams.
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className={sectionPadding}>
          <h2 className="text-2xl md:text-[32px] font-normal text-(--color-text-primary) mb-6 md:mb-12">Experience</h2>
          <div className="relative">

            {/* experience one */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 mb-2">
                <div className="text-[14px] md:text-[16px] font-bold text-(--color-text-primary) tracking-[1px]">Feb 2024 – Present</div>
                <div className="text-[15px] md:text-[16px] font-semibold text-(--color-text-primary)">Radiant-Techverse Pvt Ltd</div>
                <div className="text-[14px] md:text-[16px] font-normal text-(--color-accent) md:flex-1">Backend Developer</div>
              </div>
              <ul className="list-disc list-inside text-[14px] md:text-[16px] leading-7 text-(--color-text-secondary) mt-3 space-y-1">
                <li><span className="font-semibold text-(--color-text-primary)">Scalable API Design:</span> Built RESTful APIs for attendance, leave, payroll, and onboarding modules using Node.js and Express.js.</li>
                <li>Implemented payroll lock periods and dynamic role-based access control for complex business logic.</li>
                <li><span className="font-semibold text-(--color-text-primary)">MongoDB:</span> Designed schemas with Mongoose for effective handling of deeply nested data structures.</li>
                <li><span className="font-semibold text-(--color-text-primary)">DevOps / CI-CD:</span> Containerized services with Docker, orchestrated deployments via Kubernetes, and managed AWS resources.</li>
                <li>Automated shift-wise and payroll-specific report generation using ExcelJS.</li>
              </ul>
            </div>

            {/* experience two */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 mb-2">
                <div className="text-[14px] md:text-[16px] font-bold text-(--color-text-primary) tracking-[1px]">Mar 2024 – Oct 2024</div>
                <div className="text-[15px] md:text-[16px] font-semibold text-(--color-text-primary)">Har Ghar Chandan</div>
                <div className="text-[14px] md:text-[16px] font-normal text-(--color-accent) md:flex-1">Freelance Full-Stack Developer</div>
              </div>
              <ul className="list-disc list-inside text-[14px] md:text-[16px] leading-7 text-(--color-text-secondary) mt-3 space-y-1">
                <li><span className="font-semibold text-(--color-text-primary)">React.js Frontend:</span> Developed a fully responsive e-commerce frontend with animations, component-based architecture, and clean UI from design specs.</li>
                <li>Implemented OAuth and JWT for secure authentication and user session management.</li>
                <li>Achieved cross-device compatibility using responsive design and CSS media queries.</li>
                <li>Added multilingual support with react-i18next for improved accessibility.</li>
              </ul>
            </div>

            {/* experience three */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 mb-2">
                <div className="text-[14px] md:text-[16px] font-bold text-(--color-text-primary) tracking-[1px]">Nov 2023 – Feb 2024</div>
                <div className="text-[15px] md:text-[16px] font-semibold text-(--color-text-primary)">Ideal Signs</div>
                <div className="text-[14px] md:text-[16px] font-normal text-(--color-accent) md:flex-1">Full-Stack Developer</div>
              </div>
              <ul className="list-disc list-inside text-[14px] md:text-[16px] leading-7 text-(--color-text-secondary) mt-3 space-y-1">
                <li><span className="font-semibold text-(--color-text-primary)">React.js + Django:</span> Designed and implemented a responsive frontend using React.js and built backend APIs with Python/Django.</li>
                <li>Developed a web application to streamline buying and selling of manufacturing products.</li>
                <li>Ensured smooth functionality, performance, and cross-device compatibility across all web applications.</li>
              </ul>
            </div>

            {/* experience four */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 mb-2">
                <div className="text-[14px] md:text-[16px] font-bold text-(--color-text-primary) tracking-[1px]">Nov 2022 – May 2023</div>
                <div className="text-[15px] md:text-[16px] font-semibold text-(--color-text-primary)">Threed Verse Software Solution Pvt Ltd</div>
                <div className="text-[14px] md:text-[16px] font-normal text-(--color-accent) md:flex-1">Web & App Developer (Intern)</div>
              </div>
              <ul className="list-disc list-inside text-[14px] md:text-[16px] leading-7 text-(--color-text-secondary) mt-3 space-y-1">
                <li>Achieved seamless third-party API integration across three end-to-end projects.</li>
                <li>Developed scalable web solutions using Python, Django, and MongoDB.</li>
                <li>Adapted quickly to various tools and frameworks in fast-paced, dynamic environments.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className={sectionPadding}>
          <h2 className="text-2xl md:text-[32px] font-normal text-(--color-text-primary) mb-6 md:mb-12">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <h3 className="text-[16px] font-semibold text-(--color-text-primary) mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "JavaScript", "HTML", "CSS"].map(s => (
                  <span key={s} className="px-3 py-1 text-[13px] md:text-[14px] border border-(--color-accent) text-(--color-accent) rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-(--color-text-primary) mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "REST APIs", "Python", "Django", "Golang"].map(s => (
                  <span key={s} className="px-3 py-1 text-[13px] md:text-[14px] border border-(--color-accent) text-(--color-accent) rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-(--color-text-primary) mb-3">Database</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "SQL"].map(s => (
                  <span key={s} className="px-3 py-1 text-[13px] md:text-[14px] border border-(--color-accent) text-(--color-accent) rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-(--color-text-primary) mb-3">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Kubernetes", "CI/CD", "Git/GitHub"].map(s => (
                  <span key={s} className="px-3 py-1 text-[13px] md:text-[14px] border border-(--color-accent) text-(--color-accent) rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className={sectionPadding}>
          <h2 className="text-2xl md:text-[32px] font-normal text-(--color-text-primary) mb-6 md:mb-8">Education</h2>
          <div className="space-y-3 text-[14px] md:text-[16px] leading-7">
            <div className="flex flex-col sm:flex-row sm:gap-4"><span className="font-semibold text-(--color-text-primary)">BTech in Computer Science</span><span className="text-(--color-text-secondary)">— Mumbai University | 2023</span></div>
            <div className="flex flex-col sm:flex-row sm:gap-4"><span className="font-semibold text-(--color-text-primary)">Diploma in Computer Science</span><span className="text-(--color-text-secondary)">— MSBTE | 2018</span></div>
            <div className="flex flex-col sm:flex-row sm:gap-4"><span className="font-semibold text-(--color-text-primary)">HSC</span><span className="text-(--color-text-secondary)">— Maharashtra State Board | 2016</span></div>
            <div className="flex flex-col sm:flex-row sm:gap-4"><span className="font-semibold text-(--color-text-primary)">SSC</span><span className="text-(--color-text-secondary)">— Maharashtra State Board | 2014</span></div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className={sectionPadding}>
          <h2 className="text-2xl md:text-[32px] font-normal text-(--color-text-primary) mb-6 md:mb-8">Certifications</h2>
          <div className="space-y-3 text-[14px] md:text-[16px] leading-7">
            <div className="flex flex-col sm:flex-row sm:gap-4"><span className="font-semibold text-(--color-text-primary)">Web Development Course</span><span className="text-(--color-text-secondary)">— Udemy | 2022</span></div>
            <div className="flex flex-col sm:flex-row sm:gap-4"><span className="font-semibold text-(--color-text-primary)">Python Programming Course</span><span className="text-(--color-text-secondary)">— Bolt IOT | 2022</span></div>
            <div className="flex flex-col sm:flex-row sm:gap-4"><span className="font-semibold text-(--color-text-primary)">App Script Course</span><span className="text-(--color-text-secondary)">— Udemy | 2023</span></div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className={sectionPadding}>
          <h2 className="text-2xl md:text-[32px] font-normal text-(--color-text-primary) mb-6 md:mb-8">Languages</h2>
          <p className="text-[14px] md:text-[16px] text-(--color-text-secondary)">English &nbsp;•&nbsp; Marathi &nbsp;•&nbsp; Hindi</p>
        </div>
      </section>
    </>
  )
}

export default Resume
