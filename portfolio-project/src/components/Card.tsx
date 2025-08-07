"use client";

import { motion } from "framer-motion";
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
    index: number,
}

const Card:React.FC<cardProps> = ({title, desc, link, image, tech, techIcons, index}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl sm:h-10/12 shadow-lg overflow-hidden font-sora bg-gray-300 text-black p-4 m-4 w-80"
            >
            <div className="flex flex-col items-center justify-between gap-4 p-4 bg-white sm:h-full rounded-2xl">
                <Link href={link} className="text-xl font-semibold">{title}</Link>
                <div>
                    <Image alt={title} src={image} width={400} height={200}/>
                    <p className="py-4">{desc}</p>
                </div>
                <div className="w-full mx-8">
                    <div className="w-full h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 my-6" />
                    <h3 className="text-sm font-medium mb-2">Tech Stack:</h3>
                    <div className="h-16 py-2">
                        <ul className="flex gap-2 flex-wrap items-center">
                            {tech.map((techItem : string, techIndex) => (
                                <li key={techIndex}>
                                    <Image alt={techItem} src={techIcons[techItem]} title={techItem} width={24} height={24}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Card;