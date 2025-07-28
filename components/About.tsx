'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  const aboutData = {
    introduction: {
      title: "Full Stack Developer & Systems Programmer",
      subtitle: "Passionate about creating innovative solutions from web applications to kernel-level programming",
      description: "I'm a passionate Software Development Engineer with a deep fascination for cybersecurity and system security research. My expertise uniquely bridges two worlds: building scalable, robust applications with modern web technologies while simultaneously diving deep into security research, vulnerability analysis, and low-level hardware programming. As an SDE, I excel at full-stack development, system architecture, and creating seamless user experiences. As a cybersecurity enthusiast, I'm constantly exploring attack vectors, conducting penetration testing, reverse engineering, and analyzing malware behavior. This dual perspective allows me to write security-conscious code from the ground up, implement robust defensive strategies, and approach every engineering challenge with both performance optimization and threat modeling in mind. Whether I'm architecting a new application or researching kernel-level exploits, I thrive at the intersection where secure software engineering meets cutting-edge cybersecurity research."
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
      description: 'Designed and deployed a fully responsive website for a small trust organization, focusing on accessibility and user experience. Implemented modern web technologies to create an engaging digital presence that effectively communicates the trust\'s mission and services.',
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
        description: 'Contributed to Linux kernel development with enableing mute-led for specific Hp Laptops.',
        technologies: ['C', 'Linux Kernel APIs', 'Device Drivers', 'Kernel Debugging'],
        achievements: [
          'Successfully merged 2+ patches to mainline kernel',
          'Improved hardware compatibility for HP Laptops',
        ],
      },
    ],
    interests: [
      "Open Source Contribution",
      "Linux Ricing & Customization", 
      "CTF Challenges",
      "Kernel Module Development",
      "Reverse Engineering",
      "AI/ML Research"
    ]
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Back to Home Button - Top Left */}
        <motion.div 
          className="absolute top-0 left-0 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <div className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 hover:border-gray-600/60 rounded-lg px-4 py-2 sm:px-6 sm:py-3 font-semibold text-white transition-all duration-300 flex items-center gap-2 sm:gap-3 font-mono shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <i className="fas fa-arrow-left text-sm sm:text-base group-hover:text-blue-400 transition-colors duration-300 group-hover:-translate-x-1"></i>
              <span className="text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">
                Back to Home
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 mt-16 sm:mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-mono">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto font-mono">
            Discover my journey, skills, and passion for technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 sm:space-y-12"
        >
          {/* Introduction Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono">
                {aboutData.introduction.title}
              </h2>
              <p className="text-lg sm:text-xl text-blue-300 mb-6 font-mono">
                {aboutData.introduction.subtitle}
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto font-mono">
                {aboutData.introduction.description}
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Technical Skills */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                <i className="fas fa-code text-blue-400"></i>
                Technical Skills
              </h3>
              <div className="space-y-3">
                {aboutData.skills.technical.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-400 text-sm"></i>
                    <span className="text-gray-300 font-mono text-sm sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                <i className="fas fa-terminal text-purple-400"></i>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.skills.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-3 py-2 rounded-lg text-sm font-medium font-mono"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                <i className="fas fa-tools text-cyan-400"></i>
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.skills.frameworks.map((framework, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 px-3 py-2 rounded-lg text-sm font-medium font-mono"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-mono flex items-center gap-3">
              <i className="fas fa-briefcase text-blue-400"></i>
              Professional Experience
            </h2>
            
            <div className="border-l-2 border-blue-400/30 pl-6 sm:pl-8">
              <div className="relative">
                <div className="absolute -left-8 sm:-left-10 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-mono">
                      {aboutData.experience.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 font-medium font-mono">
                      {aboutData.experience.company}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:text-right">
                    <span className="bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium font-mono">
                      {aboutData.experience.type}
                    </span>
                    <p className="text-gray-400 text-sm mt-2 font-mono">
                      {aboutData.experience.period}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {aboutData.experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800/60 border border-gray-600/40 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium font-mono"
                      >
                        <i className="fas fa-code text-xs mr-1"></i>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed font-mono">
                    {aboutData.experience.description}
                  </p>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-3 text-base font-mono">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {aboutData.experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <i className="fas fa-star text-yellow-400 text-sm mt-1"></i>
                          <span className="text-gray-300 text-sm sm:text-base font-mono">
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

          {/* Open Source Contributions Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-mono flex items-center gap-3">
              <i className="fab fa-github text-green-400"></i>
              Open Source Contributions
            </h2>
            
            <div className="border-l-2 border-green-400/30 pl-6 sm:pl-8 space-y-8">
              {aboutData.contributions.map((contribution, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-8 sm:-left-10 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-mono">
                        {contribution.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-300 font-medium font-mono">
                        {contribution.project}
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:text-right">
                      <span className="bg-green-500/20 border border-green-400/30 text-green-300 px-3 py-1 rounded-full text-sm font-medium font-mono">
                        {contribution.type}
                      </span>
                      <p className="text-gray-400 text-sm mt-2 font-mono">
                        {contribution.period}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {contribution.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800/60 border border-gray-600/40 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium font-mono"
                        >
                          <i className="fab fa-linux text-xs mr-1"></i>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed font-mono">
                      {contribution.description}
                    </p>
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3 text-base font-mono">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {contribution.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <i className="fas fa-code-branch text-green-400 text-sm mt-1"></i>
                            <span className="text-gray-300 text-sm sm:text-base font-mono">
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

          {/* Interests Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-mono flex items-center gap-3">
              <i className="fas fa-heart text-red-400"></i>
              Interests & Passions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {aboutData.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-gray-700/40 to-gray-800/30 border border-gray-600/40 rounded-lg p-4 text-center hover:from-gray-600/50 hover:to-gray-700/40 transition-all duration-300"
                >
                  <span className="text-gray-300 text-sm font-medium font-mono">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono">
                Let's Work Together
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 font-mono max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sharweshraajan@gmail.com"
                  className="group bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 font-mono"
                >
                  <i className="fas fa-envelope text-blue-400"></i>
                  <span>Get In Touch</span>
                </a>
                <Link href="/projects">
                  <div className="group bg-gray-800/60 hover:bg-gray-700/60 border border-gray-600/40 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 font-mono cursor-pointer">
                    <i className="fas fa-code text-purple-400"></i>
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
