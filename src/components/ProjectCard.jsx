"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiArrowUpRight, FiGithub, FiRotateCcw } from "react-icons/fi";
import { MagneticButton } from "./MagneticButton";

export function ProjectCard({ project, reversed = false }) {
    const [previewKey, setPreviewKey] = useState(0);
    const previewUrl = project.live || "about:blank";
    const previewLabel = (() => {
        try {
            return previewUrl && previewUrl !== "about:blank" ? new URL(previewUrl).hostname.replace(/^www\./, "") : "preview";
        } catch {
            return previewUrl;
        }
    })();

    const accentMap = {
        cyan: "from-cyan-400/30 via-cyan-400/10 to-transparent",
        purple: "from-violet-400/30 via-violet-400/10 to-transparent",
        blue: "from-blue-400/30 via-blue-400/10 to-transparent",
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 22, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            whileHover={{ y: -4, scale: 1.008 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.9 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_48px_rgba(2,6,23,.22)] backdrop-blur-xl sm:p-6"
        >
            <motion.div
                className={`absolute inset-0 bg-linear-to-br ${accentMap[project.accent] ?? accentMap.cyan} opacity-80`}
                animate={{ opacity: [0.74, 0.82, 0.74] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.12),transparent_28%)]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.34 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
                className="absolute inset-0 rounded-[32px] border border-cyan-300/0 shadow-[0_0_0_rgba(0,0,0,0)] pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                style={{ boxShadow: "0 24px 80px rgba(2,6,23,.30)" }}
            />
            <motion.div
                className="absolute inset-0 rounded-[32px] border border-cyan-300/0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                style={{ boxShadow: "inset 0 0 0 1px rgba(34,211,238,.14)" }}
            />
            <div className="absolute inset-x-4 bottom-3 h-0.5 rounded-full bg-cyan-300/90 opacity-0 shadow-[0_0_18px_rgba(34,211,238,.55)] transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-cyan-300/24 via-cyan-300/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none" />

            <div className={`relative grid gap-6 ${reversed ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}>
                <div className={`${reversed ? "lg:order-2" : ""}`}>
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                        {project.categories.map((category) => (
                            <span key={category} className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                                {category}
                            </span>
                        ))}
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>

                    <ul className="mt-5 space-y-3 text-sm text-slate-200">
                        {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
                                {highlight}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <MagneticButton href={project.live} target="_blank" rel="noreferrer" variant="primary" className="px-4 py-2 text-sm">
                            Live Preview <FiArrowUpRight />
                        </MagneticButton>
                        <MagneticButton href={project.github} target="_blank" rel="noreferrer" variant="ghost" className="px-4 py-2 text-sm">
                            Github <FiGithub />
                        </MagneticButton>
                    </div>
                </div>

                <div className={`relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1120]/80 ${reversed ? "lg:order-1" : ""}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,.2),transparent_35%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.08)_0%,rgba(255,255,255,0)_42%,rgba(255,255,255,.06)_100%)]" />
                    <div className="relative flex h-full min-h-[260px] flex-col p-4">
                        <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-[#050816]/70 px-4 py-3 text-xs text-slate-300 backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                            </div>
                            <div className="mx-3 flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                                <span className="h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_10px_rgba(34,211,238,.55)]" />
                                <span className="truncate text-[11px] uppercase tracking-[0.24em] text-cyan-200">{previewLabel}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setPreviewKey((current) => current + 1)}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                                >
                                    <FiRotateCcw className="text-[10px]" />
                                    Reload
                                </button>
                                <a href={previewUrl} target="_blank" rel="noreferrer" className="text-[11px] uppercase tracking-[0.24em] text-slate-400 transition hover:text-white">
                                    Open
                                </a>
                            </div>
                        </div>
                        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[22px] border border-white/10 bg-[#050816] shadow-[0_18px_50px_rgba(2,6,23,.28)]">
                            <iframe
                                key={`${previewUrl}-${previewKey}`}
                                title={`${project.title} live preview`}
                                src={previewUrl}
                                className="h-full w-full min-h-[200px] bg-[#050816]"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.08)_0%,transparent_24%,transparent_78%,rgba(34,211,238,.06)_100%)]" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
