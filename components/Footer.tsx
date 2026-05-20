'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} Sharan Kumar. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            Built with Next.js and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}