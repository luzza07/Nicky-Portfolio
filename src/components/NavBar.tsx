"use client"
import { useState, useEffect } from "react"
import type React from "react"
import { Menu, X, Download, User, Briefcase, Code, Mail, Linkedin, Github } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking on a link
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl py-3 shadow-lg border-b border-gray-200"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        {/* Full width container to match other sections */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo/Brand */}
            <div className="relative group">
              <a
                href="#home"
                className="relative text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Nicky Maharjan
                {/* Decorative Dot */}
                <div className="absolute w-2 h-2 rounded-full -top-1 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="items-center hidden md:flex space-x-1">
              <div className="flex items-center p-2 space-x-1 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
                <NavLink href="#home" text="Home" icon={<User className="w-4 h-4" />} />
                <NavLink href="#experience" text="Experience" icon={<Briefcase className="w-4 h-4" />} />
                <NavLink href="#skills" text="Skills" icon={<Code className="w-4 h-4" />} />
                <NavLink href="#footer" text="Contact" icon={<Mail className="w-4 h-4" />} />
              </div>

              {/* Resume Button */}
              <div className="ml-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1gEvDi0PrJAqQMTWAW_JRf7EnX1pDh83k/view?usp=drive_link",
                      "_blank",
                    )
                  }
                  className="relative px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 group overflow-hidden"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 w-0 transition-all duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full"></div>
                  <span className="relative flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Resume
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative inline-flex items-center justify-center p-3 text-gray-600 transition-all duration-300 bg-gray-50 border border-gray-200 rounded-full hover:text-gray-900 hover:bg-gray-100 hover:scale-110 focus:outline-none group"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative">
                  {isMenuOpen ? (
                    <X size={20} className="transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu size={20} className="transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
          }`}
        >
          <div className="mx-4 mt-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg">
            {/* Mobile Navigation Header */}
            <div className="pb-4 mb-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Navigation
              </h3>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <MobileNavLink href="#home" text="Home" icon={<User className="w-5 h-5" />} onClick={handleNavClick} />
              <MobileNavLink
                href="#experience"
                text="Experience"
                icon={<Briefcase className="w-5 h-5" />}
                onClick={handleNavClick}
              />
              <MobileNavLink
                href="#skills"
                text="Skills"
                icon={<Code className="w-5 h-5" />}
                onClick={handleNavClick}
              />
              <MobileNavLink
                href="#footer"
                text="Contact"
                icon={<Mail className="w-5 h-5" />}
                onClick={handleNavClick}
              />
            </div>

            {/* Mobile Resume Button */}
            <div className="pt-4 mt-6 border-t border-gray-200">
              <button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1gEvDi0PrJAqQMTWAW_JRf7EnX1pDh83k/view?usp=drive_link",
                    "_blank",
                  )
                  handleNavClick()
                }}
                className="relative w-full px-6 py-4 font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/30 group overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 w-0 transition-all duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 pt-4 mt-4 border-t border-gray-200">
              {[
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/nicky-maharjan-ba8a78284/",
                  color: "hover:bg-blue-50 hover:text-blue-600",
                },
                {
                  icon: <Github className="w-5 h-5" />,
                  label: "GitHub",
                  href: "https://github.com/nickyMaharjan",
                  color: "hover:bg-gray-50 hover:text-gray-900",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  href: "mailto:nickymaharjan2023@gmail.com",
                  color: "hover:bg-red-50 hover:text-red-600",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-center w-12 h-12 transition-all duration-300 bg-gray-50 border border-gray-200 rounded-full hover:scale-110 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 transition-opacity duration-300 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  )
}

// NavLink component for desktop
const NavLink = ({ href, text, icon }: { href: string; text: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 rounded-full hover:text-gray-900 hover:bg-white hover:shadow-sm group"
  >
    <span className="relative z-10 flex items-center gap-2">
      {icon}
      {text}
    </span>
    {/* Hover Background */}
    <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-blue-50 to-purple-50 group-hover:opacity-100"></div>
    {/* Active Indicator */}
    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-6"></div>
  </a>
)

// MobileNavLink component
const MobileNavLink = ({
  href,
  text,
  icon,
  onClick,
}: {
  href: string
  text: string
  icon: React.ReactNode
  onClick: () => void
}) => (
  <a
    href={href}
    onClick={onClick}
    className="relative flex items-center px-4 py-3 text-base font-medium text-gray-600 transition-all duration-300 rounded-xl hover:text-gray-900 hover:bg-gray-50 group"
  >
    {/* Icon */}
    <div className="flex items-center justify-center w-10 h-10 mr-3 transition-all duration-300 bg-gray-50 border border-gray-200 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:border-blue-200">
      {icon}
    </div>

    <span className="relative">{text}</span>

    {/* Hover Arrow */}
    <div className="ml-auto transition-all duration-300 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
      →
    </div>
  </a>
)

export default Navbar
