"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";

export function MagneticButton({
    href,
    children,
    className = "",
    variant = "primary",
    download,
    target,
    rel,
    onClick,
    type = "button",
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

    const sharedClassName =
        variant === "primary"
            ? "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-[0_20px_60px_rgba(34,211,238,.18)] backdrop-blur-xl transition will-change-transform hover:-translate-y-0.5"
            : "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 shadow-[0_16px_50px_rgba(2,6,23,.2)] backdrop-blur-xl transition will-change-transform hover:-translate-y-0.5";

    const handleMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const deltaX = event.clientX - bounds.left - bounds.width / 2;
        const deltaY = event.clientY - bounds.top - bounds.height / 2;
        x.set(deltaX * 0.18);
        y.set(deltaY * 0.18);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    const content = (
        <>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,.22),rgba(139,92,246,.16),rgba(59,130,246,.2))] opacity-0 transition duration-500 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                download={download}
                target={target}
                rel={rel}
                onClick={onClick}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ x: springX, y: springY }}
                className={`${sharedClassName} ${className}`}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ x: springX, y: springY }}
            className={`${sharedClassName} ${className}`}
        >
            {content}
        </motion.button>
    );
}
