import Image from "next/image";

const partnersData = [
    {
        id: 1,
        name: "Partner 1",
        logo: "/images/Partners/IP_off.png",
    },
    {
        id: 2,
        name: "Partner 2",
        logo: "/images/Partners/KSE.png",
    },
    {
        id: 3,
        name: "Partner 3",
        logo: "/images/Partners/MES.png",
    },
    {
        id: 4,
        name: "Partner 4",
        logo: "/images/Partners/YRiA.png",
    },
];

const Partners = () => {
    return (
        <section className="bg-[#060607] py-8 md:py-12">
            <div className="container">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24">
                    {partnersData.map((partner) => (
                        <div
                            key={partner.id}
                            className="relative flex items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={140}
                                height={60}
                                className="max-h-[50px] w-auto grayscale contrast-[1.2] invert brightness-[1.5]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
