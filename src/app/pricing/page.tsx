import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing & Testimonials | FAZENA",
    description: "Explore our pricing plans and hear from our valued partners",
};

export default function PricingPage() {
    return (
        <>
            <Breadcrumb
                pageName="Pricing & Testimonials"
                description="Explore our partnership options and hear from our valued collaborators."
            />
            <Pricing />
            <Testimonials />
        </>
    );
}
