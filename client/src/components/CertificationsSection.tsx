/*
 * Blueprint Precision Design — Certifications & Achievements
 * - Grid of certification badges styled as specification stamps
 * - Achievement cards with blueprint border styling
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { Award, Trophy, BookOpen, Code2, Users, ExternalLink, GitBranch, Lightbulb, Video } from "lucide-react";

const certifications = [
  { name: "KCNA", full: "Kubernetes & Cloud Native Associate", icon: Award, href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dea41b65-9de6-4650-8590-c936d36292d1-md-tanjin-alam-ebcf5c22-bb89-4ac1-a90b-f376e535d699-certificate.pdf" },
  { name: "CKA", full: "Certified Kubernetes Administrator", icon: Award, href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dea41b65-9de6-4650-8590-c936d36292d1-md-tanjin-alam-8f8cb7d1-55a8-4b1c-8c77-5e463ca7a824-certificate.pdf" },
  { name: "CKAD", full: "Certified Kubernetes Application Developer", icon: Award, href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dea41b65-9de6-4650-8590-c936d36292d1-md-tanjin-alam-a2076d6e-a488-450f-8a54-aa9b78cea30f-certificate.pdf" },
  { name: "KCSA", full: "Kubernetes & Cloud Native Security Associate", icon: Award, href: "https://www.credly.com/badges/b3e02066-eac0-464d-a76f-179ffbedce35" },
  { name: "CKS", full: "Certified Kubernetes Security Specialist", icon: Award, href: "https://www.credly.com/earner/earned/badge/a6a14cc0-fe77-47aa-93d9-b37aba285524" },
];

const achievements = [
  {
    icon: Trophy,
    title: "Blockchain Olympiad Bangladesh 2023",
    description: "1st and 2nd Finalist — National-level recognition for competitive blockchain innovation (Anchorblock Crandor & Anchorblock Sigma)",
    href: "https://www.facebook.com/BCOLBD/posts/pfbid034tEQdeK8wKGnNfMQ5NiMJhfGTjDtpcJnSrdygrDup5d9Q4f2XMPuup2ZMnmUBr7Ml",
  },
  {
    icon: BookOpen,
    title: "Hyperledger Mentorship Spotlight",
    description: "Learning Tokens in Hyperledger Besu — Featured by LF Decentralized Trust for token implementation work",
    href: "https://www.lfdecentralizedtrust.org/blog/hyperledger-mentorship-spotlight-learning-tokens-hyperledger-besu",
  },
  {
    icon: Code2,
    title: "Open-Source Contributor — Learning Tokens",
    description: "Active contributor to Linux Foundation Learning-Token framework for educational blockchain solutions",
    href: "https://github.com/hyperledger-labs/learning-tokens",
  },
  {
    icon: GitBranch,
    title: "Token Taxonomy Framework Contributor",
    description: "Contributing to establish a universally recognized standard for tokenization through InterWorkAlliance",
    href: "https://github.com/InterWorkAlliance/TokenTaxonomyFramework",
  },
  {
    icon: Lightbulb,
    title: "MIT Solve 2024 Global Learning Challenge",
    description: "Applied to MIT Solve 2024 Global Learning Challenge using Hyperledger Lab Learning Tokens",
    href: "https://solve.mit.edu/solutions/89607",
  },
  {
    icon: Video,
    title: "LF Decentralized Trust Workshops",
    description: "Active participant as both mentee and mentor in LF Decentralized Trust educational workshops and sessions",
    href: "https://www.youtube.com/@lfdecentralizedtrust/search?query=learning%20token",
  },
  {
    icon: Users,
    title: "Technical Writer — Medium",
    description: "Writing in-depth articles on DevOps, Blockchain, and Software Engineering topics",
    href: "https://medium.com/@piash.tanjin",
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
              <motion.a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative border border-border bg-linen/60 p-4 text-center hover:border-teal/50 transition-all duration-300 cursor-pointer"
              >
                <cert.icon size={20} className="mx-auto text-teal mb-2" />
                <span className="block font-mono text-lg font-semibold text-navy">{cert.name}</span>
                <span className="block font-sans text-[10px] text-muted-foreground mt-1 leading-tight">{cert.full}</span>
                <ExternalLink size={10} className="absolute top-2 right-2 text-teal/60 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Stamp effect */}
                <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-teal/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-teal/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
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
              <motion.a
                key={ach.title}
                href={ach.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group flex gap-4 p-5 border border-border bg-linen/40 hover:border-teal/30 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-dashed border-teal/30">
                  <ach.icon size={18} className="text-teal" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-sans text-sm font-semibold text-navy mb-1">{ach.title}</h4>
                    <ExternalLink size={12} className="text-teal/60 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-navy-light leading-relaxed">{ach.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
