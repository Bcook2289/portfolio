import { professionalExperienceData } from "../utils/professionalExperienceData";

const Experience = () => {
    return (
        <>
            <section>
                {
                    professionalExperienceData.map((exp, index) => {
                        return (
                            <div key={index}>
                                <h2>{exp.role}, {exp.company}</h2>
                                <h3>{exp.date}</h3>
                                <ul>
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