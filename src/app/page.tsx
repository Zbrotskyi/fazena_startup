import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pipeline from "@/components/Pipeline";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAZENA - AI-Powered Drug Discovery",
  description: "Revolutionary AI platform for therapeutic design and drug discovery",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Pipeline />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Blog />
      <Contact />
    </>
  );
}
