"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import GradualBlur from "../GradualBlur";
import styles from "./styles.module.css";

const RNAHunter = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const screenshotRef = useRef<HTMLDivElement>(null);
    const [isRevealing, setIsRevealing] = useState(false);
    const [revealProgress, setRevealProgress] = useState(0);
    const [isScrollLocked, setIsScrollLocked] = useState(false);
    const [hasRevealed, setHasRevealed] = useState(false);

    const handleWheel = useCallback((e: WheelEvent) => {
        if (!isScrollLocked || hasRevealed) return;

        e.preventDefault();
        e.stopPropagation();

        // Calculate new progress based on scroll delta
        const delta = e.deltaY > 0 ? 0.05 : -0.02;
        setRevealProgress(prev => {
            const newProgress = Math.max(0, Math.min(1, prev + delta));

            if (newProgress >= 1) {
                setHasRevealed(true);
                setIsScrollLocked(false);
                document.body.style.overflow = '';
            }

            if (newProgress <= 0 && delta < 0) {
                setIsScrollLocked(false);
                setIsRevealing(false);
                document.body.style.overflow = '';
            }

            return newProgress;
        });
    }, [isScrollLocked, hasRevealed]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || hasRevealed) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger when 75% of section is visible
                if (entry.intersectionRatio >= 0.75 && !isRevealing && !hasRevealed) {
                    setIsRevealing(true);
                    setIsScrollLocked(true);
                    document.body.style.overflow = 'hidden';
                }
            },
            { threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [isRevealing, hasRevealed]);

    useEffect(() => {
        if (isScrollLocked) {
            window.addEventListener('wheel', handleWheel, { passive: false });
            return () => window.removeEventListener('wheel', handleWheel);
        }
    }, [isScrollLocked, handleWheel]);

    // Calculate transforms based on progress
    const translateY = 100 - (revealProgress * 100);
    const blurAmount = (1 - revealProgress) * 20;
    const opacity = revealProgress;

    return (
        <section
            ref={sectionRef}
            className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#060607]"
        >
            <div className="absolute inset-0 -z-10 w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end">
                    <Image
                        src="/images/video/shape.svg"
                        alt="Background shape"
                        width={1920}
                        height={400}
                        className="w-full h-auto max-w-[100vw]"
                        priority
                    />
                </div>
            </div>
            <div className="container relative">
                <SectionTitle
                    title="RNA Hunter"
                    paragraph="Obtaining the spatial structure of non-coding RNAs and finding therapeutic small molecules for this target. Modelling in intracellular conditions, molecular dynamics, refinement of the lead molecule using QM/MM methods, calculation of free binding energy and other parameters. The platform is not limited by target length."
                    center
                    width="900px"
                    mb="40px"
                />

                <div className={styles.buttonContainer}>
                    <button className={styles.learnMoreButton}>
                        Learn more
                    </button>
                </div>

                <div className="relative" style={{ minHeight: '400px' }}>
                    <div
                        ref={screenshotRef}
                        className="mx-auto max-w-[900px]"
                        style={{
                            transform: `translateY(${translateY}%)`,
                            filter: `blur(${blurAmount}px)`,
                            opacity: hasRevealed ? 1 : opacity,
                            transition: hasRevealed ? 'none' : 'transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out'
                        }}
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            <Image
                                src="/images/video/image.png"
                                alt="RNA Hunter platform screenshot"
                                width={1280}
                                height={720}
                                className="w-full h-auto object-contain"
                            />
                            {!hasRevealed && (
                                <GradualBlur
                                    target="parent"
                                    position="top"
                                    height="10rem"
                                    strength={3}
                                    divCount={8}
                                    curve="bezier"
                                    exponential
                                    opacity={1 - revealProgress}
                                />
                            )}
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    {isScrollLocked && !hasRevealed && (
                        <div className={styles.scrollIndicator}>
                            <div className={styles.scrollIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                            </div>
                            <span>Scroll to reveal</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RNAHunter;
