"use client";

import Image from "next/image";
import Intro from "../AboutMe/Intro";
import TypingHeader from "../Hero/TypingHeader";
import Button from "../UI/Button";
import { useTranslations } from "next-intl";


const Hero = () => {
  const t = useTranslations("hero");
  
  return (
    <div className="div-container">
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-3xl gap-4">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 aspect-square">
          <Image
            src="/images/ProfilePic.jpg"
            alt="profile"
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 640px) 128px 192px"
          />
        </div>
        <TypingHeader/>
      </div>
     <div className="flex flex-col sm:flex-row sm:gap-8">
        <Button 
          label={t("projectsButton")} 
          href="/projects" 
          className=""
        />
        <Button 
          label={t("contactMeButton")} 
          href="/contact" 
          className=""
        />
      </div>
      <div className="max-w-prose tracking-wide text-center mx-4 my-4 sm:mx-auto md:mx-8 text-xs sm:text-base md:text-lg leading-relaxed">
        <Intro pageFlag="brief" />
      </div>
    </div>
  );
};
export default Hero;
