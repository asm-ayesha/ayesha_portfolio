"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import { heroRoles } from "@/constants/siteData";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionReveal } from "@/components/SectionReveal";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <SectionReveal id="home" className="relative overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-screen-xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="max-w-3xl">
          <motion.p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-xs font-medium tracking-[0.28em] text-cyan-100 uppercase backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1 className="font-display max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block bg-[linear-gradient(90deg,#96F3C2,#8B5CF6,#7CC9FF)] bg-clip-text text-transparent">Ayesha Siddika</span>
            {/* <span className="block bg-[linear-gradient(90deg,#A855F7,#7CC9FF,#78E6E0)] bg-clip-text text-transparent">Siddika</span> */}
          </motion.h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm sm:text-base">
            <span className="inline-flex items-center gap-2 text-cyan-200">
              <span className="text-cyan-300">&lt;/&gt;</span>
              <span className="font-semibold text-white">
                <AnimatePresence mode="wait">
                  <motion.span key={heroRoles[roleIndex]} className="inline-block">
                    {heroRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </div>

          <p className="mt-3 text-lg text-purple-200/95">MongoDB • React • Next.js</p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I'm a passionate Full-Stack Developer specializing in React, Next.js, JavaScript, and MongoDB. I build fast, scalable web applications with clean code and thoughtful UX - turning ideas into seamless digital experiences that actually ship.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="#" download variant="primary" className="px-6 py-3">
              <span className="flex items-center gap-3">
                <FiArrowRight />
                Download Resume
              </span>
            </MagneticButton>

            <MagneticButton href="#contact" variant="ghost" className="px-6 py-3">
              <span className="flex items-center gap-3">Contact Me</span>
            </MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
          <motion.div
            animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(34,211,238,.45),rgba(34,211,238,.08),transparent_70%)] blur-xl lg:block"
          />
          <motion.div
            animate={{ y: [0, 10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: -2 }}
            className="absolute -right-8 bottom-20 hidden h-32 w-32 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(139,92,246,.4),rgba(59,130,246,.08),transparent_70%)] blur-2xl lg:block"
          />

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-visible"
          >
            <div className="relative h-2" />

            <motion.div
              initial="rest"
              whileHover="hover"
              animate={{ rotate: [0, 0.8, 0], scale: [1, 1.01, 1] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto mt-6 aspect-square w-full max-w-md overflow-visible rounded-full p-6 shadow-[0_0_70px_rgba(0,0,0,.28)]"
              style={{ background: 'rgba(11,17,24,0.98)' }}
            >
              <div className="absolute inset-5 rounded-full border border-white/10 bg-transparent" />
              <motion.img
                variants={{
                  rest: { scale: 1, rotate: 0, filter: "saturate(1)" },
                  hover: { scale: 1.045, rotate: -0.8, filter: "saturate(1.08)" },
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                src="/profile.png"
                alt="Profile"
                className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white/5 object-cover"
              />

              {/* <motion.div
                variants={{
                  rest: { y: 0, scale: 1 },
                  hover: { y: -6, scale: 1.02 },
                }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-3 right-2 z-20 flex w-56 items-center gap-2 rounded-[20px] border border-cyan-300/20 bg-[#0b1527]/95 px-2.5 py-2 text-xs text-slate-100 shadow-[0_12px_30px_rgba(2,6,23,.45)] sm:bottom-4 sm:right-3 sm:w-64 sm:gap-3 sm:px-3"
              >
                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/15 text-cyan-300"><SiReact /></span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-green-300/30 bg-green-500/15 text-green-300"><SiNodedotjs /></span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-500/15 text-emerald-300"><SiMongodb /></span>
                </div>
                <div className="ml-1 leading-tight">
                  <p className="text-sm font-semibold text-slate-100 sm:text-base">2+ Years</p>
                  <p className="text-xs font-semibold text-slate-300">Experience</p>
                </div>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default HeroSection;
