import { educationData } from "../utils/educationData";
const Education = () => {
    return (
        <>
            <section className="py-8">
                <h2 className="text-2xl font-semibold mb-4 bg-gray-100 text-center">Educational Background</h2>
                    {educationData.map((edu, index) => {
                        return (
                            <div key={index} className="flex mb-4">
                                <h3>{edu.edu}, {edu.school}</h3>
                                <h4 className="ml-8">{edu.date}, {edu.location}</h4>
                            </div>
                        );
                    })}
            </section>
        </>
    )
}
export default Education;