import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div
        className="h-full w-full bg-current"
        style={{
          maskImage: 'url(/images/services/HTVS.svg)',
          WebkitMaskImage: 'url(/images/services/HTVS.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    ),
    title: "HTVS",
    paragraph:
      "Virtual screening of small molecules against your target (protein, RNA, DNA).",
  },
  {
    id: 2,
    icon: (
      <div
        className="h-full w-full bg-current"
        style={{
          maskImage: 'url(/images/services/in-silico.svg)',
          WebkitMaskImage: 'url(/images/services/in-silico.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    ),
    title: "In silico research",
    paragraph:
      "Research into the molecular mechanism of action of your small molecule.",
  },
  {
    id: 3,
    icon: (
      <div
        className="h-full w-full bg-current"
        style={{
          maskImage: 'url(/images/services/Reprof.svg)',
          WebkitMaskImage: 'url(/images/services/Reprof.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    ),
    title: "Reprofilization of drugs",
    paragraph:
      "Repurposing of known active pharmaceutical ingredients",
  },
  {
    id: 4,
    icon: (
      <div
        className="h-full w-full bg-current"
        style={{
          maskImage: 'url(/images/services/CADD.svg)',
          WebkitMaskImage: 'url(/images/services/CADD.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    ),
    title: "Structural bioinformatics & CADD",
    paragraph:
      "Docking and molecular dynamics of the target-ligand complex (which may be protein-protein, protein-nucleic acid, or protein-peptide interactions).",
  },
  {
    id: 5,
    icon: (
      <div
        className="h-full w-full bg-current"
        style={{
          maskImage: 'url(/images/services/Prot_redesign.svg)',
          WebkitMaskImage: 'url(/images/services/Prot_redesign.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    ),
    title: "Biotechnology",
    paragraph:
      "Design of replacement therapy proteins, redesign of proteins with a known active site.",
  },
  {
    id: 6,
    icon: (
      <div
        className="h-full w-full bg-current"
        style={{
          maskImage: 'url(/images/services/CRISPR_gRNA.svg)',
          WebkitMaskImage: 'url(/images/services/CRISPR_gRNA.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    ),
    title: "CRISPR/Cas technologies",
    paragraph:
      "Design gRNAs for your target, structural binding verification.",
  },
];
export default featuresData;
