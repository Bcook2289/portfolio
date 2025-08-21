"use client";
import {motion} from "framer-motion"; 
import { useTranslations } from "next-intl";

type summaryProp = {
  pageFlag?: "brief" | "detailed";
};

const Intro = ({ pageFlag = "detailed" }: summaryProp) => {
  const t = useTranslations("intro");

  const detailed = (
    <>
      <motion.p 
        className="lg:-translate-x-36"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
        {t("longDescriptionOne")}          
      </motion.p>
      <motion.p 
        className="pt-8 sm:pt-24 lg:translate-x-36"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      >
        {t("longDescriptionTwo")}
      </motion.p>
    </>
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
