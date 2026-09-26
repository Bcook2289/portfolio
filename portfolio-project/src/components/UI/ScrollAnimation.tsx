import { useTranslations } from "next-intl";

const ScrollAnimation = () => {
    const t = useTranslations("about");
    return (
        <>
            <div className="hidden md:flex flex-col items-center absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce dark:text-gray-200">
                <h2>{t("scrollPrompt")}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </>
    )
}

export default ScrollAnimation;