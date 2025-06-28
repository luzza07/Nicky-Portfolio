"use client";
import { useState } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code,
  Database,
  Palette,
  Monitor,
  Terminal,
  TestTube,
  Brain,
  Github,
  Mail,
  ArrowRight,
  Filter,
} from "lucide-react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Legal AI",
      main: "Retrieval-Augmented Generation (RAG) model chatbot to provide accurate answers based on user-uploaded legal documents.",
      sourceCodeLink: "https://github.com/nickyMaharjan/legal-ai-web",
      demoLink: "#",
      techStack: ["Fast API", "Deepseek R1", "Elasticsearch"],
      category: "Backend ",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "HR and Inventory System",
      main: "Comprehensive e-learning platform with course management, student progress tracking, and interactive learning modules.",
      sourceCodeLink:
        "https://github.com/nickyMaharjan/online-learning-platform",
      demoLink: "#",
      techStack: ["Python3", "Spring Boot", "Swagger UI"],
      category: "Backend",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Task Manager",
      main: "task management system using Spring Boot, enabling task creation, updating, retrieval, and note management for each task. Utilized in-memory storage for efficient handling of tasks and notes.",
      sourceCodeLink: "https://github.com/nickyMaharjan/Recipes",
      demoLink: "#",
      techStack: ["Java", "Spring Boot", "Postman"],
      category: "Backend",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Pharmacy Management System",
      main: "Desktop-based application for managing pharmacy inventory, sales, and customer records using Java Swing and MySQL.",
      sourceCodeLink:
        "https://github.com/nickyMaharjan/InventoryManagementSystem",
      demoLink: "#",
      techStack: ["Java", "Swing", "MySQL"],
      category: "desktop",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: <Code className="w-4 h-4" /> },
    {
      id: "fullstack",
      label: "Full Stack",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: <Palette className="w-4 h-4" />,
    },
    { id: "desktop", label: "Desktop", icon: <Monitor className="w-4 h-4" /> },
    { id: "console", label: "Console", icon: <Terminal className="w-4 h-4" /> },
    { id: "testing", label: "Testing", icon: <TestTube className="w-4 h-4" /> },
    {
      id: "ml",
      label: "Machine Learning",
      icon: <Brain className="w-4 h-4" />,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute rounded-full w-96 h-96 bg-blue-400 top-20 left-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute rounded-full bg-purple-400 bottom-20 right-20 w-80 h-80 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bg-pink-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
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
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            <Sparkles className="w-4 h-4" />
            Portfolio Showcase
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {" "}
              Projects
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl">
            Here are some of my featured works. Each project represents unique
            challenges and solutions,
            <br />
            <span className="font-medium text-blue-600">
              showcasing different technologies and approaches.
            </span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              {
                number: "7+",
                label: "Projects",
                color: "from-blue-500 to-cyan-500",
              },
              {
                number: "6+",
                label: "Categories",
                color: "from-green-500 to-emerald-500",
              },
              {
                number: "100%",
                label: "Open Source",
                color: "from-purple-500 to-violet-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`text-2xl font-bold text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by category</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 p-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                main={project.main}
                sourceCodeLink={project.sourceCodeLink}
                demoLink={project.demoLink}
                imageUrl={project.imageUrl}
                techStack={project.techStack}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-white border border-gray-200 shadow-lg rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {" "}
                more?
              </span>
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Check out my GitHub profile for more projects and contributions,
              or let's discuss your next project.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                onClick={() =>
                  window.open("https://github.com/nickyMaharjan", "_blank")
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 flex items-center justify-center gap-2 group overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full"></div>
                <Github className="w-5 h-5" />
                <span className="relative">View All Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={() =>
                  window.open("mailto:nickymaharjan2023@gmail.com", "_blank")
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                <span className="relative">Let's Collaborate</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
