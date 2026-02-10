import JoinUs from "@/components/JoinUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAZENA | Join Us",
    description: "Join the FAZENA team and help reshape drug discovery through computational biology and chemistry.",
};

const JoinUsPage = () => {
    return (
        <>
            <JoinUs />
        </>
    );
};

export default JoinUsPage;
