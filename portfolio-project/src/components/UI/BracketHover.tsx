type BracketHoverProps = {
    children: React.ReactNode;
    className?: string;
}
const BracketHover = ({children, className = ""}: BracketHoverProps) => {
    return (
        <span className={`group/bracket inline-flex items-center ${className}`}>
            <span
                aria-hidden="true"
                className="
                    mr-3
                    inline-block
                    -translate-x-4
                    opacity-0
                    transition-all duration-300 ease-out
                    group-hover/bracket:translate-x-0
                    group-hover/bracket:opacity-100
                "
            >
                [
            </span>
                    {children}
            <span
                aria-hidden="true"
                className="
                    ml-3
                    inline-block
                    translate-x-4
                    opacity-0
                    transition-all duration-300 ease-out
                    group-hover/bracket:translate-x-0
                    group-hover/bracket:opacity-100
                "
            >
                ]
            </span>
        </span>
    );
};

export default BracketHover;