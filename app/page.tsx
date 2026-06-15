import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </>
  );
}
