import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Writing } from "@/components/Writing";
import { Causes } from "@/components/Causes";
import { Exploring } from "@/components/Exploring";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Testimonials />
        <GitHubActivity />
        <Writing />
        <Causes />
        <Exploring />
      </main>
      <Footer />
    </>
  );
}
