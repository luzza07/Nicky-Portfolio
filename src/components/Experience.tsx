"use client"
import { motion } from "framer-motion"
import { Building2, Calendar, MapPin, Briefcase, Shield, Bot, Users, Terminal, Zap } from "lucide-react"

const Experience = () => {
  const experience = {
    company: "Decision Trust Private Limited",
    role: "Net IQ and Software Developer Intern",
    period: "2024", // You can update this with the actual period
    location: "Remote", // You can update this with actual location
    achievements: [
      {
        title: "IAM Systems Development",
        description:
          "Gained hands-on experience in IAM systems, enhancing enterprise security by managing user access controls and permissions",
        icon: <Shield className="w-5 h-5" />,
        tags: ["IAM", "Security", "Access Control"],
      },
      {
        title: "AI-Powered Legal Chatbot",
        description:
          "Contributed to the development of an AI-powered legal chatbot for a client using FastAPI, RAG models, and DeepSeek R1 in a real-world setting",
        icon: <Bot className="w-5 h-5" />,
        tags: ["FastAPI", "RAG Models", "DeepSeek R1", "AI/ML"],
      },
      {
        title: "Team Collaboration & Client Solutions",
        description:
          "Collaborated with senior developers to deliver AI-driven solutions, gaining exposure to client requirements and project deployment",
        icon: <Users className="w-5 h-5" />,
        tags: ["Team Collaboration", "Client Solutions", "Project Deployment"],
      },
      {
        title: "System Operations",
        description: "Utilized Linux CLI for system operations and troubleshooting",
        icon: <Terminal className="w-5 h-5" />,
        tags: ["Linux CLI", "System Operations", "Troubleshooting"],
      },
    ],
  }

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

  const cardVariants = {
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
        ease: "easeOut",
      },
    },
  }

  const achievementVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-full">
            <Briefcase className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Work
            <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
              {" "}
              Experience
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Building enterprise solutions and AI-driven applications with cutting-edge technologies
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5" />

            {/* Company Header */}
            <div className="relative p-8 border-b border-gray-100">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl text-white shadow-lg">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{experience.company}</h3>
                    <p className="text-lg font-semibold text-emerald-600">{experience.role}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:text-right">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="relative p-8">
              <h4 className="mb-8 text-xl font-semibold text-gray-900">Key Achievements & Responsibilities</h4>

              <div className="grid gap-6 md:grid-cols-2">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={achievementVariants}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Achievement Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg text-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        {achievement.icon}
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {achievement.title}
                      </h5>
                    </div>

                    {/* Achievement Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">{achievement.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="relative p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-t border-gray-100">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">4</div>
                  <div className="text-sm text-gray-600">Key Projects</div>
                </div>
                <div className="w-px h-8 bg-gray-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">AI/ML</div>
                  <div className="text-sm text-gray-600">Specialization</div>
                </div>
                <div className="w-px h-8 bg-gray-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">Enterprise</div>
                  <div className="text-sm text-gray-600">Solutions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <Zap className="w-4 h-4" />
            <span className="font-medium">Ready for new challenges</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
