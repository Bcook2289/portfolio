"use client"

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Button from "./Button";

const LocaleSwitcher = () => {

    const locale = useLocale();
    const pathname = usePathname();

    const switchLocale = locale === "en" ? "jp" : "en";
    const targetPath = `/${switchLocale + pathname.replace(/^\/(en|jp)/, "")}`;

    return (
        <Button 
            label={locale === "en" ? "日本語" : "English"} 
            className="" 
            href={targetPath}
            variant="utility"
            />
    )
}

export default LocaleSwitcher;