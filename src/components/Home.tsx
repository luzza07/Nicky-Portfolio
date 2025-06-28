"use client"
import { motion } from "framer-motion"
import { Download, Mail, Code, Database, Brain, Sparkles } from "lucide-react"

const Home = () => {
  const skills = [
    { name: "Java", color: "text-orange-600 border-orange-200 bg-orange-50" },
    { name: "Python", color: "text-blue-600 border-blue-200 bg-blue-50" },
    { name: "Spring Boot", color: "text-green-600 border-green-200 bg-green-50" },
    { name: "FastAPI", color: "text-teal-600 border-teal-200 bg-teal-50" },
    { name: "AI/ML", color: "text-purple-600 border-purple-200 bg-purple-50" },
  ]

  const stats = [
    { icon: <Code className="w-5 h-5" />, value: "2+", label: "Years Experience", color: "text-blue-600" },
    { icon: <Database className="w-5 h-5" />, value: "10+", label: "Projects Built", color: "text-green-600" },
    { icon: <Brain className="w-5 h-5" />, value: "6", label: "Tech Domains", color: "text-purple-600" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl animate-pulse"></div>
        <div
          className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/3 to-pink-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { text: "{ }", position: "top-20 left-20", delay: 0 },
          { text: "<//>", position: "top-40 right-32", delay: 1 },
          { text: "AI", position: "bottom-32 left-16", delay: 2 },
          { text: "API", position: "bottom-20 right-20", delay: 3 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.position} text-gray-300 font-mono text-sm`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Full width container to match navbar */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 text-center lg:text-left"
            >
              {/* Greeting Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
              >
                <Sparkles className="w-4 h-4" />
                Hello, I'm Nicky Maharjan
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Software Developer &
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  {" "}
                  AI Engineer
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
              >
                Passionate about building enterprise solutions and AI-powered applications. Specializing in backend
                development, machine learning, and creating scalable systems that solve real-world problems.
              </motion.p>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className={`px-4 py-2 text-sm font-medium rounded-full border ${skill.color} hover:shadow-md transition-all duration-300`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://drive.google.com/file/d/1gEvDi0PrJAqQMTWAW_JRf7EnX1pDh83k/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </motion.a>

                <motion.a
                  href="#footer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-semibold border-2 border-gray-300 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className={`inline-flex items-center gap-2 mb-2 ${stat.color}`}>
                      {stat.icon}
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Section - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex justify-center"
            >
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl animate-pulse"></div>

                {/* Decorative Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[420px] h-[420px] md:w-[520px] md:h-[520px] border border-blue-200 rounded-full animate-spin-slow"></div>
                  <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] border border-purple-200 rounded-full animate-spin-reverse"></div>
                </div>

                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img
                    src="/assets/profile-photo.png"
                    alt="Nicky Maharjan - Software Developer & AI Engineer"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay for better text visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>

                {/* Floating Tech Icons */}
                {[
                  { position: "top-8 right-8", icon: "☕", delay: 0, color: "from-orange-400/20 to-red-400/20" },
                  { position: "bottom-8 left-8", icon: "🐍", delay: 1, color: "from-blue-400/20 to-green-400/20" },
                  { position: "top-1/4 -left-6", icon: "🤖", delay: 2, color: "from-purple-400/20 to-pink-400/20" },
                  {
                    position: "bottom-1/4 -right-6",
                    icon: "⚡",
                    delay: 3,
                    color: "from-yellow-400/20 to-orange-400/20",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} w-12 h-12 bg-gradient-to-r ${item.color} backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-lg`}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: item.delay,
                      ease: "easeInOut",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style >{`
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
    </section>
  )
}

export default Home
