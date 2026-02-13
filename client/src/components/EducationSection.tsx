/*
 * Blueprint Precision Design — Education Section
 * - Compact education cards
 * - Blueprint specification styling
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "International University of Business Agriculture and Technology (IUBAT)",
    year: "2017 – 2021",
    cgpa: "3.53 / 4.00",
    note: "100% waiver based on semester results",
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Uttara High School and College",
    year: "2014 – 2016",
    cgpa: "5.00 / 5.00",
    note: "Science Group",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Civil Aviation High School",
    year: "2013 – 2014",
    cgpa: "5.00 / 5.00",
    note: "Science Group",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-[10px] tracking-widest text-teal uppercase">Education</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group border border-border bg-linen/50 p-5 hover:border-teal/30 transition-colors duration-300"
          >
            <GraduationCap size={18} className="text-teal mb-3" />
            <h4 className="font-serif text-base text-navy mb-1 leading-snug">{edu.degree}</h4>
            <p className="text-xs text-navy-light mb-2">{edu.institution}</p>
            <div className="flex items-center gap-3 pt-2 border-t border-dashed border-border">
              <span className="font-mono text-[10px] text-muted-foreground">{edu.year}</span>
              <span className="w-px h-3 bg-border" />
              <span className="font-mono text-[10px] text-teal font-medium">{edu.cgpa}</span>
            </div>
            {edu.note && (
              <span className="inline-block mt-2 px-2 py-0.5 text-[9px] font-mono text-teal/70 border border-teal/20 bg-teal/5">
                {edu.note}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
