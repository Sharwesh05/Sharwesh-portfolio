'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Network, Code, Cpu, Bug } from 'lucide-react';

const securityDomains = [
  { icon: Network, label: 'Network Security', description: 'Securing infrastructure and protocols', color: 'accent' },
  { icon: Shield, label: 'Firmware Security', description: 'Hardening embedded systems', color: 'accent-green' },
  { icon: Lock, label: 'Access Control', description: 'IAM and zero-trust architecture', color: 'accent-purple' },
  { icon: Code, label: 'Kernel Development', description: 'Linux kernel patches & drivers', color: 'accent' },
  { icon: Bug, label: 'Bug Bounty', description: 'Vulnerability discovery & reporting', color: 'accent-gold' },
  { icon: Cpu, label: 'Reverse Engineering', description: 'Binary analysis & exploitation', color: 'accent-green' },
];

const colorMap: Record<string, { bg: string; text: string; glow: string }> = {
  'accent': { bg: 'bg-accent/10', text: 'text-accent', glow: 'group-hover:shadow-accent/20' },
  'accent-green': { bg: 'bg-accent-green/10', text: 'text-accent-green', glow: 'group-hover:shadow-accent-green/20' },
  'accent-purple': { bg: 'bg-accent-purple/10', text: 'text-accent-purple', glow: 'group-hover:shadow-accent-purple/20' },
  'accent-gold': { bg: 'bg-accent-gold/10', text: 'text-accent-gold', glow: 'group-hover:shadow-accent-gold/20' },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight font-[var(--font-display)]">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a cybersecurity enthusiast and systems programmer with a passion for building secure systems.
                My interest lies in exploring the intersection of software engineering and security research.
              </p>
              <p>
                I enjoy diving deep into low-level systems, understanding how things work under the hood,
                and applying that knowledge to build more secure solutions. From kernel-level programming
                to firmware hardening, I find security challenges across the stack engaging.
              </p>
              <p>
                Outside of security work, I keep up with the latest developments in the field, participate in
                CTF competitions, and contribute to open source projects. I believe in continuous learning
                and sharing knowledge with the community.
              </p>
            </div>
          </motion.div>

          {/* Domain Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {securityDomains.map((domain, index) => {
              const colors = colorMap[domain.color];
              return (
                <motion.div
                  key={domain.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className={`group glass-card rounded-xl p-5 cursor-default ${colors.glow} hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`${colors.bg} w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <domain.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <p className="font-semibold text-text-primary text-sm mb-1">{domain.label}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{domain.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}