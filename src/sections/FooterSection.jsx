"use client";

import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiX } from "react-icons/fi";
import { socialLinks } from "@/constants/siteData";

export function FooterSection() {
  const footerSocialIcons = { github: FiGithub, linkedin: FiLinkedin, email: FiMail, x: FiX };

  return (
    <footer className="px-4 pb-6 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="font-display text-2xl font-semibold tracking-tight text-white">Ayesha Portfolio</span>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">Frontend developer portfolio focused on modern web apps, motion UI, and production-ready product engineering.</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = footerSocialIcons[item.icon] ?? FiArrowUpRight;
              return (
                <a key={item.label} href={item.href} target={item.icon === "email" ? undefined : "_blank"} rel={item.icon === "email" ? undefined : "noreferrer"} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10 hover:text-white" aria-label={item.label}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm text-slate-400">
          <p>© 2026 Ayesha Portfolio. All rights reserved.</p>
          <p className="text-right">Built with Next.js, React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
