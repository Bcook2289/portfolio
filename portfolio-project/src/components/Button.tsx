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
                <button className = {className}>
                    {label}
                </button>
            </Link>
        </>
    );
}
export default Button;