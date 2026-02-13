/*
 * Blueprint Precision Design — Navigation
 * - Sticky top nav with linen background + subtle border
 * - IBM Plex Mono for nav links
 * - Section numbers prefix each link
 * - Teal accent on active/hover
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Skills", href: "#skills" },
  { number: "03", label: "Experience", href: "#experience" },
  { number: "04", label: "Projects", href: "#projects" },
  { number: "05", label: "Certifications", href: "#certifications" },
  { number: "06", label: "Publications", href: "#publications" },
  { number: "07", label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-linen/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-mono text-xs font-medium text-teal tracking-wider">TA</span>
          <span className="w-px h-4 bg-border" />
          <span className="font-serif text-lg text-navy">Tanjin Alam</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 text-sm font-sans text-navy-light hover:text-teal transition-colors duration-200"
            >
              <span className="font-mono text-[10px] text-teal/60 group-hover:text-teal transition-colors">
                {link.number}
              </span>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Resume Button (Desktop) */}
        <a
          href="https://calendly.com/tanjin-alam/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-teal border border-teal/30 hover:bg-teal/5 hover:border-teal/60 transition-all duration-200"
        >
          Book a Call
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-linen/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-2 text-navy hover:text-teal transition-colors"
                >
                  <span className="font-mono text-xs text-teal/60">{link.number}</span>
                  <span className="font-sans font-medium">{link.label}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="https://calendly.com/tanjin-alam/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-teal border border-teal/30"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
