import AboutSectionOne from "@/components/About/sections/AboutSectionOne";
import AboutSectionTwo from "@/components/About/sections/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FAZENA | Next-Gen Drug Discovery",
  description: "Learn about FAZENA's mission to revolutionize drug discovery through quantum chemistry and AI.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About FAZENA"
        description="Transforming drug discovery through innovative computational approaches and AI-driven solutions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
