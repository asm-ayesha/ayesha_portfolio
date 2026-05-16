"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

export function TestimonialSlider({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % items.length);
        }, 4500);

        return () => window.clearInterval(timer);
    }, [items.length]);

    return (
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(2,6,23,.38)] backdrop-blur-xl sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,.12),transparent_30%)]" />
            <AnimatePresence mode="wait">
                <motion.article
                    key={activeIndex}
                    initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10"
                >
                    <div className="mb-5 flex items-center gap-3 text-cyan-200">
                        <FiMessageSquare className="text-2xl" />
                        <div className="flex text-amber-400">
                            {Array.from({ length: items[activeIndex].rating }, (_, index) => (
                                <span key={index}>★</span>
                            ))}
                        </div>
                    </div>
                    <p className="max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">“{items[activeIndex].quote}”</p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-white/5 text-sm font-semibold text-white">
                            {items[activeIndex].name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")}
                        </div>
                        <div>
                            <p className="font-medium text-white">{items[activeIndex].name}</p>
                            <p className="text-sm text-slate-400">{items[activeIndex].role}</p>
                        </div>
                    </div>
                </motion.article>
            </AnimatePresence>

            <div className="mt-6 flex gap-2">
                {items.map((item, index) => (
                    <button
                        key={item.name}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-10 bg-cyan-300" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
                        aria-label={`Show testimonial from ${item.name}`}
                    />
                ))}
            </div>
        </div>
    );
}
