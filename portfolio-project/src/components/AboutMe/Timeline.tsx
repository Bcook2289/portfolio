
import { TimelineProps } from "../../types/timeline";

const Timeline = ({ items }: TimelineProps) => {
    return (
        <section className="mx-auto max-w-6xl">
            <div className="relative">
                <div className="absolute left-28 top-0 h-full w-px bg-black dark:bg-white"/>
                <div className="flex flex-col">
                    {items.map((item, index) => (
                        <article
                            key={`${item.company}-${item.year}-${index}`}
                            className="relative grid grid-cols-[7rem_1fr] gap-12 pb-24"
                        >
                            <div className="font-mono text-sm">
                                {item.year}
                            </div>
                            
                            <div>
                                <p className="font-mono text-sm uppercase tracking-wide">
                                    {item.company}
                                </p>

                                <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
                                    {item.role}
                                </h2>

                                <div className="mt-6 flex max-w-3xl flex-wrap gap-x-8 gap-y-3 font-mono text-xs">
                                    {item.details.map((detail) => (
                                        <span key={detail}>
                                            {detail}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline;