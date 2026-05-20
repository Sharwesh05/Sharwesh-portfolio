'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Trophy, Calendar } from 'lucide-react';

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
    <section id="certifications" className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Certifications & Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Recognition
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-bg-primary rounded-xl border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold text-text-primary">Certifications</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text-secondary">
                <Shield size={16} className="mt-1 text-accent flex-shrink-0" />
                <span>Ethical Hacker Certification</span>
              </li>
              <li className="flex items-start gap-2 text-text-secondary">
                <Shield size={16} className="mt-1 text-accent flex-shrink-0" />
                <span>Introduction to Cybersecurity</span>
              </li>
            </ul>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-bg-primary rounded-xl border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold text-text-primary">Hackathons</h3>
            </div>
            <ul className="space-y-3">
              {hackathons.map((hackathon) => (
                <li key={hackathon.name} className="flex items-center justify-between">
                  <span className="text-text-secondary">{hackathon.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    hackathon.status === 'Finalist'
                      ? 'bg-accent-muted text-accent'
                      : 'bg-bg-tertiary text-text-muted'
                  }`}>
                    {hackathon.status}
                  </span>
                </li>
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
          className="mt-6 p-6 bg-bg-primary rounded-xl border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-semibold text-text-primary">Workshops</h3>
          </div>
          <ul className="space-y-2">
            {workshops.map((workshop, index) => (
              <li key={index} className="flex items-start gap-2 text-text-secondary">
                <span className="text-accent">★</span>
                <span>{workshop}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}