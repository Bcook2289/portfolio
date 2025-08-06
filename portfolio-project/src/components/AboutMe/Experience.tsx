import { professionalExperienceData } from "../utils/professionalExperienceData";

const Experience = () => {
    return (
        <>
            <section>
                <h2 className="text-xl font-semibold mb-4 bg-gray-100 text-center">Professional Experience</h2>
                {
                    professionalExperienceData.map((exp, index) => {
                        return (
                            <div key={index} className="mb-2">
                                <div className="flex">
                                    <h3 className="sm:text-lg font-semibold mr-2 whitespace-nowrap">{exp.role}, {exp.company}</h3>
                                    <h4 className="sm:text-lg whitespace-nowrap">{exp.date}</h4>
                                </div>
                                <ul className="text-xs sm:text-md list-disc space-y-1 pl-4">
                                    {
                                        exp.roleKeyPoints.map((keyPoint, keyPointIndex) => {
                                            return (
                                                <li key={keyPointIndex}>{ keyPoint }</li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </section>
        </>
    )
} 
export default Experience;