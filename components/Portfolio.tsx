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
    // Updated Projects array with your real projects
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
        <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 p-2 sm:p-4 lg:p-6 xl:p-8 overflow-hidden">
            <div className="max-w-7xl h-full mx-auto flex flex-col">
                {/* Header/Navigation */}
                <div className="w-full h-12 sm:h-14 lg:h-16 xl:h-18 bg-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl mb-3 sm:mb-4 lg:mb-6 flex items-center justify-between px-4 sm:px-6 lg:px-8 border border-gray-700/30 flex-shrink-0">
                    <a href='/' className="text-white font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl font-mono">
                        Sharwesh<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">05</span>
                    </a>

                    <nav className="flex space-x-3 sm:space-x-4 lg:space-x-6 xl:space-x-8 text-gray-300 text-sm sm:text-base lg:text-lg font-mono">
                        <a href="/projects" className="hover:text-white transition-colors font-medium">
                            Projects
                        </a>
                        <a href="/about" className="hover:text-white transition-colors font-medium">
                            About
                        </a>
                        <a href="https://drive.google.com/file/d/1oreD0azQtSIClLkQNgZl0_gyCON2RBwj/view?usp=sharing" className="hover:text-white transition-colors font-medium">
                            Resume
                        </a>
                    </nav>
                </div>

                {/* Hero Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 flex-1 min-h-0">
                    {/* Left Column - Introduction */}
                    <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 lg:gap-6 min-h-0">
                        {/* Main Introduction */}
                        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl flex-1 p-4 sm:p-6 lg:p-8 border border-gray-700/40 min-h-0">
                            <div className="h-full flex flex-col justify-end items-start">
                                <h1 className="font-bold text-white leading-tight font-mono">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">I</div>
                                    <div className="text-gray-300 text-lg sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Sharan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Kumar</span></div>
                                </h1>
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl flex-1 p-4 sm:p-6 lg:p-8 border border-gray-700/40 min-h-0">
                            <div className="h-full flex flex-col justify-center space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed font-mono">
                                <p>
                                    I am a <span className="text-white font-semibold">passionate Full Stack Developer</span> with expertise in modern web technologies and a strong foundation in software engineering principles.
                                </p>
                                <p>
                                    My work is driven by <span className="text-white font-semibold">hands-on learning</span> and <span className="text-white font-semibold">real-world problem solving</span> — not by copying others.
                                </p>
                                <p>
                                    I also have a deep interest in <span className="text-white font-semibold">low-level systems</span>, from kernel modules to embedded development.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Profile Card */}
                    <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 lg:gap-6 min-h-0">
                        {/* Profile Card */}
                        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl flex-1 p-4 sm:p-6 lg:p-8 border border-gray-700/40 relative overflow-hidden group min-h-0">
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                {/* Profile Picture */}
                                <div className="relative mb-4 sm:mb-6">
                                    <div className="w-34 h-34 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto flex items-center justify-center shadow-2xl border-4 border-gray-700/50">
                                        <img
                                            src="/smallboy.jpeg"
                                            alt="Sharan Kumar M"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                        <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white hidden font-mono">
                                            SK
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Current Status Section */}
                        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/40 flex items-center justify-center py-3 sm:py-4 lg:py-5 flex-shrink-0">
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-xs sm:text-sm lg:text-base font-medium font-mono">Currently on:</span>
                                <span className="font-mono font-medium text-xs sm:text-xs lg:text-sm text-gray-400">
                                    Linux Ricing
                                </span>
                            </div>
                        </div>

                        {/* Tech Stack Section */}
                        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl flex-1 p-4 sm:p-6 lg:p-8 border border-gray-700/40 min-h-0 relative overflow-hidden">
                            {/* Background gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/40 pointer-events-none"></div>

                            <div className="h-full flex flex-col justify-center text-center relative z-10">
                                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-4 sm:mb-6 lg:mb-8 font-mono tracking-wide">
                                    Tech Stack
                                </h3>

                                {/* Multiple Scrolling Tech Stack Categories */}
                                <div className="flex-1 flex flex-col gap-3 sm:gap-4 overflow-hidden">
                                    {/* Frontend Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-3 sm:gap-4"
                                            animate={{
                                                x: [-50, -200]
                                            }}
                                            transition={{
                                                duration: 15,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-3 sm:gap-4 flex-shrink-0">
                                                    {/* React.js */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-react text-gray-300 text-sm sm:text-base animate-spin-slow"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">React.js</span>
                                                    </div>
                                                    {/* Next.js */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-layer-group text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Next.js</span>
                                                    </div>
                                                    {/* TypeScript */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-code text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">TypeScript</span>
                                                    </div>
                                                    {/* TailwindCSS */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-palette text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">TailwindCSS</span>
                                                    </div>
                                                    {/* JavaScript */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-js-square text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">JavaScript</span>
                                                    </div>
                                                    {/* HTML/CSS */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-html5 text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">HTML/CSS</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Backend Row (reverse direction) */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-3 sm:gap-4"
                                            animate={{
                                                x: [100, -100]
                                            }}
                                            transition={{
                                                duration: 12,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-3 sm:gap-4 flex-shrink-0">
                                                    {/* Node.js */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-node-js text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Node.js</span>
                                                    </div>
                                                    {/* Python */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-python text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Python</span>
                                                    </div>
                                                    {/* FastAPI */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-bolt text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">FastAPI</span>
                                                    </div>
                                                    {/* WebSockets */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-wifi text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">WebSockets</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Database Row */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-3 sm:gap-4"
                                            animate={{
                                                x: [-80, -180]
                                            }}
                                            transition={{
                                                duration: 10,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-3 sm:gap-4 flex-shrink-0">
                                                    {/* MongoDB */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-database text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">MongoDB</span>
                                                    </div>
                                                    {/* PostgreSQL */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-server text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">PostgreSQL</span>
                                                    </div>
                                                    {/* MySQL */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-table text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">MySQL</span>
                                                    </div>
                                                    {/* SQLite */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-file-alt text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">SQLite</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Systems & Low-Level Row (reverse direction) */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-3 sm:gap-4"
                                            animate={{
                                                x: [120, -80]
                                            }}
                                            transition={{
                                                duration: 16,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-3 sm:gap-4 flex-shrink-0">
                                                    {/* C */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-microchip text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">C</span>
                                                    </div>
                                                    {/* C++ */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-cogs text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">C++</span>
                                                    </div>
                                                    {/* Linux */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-linux text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Linux</span>
                                                    </div>
                                                    {/* Kernel Modules */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-puzzle-piece text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Kernel Modules</span>
                                                    </div>
                                                    {/* Low-Level Debugging */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-bug text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Low-Level Debugging</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Tools & DevOps Row (reverse direction) */}
                                    <div className="flex items-center overflow-hidden">
                                        <motion.div
                                            className="flex gap-3 sm:gap-4"
                                            animate={{
                                                x: [90, -110]
                                            }}
                                            transition={{
                                                duration: 11,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            {[...Array(2)].map((_, setIndex) => (
                                                <div key={setIndex} className="flex gap-3 sm:gap-4 flex-shrink-0">
                                                    {/* Git */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-git-alt text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Git</span>
                                                    </div>
                                                    {/* Docker */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fab fa-docker text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Docker</span>
                                                    </div>
                                                    {/* DevOps */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-tools text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">DevOps</span>
                                                    </div>
                                                    {/* Open Source Contribution */}
                                                    <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/40 to-gray-800/30 rounded-lg border border-gray-600/40 flex-shrink-0 flex items-center gap-2 hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                                                        <i className="fas fa-code-branch text-gray-300 text-sm sm:text-base"></i>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-200 font-mono whitespace-nowrap">Open Source</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>

                    {/* Right Column - Projects List */}
                    <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 lg:gap-6 min-h-0">
                        {/* Projects List - WITH HIDDEN SCROLLBAR */}
                        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/40 relative overflow-hidden flex flex-col" style={{ height: '60%' }}>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6 font-mono">Recent Projects</h3>

                            {/* Scrollable Projects Area - HIDDEN SCROLLBAR */}
                            <div
                                className="flex-1 overflow-y-scroll mb-4"
                                style={{
                                    scrollbarWidth: 'none', /* Firefox */
                                    msOverflowStyle: 'none', /* Internet Explorer 10+ */
                                }}
                            >
                                <style jsx>{`
                                    div::-webkit-scrollbar {
                                        display: none;
                                    }
                                `}</style>
                                <div className="space-y-3 sm:space-y-4 pr-2">
                                    {projects.map((project, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-800/30 rounded-lg p-3 sm:p-4 border border-gray-700/20 hover:bg-gray-800/50 transition-colors cursor-pointer"
                                        >
                                            <h4 className="text-white font-medium text-sm sm:text-base mb-1 font-mono">
                                                {project.title}
                                            </h4>
                                            <p className="text-gray-400 text-xs sm:text-sm font-mono">
                                                {project.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fixed Show More Link at Bottom */}
                            <div className="text-center border-t border-gray-700/30 pt-3">
                                <a
                                    href="/projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm text-gray-400 hover:text-white font-medium font-mono transition-colors cursor-pointer"
                                >
                                    View All Projects →
                                </a>
                            </div>
                        </div>

                        {/* Social Links & Contact - 2x2 GRID WITH SQUARE BOXES */}
                        <div className="flex flex-col gap-1 sm:gap-1 lg:gap-2">
                            {/* Top Row */}
                            <div className="flex gap-1 sm:gap-1 lg:gap-2">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/Sharwesh05"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-32 xl:h-32 flex-1 min-w-0"
                                >
                                    <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/sharan-kumar-m-b4742a2b3/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-32 xl:h-32 flex-1 min-w-0"
                                >
                                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>

                            {/* Bottom Row */}
                            <div className="flex gap-1 sm:gap-1 lg:gap-2">
                                {/* Email */}
                                <a
                                    href="mailto:sharweshraajan@gmail.com"
                                    className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-32 xl:h-32 flex-1 min-w-0"
                                >
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>

                                {/* Calendar/Schedule */}
                                <a
                                    href="https://calendly.com/sharweshraajan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/40 flex items-center justify-center hover:bg-gray-800/60 transition-colors cursor-pointer group w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-32 xl:h-32 flex-1 min-w-0"
                                >
                                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
