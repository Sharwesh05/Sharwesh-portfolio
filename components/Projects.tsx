'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Folder } from 'lucide-react';

const projects = [
  {
    title: 'IAM with OpenVPN Security Platform',
    description: 'Full-stack Identity and Access Management platform automating employee lifecycle workflows with OpenVPN, TOTP-based MFA, and Role-Based Access Control via JWTs. Includes RAG-powered AI security assistant.',
    tech: ['FastAPI', 'MongoDB', 'React', 'OpenVPN', 'JWT', 'MFA', 'LangChain', 'Groq LLM'],
    tags: ['Identity & Access Management', 'Zero Trust', 'AI Security'],
    link: '#',
    category: 'Security',
  },
  {
    title: 'Linux Kernel Module Driver',
    description: 'Custom kernel modules enabling direct hardware interfacing. Engineered character device drivers for kernel-to-user space communication with memory-mapped I/O, IRQ handling, and synchronization primitives.',
    tech: ['C', 'Linux Kernel', 'Device Drivers', 'IRQ', 'Semaphores'],
    tags: ['Kernel Programming', 'Systems', 'Low-Level'],
    link: 'https://github.com/Sharwesh05/linux-omen-module',
    category: 'Systems',
  },
  {
    title: 'QEMU VM Management System',
    description: 'Full-stack platform to automate and manage QEMU-based virtual machine deployments with routed networking environments using Linux PCs, Cisco routers, and TAP interfaces.',
    tech: ['FastAPI', 'React', 'QEMU', 'Docker', 'TAP Interfaces'],
    tags: ['Virtualization', 'Networking', 'Automation'],
    link: 'https://github.com/Sharwesh05/Qemu-VMprototype',
    category: 'Infrastructure',
  },
  {
    title: 'CyberHive – Cybersecurity Toolkit',
    description: 'Containerized cybersecurity platform with microservices for automated intrusion detection, port scanning, and vulnerability analysis. Real-time monitoring with WebSocket streaming.',
    tech: ['Express.js', 'MongoDB', 'WebSockets', 'Docker', 'Trivy'],
    tags: ['Intrusion Detection', 'Container Security', 'Vulnerability Analysis'],
    link: '#',
    category: 'Security',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const categoryColors: Record<string, string> = {
  Security: 'bg-accent/10 text-accent border-accent/20',
  Systems: 'bg-accent-green/10 text-accent-green border-accent-green/20',
  Infrastructure: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight font-[var(--font-display)]">
            Featured Work
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm rounded-xl font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'glass-card text-text-muted hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group glass-card rounded-2xl p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Folder size={20} className="text-accent" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[project.category] || 'bg-accent/10 text-accent border-accent/20'}`}>
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 font-[var(--font-display)]">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-bg-tertiary/50 text-text-muted text-xs rounded-md border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-text-muted/60 text-xs">
                      #{tag.replace(/ /g, '')}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-all duration-200 group/link"
                  >
                    <Github size={15} />
                    <span>View Source</span>
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-text-muted/60">
                    <Github size={15} />
                    Source Available on Request
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Sharwesh05"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 glass-card rounded-xl text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 font-medium"
          >
            <Github size={18} />
            <span>View All on GitHub</span>
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}