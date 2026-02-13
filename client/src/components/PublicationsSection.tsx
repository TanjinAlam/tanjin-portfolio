/*
 * Blueprint Precision Design — Publications Section
 * - Academic paper cards with citation styling
 * - Instrument Serif for paper titles
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { FileText } from "lucide-react";

const publications = [
  {
    title: "A Secure and Optimized Healthcare Data Governance Framework Leveraging Hyperledger Fabric Blockchain",
    authors: "M. M. Alam, M. S. Islam, S. Muntaha, M. T. Alam, K. J. Tanha",
    venue: "2023 26th International Conference on Computer and Information Technology (ICCIT)",
    location: "Cox's Bazar, Bangladesh",
    year: "2023",
    highlight: "M. T. Alam",
  },
  {
    title: "Learning Token",
    authors: "Alfonso Govela, MD Tanjin Alam, Diana Barrero Zalles, Jackson Ross",
    venue: "GBBC (Global Blockchain Business Council), Linux Foundation",
    location: "",
    year: "2023",
    highlight: "MD Tanjin Alam",
  },
];

export default function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative bg-cream">
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      <div className="container relative z-10">
        <SectionHeading
          number="06"
          title="Publications"
          subtitle="Peer-reviewed research contributions in blockchain and healthcare data governance."
          id="publications"
        />

        <div className="space-y-4 max-w-4xl">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group border border-border bg-linen/70 p-6 hover:border-teal/30 transition-colors duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-dashed border-teal/30 mt-1">
                  <FileText size={18} className="text-teal" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-navy leading-snug mb-2">
                    "{pub.title}"
                  </h3>
                  <p className="text-sm text-navy-light mb-2">
                    {pub.authors.split(pub.highlight).map((part, j, arr) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && (
                          <span className="font-semibold text-navy">{pub.highlight}</span>
                        )}
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] text-teal">{pub.venue}</span>
                    {pub.location && (
                      <>
                        <span className="w-px h-3 bg-border" />
                        <span className="font-mono text-[11px] text-muted-foreground">{pub.location}</span>
                      </>
                    )}
                    <span className="w-px h-3 bg-border" />
                    <span className="font-mono text-[11px] text-muted-foreground">{pub.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
