'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  const aboutData = {
    introduction: {
      title: "Full Stack Developer & Systems Programmer",
      subtitle: "Passionate about creating innovative solutions from web applications to kernel-level programming",
      description: "I'm a passionate Software Development Engineer with a deep fascination for cybersecurity and system security research. My expertise uniquely bridges two worlds: building scalable, robust applications with modern web technologies while simultaneously diving deep into security research, vulnerability analysis, and low-level hardware programming."
    },
    skills: {
      technical: [
        "Full Stack Web Development",
        "Linux Kernel Programming", 
        "Systems Programming",
        "Cybersecurity Applications",
        "AI/ML Integration",
        "DevOps & Containerization"
      ],
      languages: [
        "JavaScript/TypeScript",
        "Python", 
        "C/C++",
        "HTML/CSS",
        "SQL"
      ],
      frameworks: [
        "React.js/Next.js",
        "FastAPI",
        "Node.js",
        "TailwindCSS",
        "Express.js"
      ]
    },
    experience: {
      title: 'Freelance Web Developer',
      company: 'Small Trust Organization',
      period: '2021',
      type: 'Freelance',
      description: 'Designed and deployed a fully responsive website for a small trust organization, focusing on accessibility and user experience. Implemented modern web technologies to create an engaging digital presence.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      achievements: [
        'Implemented accessible web standards for inclusive user experience',
        'Delivered project on time and within budget constraints'
      ],
    },
    contributions: [
      {
        title: 'Linux Kernel Module Development',
        project: 'Linux Kernel',
        period: '2024 - Present',
        type: 'Open Source',
        description: 'Contributed to Linux kernel development with enabling mute-led for specific HP Laptops.',
        technologies: ['C', 'Linux Kernel APIs', 'Device Drivers', 'Kernel Debugging'],
        achievements: [
          'Successfully merged 2+ patches to mainline kernel',
          'Improved hardware compatibility for HP Laptops',
        ],
      },
    ],
    interests: [
      "Open Source",
      "Linux Ricing", 
      "CTF Challenges",
      "Kernel Development",
      "Reverse Engineering",
      "AI/ML Research"
    ]
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Reduced for mobile
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 }, // Reduced movement for mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Faster animations for mobile
        ease: "easeOut",
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 p-3 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Back to Home Button - Improved Mobile */}
        <motion.div 
          className="fixed top-4 left-4 z-50 sm:absolute sm:top-0 sm:left-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <div className="group bg-gray-900/80 backdrop-blur-sm border border-gray-700/40 hover:border-gray-600/60 rounded-lg px-3 py-2 sm:px-6 sm:py-3 font-semibold text-white transition-all duration-300 flex items-center gap-2 sm:gap-3 font-mono shadow-lg hover:shadow-xl cursor-pointer">
              <i className="fas fa-arrow-left text-sm group-hover:text-blue-400 transition-colors duration-300"></i>
              <span className="text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Header Section - Mobile Optimized */}
        <motion.div 
          className="text-center mb-8 sm:mb-16 mt-20 sm:mt-20 px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 font-mono leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-xl max-w-3xl mx-auto font-mono px-2">
            Discover my journey, skills, and passion for technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-12"
        >
          {/* Introduction Section - Mobile Optimized */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-8 shadow-2xl"
          >
            <div className="text-center">
              <h2 className="text-lg sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-mono leading-tight">
                {aboutData.introduction.title}
              </h2>
              <p className="text-sm sm:text-xl text-blue-300 mb-4 sm:mb-6 font-mono">
                {aboutData.introduction.subtitle}
              </p>
              <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto font-mono">
                {aboutData.introduction.description}
              </p>
            </div>
          </motion.div>

          {/* Skills Section - Mobile Stack */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8"
          >
            {/* Technical Skills */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-lg sm:rounded-xl p-4 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-mono flex items-center gap-2 sm:gap-3">
                <i className="fas fa-code text-blue-400 text-sm sm:text-base"></i>
                <span>Technical Skills</span>
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {aboutData.skills.technical.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3">
                    <i className="fas fa-check-circle text-green-400 text-xs sm:text-sm flex-shrink-0"></i>
                    <span className="text-gray-300 font-mono text-xs sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-lg sm:rounded-xl p-4 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-mono flex items-center gap-2 sm:gap-3">
                <i className="fas fa-terminal text-purple-400 text-sm sm:text-base"></i>
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {aboutData.skills.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium font-mono"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-lg sm:rounded-xl p-4 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-mono flex items-center gap-2 sm:gap-3">
                <i className="fas fa-tools text-cyan-400 text-sm sm:text-base"></i>
                <span>Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {aboutData.skills.frameworks.map((framework, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium font-mono"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Section - Mobile Optimized Timeline */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-8 shadow-2xl"
          >
            <h2 className="text-lg sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-mono flex items-center gap-2 sm:gap-3">
              <i className="fas fa-briefcase text-blue-400 text-sm sm:text-base"></i>
              <span>Professional Experience</span>
            </h2>
            
            <div className="border-l-2 border-blue-400/30 pl-4 sm:pl-8">
              <div className="relative">
                <div className="absolute -left-6 sm:-left-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full border-2 sm:border-4 border-gray-900"></div>
                
                <div className="flex flex-col gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-base sm:text-2xl font-bold text-white mb-1 sm:mb-2 font-mono">
                      {aboutData.experience.title}
                    </h3>
                    <p className="text-sm sm:text-lg text-gray-300 font-medium font-mono">
                      {aboutData.experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="bg-blue-500/20 border border-blue-400/30 text-blue-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-mono w-fit">
                      {aboutData.experience.type}
                    </span>
                    <p className="text-gray-400 text-xs sm:text-sm font-mono">
                      {aboutData.experience.period}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {aboutData.experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800/60 border border-gray-600/40 text-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium font-mono"
                      >
                        <i className="fas fa-code text-xs mr-1"></i>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-xs sm:text-base leading-relaxed font-mono">
                    {aboutData.experience.description}
                  </p>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base font-mono">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {aboutData.experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <i className="fas fa-star text-yellow-400 text-xs sm:text-sm mt-0.5 sm:mt-1 flex-shrink-0"></i>
                          <span className="text-gray-300 text-xs sm:text-base font-mono">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Source Contributions Section - Mobile Optimized */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-8 shadow-2xl"
          >
            <h2 className="text-lg sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-mono flex items-center gap-2 sm:gap-3">
              <i className="fab fa-github text-green-400 text-sm sm:text-base"></i>
              <span>Open Source Contributions</span>
            </h2>
            
            <div className="border-l-2 border-green-400/30 pl-4 sm:pl-8 space-y-6 sm:space-y-8">
              {aboutData.contributions.map((contribution, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-6 sm:-left-10 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 sm:border-4 border-gray-900"></div>
                  
                  <div className="flex flex-col gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-base sm:text-2xl font-bold text-white mb-1 sm:mb-2 font-mono">
                        {contribution.title}
                      </h3>
                      <p className="text-sm sm:text-lg text-gray-300 font-medium font-mono">
                        {contribution.project}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="bg-green-500/20 border border-green-400/30 text-green-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-mono w-fit">
                        {contribution.type}
                      </span>
                      <p className="text-gray-400 text-xs sm:text-sm font-mono">
                        {contribution.period}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {contribution.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800/60 border border-gray-600/40 text-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium font-mono"
                        >
                          <i className="fab fa-linux text-xs mr-1"></i>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-xs sm:text-base leading-relaxed font-mono">
                      {contribution.description}
                    </p>
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base font-mono">
                        Key Contributions
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {contribution.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            <i className="fas fa-code-branch text-green-400 text-xs sm:text-sm mt-0.5 sm:mt-1 flex-shrink-0"></i>
                            <span className="text-gray-300 text-xs sm:text-base font-mono">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests Section - Mobile Grid */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-8 shadow-2xl"
          >
            <h2 className="text-lg sm:text-3xl font-bold text-white mb-6 sm:mb-8 font-mono flex items-center gap-2 sm:gap-3">
              <i className="fas fa-heart text-red-400 text-sm sm:text-base"></i>
              <span>Interests & Passions</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
              {aboutData.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-gray-700/40 to-gray-800/30 border border-gray-600/40 rounded-lg p-2 sm:p-4 text-center hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300"
                >
                  <span className="text-gray-300 text-xs sm:text-sm font-medium font-mono">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action - Mobile Stacked */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg sm:rounded-xl p-6 sm:p-12">
              <h2 className="text-lg sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-mono">
                Let's Work Together
              </h2>
              <p className="text-gray-300 text-sm sm:text-lg mb-6 sm:mb-8 font-mono max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="mailto:sharweshraajan@gmail.com"
                  className="group bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/50 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-mono text-sm sm:text-base"
                >
                  <i className="fas fa-envelope text-blue-400 text-sm"></i>
                  <span>Get In Touch</span>
                </a>
                <Link href="/projects">
                  <div className="group bg-gray-800/60 hover:bg-gray-700/60 border border-gray-600/40 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-mono cursor-pointer text-sm sm:text-base">
                    <i className="fas fa-code text-purple-400 text-sm"></i>
                    <span>View My Projects</span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
