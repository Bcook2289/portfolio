import Link from "next/link";
import React from "react";

type props = {
    label: string,
    href: string,
    className: string,
}

const Button:React.FC<props> = ({ label, href, className}) => {
    return (
        <>
            <Link href={href} className="font-sora font-bold">
                <button className = {`${className} + px-4 py-2 w-full sm:w-40 rounded bg-gray-200 text-black hover:bg-black hover:text-white dark:text-black dark:bg-white transition-colors border duration-500 cursor-pointer`}>
                    {label}
                </button>
            </Link>
        </>
    );
}
export default Button;