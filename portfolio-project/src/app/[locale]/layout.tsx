import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import en from "../messages/en.json";
import jp from "../messages/jp.json";

// type LocaleType = "en" | "jp"

// const messagesMap = {en, jp};

export default async function LocalLayout({
  children, 
  params: { locale }
}: {
  children:ReactNode;
  // params: Promise<{locale: string}>;
  params: {locale: string};
}) {
  // const { locale } = await params;
  // const messages = messagesMap[locale as LocaleType] ?? messagesMap.en;
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }


  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}