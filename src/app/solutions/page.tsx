import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions | FAZENA",
    description: "Explore our AI-powered solutions for drug discovery and molecular design.",
};

const SolutionsPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Solutions"
                description="We provide cutting-edge AI solutions to accelerate drug discovery and optimize therapeutic candidates."
            />
            <AboutSectionOne />
            <AboutSectionTwo />
        </>
    );
};

export default SolutionsPage;
