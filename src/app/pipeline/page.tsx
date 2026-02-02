import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pipeline | FAZENA",
    description: "View our project pipeline and development progress.",
};

const PipelinePage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Pipeline"
                description="Our diverse pipeline includes internal programs and co-development projects at various stages of discovery."
            />
            <AboutSectionOne />
            <AboutSectionTwo />
        </>
    );
};

export default PipelinePage;
