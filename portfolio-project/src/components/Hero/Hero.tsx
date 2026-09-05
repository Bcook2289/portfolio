"use client";

import Image from "next/image";
import Intro from "../AboutMe/Intro";
import TypingHeader from "../Hero/TypingHeader";
import Button from "../UI/Button";
import { useTranslations } from "next-intl";
import ScrollAnimation from "../UI/ScrollAnimation";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="flex min-h-screen flex-col px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        {/* SECTION LABEL */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-jetbrains text-xs font-medium tracking-wider sm:text-sm">
            01 / WHO I AM
          </span>

          <span className="h-px flex-1 bg-black dark:bg-white" />
        </div>
        {/* HERO CONTENT */}
        <div className="grid items-center gap-10 md:grid-cols-[minmax(180px,280px)_1fr] lg:gap-20">
          {/* PROFILE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative aspect-square w-40 overflow-hidden rounded-full sm:w-48 lg:w-56">
              <Image
                src="/images/ProfilePic.jpg"
                alt="Brandon Cook"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                priority
              />
            </div>
          </div>
          {/* IDENTITY */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="font-sora text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Brandon Cook
            </h1>

            <div className="mt-3 text-sm font-medium sm:text-base lg:text-lg">
              <TypingHeader />
            </div>
            
            <div className="mt-6 max-w-2xl font-sora text-sm leading-relaxed sm:text-base">
              <Intro pageFlag="brief" />
            </div>
            {/* ACTIONS */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <Button 
                label={t("projectsButton")} 
                href="/projects"  
              />
              <Button 
                label={t("contactMeButton")} 
                href="#contact"  
              />
            </div>
          </div>
        </div>
      </div>
      {/* SCROLL INDICATOR */}
      <div className="mt-auto flex justify-center pt-12">
        <ScrollAnimation/>
      </div>
    </section>
  );
};
export default Hero;
