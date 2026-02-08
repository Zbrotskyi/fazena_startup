import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HomeSectionOne from "@/components/Home/sections/HomeSectionOne";
import HomeSectionTwo from "@/components/Home/sections/HomeSectionTwo";
import ProjectsInDevelopment from "@/components/Home/sections/ProjectsInDevelopment";
import Partners from "@/components/Partners";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computed. Synthesized. Validated.",
  description: "We're building silicon-to-cell integration that collapses traditional discovery timelines",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Partners />
      <HomeSectionOne />
      <Features />
      <Video />
      <ProjectsInDevelopment />
      <HomeSectionTwo />
      <Blog />
      <Contact />
    </>
  );
}
