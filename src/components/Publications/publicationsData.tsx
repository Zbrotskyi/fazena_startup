import { Publication } from "@/types/publication";

const publicationsData: Publication[] = [
    {
        id: 1,
        title: "Discovery of a Druggable Ligand-Binding Site in Phospholipid-Transporting ATPase ABCA7",
        image: "/images/publications/ABCA7.png",
        category: "Research",
        publishDate: "December 10, 2025",
        url: "#",
        tags: ["Crystallography", "Generative AI", "Structure Prediction"]
    },
    {
        id: 2,
        title: "Rational in silico design of a peptide binder that inhibits CERT1",
        image: "/images/publications/pub-02.jpg",
        category: "Research",
        publishDate: "November 25, 2025",
        url: "#",
        tags: ["Drug Discovery", "Machine Learning", "Pharma"]
    },
    {
        id: 3,
        title: "Rational in silico redesign of the CERT1 protein",
        image: "/images/publications/CERT1_1.png",
        category: "Research",
        publishDate: "October 15, 2025",
        url: "#",
        tags: ["Quantum Chemistry", "Therapeutics", "Molecular Design"]
    }
];

export default publicationsData;
