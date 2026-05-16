"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/constants/siteData";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((projectItem) => projectItem.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <SectionReveal id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="Featured Projects" compact={true} />

        <div className="mt-10 flex flex-wrap gap-3">
          {projectFilters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm transition ${activeFilter === filter ? "border-cyan-300/30 bg-cyan-300/10 text-white" : "border-white/10 bg-white/5 text-slate-300"}`}>
              {filter}
            </button>
          ))}
        </div>

        <motion.div className="mt-8 space-y-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((projectItem, index) => (
              <motion.div key={projectItem.title} layout variants={{ hidden: { opacity: 0, y: 28, scale: 0.98, filter: "blur(12px)" }, show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }} initial="hidden" animate="show" exit={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(12px)" }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <ProjectCard project={projectItem} reversed={index % 2 === 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionReveal>
  );
}

export default ProjectsSection;
