import SectionTitle from "@/components/Common/SectionTitle";
import LetterGlitch from "@/components/LetterGlitch";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const HomeSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-white/70">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="features" className="pt-16 md:pt-20 lg:pt-28 bg-[#060607]">
      <div className="container">
        <div className="border-b border-white/[.1] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Features"
                paragraph="FAZENA leverages quantum chemistry and AI to design next-generation therapeutics through the first end-to-end in silico-to-cell platform. We transform computational predictions into experimentally validated therapeutic candidates. While our full pipeline is under construction, we're already accelerating pharma R&D through specialized services and our AI-powered SaaS platform."
                mb="44px"
                dark
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto aspect-square max-w-[420px] lg:mr-0"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  overflow: "hidden",
                }}
              >
                <LetterGlitch
                  glitchColors={["#f2721c", "#fff47a", "#f9a443"]}
                  glitchSpeed={40}
                  centerVignette
                  outerVignette
                  smooth
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionOne;

