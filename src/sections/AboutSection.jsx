"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-6">
        <div className="relative mx-auto w-full max-w-75">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            animate={{ y: [0, -4, 0], rotate: [0, 0.5, 0], scale: [1, 1.01, 1] }}
            transition={{
              opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="will-change-transform transform-gpu"
          >
            <motion.img
              src="/profile.avif"
              alt="Profile"
              whileHover={{ scale: 1.04, rotate: 0.35 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.6 }}
              className="aspect-square w-full rounded-full object-cover"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="space-y-3"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-200"
          >
            About
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[34px] lg:leading-tight"
          >
            Product-minded full stack engineer with a clean, motion-aware UI style.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-sm lg:text-[15px] lg:leading-6"
          >

            I build modern web experiences with reliable systems, strong information hierarchy, and motion that helps the interface feel clear instead of noisy. My focus is on crafting pages that read well at a glance, stay responsive on every screen, and still feel premium in the details.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-sm lg:text-[15px] lg:leading-6"
          >
            I pay attention to the structure behind the visuals - from typography and spacing to section flow and small interface cues. The result is work that feels deliberate, readable, and balanced without ever feeling overdesigned.
          </motion.p>

          <div className="grid gap-3 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Location</p>
              <p className="mt-1 text-sm font-medium text-white">Remote / Worldwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Available</p>
              <p className="mt-1 text-sm font-medium text-white">Open to freelance projects and full-time opportunities</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}

export default AboutSection;
