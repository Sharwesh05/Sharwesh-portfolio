'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:sharweshraajan@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4 font-[var(--font-display)]">
            Let&apos;s Connect
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a conversation about security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
                <div className={`relative rounded-xl border transition-all duration-300 ${focused === 'name' ? 'border-accent/50 shadow-lg shadow-accent/10' : 'border-border'}`}>
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent pl-10 pr-4 py-3 text-text-primary placeholder-text-muted/50 rounded-xl outline-none text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
                <div className={`relative rounded-xl border transition-all duration-300 ${focused === 'email' ? 'border-accent/50 shadow-lg shadow-accent/10' : 'border-border'}`}>
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent pl-10 pr-4 py-3 text-text-primary placeholder-text-muted/50 rounded-xl outline-none text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                <div className={`relative rounded-xl border transition-all duration-300 ${focused === 'message' ? 'border-accent/50 shadow-lg shadow-accent/10' : 'border-border'}`}>
                  <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-text-muted" />
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    className="w-full bg-transparent pl-10 pr-4 py-3 text-text-primary placeholder-text-muted/50 rounded-xl outline-none text-sm resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            <p className="text-text-muted text-sm mb-2">Or reach out directly</p>

            {[
              {
                href: 'mailto:sharweshraajan@gmail.com',
                icon: Mail,
                label: 'Email',
                detail: 'sharweshraajan@gmail.com',
                color: 'accent',
              },
              {
                href: 'https://github.com/Sharwesh05',
                icon: Github,
                label: 'GitHub',
                detail: '@Sharwesh05',
                color: 'accent-green',
                external: true,
              },
              {
                href: 'https://www.linkedin.com/in/sharan-kumar-m-b4742a2b3/',
                icon: Linkedin,
                label: 'LinkedIn',
                detail: 'Sharan Kumar M',
                color: 'accent-purple',
                external: true,
              },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group glass-card rounded-xl p-4 flex items-center gap-4 hover:border-accent/30 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-${social.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon size={20} className={`text-${social.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text-primary text-sm">{social.label}</p>
                  <p className="text-text-muted text-xs truncate">{social.detail}</p>
                </div>
                <ArrowRight size={16} className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}