"use client";

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (latest) => setVisible(latest > 900));
    }, [scrollY]);

    if (!visible) {
        return null;
    }

    return (
        <motion.button
            type="button"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="back-to-top fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/8 text-white shadow-[0_15px_40px_rgba(2,6,23,.35)] backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-100"
            aria-label="Back to top"
        >
            <FiArrowUp className="pointer-events-none text-lg" />
        </motion.button>
    );
}
