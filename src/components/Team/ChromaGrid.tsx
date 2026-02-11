'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import './ChromaGrid.css';

interface TeamMember {
    image: string;
    title: string;
    subtitle: string;
    linkedin?: string;
    isCTA?: boolean;
    ctaLink?: string;
}

interface ChromaGridProps {
    items: TeamMember[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 17 16" fill="currentColor">
        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
    </svg>
);

const PlusIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

export const ChromaGrid = ({
    items,
    className = '',
    radius = 280,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}: ChromaGridProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<any>(null);
    const setY = useRef<any>(null);
    const pos = useRef({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
            return;
        }

        const options = {
            root: null,
            rootMargin: '-10% 0% -10% 0%', // Focus on the center area
            threshold: 0.9 // Trigger only when fully visible as requested
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                const card = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    // Remove active from any other card first
                    rootRef.current?.querySelectorAll('.chroma-card').forEach(c => c.classList.remove('active'));

                    card.classList.add('active');
                    const rootRect = rootRef.current?.getBoundingClientRect();
                    const cardRect = card.getBoundingClientRect();

                    if (rootRect) {
                        const centerX = cardRect.left - rootRect.left + cardRect.width / 2;
                        const centerY = cardRect.top - rootRect.top + cardRect.height / 2;
                        moveTo(centerX, centerY);
                        gsap.to(fadeRef.current, { opacity: 0, duration: 0.4, overwrite: true });
                    }
                } else {
                    card.classList.remove('active');
                }
            });
        };

        observerRef.current = new IntersectionObserver(callback, options);
        const cards = rootRef.current?.querySelectorAll('.chroma-card');
        cards?.forEach(card => observerRef.current?.observe(card));

        return () => {
            observerRef.current?.disconnect();
        };
    }, [isMobile, items]);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        const el = rootRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleLinkedInClick = (e: React.MouseEvent, linkedin: string) => {
        e.stopPropagation();
        window.open(linkedin, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
            style={{
                '--r': `${radius}px`
            } as React.CSSProperties}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {items.map((c, i) => (
                c.isCTA ? (
                    <Link
                        key={i}
                        href={c.ctaLink || '/contact'}
                        className="chroma-card chroma-cta"
                        onMouseMove={handleCardMove}
                    >
                        <div className="chroma-cta-content">
                            <PlusIcon />
                            <h3 className="name">{c.title}</h3>
                            <p className="role">{c.subtitle}</p>
                        </div>
                    </Link>
                ) : (
                    <article
                        key={i}
                        className="chroma-card"
                        onMouseMove={handleCardMove}
                    >
                        <div className="chroma-img-wrapper">
                            <img src={c.image} alt={c.title} loading="lazy" />
                        </div>
                        <footer className="chroma-info">
                            <div className="chroma-info-header">
                                <h3 className="name">{c.title}</h3>
                                {c.linkedin && (
                                    <button
                                        className="linkedin-btn"
                                        onClick={(e) => handleLinkedInClick(e, c.linkedin!)}
                                        aria-label={`${c.title}'s LinkedIn`}
                                    >
                                        <LinkedInIcon />
                                    </button>
                                )}
                            </div>
                            <p className="role">{c.subtitle}</p>
                        </footer>
                    </article>
                )
            ))}
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
