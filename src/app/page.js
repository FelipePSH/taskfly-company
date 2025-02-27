import HeroSection from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main className="items-center sm:items-start">
        <HeroSection />
        <About />
        <Services />
        <Projects
          title="Projects"
          description="We've worked on a variety of projects, from websites to mobile apps."
        />
        <Contact />
        <TechStack />
        <Footer />
      </main>
  );
}
