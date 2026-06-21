'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'glass border-b border-glass-border shadow-lg shadow-black/20'
          : 'bg-transparent'
        }`}
    >
      <div className="relative z-50 max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-md bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Terminal size={16} className="text-accent" />
          </div>
          <span className="text-lg font-semibold text-text-primary tracking-tight font-[var(--font-display)]">
            Sharan Kumar
            <span className="text-accent animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm px-3 py-2 rounded-lg transition-all duration-200 ${isActive
                    ? 'text-accent bg-accent/10'
                    : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                  }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1Ehq1aMPJFojqtE5ZXL68wLjt7XI2V2oA/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm font-medium px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />

            {/* Menu Content */}
            <div className="relative flex flex-col items-center justify-center h-full px-6 -mt-16">
              <div className="flex flex-col items-center gap-2 w-full max-w-xs">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`w-full text-center text-lg py-3 px-6 rounded-xl transition-all duration-200 ${isActive
                          ? 'text-accent bg-accent/10 font-medium'
                          : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                        }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
                <motion.a
                  href="https://drive.google.com/file/d/1Ehq1aMPJFojqtE5ZXL68wLjt7XI2V2oA/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                  className="w-full text-center text-lg font-medium mt-4 px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent-hover transition-all duration-200"
                >
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}