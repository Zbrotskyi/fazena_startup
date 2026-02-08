import SectionTitle from "../Common/SectionTitle";
import ChromaGrid from "./ChromaGrid";

const Team = () => {
    return (
        <section
            id="team"
            className="bg-[#060607] py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <SectionTitle
                    title="Fazena Team"
                    paragraph="Meet the passionate experts behind our breakthrough innovations in computational biology and drug discovery."
                    center
                    dark
                />

                <div style={{ height: '600px', position: 'relative' }}>
                    <ChromaGrid
                        radius={300}
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
