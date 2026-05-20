'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const name = "Sharan Kumar";
const chars = ['0', '1', '0', '1'];

function AnimatedName() {
  const [displayName, setDisplayName] = useState(name);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const newName = name.split('').map((char, i) => {
        if (char === ' ' || char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          return char;
        }
        return i < index ? chars[index % 4] : char;
      }).join('');
      setDisplayName(newName);
      index++;
      if (index > name.length) {
        clearInterval(interval);
        setDisplayName(name);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <>{displayName}</>;
}

export default function Hero() {
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFinal(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
            >
              Cybersecurity Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight mb-6"
            >
              {showFinal ? (
                <AnimatedName />
              ) : (
                <span className="text-text-muted">Loading...</span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-text-muted mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Building secure systems, one patch at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8"
            >
              <a
                href="https://drive.google.com/file/d/1Ehq1aMPJFojqtE5ZXL68wLjt7XI2V2oA/view?usp=drive_link"
                className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
              >
                View Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <a
                href="https://github.com/Sharwesh05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharan-kumar-m-b4742a2b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sharweshraajan@gmail.com"
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-border">
              <img
                src="/smallboy.jpeg"
                alt="Sharan Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}