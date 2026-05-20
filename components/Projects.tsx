'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Featured Work
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 bg-bg-primary rounded-xl border border-border hover:border-accent transition-colors duration-200"
            >
              <div className="mb-3">
                <span className="px-3 py-1 bg-accent-muted text-accent text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-text-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-bg-tertiary text-text-muted text-xs rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-text-muted text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
                >
                  <Github size={16} />
                  <span>View Source</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-text-muted">
                  <Github size={16} />
                  <span>Source Available on Request</span>
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Sharwesh05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
          >
            <Github size={18} />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}