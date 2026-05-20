'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Network, Code } from 'lucide-react';

const securityDomains = [
  { icon: Network, label: 'Network Security' },
  { icon: Shield, label: 'Firmware Security' },
  { icon: Lock, label: 'Access Control' },
  { icon: Code, label: 'Kernel Development' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I&apos;m a cybersecurity enthusiast and systems programmer with a passion for building secure systems.
              My interest lies in exploring the intersection of software engineering and security research.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I enjoy diving deep into low-level systems, understanding how things work under the hood,
              and applying that knowledge to build more secure solutions. From kernel-level programming
              to firmware hardening, I find security challenges across the stack engaging.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Outside of security work, I keep up with the latest developments in the field, participate in
              CTF competitions, and contribute to open source projects. I believe in continuous learning
              and sharing knowledge with the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {securityDomains.map((domain, index) => (
              <motion.div
                key={domain.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-bg-primary rounded-xl border border-border"
              >
                <domain.icon className="w-6 h-6 text-accent mb-3" />
                <p className="font-medium text-text-primary">{domain.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}