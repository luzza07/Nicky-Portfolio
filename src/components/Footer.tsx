"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "nickymaharjan2023@gmail.com",
      href: "mailto:nickymaharjan2023@gmail.com",
      color: "from-red-500 to-pink-500",
      description: "Drop me a line",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/nicky-maharjan-ba8a78284/",
      color: "from-blue-500 to-blue-600",
      description: "Let's connect professionally",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/nickyMaharjan",
      color: "from-gray-700 to-gray-900",
      description: "Check out my code",
    },
  ];

  const containerVariants: Variants = {
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
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], 
      },
    },
  };

  return (
    <footer className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-32 h-32 rounded-full top-10 left-10 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl animate-pulse"></div>
        <div
          className="absolute w-40 h-40 rounded-full bottom-10 right-10 bg-gradient-to-r from-emerald-400 to-teal-500 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-r from-pink-400 to-rose-500 blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-purple-600 bg-purple-50 rounded-full">
            <Coffee className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get In
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              {" "}
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something
            amazing together!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={
                contact.href.startsWith("mailto:") ? "" : "noopener noreferrer"
              }
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group block"
            >
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-6">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${contact.color} text-white shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {contact.icon}
                  </div>

                  {/* Text Content */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {contact.description}
                    </p>
                    <p className="text-gray-700 font-medium">{contact.value}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-end">
                    <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Ready to start a project?
              </h3>
              <p className="text-gray-600">
                Let's discuss your ideas and bring them to life
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Start Conversation
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 pt-8"
        >
          {/* Decorative Elements */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
              />
              <motion.div
                className="w-2 h-2 bg-pink-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.4,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;