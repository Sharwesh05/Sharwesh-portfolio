'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Linux Kernel Module Driver',
      tech: ['C', 'Linux Kernel Programming', 'Device Drivers', 'IRQ'],
      details: [
        'Designed and implemented custom Linux kernel modules for direct hardware interfacing, utilizing memory-mapped I/O and interrupt handling (IRQ). Developed character device drivers for streamlined user-space to kernel-space communication and ensured thread safety through semaphores. Extensively used kernel logging via printk and debugging tools like dmesg, while integrating with the /sys interface for module configuration.'
      ],
      tags: ['Kernel Module', 'Device Driver', 'Low-Level', 'Linux'],
      link: { label: 'Source Code', url: 'https://github.com/Sharwesh05/linux-omen-module' },
      category: 'Systems Programming'
    },
    {
      title: 'Speech to Speech AI Assistant',
      tech: ['FastAPI', 'ReactJS', 'Whisper', 'gTTS'],
      details: [
        'Built a real-time speech-to-speech AI assistant using FastAPI for backend state management and ReactJS for a responsive frontend with Tailwind CSS. The application enables seamless voice capture, converts it to text using Whisper, generates contextual responses with a local LLM, and plays back speech using gTTS, creating a smooth conversational loop.'
      ],
      tags: ['Conversational AI', 'Speech Recognition', 'Text-to-Speech'],
      link: { label: 'Source Code', url: 'https://github.com/visalakshi05/Speech_to_speech' },
      category: 'AI/ML'
    },
    {
      title: 'CyberHive – Cybersecurity Toolkit Platform',
      tech: ['Express.js', 'MongoDB', 'WebSockets', 'Docker', 'Trivy'],
      details: [
        'Developed a containerized cybersecurity platform featuring microservices for port scanning, intrusion detection, and Trivy-based vulnerability scanning. Real-time logs and threat insights are streamed via WebSockets to dynamic dashboards. Docker ensured service isolation and MongoDB provided persistent storage for logs and sessions, enabling scalable and efficient threat monitoring.'
      ],
      tags: ['Intrusion Detection', 'Port Scanning', 'Vulnerability Analysis', 'Microservices'],
      link: { label: 'Source Code', url: 'https://github.com/senthan-07/Cyberhive' },
      category: 'Cybersecurity'
    },
  ];

  // Fix: Add proper TypeScript typing for variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 px-4 sm:p-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Back to Home Button - Top Left */}
        <motion.div 
          className="absolute top-0 left-0 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <div className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 hover:border-gray-600/60 rounded-lg px-4 py-2 sm:px-6 sm:py-3 font-semibold text-white transition-all duration-300 flex items-center gap-2 sm:gap-3 font-mono shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <i className="fas fa-arrow-left text-sm sm:text-base group-hover:text-blue-400 transition-colors duration-300 group-hover:-translate-x-1"></i>
              <span className="text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">
                Back to Home
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-mono">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto font-mono">
            A collection of projects showcasing my expertise in systems programming, AI/ML, and cybersecurity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:border-gray-600/60 hover:bg-gray-900/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-xs font-medium text-blue-300 font-mono">
                  {proj.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight font-mono">
                {proj.title}
              </h3>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-800/60 border border-gray-600/40 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium font-mono transition-colors hover:bg-gray-700/60 hover:text-white"
                  >
                    <i className="fas fa-code text-xs mr-1"></i>
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Description */}
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed flex-grow font-mono">
                {proj.details[0]}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-3 py-1 rounded-full text-xs font-medium font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Project Link */}
              <div className="mt-auto">
                <a
                  href={proj.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-r from-gray-800/60 to-gray-900/60 border border-gray-600/40 hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-400/50 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 font-mono backdrop-blur-sm"
                >
                  <i className="fab fa-github text-lg group-hover:text-blue-400 transition-colors"></i>
                  <span className="group-hover:text-blue-300 transition-colors">{proj.link.label}</span>
                  <i className="fas fa-external-link-alt text-sm group-hover:text-blue-400 transition-colors"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Section */}
        <MoreProjects />
      </div>
    </div>
  );
}

export function MoreProjects() {
  return (
    <motion.div 
      className="flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <a
        href="https://github.com/Sharwesh05"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 hover:border-gray-600/60 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300 flex items-center gap-4 font-mono shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        {/* Animated GitHub Icon */}
        <div className="relative">
          <i className="fab fa-github text-2xl group-hover:text-blue-400 transition-colors duration-300"></i>
          <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>
        
        <span className="text-lg group-hover:text-blue-300 transition-colors duration-300">
          Explore More Projects on GitHub
        </span>
        
        <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300 group-hover:text-blue-400"></i>
      </a>
    </motion.div>
  );
}
