import Link from "next/link";
import React from "react";

type props = {
    label: string;
    href?: string;
    className?: string;
    onClick?: () => void;
    variant?: "action" | "utility";
}

const Button:React.FC<props> = ({ 
    label, 
    href, 
    className = "", 
    onClick
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
            <span
                aria-hidden="true"
                className="
                    mr-2
                    -translate-x-2
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                " 
            >
                [
            </span>

            <span>
                {label} →
            </span>
            
            <span
                aria-hidden="true"
                className="
                    ml-2
                    translate-x-2
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                "
            >
                ]
            </span>
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