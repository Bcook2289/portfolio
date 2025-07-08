import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center w-full p-4 m-4">
        <div className="relative w-40 h-40 p-2">
          <Image 
            src="/images/ProfilePic.jpg" 
            alt="profile" 
            width={200}
            height={200}
            className="rounded-full">
          </Image>
        </div>
        <div className="p-4">
          <h1>Hello.</h1>
          <h2>My name is Brandon</h2>
          <h2>I&apos;m a Software Developer</h2>
          <button>Projects</button>
        </div>
      </div>
    </>
  );
};
export default Hero;
