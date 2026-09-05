import NavBar from "../../components/UI/NavBar";
import Hero from "../../components/Hero/Hero";
import WhatIBuild from "../../components/WhatIBuild/WhatIBuild";
import ContactForm from "../../components/UI/ContactForm";
import Footer from "../../components/UI/Footer";

export default function Home() {
  return (
    <div className="page-container">
      <NavBar />
      <main>
        <Hero />
        <WhatIBuild/>
        <ContactForm/>
      </main>
      <Footer />
    </div>
  );
}
