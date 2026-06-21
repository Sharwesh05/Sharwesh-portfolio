'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const education = {
  institution: 'Shiv Nadar University, Chennai',
  degree: 'B.Tech – Computer Science (Cyber Security)',
  period: 'Aug 2023 – Jun 2027',
  location: 'Chennai, India',
  highlights: [
    'Specialization in Cybersecurity',
    'Active CTF team participant',
    'Open source contributor',
  ],
};

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight font-[var(--font-display)]">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 sm:p-8 max-w-6xl"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="p-3.5 bg-accent/10 rounded-xl flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-text-primary mb-1 font-[var(--font-display)]">{education.institution}</h3>
              <p className="text-accent font-semibold mb-3">{education.degree}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-text-muted text-sm mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-accent/60" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent/60" />
                  {education.location}
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                {education.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2.5 text-text-secondary text-sm"
                  >
                    <BookOpen size={13} className="text-accent-green flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}