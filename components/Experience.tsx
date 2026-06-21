'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GitBranch } from 'lucide-react';

const experiences = [
  {
    title: 'Security Research Intern',
    company: 'Indian Institute of Technology (IIT)',
    period: '2024',
    type: 'Internship',
    icon: Briefcase,
    description: 'Researched and implemented firmware hardening techniques for the OpenWrt One router (MediaTek MT7981B SoC). Engineered compile-time security features within a Linux-based build environment.',
    technologies: ['Linux', 'Firmware Analysis', 'ASLR', 'PIE', 'SSP', 'Secure Boot'],
    achievements: [
      'Implemented Address Space Layout Randomization (ASLR) and Position Independent Executables (PIE)',
      'Conducted systematic validation of hardening improvements through rigorous security testing',
    ],
  },
  {
    title: 'Open Source Contributor – Linux Kernel',
    company: 'Linux Kernel Mainline',
    period: '2024',
    type: 'Open Source',
    icon: GitBranch,
    description: 'Identified and resolved missing mute LED support for specific HP laptops within the Linux kernel. Engineered driver-level fixes utilizing Linux Kernel APIs.',
    technologies: ['C', 'Linux Kernel APIs', 'Device Drivers', 'Kernel Debugging'],
    achievements: [
      'Successfully merged patches into the official Linux kernel source tree',
      'Collaborated directly with kernel maintainers to refine code quality',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight font-[var(--font-display)]">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Glowing Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-accent/40 via-accent-green/30 to-accent-purple/20" />
            <div
              className="absolute inset-0 w-full bg-gradient-to-b from-accent/60 via-transparent to-transparent blur-sm"
              style={{ animation: 'glow-line 3s linear infinite' }}
            />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 -translate-x-1/2 top-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md" />
                    <div className="relative w-3 h-3 bg-accent rounded-full border-2 border-bg-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary font-[var(--font-display)]">{exp.title}</h3>
                      <p className="text-accent font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="flex items-center gap-1.5 text-text-muted text-sm">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{exp.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-bg-tertiary/50 text-text-muted text-xs rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-text-secondary text-sm">
                        <span className="text-accent-green mt-0.5 flex-shrink-0">▹</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}