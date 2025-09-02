'use client';

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../UI/Button";

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
            <Button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                label={resolvedTheme === 'dark' ? t("lightMode") : t("darkMode")}
                className=""
            />
    )
}

export default ThemeSwitcher;