import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { TechMarquee } from "@/components/ui/TechMarquee";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <TechMarquee className="border-t-0" />
      <Services />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
