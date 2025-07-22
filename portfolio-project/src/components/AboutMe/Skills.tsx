import { skillsData } from "../utils/skillsData";



const Skills = () => {
    return (
        <>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {
                        Object.entries(skillsData).map(([category, skills]) => {
                            return (
                                <div key={category}>
                                    <h3 className="text-lg font-semibold mb-2">{ category }</h3>
                                    <ul className="space-y-1">
                                        {skills.map(skill => (
                                            <li key={skill}>
                                                <div className="flex">{skill}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
} 
export default Skills;