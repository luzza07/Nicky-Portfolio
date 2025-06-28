"use client"

import { useState } from "react"
type ProjectCardProps = {
  title: string
  sourceCodeLink: string
  main: string
  imageUrl: string
  demoLink: string
  techStack: string[]
}
const ProjectCard = ({ title, sourceCodeLink, main, imageUrl, demoLink }:ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative flex flex-col w-full max-w-xs overflow-hidden transition-all duration-500 group sm:max-w-sm md:max-w-md hover:-translate-y-2 hover:rotate-1">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl"></div>

      {/* Glow Effect */}
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-blue-500/10 rounded-2xl group-hover:opacity-100"></div>

      {/* Main Card Container */}
      <div className="relative transition-all duration-500 border shadow-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50 group-hover:border-yellow-400/30 rounded-2xl">
        {/* Decorative Corner Elements */}
        <div className="absolute w-8 h-8 transition-opacity duration-500 border-t-2 border-l-2 opacity-0 top-3 left-3 border-yellow-400/30 rounded-tl-xl group-hover:opacity-100"></div>
        <div className="absolute w-8 h-8 transition-opacity duration-500 border-b-2 border-r-2 opacity-0 bottom-3 right-3 border-blue-400/30 rounded-br-xl group-hover:opacity-100"></div>

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40"></div>

          {/* Animated Background Shapes */}
          <div className="absolute w-16 h-16 rounded-full top-4 right-4 bg-yellow-400/10 blur-xl animate-pulse"></div>
          <div
            className="absolute w-12 h-12 rounded-full bottom-4 left-4 bg-blue-400/10 blur-lg animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {imageUrl && !imageError ? (
            <div className="relative w-full h-full">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
                </div>
              )}
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                className={`object-cover w-full h-full transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent group-hover:opacity-100"></div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 text-slate-400/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6l.586-.586a2 2 0 012.828 0L20 8m-6-6l-1.586 1.586a2 2 0 01-2.828 0L4 8"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate-500">Project Preview</p>
              </div>
            </div>
          )}

          {/* Floating Tech Badge */}
          <div className="absolute px-3 py-1 border rounded-full top-3 left-3 bg-black/50 backdrop-blur-sm border-white/10">
            <span className="text-xs font-medium text-yellow-400">💻 Project</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-6">
          {/* Title with Gradient */}
          <h3 className="mb-3 text-xl font-bold text-transparent transition-all duration-500 bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 group-hover:from-yellow-300 group-hover:to-orange-400">
            {title}
          </h3>

          {/* Description */}
          <p className="flex-1 mb-6 text-sm leading-relaxed transition-colors duration-300 text-slate-300 md:text-base group-hover:text-slate-200">
            {main}
          </p>

         

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {demoLink && (
              <button
                onClick={() => window.open(demoLink, "_blank")}
                className="group/btn flex-1 min-w-[120px] px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:translate-x-full"></div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className="relative">Live Demo</span>
              </button>
            )}

            <button
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="group/btn flex-1 min-w-[120px] px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/20 flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500 relative overflow-hidden"
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:translate-x-full"></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span className="relative">Source Code</span>
            </button>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 group-hover:w-full rounded-b-2xl"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div
        className="absolute w-4 h-4 transition-all duration-500 rounded-full opacity-0 -top-2 -right-2 bg-yellow-400/20 group-hover:opacity-100 animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="absolute w-3 h-3 transition-all duration-500 rounded-full opacity-0 -bottom-2 -left-2 bg-blue-400/20 group-hover:opacity-100 animate-bounce"
        style={{ animationDelay: "200ms" }}
      ></div>
    </div>
  )
}

export default ProjectCard
