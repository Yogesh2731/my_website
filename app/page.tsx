import Hero from '@/components/Hero/Hero'
import Stats from '@/components/Stats'
import Project from '@/components/Projects/Project'
import Skills from '@/components/Skills/Skills'
import About from '@/components/About/About'
import GithubStats from '@/components/GithubStats'

const page = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Project />
      <Skills />
      <About />
      <GithubStats />
    </>
  )
}

export default page
