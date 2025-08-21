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
                <button className = {`${className} button-container sm:w-40 w-full bg-gray-200 text-black hover:bg-black hover:text-white dark:text-black dark:bg-white duration-500`}>
                    {label}
                </button>
            </Link>
        </>
    );
}
export default Button;