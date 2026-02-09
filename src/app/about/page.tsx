import AboutContent from "@/components/About/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FAZENA | Next-Gen Drug Discovery",
  description: "Learn about FAZENA's mission to revolutionize drug discovery through quantum chemistry and AI.",
};

const AboutPage = () => {
  return (
    <>
      <AboutContent />
    </>
  );
};

export default AboutPage;
