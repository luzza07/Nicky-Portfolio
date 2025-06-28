"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"

const Project = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Artist Management System",
      main: "Role-based system to manage artists, songs, and related data with CRUD operations and access control for admins and managers.",
      sourceCodeLink: "https://github.com/luzza07/artist-management-Frontend",
      demoLink: "#",
      techStack: ["Next.js", "Django", "Postgres"],
      category: "fullstack",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Online Learning Platform",
      main: "Comprehensive e-learning platform with course management, student progress tracking, and interactive learning modules.",
      sourceCodeLink: "https://github.com/luzza07/online-learning-platform",
      demoLink: "#",
      techStack: ["Next.js", "MaterialUI"],
      category: "frontend",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
     {
      id: 3,
      title: "Recipe Finder",
      main: "Smart recipe search app that helps users discover dishes based on ingredients, dietary preferences, and cooking time.",
      sourceCodeLink: "https://github.com/sujalamatya/Reciepes",
      demoLink: "#",
      techStack: ["Next.js", "ShadCN","TailwindCSS"],
      category: "frontend",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Inventory Management System",
      main: "Java-based desktop application for vendors to track inventory levels with product management, stock monitoring, and reporting features.",
      sourceCodeLink: "https://github.com/luzza07/InventoryManagementSystem",
      demoLink: "#",
      techStack: ["Java", "Swing", "MySQL"],
      category: "desktop",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Sneakers Point",
      main: "C-based console application implementing a shopping experience with product selection, cart functionality, and billing system.",
      sourceCodeLink: "https://github.com/luzza07/Sneakers-Point",
      demoLink: "#",
      techStack: ["C", "Data Structures"],
      category: "console",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Hukut.com - QA Automation",
      main: "Implemented end-to-end automated tests using Playwright to ensure application functionality and performance with comprehensive test coverage.",
      sourceCodeLink: "https://github.com/luzza07/Hukut.com-QA-automation-Testing",
      demoLink: "#",
      techStack: ["Playwright", "JavaScript", "QA Automation"],
      category: "testing",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Drug Classification",
      main: "Machine learning model for drug classification using Python libraries including Pandas, Scikit-learn, and Matplotlib for data analysis.",
      sourceCodeLink: "https://github.com/luzza07/Drug-Classification",
      demoLink: "#",
      techStack: ["Python", "Machine Learning", "Pandas"],
      category: "ml",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: "🚀" },
    { id: "fullstack", label: "Full Stack", icon: "💻" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "desktop", label: "Desktop", icon: "🖥️" },
    { id: "console", label: "Console", icon: "⌨️" },
    { id: "testing", label: "Testing", icon: "🧪" },
    { id: "ml", label: "Machine Learning", icon: "🤖" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section
      id="projects"
      className="relative px-4 py-16 overflow-hidden md:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute rounded-full w-96 h-96 bg-yellow-400/10 top-20 left-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute rounded-full bg-blue-500/10 bottom-20 right-20 w-80 h-80 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bg-purple-500/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <div className="mb-16 text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-yellow-400 border rounded-full bg-yellow-400/10 border-yellow-400/20">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            Portfolio Showcase
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl font-bold text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
            My Projects
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-300 md:text-xl">
            Here are some of my featured works. Each project represents unique challenges and solutions,
            <br />
            <span className="font-medium text-yellow-400">showcasing different technologies and approaches.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { number: "6+", label: "Projects" },
              { number: "5+", label: "Technologies" },
              { number: "100%", label: "Open Source" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 p-2 border rounded-2xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <ProjectCard
                title={project.title}
                main={project.main}
                sourceCodeLink={project.sourceCodeLink}
                demoLink={project.demoLink}
                imageUrl={project.imageUrl}
                techStack={project.techStack}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 border shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50 rounded-3xl">
            <h3 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Want to see more?
            </h3>
            <p className="mb-6 text-slate-300">Check out my GitHub profile for more projects and contributions.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.open("https://github.com/luzza07", "_blank")}
                className="relative px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 border-2 border-yellow-400 group rounded-xl hover:bg-yellow-400 hover:text-slate-900 hover:scale-105"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></div>
                <span className="relative flex items-center gap-2">
                  🐙 View All Projects
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => window.open("mailto:luzzadangol456@gmail.com", "_blank")}
                className="relative px-6 py-3 overflow-hidden font-medium transition-all duration-300 border-2 group text-slate-300 border-slate-600 rounded-xl hover:border-blue-400 hover:text-blue-400 hover:scale-105"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent group-hover:translate-x-full"></div>
                <span className="relative flex items-center gap-2">📧 Let&apos;s Collaborate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Project
