import AboutContent from "@/components/About/AboutContent";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FAZENA | Next-Gen Drug Discovery",
  description: "Learn about FAZENA's mission to revolutionize drug discovery through quantum chemistry and AI.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About FAZENA"
        description="Transforming drug discovery through innovative computational approaches and AI-driven solutions."
      />
      <AboutContent />
    </>
  );
};

export default AboutPage;
