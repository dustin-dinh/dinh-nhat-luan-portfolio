import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Education from "@/components/Education";
import About from "@/components/About";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#37353E] text-[#D3DAD9] selection:bg-[#715A5A] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Projects />
          <Skills />
          <Journey />
          <Education />
          <About />
          <Currently />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
