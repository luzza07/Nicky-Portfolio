"use client"

import pp from "../assets/react.svg"

import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-center w-full h-screen p-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:flex-row md:p-20">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div
          className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-2 h-2 ${i % 2 === 0 ? "bg-blue-400/20" : "bg-emerald-400/20"} ${i % 3 === 0 ? "rounded-full" : "rotate-45"}`}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Left Section - Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center flex-1 text-center md:items-start md:text-left"
      >
        <div className="max-w-2xl">
          {/* Greeting with subtle accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-lg font-medium text-blue-300/80">Hello, I&#39;m</span>
          </motion.div>

          {/* Main Heading with fixed height to prevent layout shift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <h1 className="text-5xl font-bold leading-tight md:text-7xl text-white min-h-[4rem] md:min-h-[5.5rem] flex items-center">
              Hello,Its me Nicky Maharjan
            </h1>
          </motion.div>

          {/* Subtitle with gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 text-2xl font-semibold text-transparent md:text-3xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text"
          >
            Frontend Developer
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-xl mb-8 text-lg leading-relaxed text-gray-300"
          >
            I&#39;m passionate about creating beautiful, responsive websites that deliver exceptional user experiences. With
            expertise in modern frontend technologies like <span className="font-medium text-blue-300">React</span>,
            <span className="font-medium text-emerald-300"> JavaScript</span>, and
            <span className="font-medium text-cyan-300"> Tailwind CSS</span>, I transform ideas into engaging digital
            solutions. I believe in writing clean, maintainable code while staying up-to-date with the latest web
            development trends and best practices.
          </motion.p>

          {/* Skills highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {[
              { name: "React", color: "text-blue-300 border-blue-300/30" },
              { name: "JavaScript", color: "text-yellow-300 border-yellow-300/30" },
              { name: "Tailwind", color: "text-cyan-300 border-cyan-300/30" },
              { name: "Next.js", color: "text-gray-300 border-gray-300/30" },
            ].map((skill) => (
              <span
                key={skill.name}
                className={`px-3 py-1 text-sm font-medium border rounded-full bg-white/5 backdrop-blur-sm ${skill.color} hover:bg-white/10 transition-all duration-300`}
              >
                {skill.name}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            {/* Download CV Button */}
            <motion.a
              href="https://drive.google.com/file/d/1gEvDi0PrJAqQMTWAW_JRf7EnX1pDh83k/view?usp=drive_link"
              download="Luzza_Dangol_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </motion.a>

            {/* Contact Button */}
            <motion.a
              href="#footer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 rounded-lg border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-8 mt-12 text-sm text-gray-400"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">2+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-300">15+</div>
              <div>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">8+</div>
              <div>Technologies</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Large Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex justify-center flex-1 mb-12 md:mb-0"
      >
        <div className="relative">
          {/* Creative Background Elements */}
          <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-2xl animate-pulse"></div>
          <div
            className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-purple-500/5 to-cyan-500/5 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Decorative Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[520px] h-[520px] md:w-[620px] md:h-[620px] border border-blue-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute w-[480px] h-[480px] md:w-[580px] md:h-[580px] border border-emerald-400/20 rounded-full animate-spin-reverse"></div>
          </div>

          {/* Main Profile Image - Large and Clean */}
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src={pp}
            alt="Luzza Dangol - Frontend Developer"
            className="relative z-10 object-cover w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full shadow-2xl border-4 border-gradient-to-r from-blue-400/30 to-emerald-400/30"
          />

          {/* Creative Floating Elements */}
          {[
            { position: "top-8 right-8", delay: 0, color: "from-blue-400/20 to-cyan-400/20" },
            { position: "bottom-8 left-8", delay: 1, color: "from-emerald-400/20 to-green-400/20" },
            { position: "top-1/4 -left-6", delay: 2, color: "from-purple-400/20 to-pink-400/20" },
            { position: "bottom-1/4 -right-6", delay: 3, color: "from-yellow-400/20 to-orange-400/20" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.position} w-12 h-12 bg-gradient-to-r ${item.color} backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center`}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                delay: item.delay,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute flex flex-col items-center text-gray-400 transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <span className="mb-2 text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center w-6 h-10 border-2 rounded-full border-blue-400/30"
        >
          <div className="w-1 h-3 mt-2 rounded-full bg-blue-400/50"></div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Home
