"use client";

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            setPercentage(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <motion.div
            className="fixed left-3 top-1/2 z-[80] hidden -translate-y-1/2 flex-col items-center md:flex"
            aria-hidden="true"
        >
            <motion.div className="flex h-14 w-14 items-center justify-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.2" />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#scrollGradient)"
                        strokeWidth="3"
                        strokeDasharray="282.7"
                        strokeDashoffset={282.7 * (1 - percentage / 100)}
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="scrollGradient" x1="0" y1="0" x2="100" y2="100">
                            <stop offset="0%" stopColor="#00ff88" />
                            <stop offset="50%" stopColor="#00d9ff" />
                            <stop offset="100%" stopColor="#bd00ff" />
                        </linearGradient>
                    </defs>
                </svg>
                <span className="absolute text-[11px] font-semibold text-cyan-300">{percentage}%</span>
            </motion.div>
        </motion.div>
    );
}
