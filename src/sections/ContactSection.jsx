"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactDetails, socialLinks } from "@/constants/siteData";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { FiGithub, FiLinkedin, FiMail, FiX } from "react-icons/fi";

export function StyledFloatingField({ id, label, type = "text", value, onChange, textarea = false, rows = 5, placeholder = " " }) {
  const sharedLabelClass =
    `pointer-events-none absolute left-4 rounded-full border border-white/10 bg-[#09111f] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-200 ${value ? "top-0 -translate-y-1/2 border-cyan-300/40 text-white" : "top-1/2 -translate-y-1/2 text-slate-400"} peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:border-cyan-300/40 peer-focus:text-white`;

  return (
    <div className="group relative pt-3">
      <div className="rounded-[18px] bg-linear-to-r from-cyan-300 via-purple-400 to-blue-400 p-px transition duration-300 group-focus-within:shadow-[0_0_0_1px_rgba(34,211,238,.16)] group-hover:shadow-[0_0_0_1px_rgba(34,211,238,.1)]">
        <div className="relative rounded-[17px] bg-[#0b1120]/95 p-1 transition group-focus-within:bg-[#0b1120]">
          {textarea ? (
            <textarea
              required
              id={id}
              name={id}
              rows={rows}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="peer w-full resize-none rounded-[14px] bg-transparent px-3.5 pb-3.5 pt-6.5 text-[13px] text-white outline-none transition placeholder-transparent"
            />
          ) : (
            <input
              required
              id={id}
              name={id}
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="peer w-full rounded-[14px] bg-transparent px-3.5 pb-3.5 pt-6.5 text-[13px] text-white outline-none transition placeholder-transparent"
            />
          )}

          <label htmlFor={id} className={sharedLabelClass}>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
}

export function PlainFloatingField({ id, label, type = "text", value, onChange, textarea = false, rows = 5, placeholder = "Enter your message..." }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
        {label}
      </label>
      {textarea ? (
        <textarea
          required
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/30 focus:bg-white/10 focus:shadow-[0_0_0_1px_rgba(34,211,238,.14)]"
        />
      ) : (
        <input
          required
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/30 focus:bg-white/10 focus:shadow-[0_0_0_1px_rgba(34,211,238,.14)]"
        />
      )}
    </div>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const socialIconMap = {
    github: FiGithub,
    linkedin: FiLinkedin,
    x: FiX,
    email: FiMail,
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fieldListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.08 },
    },
  };

  const fieldItemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3200);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionReveal id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-screen-xl" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeading eyebrow="Contact" title="A focused space for collaboration, questions, and new opportunities." description="Have a project in mind, a role to discuss, or an idea worth building? Reach out and let&apos;s talk." accentColor="green" compact={true} />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="space-y-4" variants={cardVariants}>
            {contactDetails.map((detail, index) => {
              return (
                <motion.div key={detail.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55, delay: index * 0.08 }} className="rounded-lg border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(2,6,23,.2)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">{detail.label}</p>
                  <p className="mt-2 text-lg text-white">{detail.value}</p>
                </motion.div>
              );
            })}

            <div className="mt-8">
              <p className="mb-4 text-sm text-slate-300">Connect with me on social media:</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon] || FiMail;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.icon === "email" ? undefined : "_blank"}
                      rel={link.icon === "email" ? undefined : "noreferrer"}
                      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-300 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                      aria-label={link.label}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/20 text-cyan-300 transition group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                        <Icon className="text-sm" />
                      </span>
                      <span className="text-xs font-medium tracking-wide">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,.2)] backdrop-blur-md" variants={cardVariants}>
            <motion.div
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-linear-to-b from-purple-500/20 to-transparent blur-3xl"
              animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-linear-to-tr from-cyan-400/10 to-transparent blur-3xl"
              animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              {submitted && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 rounded-lg border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">✓ Message sent successfully! I&apos;ll get back to you soon.</motion.div>}

              <motion.form onSubmit={handleSubmit} className="space-y-4" variants={fieldListVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <motion.div variants={fieldItemVariants}><StyledFloatingField id="name" label="Your Name" type="text" value={formState.name} onChange={handleChange} placeholder=" " /></motion.div>
                <motion.div variants={fieldItemVariants}><StyledFloatingField id="email" label="Your Email" type="email" value={formState.email} onChange={handleChange} placeholder=" " /></motion.div>
                <motion.div variants={fieldItemVariants}><StyledFloatingField id="subject" label="Subject" type="text" value={formState.subject} onChange={handleChange} placeholder=" " /></motion.div>
                <motion.div variants={fieldItemVariants}><StyledFloatingField id="message" label="Message" textarea rows={5} value={formState.message} onChange={handleChange} placeholder=" " /></motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full overflow-hidden rounded-xl border border-cyan-300/20 bg-linear-to-r from-cyan-400/20 via-white/5 to-purple-400/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(34,211,238,.12)] transition hover:border-cyan-300/40 hover:shadow-[0_24px_80px_rgba(34,211,238,.2)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
                  <span className="relative inline-flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </span>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

export default ContactSection;
