import Image from "next/image";
import Intro from "./AboutMe/Intro";
import TypingHeader from "./TypingHeader";


const Hero = () => {
  return (
    <div>
      <div className="flex justify-center w-full p-4 m-4">
        <div className="relative p-2">
          <Image
            src="/images/ProfilePic.jpg"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
          ></Image>
        </div>
        <TypingHeader/>
      </div>
      <div className="flex justify-center max-w-prose mx-auto text-lg leading-relaxed">
        <Intro pageFlag="brief" />
      </div>
    </div>
  );
};
export default Hero;
