import ParticlesComponent from "@/components/Particalbackground";
import BlurText from "../BlurText";
import TextType from "../TextType";


const Hero = () => {
  return (
    <section className="h-full">  
        <div className="relative w-full h-screen overflow-hidden self-stretch">
            <ParticlesComponent id="tsparticles" />

            {/* Overlay Content */}
            <div className="flex flex-col justify-center items-center gap-40 z-10">
              <div className="absolute inset-0 inline-flex flex-col justify-center items-center gap-2.5 z-10">
                <BlurText
                  text="I Speak in Endpoints,"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-center justify-start text-(--color-accent) text-6xl! font-bold!"
                />
                <BlurText
                  text="Dream in JSON"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-center justify-start text-(--color-text-secondary) text-6xl! font-bold!" 
                />
                <TextType
                  text={["Creating seamless web experiences with clean design and powerful backend logic"]}
                  typingSpeed={50}
                  className="text-center justify-start text-(--color-text-secondary) text-2xl! font-normal!"
                />
              </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 px-6 pt-3.5 pb-5 rounded-[30.42px] outline -outline-offset-2 outline-(--color-accent) flex justify-center items-center gap-2.5 z-10 cursor-pointer">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="currentColor" style={{color: "var(--color-bg"}} xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                      <path d="M14.6392 11.5568L8.02668 18.1925L1.41418 11.5568M8.02668 16.6844V1" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square"/>
                    </svg>
                  </div>
              </div>
            </div>
        </div>
    </section>
  
  )
}

export default Hero