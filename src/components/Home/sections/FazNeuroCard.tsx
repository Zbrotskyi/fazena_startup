"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./FazNeuroCard.module.css";

const FazNeuroCard = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isReversing, setIsReversing] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let animationFrameId: number;
        let lastReverseTime = 0;

        const loop = () => {
            if (!video) return;

            if (isReversing) {
                // Reverse playback logic
                if (video.currentTime > 0.05) {
                    // Manual reverse step
                    video.currentTime -= 0.04;
                } else {
                    video.currentTime = 0;
                    setIsReversing(false);
                    video.play().catch(() => { }); // Resume forward play
                }
            } else {
                // Forward playback monitor
                // Trigger reversal just before the absolute end to avoid "ended" hang
                if (video.duration && video.currentTime >= video.duration - 0.06) {
                    video.pause();
                    setIsReversing(true);
                }
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isReversing]);

    return (
        <div className={styles.card}>
            {/* Top Workspace Section */}
            <div className={styles.topSection}>
                <div className={styles.headerBorder}></div>
                <div className={styles.icons}>
                    <div className={styles.logo}>FAZNEURO_01</div>
                    <div className={styles.socialMedia}>
                        <svg className={styles.svg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                    </div>
                </div>

                {/* Video Workspace Area */}
                <div className={styles.placeholderField}>
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
                        src="/images/home/Molecule_animation1.mp4"
                        autoPlay
                        muted
                        playsInline
                    />
                </div>
            </div>

            {/* Metric Footer Section (3 Sectors) */}
            <div className={styles.metricFooter}>
                <div className={styles.metricSector}>
                    <span className={styles.metricValue}>v1.0.0</span>
                    <span className={styles.metricLabel}>Platform</span>
                </div>
                <div className={styles.metricSector}>
                    <span className={styles.metricValue}>DNN+HMM</span>
                    <span className={styles.metricLabel}>Engine</span>
                </div>
                <div className={styles.metricSector}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Validated</span>
                </div>
            </div>
        </div>
    );
};

export default FazNeuroCard;
