"use client";

import Image from "next/image";
import Intro from "./AboutMe/Intro";
import TypingHeader from "./TypingHeader";
import Button from "./Button";
import { useTranslations } from "next-intl";


const Hero = () => {
  const t = useTranslations("hero");
  
  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-8 w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:w-3xl gap-4">
        <div className="relative">
          <Image
            src="/images/ProfilePic.jpg"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <TypingHeader/>
      </div>
     <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <Button 
          label={t("projectsButton")} 
          href="/projects" 
          className=""
        />
        <Button 
          label={t("contactMeButton")} 
          href="/" 
          className=""
        />
      </div>
      <div className="max-w-prose text-center mx-4 sm:mx-auto text-md sm:text-lg leading-relaxed">
        <Intro pageFlag="brief" />
      </div>
    </div>
  );
};
export default Hero;
