'use client';

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);
    const t = useTranslations("themeSwitch");

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="button-container bg-black dark:bg-white text-white dark:text-black"
        >
            {resolvedTheme === 'dark' ? t("lightMode") : t("darkMode")}
        </button>
    )
}

export default ThemeSwitcher;