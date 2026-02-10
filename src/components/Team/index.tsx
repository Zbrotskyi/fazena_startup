'use client';

import SectionTitle from "../Common/SectionTitle";
import ChromaGrid from "./ChromaGrid";

const teamMembers = [
    {
        image: "/images/team/Franchuk.webp",
        title: "Yegor Franchuk",
        subtitle: "CEO & Co-Founder",
        linkedin: "https://linkedin.com/in/member1"
    },
    {
        image: "/images/team/Zbrotskyi.jpg",
        title: "Anatolii Zbrotskyi",
        subtitle: "CSO & Co-Founder",
        linkedin: "https://linkedin.com/in/member2"
    },
    {
        image: "/images/team/member3.jpg",
        title: "Team Member 3",
        subtitle: "Lead Scientist",
        linkedin: "https://linkedin.com/in/member3"
    },
    {
        image: "/images/team/member4.jpg",
        title: "Team Member 4",
        subtitle: "Research Lead",
        linkedin: "https://linkedin.com/in/member4"
    },
    {
        image: "/images/team/member5.jpg",
        title: "Team Member 5",
        subtitle: "Head of Operations",
        linkedin: "https://linkedin.com/in/member5"
    },
    {
        image: "",
        title: "Join Our Team",
        subtitle: "Help us redefine drug discovery",
        isCTA: true,
        ctaLink: "/contact"
    }
];

const Team = () => {
    return (
        <section
            id="team"
            className="bg-[#060607] py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <SectionTitle
                    title="Fazena Team"
                    paragraph="Meet the minds reshaping drug discovery — specialists in bioinformatics, biochemistry, biotechnology, and synthetic biology working together to bring novel therapeutics from concept to reality."
                    center
                    dark
                />

                <div style={{ position: 'relative', minHeight: '500px' }}>
                    <ChromaGrid
                        items={teamMembers}
                        radius={280}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;

