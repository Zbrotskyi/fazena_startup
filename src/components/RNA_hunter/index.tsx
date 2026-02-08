"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import GradualBlur from "../GradualBlur/GradualBlur";
import styles from "./styles.module.css";

const RNAHunter = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const screenshotRef = useRef<HTMLDivElement>(null);
    const [revealProgress, setRevealProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    // Handle scroll-triggered reveal animation
    const handleWheel = useCallback((e: WheelEvent) => {
        if (!isAnimating || animationComplete) return;

        e.preventDefault();
        e.stopPropagation();

        // Use wheel delta to control reveal progress
        const delta = e.deltaY;
        const sensitivity = 0.003; // Adjust for faster/slower reveal

        setRevealProgress(prev => {
            const newProgress = Math.max(0, Math.min(1, prev + delta * sensitivity));

            // Complete animation when fully revealed
            if (newProgress >= 1) {
                setAnimationComplete(true);
                setIsAnimating(false);
            }

            return newProgress;
        });
    }, [isAnimating, animationComplete]);

    // Intersection Observer to detect when to start animation
    useEffect(() => {
        if (animationComplete) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Start animation when section is 80% visible
                if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
                    setIsAnimating(true);
                }
            },
            { threshold: [0.8] }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [animationComplete]);

    // Add/remove wheel event listener based on animation state
    useEffect(() => {
        if (isAnimating && !animationComplete) {
            // Lock body scroll
            document.body.style.overflow = 'hidden';
            window.addEventListener('wheel', handleWheel, { passive: false });
        } else {
            // Restore body scroll
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isAnimating, animationComplete, handleWheel]);

    // Calculate transform values based on reveal progress
    const translateY = 100 - revealProgress * 100; // Start at 100%, end at 0%
    const blurAmount = (1 - revealProgress) * 20; // Start at 20px blur, end at 0
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

                <div className="relative">
                    <div
                        ref={screenshotRef}
                        className={`mx-auto max-w-[900px] ${styles.screenshotContainer}`}
                        style={{
                            transform: animationComplete ? 'translateY(0)' : `translateY(${translateY}%)`,
                            filter: animationComplete ? 'blur(0)' : `blur(${blurAmount}px)`,
                            opacity: animationComplete ? 1 : opacity,
                            transition: animationComplete ? 'all 0.3s ease-out' : 'none',
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

                            {/* Gradual blur overlay during animation */}
                            {!animationComplete && revealProgress < 1 && (
                                <GradualBlur
                                    target="parent"
                                    position="bottom"
                                    height="7rem"
                                    strength={2 * (1 - revealProgress)}
                                    divCount={5}
                                    curve="bezier"
                                    exponential
                                    opacity={1 - revealProgress}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator during animation */}
                {isAnimating && !animationComplete && (
                    <div className={styles.scrollIndicator}>
                        <span>Scroll to reveal</span>
                        <div className={styles.scrollArrow}>↓</div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RNAHunter;
