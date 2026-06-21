'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Shield, Terminal } from 'lucide-react';

const fullName = "Sharan Kumar";
const bootLines = [
  "$ initializing secure shell...",
  "$ loading encryption modules...",
  "$ establishing connection...",
  "$ access granted ✓",
];

function TerminalBoot({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= bootLines.length) {
      const timer = setTimeout(onComplete, 400);
      return () => clearTimeout(timer);
    }

    const line = bootLines[currentLine];
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = line.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(c => c + 1);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, onComplete]);

  return (
    <div className="font-mono text-xs sm:text-sm text-accent/70 space-y-1">
      {lines.map((line, i) => (
        <div key={i}>
          {line}
          {i === lines.length - 1 && currentLine < bootLines.length && (
            <span className="inline-block w-2 h-4 bg-accent/70 ml-0.5" style={{ animation: 'blink 1s step-end infinite' }} />
          )}
        </div>
      ))}
    </div>
  );
}

function AnimatedName() {
  const [displayName, setDisplayName] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [glitchText, setGlitchText] = useState('');

  // Initial typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayName(fullName.substring(0, index));
        setGlitchText(fullName.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Looping binary glitch effect
  useEffect(() => {
    if (!isComplete) return;

    const glitchInterval = setInterval(() => {
      // 35% chance to trigger a glitch on each tick
      if (Math.random() > 0.35) return;

      const chars = fullName.split('');
      // Pick 1 to 4 random characters to glitch
      const numGlitches = Math.floor(Math.random() * 4) + 1;

      for (let i = 0; i < numGlitches; i++) {
        const randomIdx = Math.floor(Math.random() * chars.length);
        if (chars[randomIdx] !== ' ') {
          chars[randomIdx] = Math.random() > 0.5 ? '0' : '1';
        }
      }

      setGlitchText(chars.join(''));

      // Revert back to normal quickly
      setTimeout(() => {
        setGlitchText(fullName);
      }, 150 + Math.random() * 200);

    }, 400);

    return () => clearInterval(glitchInterval);
  }, [isComplete]);

  return (
    <span className="gradient-text font-mono tracking-tight">
      {isComplete ? glitchText : displayName}
      {!isComplete && (
        <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle" style={{ animation: 'blink 1s step-end infinite' }} />
      )}
    </span>
  );
}

export default function Hero() {
  const [bootComplete, setBootComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (bootComplete) {
      const timer = setTimeout(() => setShowContent(true), 200);
      return () => clearTimeout(timer);
    }
  }, [bootComplete]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        {/* Terminal Boot Sequence */}
        {!bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-[60vh]"
          >
            <div className="glass-card rounded-xl p-6 max-w-md w-full shadow-lg">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-text-muted font-mono">terminal</span>
              </div>
              <TerminalBoot onComplete={() => setBootComplete(true)} />
            </div>
          </motion.div>
        )}

        {/* Main Content */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 text-sm shadow-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green" />
                </span>
                <span className="text-text-muted">Available for opportunities</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 flex items-center justify-center md:justify-start gap-2"
              >
                <Shield size={14} />
                Cybersecurity Engineer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-[var(--font-display)]"
              >
                <AnimatedName />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-text-muted mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
              >
                Building secure systems, one patch at a time.
                <span className="block text-sm mt-2 text-text-muted/60">
                  Firmware hardening · Kernel development · Vulnerability research
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-8"
              >
                <a
                  href="https://drive.google.com/file/d/1Ehq1aMPJFojqtE5ZXL68wLjt7XI2V2oA/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Resume
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 glass-card rounded-xl text-text-primary font-medium transition-all duration-300 hover:border-accent/20 shadow-sm"
                >
                  <Mail size={16} />
                  Get in Touch
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center justify-center md:justify-start gap-3"
              >
                {[
                  { href: 'https://github.com/Sharwesh05', icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/sharan-kumar-m-b4742a2b3/', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:sharweshraajan@gmail.com', icon: Mail, label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group relative p-3 rounded-xl glass-card hover:border-accent/20 transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon size={18} className="text-text-muted group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0 order-first md:order-last"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-accent via-accent-green to-accent-purple opacity-15 blur-xl" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent via-accent-green to-accent-purple opacity-30" style={{ animation: 'spin-slow 8s linear infinite' }} />
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white shadow-xl">
                  <img
                    src="/smallboy.jpeg"
                    alt="Sharan Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}