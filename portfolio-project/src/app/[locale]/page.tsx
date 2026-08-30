import NavBar from "../../components/UI/NavBar";
import Hero from "../../components/Hero/Hero";
import WhatIBuild from "../../components/WhatIBuild/WhatIBuild";

export default function Home() {
  return (
    <div className="page-container">
      <NavBar />
      <main>
        <Hero />
        <WhatIBuild/>
      </main>
    </div>
  );
}
