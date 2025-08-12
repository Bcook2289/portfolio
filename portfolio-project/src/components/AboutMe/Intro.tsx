"use client";
import {motion} from "framer-motion"; 
import { useTranslations } from "next-intl";

type summaryProp = {
  pageFlag?: "brief" | "detailed";
};

const Intro = ({ pageFlag = "detailed" }: summaryProp) => {
  const t = useTranslations("hero");

  const detailed = (
    <>
      <motion.p 
        className="sm:-translate-x-36"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
       I&apos;m a detail-oriented Solutions Consultant and Full-Stack Developer 
       with a background in client operations, collaborative technical delivery, 
       and analytical problem-solving. I&apos;ve spent over five years supporting 
       SaaS platforms in the energy industry in both Japan and the US, helping to 
       bridge the gap between technical teams and customer needs. I&apos;m 
       experienced with tools like React, Next.js, TypeScript, Tailwind CSS, as  
       well as Python/Django, and I&apos;ve led projects across both Agile and 
       Waterfall environments. My strengths include stakeholder communication, 
       project coordination, backend service integration, and frontend UI/UX design.
      </motion.p>
      <motion.p 
        className="pt-8 sm:pt-24 sm:translate-x-36"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      >
        I&apos;m also passionate about building clean, intuitive web experiences, and 
        this site is one of them! I designed and developed it using TypeScript, 
        Next.js, and Tailwind CSS. I love solving real-world problems where 
        business and engineering meet, and I&apos;m always looking to create tools 
        that are scalable, user-friendly, and thoughtfully designed. With a 
        foundation in technical consulting and hands-on dev experience, I bring 
        a well-rounded, practical approach to every project I work on.
      </motion.p>
    </>
  );

  const brief = (
    <>
      <p className="font-sora">
        {t("description")}
        {/* I&apos;m a Solutions Consultant and Full-Stack Developer with 5+ years of
        experience supporting SaaS platforms in the US and Japan. I specialize
        in bridging business needs and technical solutions through strong
        communication, project management, and hands-on development using React,
        Next.js, TypeScript, Tailwind CSS, and Python/Django. This site was
        built by me, and reflects my passion for building scalable,
        user-friendly web applications that combine client support experience
        with modern full-stack engineering. */}
      </p>
    </>
  );
  return pageFlag === "brief" ? brief : detailed;
};
export default Intro;
