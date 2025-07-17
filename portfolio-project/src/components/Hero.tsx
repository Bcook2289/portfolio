import Image from "next/image";
import Intro from "./AboutMe/Intro";
import TypingHeader from "./TypingHeader";


const Hero = () => {
  return (
    <>
      <div className="flex justify-center w-full p-4 m-4">
        <div className="relative p-2">
          <Image
            src="/images/BrandonCook.jpg"
            alt="profile"
            width={200}
            height={600}
            className="rounded-full"
          ></Image>
        </div>
        {/* <div className="p-4">
          <h1>Hello.</h1>
          <h2>My name is Brandon</h2>
          <h2>I&apos;m a Software Developer</h2>
        </div> */}
        <TypingHeader/>
      </div>
      <Intro pageFlag="brief" />
    </>
  );
};
export default Hero;
