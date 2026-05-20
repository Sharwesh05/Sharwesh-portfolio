'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = {
  institution: 'Shiv Nadar University, Chennai',
  degree: 'B.Tech – Computer Science (Cyber Security)',
  period: 'Aug 2023 – Jun 2027',
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 bg-bg-primary rounded-xl border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-muted rounded-lg">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text-primary mb-1">{education.institution}</h3>
              <p className="text-accent font-medium mb-2">{education.degree}</p>
              <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {education.period}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}