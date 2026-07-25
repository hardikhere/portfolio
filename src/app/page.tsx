import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Writing } from "@/components/Writing";
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
        <GitHubActivity />
        <Writing />
        <Exploring />
      </main>
      <Footer />
    </>
  );
}
