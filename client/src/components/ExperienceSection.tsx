/*
 * Blueprint Precision Design — Experience Section
 * - Vertical timeline with dotted connection lines
 * - Company cards with specification block styling
 * - Measurement marks on timeline
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Pullsight AI",
    role: "Senior DevOps Engineer",
    location: "Bulgaria",
    period: "July 2025 – Present",
    current: true,
    responsibilities: [
      "Set up and managed Google Cloud Platform (GCP) environments for development, staging, and production.",
      "Built and deployed development workloads using Compute Engine, Docker, and GitHub Actions CI/CD pipelines.",
      "Provisioned production and staging infrastructure using GKE and Terraform, implementing load balancers for scalable, multi-region traffic management.",
    ],
  },
  {
    company: "Grameen HealthTech Limited",
    role: "Senior DevOps & Software Engineer",
    location: "Dhaka, Bangladesh",
    period: "Sep 2024 – Oct 2025",
    current: false,
    responsibilities: [
      "Deployed and maintained applications on AWS EKS, managing infrastructure and monitoring server performance.",
      "Developed reusable REST APIs for mobile and web applications, enhancing scalability and maintainability.",
      "Designed and optimized relational and NoSQL databases, ensuring efficient data modeling and high performance.",
      "Researched and integrated cutting-edge tools to improve team productivity and streamline workflows.",
    ],
  },
  {
    company: "Anchorblock Technology Ltd.",
    role: "Senior Software Engineer",
    location: "Banani, Dhaka",
    period: "Aug 2022 – Aug 2024",
    current: false,
    responsibilities: [
      "Built and managed backend infrastructure for large-scale applications and services.",
      "Collaborated with team members to build ML products including chatbot using NLP, RAG, Vector Search.",
      "Designed end-to-end system architecture for efficient data pipeline and processing using Python, Apache Airflow, FastAPI.",
      "Implemented smart contracts using Hyperledger Fabric, Ethereum, and Hyperledger Besu technologies.",
    ],
  },
  {
    company: "Hyperledger Foundation",
    role: "Blockchain Researcher — Linux Foundation",
    location: "San Francisco, CA (Remote)",
    period: "July 2023 – Dec 2025",
    current: true,
    responsibilities: [
      "Mentoring participants in the Hyperledger mentorship program.",
      "Designing and implementing learning tokens using token taxonomy framework and Hyperledger Besu.",
      "R&D for tokenization of education systems using new ERC Standards (RWA).",
      "Successfully implemented POC using hybrid blockchain system with Kaleido cloud infrastructure.",
    ],
  },
  {
    company: "Shafa Care Ltd",
    role: "Backend Engineer",
    location: "Dhaka, Bangladesh",
    period: "Jan 2021 – Sept 2022",
    current: false,
    responsibilities: [
      "Implemented backend functionalities and essential APIs using NodeJS, SequelizeORM and MySQL.",
      "Created a chatbot tailored to predefined data by accurately matching user intents.",
      "Mentored junior engineers and fostered a culture of learning and growth.",
      "Used Digital Ocean for cloud service and PM2 for deployment monitoring.",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container">
        <SectionHeading
          number="03"
          title="Professional Experience"
          subtitle="A track record of building and scaling systems across diverse industries and technologies."
          id="experience"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px border-l-2 border-dashed border-teal/20" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 lg:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-2.5 lg:left-6.5 top-2 w-3 h-3 border-2 border-teal bg-linen z-10">
                  {exp.current && (
                    <span className="absolute inset-0 bg-teal/20 animate-ping" />
                  )}
                </div>

                {/* Measurement mark */}
                <span className="absolute left-0 lg:left-2 top-1.5 font-mono text-[9px] text-teal/40 hidden lg:block">
                  —
                </span>

                {/* Card */}
                <div className="border border-border bg-linen/50 hover:border-teal/30 transition-colors duration-300">
                  {/* Header */}
                  <div className="p-5 pb-4 border-b border-dashed border-border">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-xl text-navy">{exp.company}</h3>
                        <p className="font-sans text-sm font-medium text-teal mt-0.5">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                          <Calendar size={11} className="text-teal/60" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                          <MapPin size={11} className="text-teal/60" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="p-5 pt-4">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex gap-3 items-start text-sm text-navy-light leading-relaxed">
                          <span className="flex-shrink-0 w-1 h-1 mt-2 bg-teal/50" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
