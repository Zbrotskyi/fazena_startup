import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HomeSectionOne from "@/components/Home/sections/HomeSectionOne";
import HomeSectionThree from "@/components/Home/sections/HomeSectionThree";
import HomeSectionFour from "@/components/Home/sections/HomeSectionFour";
import ProjectsInDevelopment from "@/components/Home/sections/ProjectsInDevelopment";
import Partners from "@/components/Partners";
import RNAHunter from "@/components/RNA_hunter";
import Team from "@/components/Team";
import HomePublications from "@/components/Publications/HomePublications";
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
      <ProjectsInDevelopment />
      <HomeSectionThree />
      <RNAHunter />
      <HomeSectionFour />
      <Features />
      <Team />
      <HomePublications />
    </>
  );
}



