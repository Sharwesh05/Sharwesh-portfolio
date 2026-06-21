'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-semibold text-text-primary tracking-tight font-[var(--font-display)]">
              Sharan Kumar<span className="text-accent">.</span>
            </a>
            <p className="text-xs text-text-muted mt-1">Cybersecurity Engineer & Security Researcher</p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
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
                className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            © {currentYear} Sharan Kumar. All rights reserved.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400" style={{ animation: 'bounce-subtle 2s ease-in-out infinite' }} /> using Next.js & Tailwind
          </p>
          <button
            onClick={scrollToTop}
            className="hidden sm:flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors group"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}