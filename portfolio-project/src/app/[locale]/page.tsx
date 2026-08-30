import NavBar from "../../components/UI/NavBar";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className="page-container">
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
