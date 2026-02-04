import Image from "next/image";

const PipelineSectionTwo = () => {
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
                alt="pipeline process"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="pipeline process"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Therapeutic Areas
                </h3>
                <p className="text-base font-medium leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed">
                  Our pipeline spans multiple therapeutic areas, with a focus on diseases with high unmet medical need where computational approaches can make a significant impact.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Development Stages
                </h3>
                <p className="text-base font-medium leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed">
                  From target identification to clinical trials, our pipeline represents the full spectrum of drug development, powered by our proprietary AI platform.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Partnerships
                </h3>
                <p className="text-base font-medium leading-relaxed text-white/60 sm:text-lg sm:leading-relaxed">
                  We collaborate with leading pharmaceutical companies and research institutions to accelerate the development of novel therapeutics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSectionTwo;
