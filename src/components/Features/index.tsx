import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-[#060607]">
        <div className="container px-4">
          <SectionTitle
            title="Services"
            paragraph="Comprehensive toolkit for computational drug design and biomolecular engineering."
            center
            dark
            mb="80px"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
