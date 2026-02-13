/*
 * Blueprint Precision Design — Certifications & Achievements
 * - Grid of certification badges styled as specification stamps
 * - Achievement cards with blueprint border styling
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { Award, Trophy, BookOpen, Code2, Users } from "lucide-react";

const certifications = [
  { name: "KCNA", full: "Kubernetes & Cloud Native Associate", icon: Award },
  { name: "CKA", full: "Certified Kubernetes Administrator", icon: Award },
  { name: "CKAD", full: "Certified Kubernetes Application Developer", icon: Award },
  { name: "KCSA", full: "Kubernetes & Cloud Native Security Associate", icon: Award },
  { name: "CKS", full: "Certified Kubernetes Security Specialist", icon: Award },
];

const achievements = [
  {
    icon: Trophy,
    title: "Blockchain Olympiad Bangladesh 2023",
    description: "1st and 2nd Finalist — National-level recognition for competitive blockchain innovation (Anchorblock Crandor & Anchorblock Sigma)",
  },
  {
    icon: BookOpen,
    title: "Hyperledger Mentorship Spotlight",
    description: "Learning Tokens in Hyperledger Besu — Featured by LF Decentralized Trust for token implementation work",
  },
  {
    icon: Code2,
    title: "Open-Source Contributor",
    description: "Active contributor to Linux Foundation Learning-Token and InterWorkAlliance token taxonomy framework",
  },
  {
    icon: Users,
    title: "Technical Writer — Medium",
    description: "Writing in-depth articles on DevOps, Blockchain, and Software Engineering topics",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container">
        <SectionHeading
          number="05"
          title="Certifications & Achievements"
          subtitle="Industry-recognized credentials and notable accomplishments in cloud-native and blockchain technologies."
          id="certifications"
        />

        {/* Kubernetes Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-widest text-teal uppercase">Kubernetes Certifications</span>
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-[10px] text-muted-foreground">05 / 05 Complete</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative border border-border bg-linen/60 p-4 text-center hover:border-teal/50 transition-all duration-300"
              >
                <cert.icon size={20} className="mx-auto text-teal mb-2" />
                <span className="block font-mono text-lg font-semibold text-navy">{cert.name}</span>
                <span className="block font-sans text-[10px] text-muted-foreground mt-1 leading-tight">{cert.full}</span>

                {/* Stamp effect */}
                <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-teal/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-teal/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-widest text-teal uppercase">Achievements & Contributions</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group flex gap-4 p-5 border border-border bg-linen/40 hover:border-teal/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-dashed border-teal/30">
                  <ach.icon size={18} className="text-teal" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-navy mb-1">{ach.title}</h4>
                  <p className="text-xs text-navy-light leading-relaxed">{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
