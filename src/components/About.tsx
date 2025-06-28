"use client"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Code, Database, Brain, Users, Sparkles } from "lucide-react"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants :Variants= {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  }

  const education = [
    {
      degree: "Bachelor of Information Management (BIM)",
      university: "Tribhuvan University (TU)",
      institution: "National College of Computer Studies (NCCS)",
      period: "2020 - 2025",
      status: "current",
      location: "Kathmandu, Nepal",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Prime International School",
      period: "2018 - 2020",
      status: "completed",
      location: "Kathmandu, Nepal",
    },
    {
      degree: "Secondary Education",
      institution: "Dallu Awasiya Vidhyalaya",
      period: "2005 - 2018",
      status: "completed",
      location: "Kathmandu, Nepal",
    },
  ]

  const stats = [
    {
      icon: <Code className="w-6 h-6" />,
      number: "10+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      number: "2+",
      label: "Years Experience",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      number: "6+",
      label: "Tech Domains",
      color: "from-purple-500 to-violet-500",
    },
    { icon: <Users className="w-6 h-6" />, number: "5+", label: "Technologies", color: "from-orange-500 to-red-500" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 bg-blue-400 rounded-full w-96 h-96 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 bg-purple-400 rounded-full w-96 h-96 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
              <Sparkles className="w-4 h-4" />
              Get to know me
            </div>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            About
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate software developer crafting enterprise solutions with modern technologies
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left: About Me Section */}
          <motion.div variants={cardVariants} className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Software Developer &
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  {" "}
                  AI Engineer
                </span>
              </h3>
            </div>

            <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Motivated Bachelor of Information Management (BIM) student with hands-on experience in
                  <span className="font-semibold text-blue-600"> Java, Python, and AI/ML technologies</span>. I
                  specialize in building enterprise solutions and AI-powered applications.
                </p>

                <p>
                  My experience includes developing <span className="font-semibold text-purple-600">IAM systems</span>,
                  creating <span className="font-semibold text-green-600">AI-powered chatbots</span> using FastAPI and
                  RAG models, and working with modern frameworks like Spring Boot and FastAPI.
                </p>

                <p>
                  I'm passionate about <span className="font-semibold text-orange-600">scalable backend systems</span>,
                  data engineering, and collaborative development. Quick to learn new technologies and enthusiastic
                  about applying technical knowledge to solve real-world challenges.
                </p>
              </div>

              {/* Key Skills Highlight */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "Spring Boot", "FastAPI", "AI/ML", "IAM Systems"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Education Section */}
          <motion.div variants={cardVariants} className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text">
                  Education
                </span>
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    {edu.status === "current" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          Current
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          Completed
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Education Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-lg">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1 pr-16">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      {edu.university && <p className="text-blue-600 font-medium mb-1">{edu.university}</p>}
                      <p className="text-gray-600 font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 ml-16">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center group"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg mb-4`}>
                {stat.icon}
              </div>

              {/* Number */}
              <div
                className={`text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mb-2`}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-pink-400 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
