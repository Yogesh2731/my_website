import { skills } from "@/Data/data";
import Image from 'next/image'


const Skills = () => {
    return (
        <section className='bg-(--color-bg) flex flex-col pt-[60px]! pb-20! justify-center items-center gap-10'>
            <div className='inline-flex flex-col justify-center items-center gap-10'>
                <div className='h-32 flex flex-col justify-center items-center gap-2.5'>
                    <h2 className='text-(--color-text-primary) text-4xl! font-bold!'>My Technical Toolkit</h2>
                    <div className="flex-1 text-center justify-start text-(--color-text-secondary) text-lg font-normal">From backend logic to deployment pipelines, here’s what keeps my code running strong</div>
                </div>

                <div className="w-full overflow-hidden py-3">
                    <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">

                        {/* FIRST COPY */}
                        {skills.map((skill) => (
                            <Image
                                key={skill.id}
                                src={skill.icon}
                                alt={skill.skillName}
                                width={96}
                                height={96}
                                className="w-24 h-24 hover:w-28 hover:h-28 transition-all mx-8 inline-block object-contain"
                            />
                        ))}

                        {/* SECOND COPY (duplicate) */}
                        {skills.map((skill) => (
                            <Image
                                key={`${skill.id}-duplicate`}
                                src={skill.icon}
                                alt={skill.skillName}
                                width={96}
                                height={96}
                                className="w-24 h-24 hover:w-28 hover:h-28 transition-all mx-8 inline-block object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills