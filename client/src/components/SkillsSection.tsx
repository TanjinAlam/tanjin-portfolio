/*
 * Blueprint Precision Design — Skills Section
 * - Grid of skill categories styled as blueprint specification blocks
 * - IBM Plex Mono for category labels
 * - Tags with subtle borders
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Go", "Solidity", "Shell", "Rust"],
  },
  {
    category: "Web & API",
    items: ["FastAPI", "ExpressJs", "NestJs", "React", "GraphQL", "GRPC", "REST API"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS EC2", "ECS", "Lambda", "S3", "GKE", "EKS", "Terraform", "Pulumi", "Ansible"],
  },
  {
    category: "Containers",
    items: ["Docker", "Kubernetes", "Helm", "GKE", "EKS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "InfluxDB", "Redis"],
  },
  {
    category: "Data & ML",
    items: ["PySpark", "Pandas", "NumPy", "ArcticDB", "DBT", "Airbyte", "LLM", "OpenCV"],
  },
  {
    category: "Monitoring",
    items: ["Grafana", "Kibana", "Prometheus", "JMeter"],
  },
  {
    category: "Blockchain",
    items: ["Ethereum", "Hyperledger Fabric", "Hyperledger Besu", "Hardhat", "IPFS", "Solidity"],
  },
  {
    category: "Automation",
    items: ["Apache Airflow", "GitHub Actions", "CI/CD Pipelines", "Pytest", "Mocha"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative bg-cream">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="container relative z-10">
        <SectionHeading
          number="02"
          title="Technology Skills"
          subtitle="A comprehensive toolkit spanning cloud infrastructure, backend systems, blockchain, and data engineering."
          id="skills"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative border border-border bg-linen/80 p-5 hover:border-teal/40 transition-colors duration-300"
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] font-medium tracking-widest text-teal uppercase">
                  {cat.category}
                </span>
                <div className="flex-1 h-px bg-border group-hover:bg-teal/20 transition-colors" />
                <span className="font-mono text-[9px] text-muted-foreground">
                  {String(cat.items.length).padStart(2, "0")}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 text-[11px] font-mono text-navy-light border border-border/80 bg-background hover:border-teal/30 hover:text-teal transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Corner decoration */}
              <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-teal/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-teal/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
