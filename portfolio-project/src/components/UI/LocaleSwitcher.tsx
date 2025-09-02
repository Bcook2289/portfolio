"use client"

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Button from "./Button";

const LocaleSwitcher = () => {

    const locale = useLocale();
    const pathname = usePathname();

    const swtichLocale = locale === "en" ? "jp" : "en";
    const targetPath = `/${swtichLocale + pathname.replace(/^\/(en|jp)/, "")}`;

    return (
        <Button 
            label={locale === "en" ? "日本語" : "English"} 
            className="" 
            href={targetPath}
            />
    )
}

export default LocaleSwitcher;