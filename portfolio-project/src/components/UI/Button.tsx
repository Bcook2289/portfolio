import Link from "next/link";
import React from "react";
import BracketHover from "./BracketHover";

type props = {
    label: string
    href?: string;
    className?: string;
    onClick?: () => void;
    variant?: "action" | "utility";
}

const Button:React.FC<props> = ({ 
    label, 
    href, 
    className = "", 
    onClick,
    variant
}) => {
    const buttonClasses = `
        group relative inline-flex items-center
        px-4 py-2 
        font-sora text-sm font-semibold
        transition-colors duration-300
        ${className}
    `;

    const content = (
        <>
            <BracketHover>
                    {variant === "utility" ?  label : `${label} →` }
            </BracketHover>
        </>
    );

    if(href) {
        return (
            <Link href={href} className={buttonClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button 
            type="button"
            className = {buttonClasses}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export default Button;