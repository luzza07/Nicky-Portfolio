import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Brain,
  GitBranch,
  Settings,
  Zap,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java", "Python"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Spring Boot", "FastAPI", "Swing"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Elasticsearch"],
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "APIs & Testing",
      icon: <Globe className="w-6 h-6" />,
      skills: ["RESTful API", "Swagger UI", "Postman"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["RAG Models", "LangChain", "DeepSeek R1", "Ollama"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "DevOps & Methodology",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "Linux CLI", "OOP", "Agile", "Unit Testing"],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOut cubic-bezier equivalent
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            <Zap className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Skills &
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {" "}
              Technologies
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A comprehensive overview of my technical skills and expertise across
            various domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: skillIndex * 0.1 + index * 0.05,
                      }}
                      className="flex items-center gap-2 group/skill"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover/skill:opacity-100 transition-opacity duration-200`}
                      />
                      <span className="text-gray-700 group-hover/skill:text-gray-900 transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="flex justify-end mt-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                  >
                    {category.skills.length} skill
                    {category.skills.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                style={{ padding: "1px" }}
              >
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {skillCategories.reduce(
                  (total, cat) => total + cat.skills.length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">∞</div>
              <div className="text-sm text-gray-600">Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
