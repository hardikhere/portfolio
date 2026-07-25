import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Writing } from "@/components/Writing";
import { Causes } from "@/components/Causes";
import { Exploring } from "@/components/Exploring";
import { Watching } from "@/components/Watching";
import { Reading } from "@/components/Reading";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <GitHubActivity />
        <Writing />
        <Causes />
        <Exploring />
        <Watching />
        <Reading />
      </main>
      <Footer />
    </>
  );
}
