import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center w-full p-4 m-4">
        <Image 
          src="/images/ProfilePic.jpg" 
          alt="profile" 
          width={200} 
          height={200}
          className="rounded-full object-cover border-4 m-1">
        </Image>
        <h1>Hello.</h1>
        <h2>My name is Brandon</h2>
        <h2>I&apos;m a Software Developer</h2>
      </div>
    </>
  );
};
export default Hero;
