"use client";

import { motion } from "framer-motion";
// import { skillCategories } from "@/constants/siteData";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { FiCode, FiDatabase, FiGitBranch, FiTool, FiCloud } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiVercel,
  SiLinux,
  SiFigma,
  SiPostman,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiVsco,
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";

const skillIcons = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  JavaScript: FiCode,
  "Tailwind CSS": SiTailwindcss,
  Python: SiPython,
  Django: SiDjango,
  FastAPI: FiTool,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Docker: SiDocker,
  AWS: FiCloud,
  Vercel: SiVercel,
  Linux: SiLinux,
  Git: SiGit,
  "VS Code": SiVsco,
  Figma: SiFigma,
  Postman: SiPostman,
  "Prompt Design": TbBrain,
  "Workflow Automation": FiTool,
  "OpenAI APIs": FiCode,
  "Agentic Tools": TbBrain,
};

function SkillCard({ skill, index }) {
  const Icon = skillIcons[skill.name] ?? FiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative rounded-3xl border border-purple-500/30 bg-linear-to-br from-slate-900/80 to-slate-900/40 p-6 backdrop-blur-md transition-all duration-500 group-hover:border-cyan-400/50 group-hover:bg-slate-900/60">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-purple-900/50 to-slate-900/50 text-2xl text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:from-purple-800/70 group-hover:to-slate-800/70">
            <Icon />
          </div>
          <span className="text-center text-sm font-medium text-slate-200 transition-colors duration-500 group-hover:text-cyan-300">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  // Flatten all skills from categories into one array
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <SectionReveal id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="Tech Stack" compact={true} />

        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {allSkills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}

export default SkillsSection;
