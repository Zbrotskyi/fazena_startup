import { PipelineTrack } from "@/types/pipeline";

const MoleculeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
        <path fill="#3a3631" d="M11 8a3 3 0 1 0-2.707-1.705l-2.34 1.17a2.5 2.5 0 1 0 .76 3.2l2.296 1.148a2 2 0 1 0 .343-.946l-2.359-1.18a2.488 2.488 0 0 0-.338-1.456l2.223-1.11A2.99 2.99 0 0 0 11 8Zm0-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm7.5 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
    </svg>
);

const DnaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#3a3631" d="M9.2 13.73a1 1 0 0 0-1.41-.05A11.18 11.18 0 0 0 4 22a1 1 0 0 0 2 0a9.15 9.15 0 0 1 3.15-6.86a1 1 0 0 0 .05-1.41Zm10.17 4.64a10.86 10.86 0 0 0-1.6-3A14.31 14.31 0 0 0 14.06 12C16.3 10.57 20 7.4 20 2a1 1 0 0 0-2 0c0 5.4-4.59 8.17-6 8.89A13.42 13.42 0 0 1 9.31 9H12a1 1 0 0 0 0-2H7.55a9.39 9.39 0 0 1-1-2H15a1 1 0 0 0 0-2H6.06A8.14 8.14 0 0 1 6 2a1 1 0 0 0-2 0c0 7.57 7.3 10.79 7.61 10.92A12.93 12.93 0 0 1 14.7 15H12a1 1 0 0 0 0 2h4.43a9.07 9.07 0 0 1 1 2H9a1 1 0 0 0 0 2h8.94a8.26 8.26 0 0 1 .06 1a1 1 0 0 0 2 0a10.5 10.5 0 0 0-.22-2.19a9.23 9.23 0 0 0-.41-1.44Z" />
    </svg>
);

const PartnershipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
        <path fill="#3a3631" d="M8 9a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2zm16 6a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2zm2 27h-4a2 2 0 0 1-2-2v-7h2v7h4v-9h2v-6a1 1 0 0 0-1-1h-6.42L16 20l-4.58-8H5a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h7.58L16 16l3.42-6H27a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2z" />
    </svg>
);

const projectsData: PipelineTrack[] = [
    {
        id: 1,
        name: "Drug Candidates",
        description: "Novel therapeutics addressing high unmet medical needs in neurodegeneration, oncology, and metabolic disorders",
        icon: <MoleculeIcon />,
        stages: ["Target ID", "Hit Discovery", "Lead Opt", "Preclinical", "Phase I"],
        projects: [
            { name: "Alzheimer's disease ABCA7-targeting", currentStage: 2 },
        ],
    },
    {
        id: 2,
        name: "Platform Development",
        description: "Connecting computational design tools with experimental validation systems",
        icon: <DnaIcon />,
        stages: ["Concept", "Prototype", "Validation", "Optimization", "Launch"],
        projects: [
            { name: "RNA hunter", currentStage: 1 },
            { name: "CycloSpace", currentStage: 0 },
        ],
    },
    {
        id: 3,
        name: "Building Partnerships",
        description: "Strategic collaborations with pharmaceutical companies and research institutions",
        icon: <PartnershipIcon />,
        stages: ["Outreach", "Evaluation", "Negotiation", "Contract", "Active"],
        projects: [
            { name: "YURiA-PHARM", currentStage: 3 },
        ],
    },
];

export default projectsData;

