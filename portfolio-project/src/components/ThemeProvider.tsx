'use client';

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

const ThemeProviderWrapper = ({children}: {children: ReactNode}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
} 

export default ThemeProviderWrapper;