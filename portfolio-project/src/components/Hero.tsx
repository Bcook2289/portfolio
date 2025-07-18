import Image from "next/image";
import Intro from "./AboutMe/Intro";
import TypingHeader from "./TypingHeader";
import Button from "./Button";


const Hero = () => {
  return (
    <div className="flex flex-col">
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
      <div className="flex justify-center mt-12 gap-16">
        <Button 
          label="Projects" 
          href="/projects" 
          className="px-4 py-2 w-35 rounded bg-gray-200 text-black hover:bg-black hover:text-white dark:text-black dark:bg-white transition-colors duration-500 cursor-pointer"
        />
        <Button 
          label="Contact Me" 
          href="/" 
          className="px-4 py-2 w-35 rounded bg-gray-200 text-black hover:bg-black hover:text-white dark:text-black dark:bg-white transition-colors duration-500 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Hero;
