import Hero from '@/components/Hero/Hero'
import Stats from '@/components/Stats'
import Project from '@/components/Projects/Project'
import Skills from '@/components/Skills/Skills'
import About from '@/components/About/About'
import GithubStats from '@/components/GithubStats'
import Testimonials from '@/components/Testimonials/Testimonials'
import Timeline from '@/components/Timeline/Timeline'
import Contact from '@/components/Contact/Contact'

const page = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Project />
      <Skills />
      <Timeline />
      <About />
      <GithubStats />
      <Testimonials />
      <Contact />
    </>
  )
}

export default page
