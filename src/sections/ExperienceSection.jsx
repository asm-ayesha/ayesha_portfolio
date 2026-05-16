"use client";

import { motion } from "framer-motion";
// import { experienceItems } from "@/constants/siteData";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";

export function ExperienceSection() {
  return (
    <SectionReveal id="experience" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="Experience" title="Timeline shaped by product delivery and motion-aware interfaces." description="The structure stays close to the reference with a focused, readable timeline and crisp card hierarchy." accentColor="green" compact={true} />

        <div className="relative mt-10 space-y-5">
          <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-cyan-300 via-purple-400 to-transparent md:left-1/2" />
          {experienceItems.map((item, index) => (
            <motion.article key={item.company} initial={{ opacity: 0, y: 24, filter: "blur(12px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.08 }} className={`relative grid gap-4 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative pl-10 md:pl-0">
                <div aria-hidden className="absolute left-0 top-6 timeline-marker md:left-1/2 md:-translate-x-1/2" />
                <motion.div className="rounded-lg border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-md group" whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 30px 90px rgba(2,6,23,.45)" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-xl font-semibold text-white">{item.role}</p>
                      <p className="mt-1 text-sm text-cyan-100">{item.company}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">{item.duration}</div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span className="leading-6 text-slate-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">{item.tech.map((tech) => (<span key={tech} className="rounded-full border border-white/10 bg-[#0B1120] px-3 py-1 text-xs text-slate-200 transition-transform duration-200 group-hover:scale-105">{tech}</span>))}</div>
                </motion.div>
              </div>

              <div className="hidden md:block" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default ExperienceSection;
