"use client";
import {motion} from "framer-motion"; 
import { useTranslations } from "next-intl";
import Image from "next/image";

type summaryProp = {
  pageFlag?: "brief" | "detailed";
};

const Intro = ({ pageFlag = "detailed" }: summaryProp) => {
  const t = useTranslations("intro");

  const descriptions = [
    t("longDescriptionOne"),
    t("longDescriptionTwo"),
    t("longDescriptionThree"),
    t("longDescriptionFour")
  ];

  const detailed = (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div>
        <Image src="/images/ProfilePic.jpg" alt="Profile Picture" width={300} height={300} className="float-right ml-4 sm:ml-6 lg:ml-8 mb-4 w-28 sm:w-36 md:w-44 lg:w-56 h-auto"/>
      </div>
      <div>
        {descriptions.map((desc, index) => (
          <p key={index} className="mb-4 text-left text-xs sm:text-base">
            {desc}
          </p>
        ))}
      </div>
    </motion.div>
  );

  const brief = (
    <>
      <p className="font-sora">
        {t("shortDescription")}
      </p>
    </>
  );
  return pageFlag === "brief" ? brief : detailed;
};
export default Intro;
