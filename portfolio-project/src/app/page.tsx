import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow flex items-center justify-center">
        <Hero />
      </main>
    </div>
  );
}
