'use client';

import SectionTitle from "../Common/SectionTitle";
import ChromaGrid from "./ChromaGrid";

const teamMembers = [
    {
        image: "/images/team/member1.jpg",
        title: "Team Member 1",
        subtitle: "CEO & Founder",
        handle: "@member1",
        url: ""
    },
    {
        image: "/images/team/member2.jpg",
        title: "Team Member 2",
        subtitle: "CTO",
        handle: "@member2",
        url: ""
    },
    {
        image: "/images/team/member3.jpg",
        title: "Team Member 3",
        subtitle: "Lead Scientist",
        handle: "@member3",
        url: ""
    },
    {
        image: "/images/team/member4.jpg",
        title: "Team Member 4",
        subtitle: "Research Lead",
        handle: "@member4",
        url: ""
    },
    {
        image: "/images/team/member5.jpg",
        title: "Team Member 5",
        subtitle: "Head of Operations",
        handle: "@member5",
        url: ""
    },
    {
        image: "",
        title: "Join Our Team",
        subtitle: "We're always looking for talented individuals",
        handle: "",
        url: "/contact",
        isCTA: true
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
                        radius={320}
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
