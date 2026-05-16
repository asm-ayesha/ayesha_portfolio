"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useMemo, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { BackToTopButton } from "./BackToTopButton";
import { LoadingScreen } from "./LoadingScreen";
import { ScrollProgress } from "./ScrollProgress";
import { AnimatedNavbar } from "./AnimatedNavbar";
import { CustomCursor } from "./CustomCursor";

export function ClientShell({ children }) {
    const [ready, setReady] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
        let frameId = 0;

        const raf = (time) => {
            lenis.raf(time);
            frameId = window.requestAnimationFrame(raf);
        };

        frameId = window.requestAnimationFrame(raf);

        return () => {
            window.cancelAnimationFrame(frameId);
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        const timer = window.setTimeout(() => setReady(true), 1200);
        return () => window.clearTimeout(timer);
    }, []);

    const blobs = useMemo(
        () =>
            [
                "left-[-8%] top-[-6%] h-72 w-72 bg-cyan-400/15",
                "right-[-8%] top-[12%] h-80 w-80 bg-violet-500/12",
                "left-[12%] bottom-[-8%] h-72 w-72 bg-blue-500/12",
            ].map((className, index) => (
                <motion.div
                    key={className}
                    animate={shouldReduceMotion ? {} : { y: [0, -20, 0], x: [0, index % 2 === 0 ? 10 : -10, 0] }}
                    transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute rounded-full blur-3xl ${className}`}
                />
            )),
        [shouldReduceMotion],
    );

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#0f1419] text-slate-50 selection:bg-cyan-300/30 selection:text-white">
            <AnimatePresence>{!ready && <LoadingScreen />}</AnimatePresence>
            <ScrollProgress />
            <AnimatedNavbar />
            <CustomCursor />

            <button
                type="button"
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
                className="back-to-top fixed bottom-4 left-4 z-[70] hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-green-400/20 to-purple-400/20 text-white transition hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(189,0,255,.25)] md:inline-flex"
                aria-label="Scroll down"
            >
                <FiArrowDown className="text-lg" />
            </button>

            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                {blobs}
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.06),transparent_34%)]"
                />
                <div className="absolute inset-0 frosted-grid opacity-10 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
                <div className="absolute inset-0 noise-overlay opacity-[0.03] mix-blend-soft-light" />
                {!shouldReduceMotion &&
                    Array.from({ length: 10 }, (_, index) => ({
                        id: index,
                        left: `${(index * 11) % 100}%`,
                        top: `${(index * 17) % 100}%`,
                        size: 3 + (index % 4),
                        delay: index * 0.35,
                    })).map((particle) => (
                        <motion.span
                            key={particle.id}
                            animate={{ y: [0, -14, 0], opacity: [0.2, 0.4, 0.2], scale: [1, 1.25, 1] }}
                            transition={{ duration: 6 + particle.id * 0.3, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute rounded-full bg-white/50"
                            style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
                        />
                    ))}
            </div>

            <motion.main
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
            >
                {children}
            </motion.main>

            <BackToTopButton />
        </div>
    );
}
