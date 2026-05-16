"use client";

import { motion } from "framer-motion";
import React from "react";

export function SectionHeading({ eyebrow, title, description, center = false, accentColor = "cyan", compact = false }) {
    const colorMap = {
        cyan: { border: "border-cyan-400", bg: "bg-cyan-400/10", text: "text-cyan-300", accent: "text-cyan-400" },
        green: { border: "border-green-400", bg: "bg-green-400/10", text: "text-green-300", accent: "text-green-400" },
        purple: { border: "border-purple-400", bg: "bg-purple-400/10", text: "text-purple-300", accent: "text-purple-400" },
    };

    const colors = colorMap[accentColor] || colorMap.cyan;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
        >
            <div className={`absolute -left-4 top-0 h-8 w-1.5 rounded-full ${colors.border} bg-gradient-to-b ${colors.bg}`} />
            <p className={`mb-4 inline-flex items-center gap-2 rounded-full border ${colors.border} ${colors.bg} px-4 py-1 text-xs font-medium uppercase tracking-[0.32em] ${colors.text} shadow-[0_0_30px_rgba(0,255,136,.15)]`}>
                {eyebrow}
            </p>
            <h2 className={`font-display ${compact ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-4xl lg:text-5xl"} font-semibold tracking-tight text-white`}>
                {title}
                {accentColor === "purple" && <span className="text-purple-400">.</span>}
            </h2>
            <p className={`${compact ? "mt-3 text-sm leading-6 sm:text-sm" : "mt-4 text-sm leading-7 sm:text-base"} text-slate-400 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
                {description}
            </p>
        </motion.div>
    );
}
