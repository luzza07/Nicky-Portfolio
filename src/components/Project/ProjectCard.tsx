"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Code, Star, ExternalLink, Zap } from "lucide-react";

type ProjectCardProps = {
  title: string;
  sourceCodeLink: string;
  main: string;
  imageUrl: string;
  demoLink: string;
  techStack: string[];
};

const ProjectCard = ({
  title,
  sourceCodeLink,
  main,
  imageUrl,
  techStack,
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get random project stats for visual interest
  const projectStats = {
    stars: Math.floor(Math.random() * 50) + 5,
    commits: Math.floor(Math.random() * 200) + 20,
    status: Math.random() > 0.3 ? "Active" : "Completed",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 group"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />

        {/* Animated Background Shapes */}
        <motion.div
          className="absolute w-16 h-16 rounded-full top-4 right-4 bg-blue-400/10 blur-xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute w-12 h-12 rounded-full bottom-4 left-4 bg-purple-400/10 blur-lg"
          animate={{
            scale: isHovered ? 1.3 : 1,
            opacity: isHovered ? 0.4 : 0.1,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {imageUrl && !imageError ? (
          <div className="relative w-full h-full">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-500 rounded-full border-t-transparent animate-spin" />
              </div>
            )}
            <img
              src={imageUrl || "/placeholder.svg?height=192&width=384"}
              alt={title}
              className={`object-cover w-full h-full transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 text-gray-300">
                <Code className="w-full h-full" />
              </div>
              <p className="text-sm text-gray-500">Project Preview</p>
            </div>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium border ${
              projectStats.status === "Active"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-blue-50 text-blue-700 border-blue-200"
            }`}
          >
            <div className="flex items-center gap-1">
              {projectStats.status === "Active" ? (
                <Zap className="w-3 h-3" />
              ) : (
                <Star className="w-3 h-3" />
              )}
              {projectStats.status}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {main}
        </p>

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 4).map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
              {techStack.length > 4 && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded-md border border-gray-200">
                  +{techStack.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Source Code Button */}
          <motion.button
            onClick={() => window.open(sourceCodeLink, "_blank")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 flex items-center justify-center gap-2 relative overflow-hidden group/btn"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:translate-x-full" />
            <Github className="w-4 h-4" />
            <span className="relative">View Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </motion.button>

          {/* Additional Info Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-all duration-300 border border-blue-200 hover:border-blue-300"
          >
            Learn More About This Project
          </motion.button>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute w-4 h-4 rounded-full -top-2 -right-2 bg-blue-400/20"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.2, 0.6, 0.2] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
        }}
      />
      <motion.div
        className="absolute w-3 h-3 rounded-full -bottom-2 -left-2 bg-purple-400/20"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1,
          opacity: isHovered ? [0.2, 0.5, 0.2] : 0,
        }}
        transition={{
          duration: 2,
          delay: 0.3,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
