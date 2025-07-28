'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Calendar, Terminal, Code, Database, Server, Globe, Smartphone, Monitor } from 'lucide-react'

const HeroSection = () => {
    const techStack = {
        Frontend: {
            subtitle: 'Modern web interfaces',
            items: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'JavaScript', 'HTML/CSS'],
        },
        Backend: {
            subtitle: 'Server-side solutions',
            items: ['Node.js', 'Python', 'FastAPI', 'WebSockets'],
        },
        Database: {
            subtitle: 'Data management',
            items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'],
        },
        'Systems & Low-Level': {
            subtitle: 'Operating system & internals',
            items: ['C', 'C++', 'Linux', 'Kernel Modules', 'Low-Level Debugging'],
        },
        'Cyber & Security': {
            subtitle: 'Secure software practices',
            items: ['Reverse Engineering', 'CTF Challenges', 'Network Analysis', 'Cryptography'],
        },
        'Tools & DevOps': {
            subtitle: 'Development ecosystem',
            items: ['Git', 'Docker', 'DevOps', 'Open Source Contribution'],
        },
    };

    const projects = [
        {
            title: "Linux Kernel Module Driver",
            description: "Custom kernel modules for hardware interfacing with IRQ handling"
        },
        {
            title: "Speech to Speech AI Assistant",
            description: "Real-time conversational AI with Whisper and gTTS integration"
        },
        {
            title: "CyberHive – Cybersecurity Toolkit",
            description: "Containerized platform for intrusion detection and vulnerability scanning"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 p-2 sm:p-4 lg:p-6 xl:p-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
                {/* Header/Navigation */}
                <motion.div 
                    className="w-full h-14 sm:h-16 lg:h-18 bg-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-between px-4 sm:px-6 lg:px-8 border border-gray-700/30 flex-shrink-0"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <a href='/' className="text-white font-bold text-xl sm:text-2xl lg:text-3xl font-mono">
                        Sharwesh<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">05</span>
                    </a>

                    <nav className="flex space-x-3 sm:space-x-6 lg:space-x-8 text-gray-300 text-sm sm:text-base lg:text-lg font-mono">
                        <a href="/projects" className="hover:text-white transition-colors font-medium">
                            Projects
                        </a>
                        <a href="/about" className="hover:text-white transition-colors font-medium">
                            About
                        </a>
                        <a href="https://drive.google.com/file/d/1oreD0azQtSIClLkQNgZl0_gyCON2RBwj/view?usp=sharing" className="hover:text-white transition-colors font-medium hidden sm:block">
                            Resume
                        </a>
                        <a href="https://drive.google.com/file/d/1oreD0azQtSIClLkQNgZl0_gyCON2RBwj/view?usp=sharing" className="hover:text-white transition-colors font-medium sm:hidden">
                            CV
                        </a>
                    </nav>
                </motion.div>

                {/* Mobile Layout - Stack everything vertically */}
                <div className="lg:hidden flex flex-col gap-4 flex-1">
                    {/* Mobile Introduction */}
                    <motion.div 
                        className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/40"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="font-bold text-white leading-tight font-mono mb-4">
                            <div className="text-3xl">I</div>
                            <div className="text-gray-300 text-xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Sharan Kumar</span>
                            </div>
                        </h1>
                        <div className="text-gray-300 text-sm leading-relaxed font-mono space-y-3">
                            <p>
                                I am a <span className="text-white font-semibold">passionate Full Stack Developer</span> with expertise in modern web technologies.
                            </p>
                            <p>
                                My work is driven by <span className="text-white font-semibold">hands-on learning</span> and <span className="text-white font-semibold">real-world problem solving</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Mobile Profile */}
                    <motion.div 
                        className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/40 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl border-4 border-gray-700/50">
                            <img
                                src="/smallboy.jpeg"
                                alt="Sharan Kumar M"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
                            <span className="font-medium font-mono">Currently on:</span>
                            <span className="font-mono font-medium text-gray-400">Linux Ricing</span>
                        </div>
                    </motion.div>

                    {/* Mobile Tech Stack - With Motion Animations */}
                    <motion.div 
                        className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/40"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4 font-mono text-center">Tech Stack</h3>
                        
                        {/* Scrolling Tech Stack Rows for Mobile */}
                        <div className="space-y-3 overflow-hidden">
                            {/* Frontend Row */}
                            <div className="flex items-center overflow-hidden">
                                <motion.div
                                    className="flex gap-2"
                                    animate={{ x: [-20, -120] }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                >
                                    {[...Array(2)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-2 flex-shrink-0">
                                            {['React.js', 'Next.js', 'TypeScript'].map((tech, index) => (
                                                <div key={`${setIndex}-${index}`} className="px-3 py-2 bg-gray-700/40 rounded-lg border border-gray-600/40 flex-shrink-0">
                                                    <span className="text-xs font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Backend Row - Reverse Direction */}
                            <div className="flex items-center overflow-hidden">
                                <motion.div
                                    className="flex gap-2"
                                    animate={{ x: [50, -50] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    {[...Array(2)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-2 flex-shrink-0">
                                            {['Node.js', 'Python', 'FastAPI'].map((tech, index) => (
                                                <div key={`${setIndex}-${index}`} className="px-3 py-2 bg-gray-700/40 rounded-lg border border-gray-600/40 flex-shrink-0">
                                                    <span className="text-xs font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Database Row */}
                            <div className="flex items-center overflow-hidden">
                                <motion.div
                                    className="flex gap-2"
                                    animate={{ x: [-30, -100] }}
                                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                >
                                    {[...Array(2)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-2 flex-shrink-0">
                                            {['MongoDB', 'PostgreSQL', 'MySQL'].map((tech, index) => (
                                                <div key={`${setIndex}-${index}`} className="px-3 py-2 bg-gray-700/40 rounded-lg border border-gray-600/40 flex-shrink-0">
                                                    <span className="text-xs font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Systems Row - Reverse Direction */}
                            <div className="flex items-center overflow-hidden">
                                <motion.div
                                    className="flex gap-2"
                                    animate={{ x: [60, -40] }}
                                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                                >
                                    {[...Array(2)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-2 flex-shrink-0">
                                            {['C/C++', 'Linux', 'Kernel'].map((tech, index) => (
                                                <div key={`${setIndex}-${index}`} className="px-3 py-2 bg-gray-700/40 rounded-lg border border-gray-600/40 flex-shrink-0">
                                                    <span className="text-xs font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Tools Row */}
                            <div className="flex items-center overflow-hidden">
                                <motion.div
                                    className="flex gap-2"
                                    animate={{ x: [-40, -110] }}
                                    transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                                >
                                    {[...Array(2)].map((_, setIndex) => (
                                        <div key={setIndex} className="flex gap-2 flex-shrink-0">
                                            {['Git', 'Docker', 'DevOps'].map((tech, index) => (
                                                <div key={`${setIndex}-${index}`} className="px-3 py-2 bg-gray-700/40 rounded-lg border border-gray-600/40 flex-shrink-0">
                                                    <span className="text-xs font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile Projects */}
                    <motion.div 
                        className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/40"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4 font-mono">Recent Projects</h3>
                        <div className="space-y-3">
                            {projects.slice(0, 2).map((project, index) => (
                                <motion.div 
                                    key={index} 
                                    className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/20"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                                >
                                    <h4 className="text-white font-medium text-sm mb-1 font-mono">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs font-mono">
                                        {project.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-4 border-t border-gray-700/30 pt-3">
                            <a href="/projects" className="text-sm text-gray-400 hover:text-white font-medium font-mono transition-colors">
                                View All Projects →
                            </a>
                        </div>
                    </motion.div>

                    {/* Mobile Social Links */}
                    <motion.div 
                        className="grid grid-cols-4 gap-2"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        <a href="https://github.com/Sharwesh05" target="_blank" rel="noopener noreferrer"
                           className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700/40 flex items-center justify-center h-14 hover:bg-gray-800/60 transition-colors">
                            <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/sharan-kumar-m-b4742a2b3/" target="_blank" rel="noopener noreferrer"
                           className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700/40 flex items-center justify-center h-14 hover:bg-gray-800/60 transition-colors">
                            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                        <a href="mailto:sharweshraajan@gmail.com"
                           className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700/40 flex items-center justify-center h-14 hover:bg-gray-800/60 transition-colors">
                            <Mail className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                        <a href="https://calendly.com/sharweshraajan" target="_blank" rel="noopener noreferrer"
                           className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700/40 flex items-center justify-center h-14 hover:bg-gray-800/60 transition-colors">
                            <Calendar className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                        </a>
                    </motion.div>
                </div>

                {/* Desktop Layout - Original grid for large screens */}
                <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 flex-1 min-h-0">
                    {/* Left Column - Introduction */}
                    <div className="lg:col-span-4 flex flex-col gap-6 min-h-0">
                        {/* Main Introduction */}
                        <motion.div 
                            className="bg-gray-900/60 backdrop-blur-sm rounded-2xl flex-1 p-8 border border-gray-700/40 min-h-0"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="h-full flex flex-col justify-end items-start">
                                <h1 className="font-bold text-white leading-tight font-mono">
                                    <div className="text-4xl xl:text-5xl 2xl:text-6xl">I</div>
                                    <div className="text-gray-300 text-2xl xl:text-3xl 2xl:text-4xl">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Sharan Kumar</span>
                                    </div>
                                </h1>
                            </div>
                        </motion.div>

                        {/* Bio Section */}
                        <motion.div 
                            className="bg-gray-900/60 backdrop-blur-sm rounded-2xl flex-1 p-8 border border-gray-700/40 min-h-0"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="h-full flex flex-col justify-center space-y-4 text-gray-300 text-base leading-relaxed font-mono">
                                <p>
                                    I am a <span className="text-white font-semibold">passionate Full Stack Developer</span> with expertise in modern web technologies and a strong foundation in software engineering principles.
                                </p>
                                <p>
                                    My work is driven by <span className="text-white font-semibold">hands-on learning</span> and <span className="text-white font-semibold">real-world problem solving</span>
                                </p>
                                <p>
                                    I also have a deep interest in <span className="text-white font-semibold">low-level systems</span>, from kernel modules.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Column - Profile Card */}
                    <div className="lg:col-span-4 flex flex-col gap-6 min-h-0">
                        {/* Profile Card */}
                        <motion.div 
                            className="bg-gray-900/60 backdrop-blur-sm rounded-2xl flex-1 p-8 border border-gray-700/40 relative overflow-hidden group min-h-0"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-40 h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto flex items-center justify-center shadow-2xl border-4 border-gray-700/50">
                                        <img
                                            src="/smallboy.jpeg"
                                            alt="Sharan Kumar M"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Current Status Section */}
                        <motion.div 
                            className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/40 flex items-center justify-center py-5 flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-base font-medium font-mono">Currently on:</span>
                                <span className="font-mono font-medium text-sm text-gray-400">Linux Ricing</span>
                            </div>
                        </motion.div>

                        {/* Tech Stack Section - COMPLETE WITH ALL CATEGORIES */}
                        <motion.div 
                            className="bg-gray-900/60 backdrop-blur-sm rounded-2xl flex-1 p-8 border border-gray-700/40 min-h-0 relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/40 pointer-events-none"></div>
                            <div className="h-full flex flex-col justify-center text-center relative z-10">
                                <h3 className="text-xl xl:text-2xl font-semibold text-white mb-8 font-mono tracking-wide">
                                    Tech Stack
                                </h3>

                                {/* ALL Tech Stack Rows with Animations */}
                                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                                    {/* Frontend Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-4"
                                            animate={{ x: [-50, -200] }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                                    {techStack.Frontend.items.map((tech, index) => (
                                                        <div key={`${setIndex}-${index}`} className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                            <i className={`${getIconClass(tech)} text-gray-300 text-base`}></i>
                                                            <span className="text-sm font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Backend Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-4"
                                            animate={{ x: [100, -100] }}
                                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                                    {techStack.Backend.items.map((tech, index) => (
                                                        <div key={`${setIndex}-${index}`} className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                            <i className={`${getIconClass(tech)} text-gray-300 text-base`}></i>
                                                            <span className="text-sm font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Database Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-4"
                                            animate={{ x: [-80, -180] }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                                    {techStack.Database.items.map((tech, index) => (
                                                        <div key={`${setIndex}-${index}`} className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                            <i className={`${getIconClass(tech)} text-gray-300 text-base`}></i>
                                                            <span className="text-sm font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Systems & Low-Level Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-4"
                                            animate={{ x: [120, -80] }}
                                            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                                    {techStack['Systems & Low-Level'].items.map((tech, index) => (
                                                        <div key={`${setIndex}-${index}`} className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                            <i className={`${getIconClass(tech)} text-gray-300 text-base`}></i>
                                                            <span className="text-sm font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Cyber & Security Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-4"
                                            animate={{ x: [-60, -160] }}
                                            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                                    {techStack['Cyber & Security'].items.map((tech, index) => (
                                                        <div key={`${setIndex}-${index}`} className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                            <i className={`${getIconClass(tech)} text-gray-300 text-base`}></i>
                                                            <span className="text-sm font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Tools & DevOps Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-4"
                                            animate={{ x: [90, -110] }}
                                            transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-4 flex-shrink-0">
                                                    {techStack['Tools & DevOps'].items.map((tech, index) => (
                                                        <div key={`${setIndex}-${index}`} className="px-4 py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                            <i className={`${getIconClass(tech)} text-gray-300 text-base`}></i>
                                                            <span className="text-sm font-medium text-gray-200 font-mono whitespace-nowrap">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Projects List */}
                    <div className="lg:col-span-4 flex flex-col gap-6 min-h-0">
                        {/* Projects List */}
                        <motion.div 
                            className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/40 relative overflow-hidden flex flex-col" 
                            style={{ height: '60%' }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-semibold text-white mb-6 font-mono">Recent Projects</h3>
                            
                            <div className="flex-1 overflow-y-scroll mb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
                                <div className="space-y-4 pr-2">
                                    {projects.map((project, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/20 hover:bg-gray-800/50 transition-colors cursor-pointer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                                        >
                                            <h4 className="text-white font-medium text-base mb-1 font-mono">
                                                {project.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm font-mono">
                                                {project.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="text-center border-t border-gray-700/30 pt-3">
                                <a href="/projects" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white font-medium font-mono transition-colors cursor-pointer">
                                    View All Projects →
                                </a>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="flex gap-2">
                                <a href="https://github.com/Sharwesh05" target="_blank" rel="noopener noreferrer"
                                   className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-32 h-32 flex-1 min-w-0">
                                    <Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                                <a href="https://www.linkedin.com/in/sharan-kumar-m-b4742a2b3/" target="_blank" rel="noopener noreferrer"
                                   className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-32 h-32 flex-1 min-w-0">
                                    <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                            <div className="flex gap-2">
                                <a href="mailto:sharweshraajan@gmail.com"
                                   className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-32 h-32 flex-1 min-w-0">
                                    <Mail className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                                <a href="https://calendly.com/sharweshraajan" target="_blank" rel="noopener noreferrer"
                                   className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-32 h-32 flex-1 min-w-0">
                                    <Calendar className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Helper function to get appropriate icons for technologies
const getIconClass = (tech: string): string => {
    const iconMap: Record<string, string> = {
        'React.js': 'fab fa-react animate-spin-slow',
        'Next.js': 'fas fa-layer-group',
        'TypeScript': 'fas fa-code',
        'TailwindCSS': 'fas fa-palette',
        'JavaScript': 'fab fa-js-square',
        'HTML/CSS': 'fab fa-html5',
        'Node.js': 'fab fa-node-js',
        'Python': 'fab fa-python',
        'FastAPI': 'fas fa-bolt',
        'WebSockets': 'fas fa-wifi',
        'MongoDB': 'fas fa-database',
        'PostgreSQL': 'fas fa-server',
        'MySQL': 'fas fa-table',
        'SQLite': 'fas fa-file-alt',
        'C': 'fas fa-microchip',
        'C++': 'fas fa-cogs',
        'Linux': 'fab fa-linux',
        'Kernel Modules': 'fas fa-puzzle-piece',
        'Low-Level Debugging': 'fas fa-bug',
        'Reverse Engineering': 'fas fa-search',
        'CTF Challenges': 'fas fa-flag',
        'Network Analysis': 'fas fa-network-wired',
        'Cryptography': 'fas fa-lock',
        'Git': 'fab fa-git-alt',
        'Docker': 'fab fa-docker',
        'DevOps': 'fas fa-tools',
        'Open Source Contribution': 'fas fa-code-branch'
    };
    
    return iconMap[tech] || 'fas fa-code';
};

export default HeroSection
