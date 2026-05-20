'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-text-primary tracking-tight">
          Sharan Kumar<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1Ehq1aMPJFojqtE5ZXL68wLjt7XI2V2oA/view?usp=drive_link"
            className="text-sm font-medium px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-primary border-b border-border"
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1Ehq1aMPJFojqtE5ZXL68wLjt7XI2V2oA/view?usp=drive_link"
                className="text-sm font-medium px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors duration-200 text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}