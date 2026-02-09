import RNAHunterDetailsPage from "@/components/RNAHunterDetails/RNAHunterDetailsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "RNA Hunter | FAZENA",
    description: "A fully automated platform for targeting long non-coding RNAs. Complete computational drug development pipeline from sequence analysis to molecular dynamics refinement.",
};

const RNAHunterPage = () => {
    return (
        <>
            <RNAHunterDetailsPage />
        </>
    );
};

export default RNAHunterPage;
