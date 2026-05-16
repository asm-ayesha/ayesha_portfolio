"use client";

import { motion } from "framer-motion";
// import { stats, contributionHeatmap } from "@/constants/siteData";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";

export function StatsSection() {
  return (
    <SectionReveal id="stats" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading eyebrow="GitHub / Stats" title="Dashboard-style proof of consistency, momentum, and delivery." description="A compact view of the output behind the portfolio: shipped projects, solved problems, and steady engineering rhythm." />

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <motion.article key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }} className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(2,6,23,.32)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                <p className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">Measured outcomes from product, platform, and portfolio work.</p>
              </motion.article>
            ))}
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#0B1120]/80 p-6 shadow-[0_24px_80px_rgba(2,6,23,.32)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">GitHub contributions</p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">Annual activity snapshot</p>
              </div>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-100">Live-ish</span>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-2">
              {contributionHeatmap.map((level, index) => (
                <span key={index} className={`aspect-square rounded-[5px] border border-white/5 ${level === 0 ? "bg-white/5" : level === 1 ? "bg-cyan-300/18" : level === 2 ? "bg-cyan-300/28" : level === 3 ? "bg-violet-400/40" : "bg-blue-400/60 shadow-[0_0_14px_rgba(59,130,246,.35)]"}`} />
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[ ["Top language", "JavaScript / Python"], ["Favorite platform", "Next.js"], ["Deployment", "Vercel"], ["Automation", "AI workflows"] ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{label}</p>
                  <p className="mt-2 text-sm text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default StatsSection;
