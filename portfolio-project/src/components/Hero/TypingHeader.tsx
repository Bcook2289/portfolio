"use client";

import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

const TypingHeader = () => {
  const t = useTranslations("hero");

  return (
    <TypeAnimation 
      className="typing-role"
      sequence={[t("role"), 1000]}
      wrapper="span"
      speed={40}
      cursor={true}
      repeat={0}
    />
  );
};

export default TypingHeader;
