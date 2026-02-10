'use client';

import SectionTitle from "../Common/SectionTitle";
import ChromaGrid from "./ChromaGrid";

const teamMembers = [
    {
        image: "/images/team/Franchuk.webp",
        title: "Yegor Franchuk",
        subtitle: "CEO & Co-Founder",
        linkedin: "https://www.linkedin.com/in/mregorin"
    },
    {
        image: "/images/team/Zbrotskyi.webp",
        title: "Anatolii Zbrotskyi",
        subtitle: "CSO & Co-Founder",
        linkedin: "https://www.linkedin.com/in/anatolii-zbrotskyi-31b216365"
    },
    {
        image: "/images/team/Alexandrovych.jpg",
        title: "Dmytro Alexandrovych",
        subtitle: "Lead Scientist",
        linkedin: "https://www.linkedin.com/in/dima-aleksandrovech-9714a720b"
    },
    {
        image: "/images/team/Zhuromskyi.png",
        title: "Yevhenii Zhuromskyi",
        subtitle: "Research Lead",
        linkedin: "https://www.linkedin.com/in/yevhenii-zhuromskyi-025192344"
    },
    {
        image: "/images/team/Naum.jpg",
        title: "Yuliia Naum",
        subtitle: "Head of Operations",
        linkedin: "https://www.linkedin.com/in/yuliia-naum"
    },
    {
        image: "",
        title: "Join Our Team",
        subtitle: "Help us redefine drug discovery",
        isCTA: true,
        ctaLink: "/join-us"
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

