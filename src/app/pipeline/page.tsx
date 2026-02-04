import PipelineSectionOne from "@/components/Pipeline/sections/PipelineSectionOne";
import PipelineSectionTwo from "@/components/Pipeline/sections/PipelineSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pipeline | FAZENA",
    description: "Explore our drug development pipeline and therapeutic programs in progress.",
};

const PipelinePage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Pipeline"
                description="Our diverse pipeline includes internal programs and co-development projects at various stages of discovery and development."
            />
            <PipelineSectionOne />
            <PipelineSectionTwo />
        </>
    );
};

export default PipelinePage;
