import Image from "next/image";

const SolutionsSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#060607]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="solutions technology"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="solutions technology"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Advanced AI Models
                </h3>
                <p className="text-base font-medium leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed">
                  Our proprietary AI models are trained on vast datasets to predict molecular properties and interactions with unprecedented accuracy.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Quantum Chemistry Integration
                </h3>
                <p className="text-base font-medium leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed">
                  We combine quantum chemistry calculations with machine learning for more accurate molecular simulations.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Custom Solutions
                </h3>
                <p className="text-base font-medium leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed">
                  Tailored AI solutions designed to meet the specific needs of your research and development pipeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSectionTwo;
