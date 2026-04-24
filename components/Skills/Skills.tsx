import { skills } from "@/Data/data";
import Image from 'next/image'

const Skills = () => {
    return (
        <section className='bg-(--color-bg) flex flex-col pt-[60px]! pb-20! justify-center items-center gap-10 w-full overflow-hidden'>
            <div className='flex flex-col justify-center items-center gap-10 w-full px-4 sm:px-8'>
                <div className='flex flex-col justify-center items-center gap-2.5 text-center'>
                    <h2 className='text-(--color-text-primary) text-2xl! sm:text-3xl! lg:text-4xl! font-bold!'>My Technical Toolkit</h2>
                    <p className="text-center text-(--color-text-secondary) text-sm sm:text-base lg:text-lg font-normal max-w-xl">From backend logic to deployment pipelines, here&apos;s what keeps my code running strong</p>
                </div>

                <div className="w-full overflow-hidden py-3">
                    <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
                        {skills.map((skill) => (
                            <Image
                                key={skill.id}
                                src={skill.icon}
                                alt={skill.skillName}
                                width={96}
                                height={96}
                                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all mx-4 sm:mx-6 lg:mx-8 inline-block object-contain"
                            />
                        ))}
                        {skills.map((skill) => (
                            <Image
                                key={`${skill.id}-duplicate`}
                                src={skill.icon}
                                alt={skill.skillName}
                                width={96}
                                height={96}
                                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all mx-4 sm:mx-6 lg:mx-8 inline-block object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
