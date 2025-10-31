import ParticlesComponent from "@/Components/Particalbackground"

const Hero = () => {
  return (
    <section className="h-full">  
        <div className="relative w-full h-screen overflow-hidden">
            <ParticlesComponent id="tsparticles" />

            {/* Overlay Content */}
            <div className="absolute inset-0 inline-flex flex-col justify-center items-center gap-2.5 z-10">
                <h1 className="text-center justify-start text-(--color-accent) text-6xl! font-bold!">I Speak in Endpoints,</h1>
                <p className="text-center justify-start text-(--color-text-secondary) text-6xl! font-bold!">Dream in JSON</p>
                <p className="text-center justify-start text-(--color-text-secondary) text-2xl! font-normal!">Creating seamless web experiences with clean design and powerful backend logic</p>
            </div>
        </div>
    </section>
  
  )
}

export default Hero