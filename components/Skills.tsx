'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    skills: ['ReactJS', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Docker', 'QEMU', 'Git', 'Turborepo'],
  },
  {
    title: 'Security & Systems',
    skills: ['Linux Kernel Programming', 'Reverse Engineering', 'Bug Bounty', 'AI/RAG', 'Firmware Analysis'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 bg-bg-secondary rounded-xl border border-border"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-bg-primary border border-border text-text-muted text-sm rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}