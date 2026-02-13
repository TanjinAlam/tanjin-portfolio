/*
 * Blueprint Precision Design — Contact & Footer
 * - Clean contact block with blueprint styling
 * - Social links with icon + mono text
 * - Footer with technical drawing border
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import EducationSection from "./EducationSection";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "piash.tanjin@gmail.com", href: "mailto:piash.tanjin@gmail.com" },
  { icon: Phone, label: "+8801913757371", href: "tel:+8801913757371" },
  { icon: Github, label: "TanjinAlam", href: "https://github.com/TanjinAlam" },
  { icon: Linkedin, label: "@tanjinalam", href: "https://linkedin.com/in/tanjinalam" },
  { icon: MapPin, label: "Uttara, Dhaka, Bangladesh", href: "#" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container">
        <SectionHeading
          number="07"
          title="Get in Touch"
          subtitle="Open to discussing new opportunities, collaborations, or interesting engineering challenges."
          id="contact"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="border border-border bg-linen/50 p-6">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
                <span className="font-mono text-[10px] tracking-widest text-teal uppercase">Contact Details</span>
                <span className="font-mono text-[10px] text-muted-foreground">REF. 07-A</span>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-4 group py-2"
                  >
                    <div className="w-8 h-8 flex items-center justify-center border border-dashed border-teal/30 group-hover:border-teal/60 transition-colors">
                      <link.icon size={14} className="text-teal" />
                    </div>
                    <span className="font-mono text-sm text-navy-light group-hover:text-teal transition-colors">
                      {link.label}
                    </span>
                    {link.href.startsWith("http") && (
                      <ExternalLink size={10} className="text-muted-foreground group-hover:text-teal transition-colors ml-auto" />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="font-serif text-3xl text-navy leading-snug mb-6">
              Let's build something
              <br />
              <span className="italic text-teal">remarkable</span> together.
            </p>
            <p className="text-sm text-navy-light leading-relaxed mb-8 max-w-md">
              Whether you're looking for a Senior DevOps Engineer to scale your infrastructure,
              a blockchain specialist for your next Web3 project, or a full-stack architect
              to design your system from the ground up — I'd love to hear from you.
            </p>
            <a
              href="mailto:piash.tanjin@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono text-sm tracking-wider text-linen bg-navy hover:bg-navy-light transition-colors uppercase w-fit"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </motion.div>
        </div>

        {/* Education */}
        <EducationSection />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-teal tracking-wider">TA</span>
              <span className="w-px h-4 bg-border" />
              <span className="font-serif text-sm text-navy">Tanjin Alam</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
              DESIGNED & BUILT WITH PRECISION — 2025
            </span>
            <div className="flex items-center gap-4">
              <a href="https://github.com/TanjinAlam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal transition-colors">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/tanjinalam" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:piash.tanjin@gmail.com" className="text-muted-foreground hover:text-teal transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
