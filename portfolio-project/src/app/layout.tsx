import "./globals.css";
import { JetBrains_Mono, Sora } from "next/font/google"; 
import ThemeProviderWrapper from "../components/Theme/ThemeProvider";
import React from "react";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

export const metadata = {
  title: "Brandon Cook",
  description: "My Portfolio built in Next.js",
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${sora.variable} ${jetBrains.variable} overflow-x-hidden antialiased`}
          >
            <ThemeProviderWrapper>
              {children}
            </ThemeProviderWrapper>
        </body>
      </html>
    </>
  );
}
