import Image from "next/image";

const partnersData = [
    {
        id: 1,
        name: "YURiA-PHARM",
        logo: "/images/Partners/YRiA.png",
        scale: "h-[65px] md:h-[85px]", // Scaled up
        url: "https://www.uf.ua/en/news-page/the-final-of-neuro-impact-challenge/"
    },
    {
        id: 2,
        name: "KSE",
        logo: "/images/Partners/KSE.png",
        scale: "h-[65px] md:h-[85px]",
        url: "https://kse.ua"
    },
    {
        id: 3,
        name: "MES",
        logo: "/images/Partners/MES.png",
        scale: "h-[55px] md:h-[70px]",
        url: "https://mon.gov.ua/news/final-konkursu-neuro-impact-challenge-mon-posyliuie-derzhavno-pryvatne-partnerstvo-v-rd"
    },
    {
        id: 4,
        name: "IP_office",
        logo: "/images/Partners/IP_off.png",
        scale: "h-[50px] md:h-[65px]",
        url: "https://nipo.gov.ua/neuro-impact-challenge-peremozhtsi/"
    },
];

const Partners = () => {
    return (
        <section className="relative z-20 -mt-20 md:-mt-40 bg-transparent py-8 md:py-12 overflow-hidden">
            <div className="container px-4 mb-4 md:mb-8">
                <h3 className="text-center font-audiowide text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                    Supported by:
                </h3>
            </div>
            {/* Desktop View */}
            <div className="container hidden md:block">
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                    {partnersData.map((partner) => (
                        <a
                            key={partner.id}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center justify-center transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`w-auto object-contain ${partner.scale}`}
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Dynamic Ribbon - Seamless loop */}
            <div className="flex w-full md:hidden overflow-hidden">
                <div className="flex animate-marquee items-center flex-nowrap">
                    {/* First strip */}
                    <div className="flex flex-shrink-0 items-center gap-12 px-6 min-w-max">
                        {partnersData.map((partner) => (
                            <a
                                key={`first-${partner.id}`}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-shrink-0 items-center justify-center"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={`w-auto object-contain ${partner.scale}`}
                                />
                            </a>
                        ))}
                    </div>
                    {/* Duplicate strip for seamless loop */}
                    <div className="flex flex-shrink-0 items-center gap-12 px-6 min-w-max">
                        {partnersData.map((partner) => (
                            <a
                                key={`second-${partner.id}`}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-shrink-0 items-center justify-center"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={`w-auto object-contain ${partner.scale}`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;

