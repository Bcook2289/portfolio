import Link from "next/link";
import React from "react";

type props = {
    label: string,
    href?: string,
    className: string,
    onClick ?: () => void,
}

const Button:React.FC<props> = ({ label, href, className, onClick}) => {
    if(href) {

        return (
            <Link href={href} className="font-sora font-bold">
                <button className = {`${className} button-container sm:w-40 w-full bg-gray-200 text-black hover:bg-black hover:text-white dark:text-black dark:bg-white duration-500`}>
                    {label}
                </button>
            </Link>
        );
    }
    return (
        <button 
            className = {`${className} button-container sm:w-40 w-full bg-gray-200 text-black hover:bg-black hover:text-white dark:text-black dark:bg-white duration-500`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
export default Button;