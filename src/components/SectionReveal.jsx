"use client";

import { motion } from "framer-motion";
import React from "react";

export function SectionReveal({ id, className = "", children }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.section>
    );
}
