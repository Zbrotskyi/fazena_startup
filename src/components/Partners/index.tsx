import Image from "next/image";

const partnersData = [
    {
        id: 1,
        name: "YRiA",
        logo: "/images/Partners/YRiA.png",
        scale: "h-[65px] md:h-[85px]", // Scaled up
    },
    {
        id: 2,
        name: "KSE",
        logo: "/images/Partners/KSE.png",
        scale: "h-[65px] md:h-[85px]",
    },
    {
        id: 3,
        name: "MES",
        logo: "/images/Partners/MES.png",
        scale: "h-[55px] md:h-[70px]",
    },
    {
        id: 4,
        name: "IP_off",
        logo: "/images/Partners/IP_off.png",
        scale: "h-[50px] md:h-[65px]",
    },
];

const Partners = () => {
    return (
        <section className="relative z-20 -mt-28 bg-transparent py-8 md:py-12 overflow-hidden">
            {/* Desktop View */}
            <div className="container hidden md:block">
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                    {partnersData.map((partner) => (
                        <div
                            key={partner.id}
                            className="relative flex items-center justify-center transition-all duration-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`w-auto object-contain ${partner.scale}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Dynamic Ribbon */}
            <div className="flex w-full md:hidden overflow-hidden">
                <div className="flex gap-12 items-center animate-marquee">
                    {partnersData.map((partner) => (
                        <div
                            key={partner.id}
                            className="relative flex flex-shrink-0 items-center justify-center px-4"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`w-auto object-contain ${partner.scale}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex gap-12 items-center animate-marquee" aria-hidden="true">
                    {partnersData.map((partner) => (
                        <div
                            key={`${partner.id}-duplicate`}
                            className="relative flex flex-shrink-0 items-center justify-center px-4"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`w-auto object-contain ${partner.scale}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
