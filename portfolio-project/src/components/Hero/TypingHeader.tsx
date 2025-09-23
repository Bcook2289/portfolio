"use client";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const TypingHeader = () => {
  const t = useTranslations("hero");

  const translationsObject = [t("title"), t("subtitle"), t("finaltitle")];

  const [showH1, setShowH1] = useState(false);
  const [showH2, setShowH2] = useState(false);
  const [showFinalH2, setShowFinalH2] = useState(false);

  useEffect(() => {
    const timer = [
      setTimeout(() => setShowH1(true), 0),
      setTimeout(() => setShowH2(true), 1000),
      setTimeout(() => setShowFinalH2(true), 2000),
    ];
    return () => timer.forEach(clearTimeout);
  });

  return (
    <>
      <div className="space-y-4 sm:py-4 sm:px-4 h-36 sm:h-48 my-auto">
        <h1 className="heading-primary">
          {showH1 && (
            <TypeAnimation
              className="TypeAnimation"
              sequence={[translationsObject[0], 1000]}
              wrapper="span"
              speed={40}
            />
          )}
        </h1>
        <h2 className="heading-secondary">
          {showH2 && (
            <TypeAnimation
              className="TypeAnimation"
              sequence={[1000, translationsObject[1]]}
              wrapper="span"
              speed={40}
            />
          )}
        </h2>
        <h2 className="heading-secondary">
          {showFinalH2 && (
            <TypeAnimation
              className=""
              sequence={[1000, translationsObject[2]]}
              wrapper="span"
              speed={40}
            />
          )}
        </h2>
      </div>
    </>
  );
};

export default TypingHeader;
