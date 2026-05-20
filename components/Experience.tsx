'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Security Research Intern',
    company: 'Indian Institute of Technology (IIT)',
    period: '2024',
    type: 'Internship',
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
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 1;
            return (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full border-4 border-bg-primary -translate-x-1/2 -top-1" />

                {/* Content - alternating left/right */}
                <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto pl-6'}`}>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">{exp.title}</h3>
                  <p className="text-accent font-medium mb-2">{exp.company}</p>
                  <div className={`flex items-center gap-2 text-text-muted text-sm mb-4`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span className="mx-2">·</span>
                    <span>{exp.type}</span>
                  </div>
                  <p className="text-text-secondary mb-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 mb-4`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-bg-tertiary text-text-muted text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className={`space-y-2`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start gap-2 text-text-secondary`}>
                        <span className="text-accent">★</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}