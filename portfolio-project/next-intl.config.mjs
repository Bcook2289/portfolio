export const locales = ["en", "jp"];
export const defaultLocale = "en";

const getRequestConfig = async (args) => {
    const pathname = await args?.req ? new URL(args.req.url).pathname : ''
    const locale = pathname.split('/')[1];

    if(locales.includes(locale)) {
        return { locale, defaultLocale };
    }

    return {locale:defaultLocale, defaultLocale}
}

export default getRequestConfig;