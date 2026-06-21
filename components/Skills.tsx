'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Wrench, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'accent',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'accent-green',
    skills: ['ReactJS', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'accent-purple',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'accent-gold',
    skills: ['Docker', 'QEMU', 'Git', 'Turborepo'],
  },
  {
    title: 'Security & Systems',
    icon: Shield,
    color: 'accent',
    skills: ['Linux Kernel Programming', 'Reverse Engineering', 'Bug Bounty', 'AI/RAG', 'Firmware Analysis'],
  },
];

const colorMap: Record<string, { bg: string; text: string; tagBg: string; tagBorder: string; tagHover: string }> = {
  'accent': { bg: 'bg-accent/10', text: 'text-accent', tagBg: 'bg-accent/5', tagBorder: 'border-accent/10', tagHover: 'hover:border-accent/40 hover:text-accent hover:bg-accent/10' },
  'accent-green': { bg: 'bg-accent-green/10', text: 'text-accent-green', tagBg: 'bg-accent-green/5', tagBorder: 'border-accent-green/10', tagHover: 'hover:border-accent-green/40 hover:text-accent-green hover:bg-accent-green/10' },
  'accent-purple': { bg: 'bg-accent-purple/10', text: 'text-accent-purple', tagBg: 'bg-accent-purple/5', tagBorder: 'border-accent-purple/10', tagHover: 'hover:border-accent-purple/40 hover:text-accent-purple hover:bg-accent-purple/10' },
  'accent-gold': { bg: 'bg-accent-gold/10', text: 'text-accent-gold', tagBg: 'bg-accent-gold/5', tagBorder: 'border-accent-gold/10', tagHover: 'hover:border-accent-gold/40 hover:text-accent-gold hover:bg-accent-gold/10' },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight font-[var(--font-display)]">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`${colors.bg} p-2.5 rounded-xl`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                      className={`px-3 py-1.5 ${colors.tagBg} border ${colors.tagBorder} text-text-muted text-sm rounded-lg ${colors.tagHover} transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}