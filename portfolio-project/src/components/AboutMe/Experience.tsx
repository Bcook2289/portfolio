import { professionalExperienceData } from "../utils/professionalExperienceData";

const Experience = () => {
    return (
        <>
            <section className="">
                <h2 className="text-xl font-semibold mb-4 bg-gray-100 text-center">Professional Experience</h2>
                {
                    professionalExperienceData.map((exp, index) => {
                        return (
                            <div key={index} className="mb-4">
                                <div className="flex mb-4">
                                    <h3 className="text-xl font-semibold mb-1 mr-4">{exp.role}, {exp.company}</h3>
                                    <h4 className="text-lg">{exp.date}</h4>
                                </div>
                                <ul className="list-disc list-inside space-y-1 pl-4">
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