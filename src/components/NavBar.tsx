"use client"

import { useState, useEffect } from "react"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react"

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
      {/* Background Blur Overlay */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/20"></div>
      </div>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-slate-900/80 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        {/* Decorative Top Border */}
        <div
          className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo/Brand */}
            <div className="relative group">
              <a
                href="/"
                className="relative text-3xl font-bold tracking-tight text-transparent transition-all duration-500 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 hover:scale-105"
              >
                Portfolio
                {/* Glow Effect */}
                <div className="absolute inset-0 text-3xl font-bold tracking-tight transition-opacity duration-500 opacity-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text blur-sm group-hover:opacity-50"></div>
                {/* Decorative Dot */}
                <div className="absolute w-2 h-2 rounded-full -top-1 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
              </a>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="items-center hidden space-x-1 md:flex">
              <div className="flex items-center p-2 space-x-1 border rounded-full bg-white/5 backdrop-blur-sm border-white/10">
                <NavLink href="#about" text="About" />
                <NavLink href="#experience" text="Experience" />
                <NavLink href="#projects" text="Projects" />
                <NavLink href="#footer" text="Contact" />
              </div>

              {/* Enhanced Resume Button */}
              <div className="ml-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1gEvDi0PrJAqQMTWAW_JRf7EnX1pDh83k/view?usp=drive_link",
                      "_blank",
                    )
                  }
                  className="relative px-6 py-3 overflow-hidden font-semibold transition-all duration-300 rounded-full text-slate-900 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-105 group"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 w-0 transition-all duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full"></div>

                  <span className="relative flex items-center gap-2">📄 Resume</span>
                </button>
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative inline-flex items-center justify-center p-3 text-gray-400 transition-all duration-300 border rounded-full bg-white/5 backdrop-blur-sm border-white/10 hover:text-white hover:bg-white/10 hover:scale-110 focus:outline-none group"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {/* Button Background Glow */}
                <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 group-hover:opacity-100"></div>

                <div className="relative">
                  {isMenuOpen ? (
                    <RiCloseLine size={24} className="text-white transition-transform duration-300 rotate-90" />
                  ) : (
                    <RiMenu3Line size={24} className="text-white transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-6 pb-8 mx-4 mt-4 space-y-2 border rounded-2xl bg-slate-900/90 backdrop-blur-xl border-white/10">
            {/* Mobile Navigation Header */}
            <div className="pb-4 mb-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                Navigation
              </h3>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <MobileNavLink href="#about" text="About" onClick={handleNavClick} />
              <MobileNavLink href="#experience" text="Experience" onClick={handleNavClick} />
              <MobileNavLink href="#projects" text="Projects" onClick={handleNavClick} />
              <MobileNavLink href="#footer" text="Contact" onClick={handleNavClick} />
            </div>

            {/* Mobile Resume Button */}
            <div className="pt-4 mt-6 border-t border-white/10">
              <button
                onClick={() => {
                  window.open(
                    "https://https://drive.google.com/file/d/1gEvDi0PrJAqQMTWAW_JRf7EnX1pDh83k/view?usp=drive_link&export=download",
                    "_blank",
                  )
                  handleNavClick()
                }}
                className="relative w-full px-6 py-4 overflow-hidden font-semibold transition-all duration-300 text-slate-900 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30 group"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 w-0 transition-all duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full"></div>

                <span className="relative flex items-center justify-center gap-2">📄 Download Resume</span>
              </button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 pt-4 mt-4 border-t border-white/10">
              {[
                { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/luzza-dangol-b1b56a338/" },
                { icon: "🐙", label: "GitHub", href: "https://github.com/luzza07" },
                { icon: "📧", label: "Email", href: "mailto:luzzadangol456@gmail.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center w-12 h-12 text-xl transition-all duration-300 border rounded-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:scale-110"
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

// Enhanced NavLink component for desktop
const NavLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-full hover:text-white hover:bg-white/10 group"
  >
    <span className="relative z-10">{text}</span>

    {/* Hover Background */}
    <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 group-hover:opacity-100"></div>

    {/* Active Indicator */}
    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-6"></div>
  </a>
)

// Enhanced MobileNavLink component
const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative flex items-center px-4 py-3 text-base font-medium text-gray-300 transition-all duration-300 rounded-xl hover:text-white hover:bg-white/10 group"
  >
    {/* Icon */}
    <div className="flex items-center justify-center w-8 h-8 mr-3 text-sm transition-all duration-300 border rounded-lg bg-white/5 border-white/10 group-hover:bg-gradient-to-r group-hover:from-yellow-400/20 group-hover:to-orange-400/20 group-hover:border-yellow-400/30">
      {text === "About" && "👤"}
      {text === "Experience" && "💼"}
      {text === "Projects" && "🚀"}
      {text === "Contact" && "📧"}
    </div>

    <span className="relative">{text}</span>

    {/* Hover Arrow */}
    <div className="ml-auto transition-all duration-300 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
      →
    </div>
  </a>
)

export default Navbar
