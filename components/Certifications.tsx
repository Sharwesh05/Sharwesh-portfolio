'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Trophy, Calendar, Star } from 'lucide-react';

const hackathons = [
  { name: 'Envithon', status: 'Finalist' },
  { name: 'Srijan-26 (Atos)', status: 'Finalist' },
  { name: 'SIH', status: 'Participant' },
  { name: 'SNUHacks', status: 'Participant' },
];

const workshops = [
  'DevSecOps Workshops – Hands-on experience with secure CI/CD pipelines, automated testing, and security tooling',
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">Certifications & Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight font-[var(--font-display)]">
            Recognition
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                whileInView={{ rotate: [0, -10, 10, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-2.5 bg-accent/10 rounded-xl"
              >
                <Award className="w-5 h-5 text-accent" />
              </motion.div>
              <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Ethical Hacker Certification',
                'Introduction to Cybersecurity',
              ].map((cert, i) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-text-secondary group"
                >
                  <div className="mt-0.5 p-1 rounded bg-accent/10 flex-shrink-0">
                    <Shield size={12} className="text-accent" />
                  </div>
                  <span className="group-hover:text-text-primary transition-colors">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                whileInView={{ y: [0, -5, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-2.5 bg-accent-gold/10 rounded-xl"
              >
                <Trophy className="w-5 h-5 text-accent-gold" />
              </motion.div>
              <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">Hackathons</h3>
            </div>
            <ul className="space-y-3">
              {hackathons.map((hackathon, i) => (
                <motion.li
                  key={hackathon.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  className="flex items-center justify-between group"
                >
                  <span className="text-text-secondary group-hover:text-text-primary transition-colors">{hackathon.name}</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                    hackathon.status === 'Finalist'
                      ? 'bg-accent-gold/10 text-accent-gold border-accent-gold/20 shadow-sm shadow-accent-gold/10'
                      : 'bg-bg-tertiary/50 text-text-muted border-border'
                  }`}>
                    {hackathon.status === 'Finalist' && <Star size={10} className="inline mr-1 -mt-0.5" />}
                    {hackathon.status}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-accent-purple/10 rounded-xl">
              <Calendar className="w-5 h-5 text-accent-purple" />
            </div>
            <h3 className="text-lg font-bold text-text-primary font-[var(--font-display)]">Workshops</h3>
          </div>
          <ul className="space-y-2">
            {workshops.map((workshop, index) => (
              <li key={index} className="flex items-start gap-2.5 text-text-secondary text-sm">
                <span className="text-accent-green mt-0.5 flex-shrink-0">▹</span>
                <span>{workshop}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}