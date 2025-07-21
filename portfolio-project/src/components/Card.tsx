import Link from "next/link";
import Image from "next/image";
import React from "react";

type cardProps = {
    title: string,
    desc: string,
    link: string,
    image:string,
    tech: Array<string>,
    techIcons: Record<string,string>,
}

const Card:React.FC<cardProps> = ({title, desc, link, image, tech, techIcons}) => {
    return (
        <>
            <div className="flex flex-col justify-center">
                <Link href={link}>{title}</Link>
                <Image alt={title} src={image} width={200} height={200}/>
            </div>
            <p>{desc}</p>
            <div>
                <h3>Tech Stack:</h3>
                <ul className="flex gap-2 flex-wrap items-center">
                    {tech.map((techItem : string, techIndex) => (
                        <li key={techIndex}>
                            <Image alt={techItem} src={techIcons[techItem]} title={techItem} width={24} height={24}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Card;