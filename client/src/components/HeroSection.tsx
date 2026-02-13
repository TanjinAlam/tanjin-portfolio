/*
 * Blueprint Precision Design — Hero Section
 * - Large left-aligned name in Instrument Serif
 * - Right-aligned "specification block" with role, location, contact
 * - Blueprint grid background with generated hero image
 * - Stat counters styled like measurement annotations
 * - Crosshair decorations at corners
 */

import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Download } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/XJx48TTXUMJySIZdZdyOIv/sandbox/NPWy8a7K59aUqDZLns3L6H-img-1_1770964359000_na1fn_aGVyby1ibHVlcHJpbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWEp4NDhUVFhVTUp5U0laZFpkeU9Jdi9zYW5kYm94L05QV3k4YTdLNTlhVXFEWkxuczNMNkgtaW1nLTFfMTc3MDk2NDM1OTAwMF9uYTFmbl9hR1Z5YnkxaWJIVmxjSEpwYm5RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fzdUwgLGKiXlPKCIFaKeVSpq1zWHavf~7e8YD~7k71cyQIsCpVC-~XY8I8HbbvzLJBr-1KA7e~Y5-kX~4YXU30osKWcS67UCwLDmjUF0hNvO0uSqXiukGwJZVX2hbjKR4fK6pdSiwSUmunPZBmDexHFthrw8b0EVyQ4AjvGAIlDyKTk3G7oE1OmslR4t5ta~E~I4PPnxYjhU33WIIiKW316BLqt3BHjyNoB5G~fb9jeLmvKEey~7478OAhOHVYUHrjKKzigaxE~zJcCZDZ0eJX-ySs~YFfIrtt39U4L2JUc9MoiXzwYytGmvEaOLR2~AL80XbjItTjkz3A-qYvdoLQ__";

const stats = [
  { value: "3M+", label: "Users Served" },
  { value: "20+", label: "Microservices" },
  { value: "5", label: "K8s Certs" },
  { value: "5+", label: "Years Exp." },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-linen/60 via-linen/40 to-linen" />
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      {/* Crosshair decorations */}
      <div className="absolute top-24 left-8 font-mono text-sm text-teal/20 select-none hidden lg:block">+</div>
      <div className="absolute top-24 right-8 font-mono text-sm text-teal/20 select-none hidden lg:block">+</div>
      <div className="absolute bottom-24 left-8 font-mono text-sm text-teal/20 select-none hidden lg:block">+</div>
      <div className="absolute bottom-24 right-8 font-mono text-sm text-teal/20 select-none hidden lg:block">+</div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left: Name & Title */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block font-mono text-xs font-medium tracking-widest text-teal uppercase mb-4">
                Senior DevOps & Software Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] text-navy leading-[0.9] tracking-tight"
            >
              Tanjin
              <br />
              <span className="italic text-teal">Alam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 max-w-lg text-base leading-relaxed text-navy-light"
            >
              Engineering scalable systems across HealthTech, FinTech, AI, and Blockchain.
              From ideation to production — designing infrastructure that serves millions.
            </motion.p>

            {/* Contact row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <a href="mailto:piash.tanjin@gmail.com" className="flex items-center gap-2 text-sm text-navy-light hover:text-teal transition-colors">
                <Mail size={14} className="text-teal" />
                <span className="font-mono text-xs">piash.tanjin@gmail.com</span>
              </a>
              <a href="https://github.com/TanjinAlam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-navy-light hover:text-teal transition-colors">
                <Github size={14} className="text-teal" />
                <span className="font-mono text-xs">TanjinAlam</span>
              </a>
              <a href="https://linkedin.com/in/tanjinalam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-navy-light hover:text-teal transition-colors">
                <Linkedin size={14} className="text-teal" />
                <span className="font-mono text-xs">@tanjinalam</span>
              </a>
              <span className="flex items-center gap-2 text-sm text-navy-light">
                <MapPin size={14} className="text-teal" />
                <span className="font-mono text-xs">Uttara, Dhaka</span>
              </span>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href={`${import.meta.env.BASE_URL}assets/my_resume.pdf`}
                download="Tanjin_Alam_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 font-mono text-sm tracking-wider text-linen bg-navy hover:bg-navy-light transition-colors uppercase"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Specification Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="border border-border bg-linen/60 backdrop-blur-sm p-6">
              {/* Spec header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
                <span className="font-mono text-[10px] tracking-widest text-teal uppercase">Specifications</span>
                <span className="font-mono text-[10px] text-muted-foreground">REV. 2025</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="relative p-3 border border-dashed border-border"
                  >
                    <span className="block font-serif text-3xl text-navy">{stat.value}</span>
                    <span className="block font-mono text-[10px] tracking-wider text-muted-foreground uppercase mt-1">
                      {stat.label}
                    </span>
                    {/* Corner mark */}
                    <span className="absolute -top-1 -right-1 font-mono text-[8px] text-teal/40">+</span>
                  </motion.div>
                ))}
              </div>

              {/* Domains */}
              <div className="mt-5 pt-4 border-t border-dashed border-border">
                <span className="font-mono text-[10px] tracking-widest text-teal uppercase mb-2 block">Domains</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["HealthTech", "FinTech", "AI / ML", "Blockchain", "Data Platforms", "Cloud Native"].map((domain) => (
                    <span
                      key={domain}
                      className="px-2 py-1 text-[11px] font-mono text-navy-light border border-border bg-cream"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-teal/40"
          />
        </motion.div>
      </div>
    </section>
  );
}
