"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBriefcase, FiFolder, FiHome, FiMail, FiMenu, FiUser, FiX, FiZap } from "react-icons/fi";
import { navItems } from "@/constants/siteData";
import { useActiveSection } from "./useActiveSection";

export function AnimatedNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSection = useActiveSection(navItems.map((item) => item.id));

    const navIcons = {
        home: FiHome,
        about: FiUser,
        skills: FiZap,
        experience: FiBriefcase,
        projects: FiFolder,
        contact: FiMail,
    };

    const scrollToSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (!section) {
            return;
        }

        const top = section.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-[90] px-3 pt-3 sm:px-4"
        >
            <div className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-[#0B1120]/35 px-3 py-3 backdrop-blur-xl sm:px-4 lg:px-5">
                <a href="#home" className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,.16),rgba(189,0,255,.14))] text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,.18)]">
                        A
                    </span>
                    <span className="hidden flex-col leading-none sm:flex">
                        <span className="font-display text-sm font-semibold tracking-[0.24em] text-white uppercase">Ayesha</span>
                        <span className="text-[11px] uppercase tracking-[0.26em] text-slate-400">Developer Portfolio</span>
                    </span>
                </a>

                <nav className="hidden flex-1 items-center justify-end gap-1 md:flex">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        const Icon = navIcons[item.id] ?? FiHome;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(event) => scrollToSection(event, item.id)}
                                className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${isActive ? "text-[#c8f7cc]" : "text-slate-300 hover:text-white"}`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-active"
                                        transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.45 }}
                                        className="absolute inset-0 rounded-xl border border-emerald-300/20 bg-white/6 shadow-[0_0_25px_rgba(34,211,238,.12)]"
                                    />
                                )}
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: 8, y: -3 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                                    className="relative z-10"
                                >
                                    <Icon className={`text-base ${isActive ? "text-emerald-300" : "text-[#c8f7cc]"}`} />
                                </motion.div>
                                <span className="relative z-10">{item.label}</span>
                            </a>
                        );
                    })}
                </nav>

                <motion.button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
                    onClick={() => setMenuOpen((current) => !current)}
                    aria-label="Toggle navigation menu"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                    <motion.div
                        animate={{ rotate: menuOpen ? 90 : 0 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {menuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
                    </motion.div>
                </motion.button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -12, filter: "blur(10px)" }}
                        transition={{ duration: 0.35 }}
                        className="mt-3 w-full rounded-[28px] border border-white/10 bg-[#0B1120]/95 p-4 shadow-[0_18px_70px_rgba(2,6,23,.45)] backdrop-blur-xl md:hidden"
                    >
                        <div className="grid gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(event) => scrollToSection(event, item.id)}
                                    className={`rounded-2xl px-4 py-3 text-sm transition ${activeSection === item.id
                                            ? "border border-cyan-300/20 bg-white/5 text-white"
                                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
