'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="rounded px-4 py-2 border text-sm font-bold transition-color bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-black"
        >
            {resolvedTheme === 'dark' ? '☀️ Switch to Light Mode' : '🌘 Switch to Dark Mode'}
        </button>
    )
}

export default ThemeSwitcher;