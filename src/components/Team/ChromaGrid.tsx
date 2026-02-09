'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

interface TeamMember {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    url?: string;
    isCTA?: boolean;
}

interface ChromaGridProps {
    items: TeamMember[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

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

    const handleCardClick = (url?: string) => {
        if (url) {
            window.location.href = url;
        }
    };

    const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
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
                <article
                    key={i}
                    className={`chroma-card ${c.isCTA ? 'chroma-card-cta' : ''}`}
                    onMouseMove={handleCardMove}
                    onClick={() => handleCardClick(c.url)}
                    style={{
                        cursor: c.url ? 'pointer' : 'default'
                    }}
                >
                    {c.isCTA ? (
                        <div className="chroma-cta-content">
                            <div className="chroma-cta-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                                    <path d="M19 13H17V11H15V13H13V15H15V17H17V15H19V13Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="chroma-cta-title">{c.title}</h3>
                            <p className="chroma-cta-subtitle">{c.subtitle}</p>
                            <div className="chroma-cta-button">Apply Now →</div>
                        </div>
                    ) : (
                        <>
                            <div className="chroma-img-wrapper">
                                <img src={c.image} alt={c.title} loading="lazy" />
                            </div>
                            <footer className="chroma-info">
                                <h3 className="name">{c.title}</h3>
                                {c.handle && <span className="handle">{c.handle}</span>}
                                <p className="role">{c.subtitle}</p>
                            </footer>
                        </>
                    )}
                </article>
            ))}
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
