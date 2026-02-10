"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close nav on route change
    useEffect(() => {
        setNavOpen(false);
    }, [pathName]);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${sticky
                ? "bg-[#060607]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
                : "bg-transparent"
                }`}
        >
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* ── Logo ── */}
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/images/logo/logo.svg"
                            alt="FAZENA"
                            width={260}
                            height={60}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {menuData.map((item) => {
                            if (item.special) return null; // render CTA buttons separately
                            const isActive = pathName === item.path;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.path ?? "/"}
                                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? "text-white" : "text-white/60 hover:text-white"
                                        }`}
                                >
                                    {item.title}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#ea7414]" />
                                    )}
                                </Link>
                            );
                        })}

                        {/* ── CTA Buttons ── */}
                        <div className="flex items-center gap-3 ml-2">
                            {menuData
                                .filter((item) => item.special)
                                .map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.path ?? "/"}
                                        className={`inline-flex items-center rounded-md px-5 py-1.5 text-sm font-medium transition-all duration-200 ${item.filled
                                            ? "bg-[#ea7414] text-white hover:bg-[#d66712] shadow-[0_2px_12px_rgba(234,116,20,0.25)]"
                                            : "border border-[#ea7414]/60 text-white/90 hover:border-[#ea7414] hover:bg-[#ea7414]/10"
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                        </div>
                    </nav>

                    {/* ── Mobile Toggle ── */}
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col items-end gap-1.5">
                            <span
                                className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${navOpen ? "w-6 translate-y-[5px] rotate-45" : "w-6"
                                    }`}
                            />
                            <span
                                className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${navOpen ? "w-0 opacity-0" : "w-4"
                                    }`}
                            />
                            <span
                                className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${navOpen ? "w-6 -translate-y-[5px] -rotate-45" : "w-5"
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* ── Mobile Menu ── */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${navOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="bg-[#0b0b10] border-t border-white/[0.06] px-6 pb-6 pt-4">
                    <ul className="flex flex-col gap-1">
                        {menuData.map((item) => {
                            if (item.special) return null;
                            const isActive = pathName === item.path;
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.path ?? "/"}
                                        className={`block py-3 px-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? "text-white bg-white/[0.04]"
                                            : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile CTA */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
                        {menuData
                            .filter((item) => item.special)
                            .map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.path ?? "/"}
                                    className={`flex-1 text-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200 ${item.filled
                                        ? "bg-[#ea7414] text-white hover:bg-[#d66712]"
                                        : "border border-[#ea7414]/60 text-white/90 hover:border-[#ea7414] hover:bg-[#ea7414]/10"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
