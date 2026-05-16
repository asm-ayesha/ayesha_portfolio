"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export function LoadingScreen({ duration = 1200 }) {
    const [progress, setProgress] = useState(0);
    const startRef = useRef();
    const rafRef = useRef();

    useEffect(() => {
        const step = (ts) => {
            if (!startRef.current) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const pct = Math.min(1, elapsed / duration);
            setProgress(Math.round(pct * 100));
            if (pct < 1) rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [duration]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
        >
            <div className="relative flex flex-col items-center gap-4 text-center">
                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                        className="h-20 w-20 rounded-full border border-cyan-300/20 border-t-cyan-300/80 border-r-violet-300/60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-display text-xl font-semibold text-white">{progress}%</span>
                    </div>
                </div>
                    <div className="min-w-[160px]">
                    <p className="font-display text-2xl font-semibold tracking-tight text-white">Ayesha Portfolio</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">Loading experience</p>
                </div>
            </div>
        </motion.div>
    );
}
