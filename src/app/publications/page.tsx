import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Publications | FAZENA",
    description: "Read our scientific publications and technical whitepapers.",
};

const PublicationsPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Publications"
                description="Explore our contributions to scientific research and breakthroughs in AI-driven biotechnology."
            />
            <AboutSectionOne />
            <AboutSectionTwo />
        </>
    );
};

export default PublicationsPage;
