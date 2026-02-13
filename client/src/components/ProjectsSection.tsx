/*
 * Blueprint Precision Design — Projects Section
 * - Cards styled as technical drawing sheets
 * - Project type badge, tech stack tags
 * - Fold-open reveal on hover
 * - Uses blockchain and data pipeline generated images
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const BLOCKCHAIN_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/XJx48TTXUMJySIZdZdyOIv/sandbox/NPWy8a7K59aUqDZLns3L6H-img-3_1770964361000_na1fn_YmxvY2tjaGFpbi1uZXR3b3Jr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWEp4NDhUVFhVTUp5U0laZFpkeU9Jdi9zYW5kYm94L05QV3k4YTdLNTlhVXFEWkxuczNMNkgtaW1nLTNfMTc3MDk2NDM2MTAwMF9uYTFmbl9ZbXh2WTJ0amFHRnBiaTF1WlhSM2IzSnIucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Basu4Iy4V~AwFLZDEBcg~rwLmgFeNQUciG-OGC7gkS2TUkbZoe6xKoQSRbDZgW2wZnfexXjTX-vjyqvIwrsD0IwOmu2Hns24Oth9bOnSRBG8RMDd8Sw4-fYK-ilFosK~KO20AsYta6faSgl-FphACKlACDujH9fL4D-GHm49ptyEiunDM3MJU9nlwYqMFCliZ7H3Nz~RxiV3s587F0TAA9KMUDDXrnPJKg7avLT~hjcN0siMceWt0fJrkzD5GwWcl3njyXaEn5H4DIJH-ik4pRzP~JewYtiuhHTQ8S36BUxHjJ7jKuB-dDcByypYK4Jrk-U6HLEyhP3dg89uy4SuEA__";

const DATA_PIPELINE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/XJx48TTXUMJySIZdZdyOIv/sandbox/NPWy8a7K59aUqDZLns3L6H-img-4_1770964366000_na1fn_ZGF0YS1waXBlbGluZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWEp4NDhUVFhVTUp5U0laZFpkeU9Jdi9zYW5kYm94L05QV3k4YTdLNTlhVXFEWkxuczNMNkgtaW1nLTRfMTc3MDk2NDM2NjAwMF9uYTFmbl9aR0YwWVMxd2FYQmxiR2x1WlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SytsrzRTXaRIkZio~siwdvWU-vGMqurftFvg9P~P9VBehpc48X~8dyVSbu4Ri7Z11YOBMdKymV2ww0xUyjDSlhPZ5tKm50mp2esJM7x98zyNXWQKae6Lw1z~Q-invAlAYC-85WcRswPIixOTURfOwT0WlC-deKWJ6F5LvnxyIt4EBB1tTzUOStav-cbiIphjtjbyicIi07~7WgXlXZHmdHkIpnga49kRyZC4WZK3XjPNJfsOxY86H0ytYWdbEpPRHanWq1Fs3SSl3ghU4Lkt~SmxYgtwKcidCtyREOiMhxpC8DOopHjzIwBx3KCluR6oo8o6L6TyAG0hDrOwDWVr4Q__";

const projects = [
  {
    name: "Pullsight AI",
    subtitle: "Open Source AI Code Reviewer",
    role: "Senior DevOps & Software Engineer",
    type: "Product",
    tech: ["NestJS", "Python", "Terraform", "Docker", "GCP", "GKE", "GitHub Actions"],
    overview: "An open-source, developer-centric AI platform designed to cut code review time and bugs in half — without compromising code privacy. Integrates with version control systems to analyze source code, detect issues, and suggest improvements in real time.",
    featured: true,
    image: null,
  },
  {
    name: "Shukhee",
    subtitle: "360° Healthcare Expert",
    role: "Senior Software Engineer",
    type: "Product",
    tech: ["NestJs", "Python", "ExpressJs", "Java", "MySQL", "WebSocket", "EKS"],
    overview: "A pioneering e-health platform by Grameen HealthTech Limited, revolutionizing healthcare access with convenient, affordable, and high-quality medical services for everyone.",
    featured: true,
    image: null,
  },
  {
    name: "Swap-Tech",
    subtitle: "Data Aggregation & Analysis Platform",
    role: "Senior Backend Engineer",
    type: "Product",
    tech: ["Airflow", "Python", "FastAPI", "Socket", "DBT", "MongoDB", "Docker", "Pandas"],
    overview: "A cutting-edge platform for in-depth analysis and optimization of hedge fund operations, empowering financial professionals with comprehensive tools for strategic decision-making.",
    featured: false,
    image: DATA_PIPELINE_IMG,
  },
  {
    name: "Anchorbooks",
    subtitle: "AI & Blockchain Powered Accounting",
    role: "Senior Software & Blockchain Engineer",
    type: "Product",
    tech: ["Hyperledger Fabric", "NestJs", "PostgreSQL", "ExpressJs"],
    overview: "Revolutionizes accounting with Magic Bookkeeping powered by AI for seamless invoice and expense creation. Integrated with WhatsApp for easy accessibility.",
    featured: false,
    image: BLOCKCHAIN_IMG,
  },
  {
    name: "MFS Monitoring Dashboard",
    subtitle: "Bkash Network Monitoring",
    role: "Senior Backend Engineer",
    type: "Service",
    tech: ["Python", "NestJS", "ReactJS", "GRPC", "InfluxDB", "Prometheus", "MySQL"],
    overview: "An advanced platform that automates the testing and monitoring of connectivity and service status across multiple Mobile Network Operators (MNOs).",
    featured: false,
    image: null,
  },
  {
    name: "FinNLP",
    subtitle: "Financial Sentiment Analysis",
    role: "Senior Backend Engineer",
    type: "Product",
    tech: ["FastAPI", "NestJs", "PostgreSQL", "ReactJs", "Machine Learning"],
    overview: "Harnessing NLP to analyze and interpret sentiment from financial news sources, providing real-time insights into market sentiment for informed financial decision-making.",
    featured: false,
    image: null,
  },
  {
    name: "Ebhubon",
    subtitle: "E-Commerce Marketplace",
    role: "Backend Engineer",
    type: "Product",
    tech: ["Node.js", "Nest.js", "TypeORM", "MySQL", "React.js"],
    overview: "An ultimate e-commerce multi-vendor marketplace where customers and sellers connect seamlessly.",
    featured: false,
    image: null,
  },
  {
    name: "Shafa Care",
    subtitle: "Telemedicine Platform",
    role: "Backend Engineer",
    type: "Product",
    tech: ["Node.js", "Express.js", "Sequelize", "MySQL", "React.js", "Flutter"],
    overview: "A telemedicine platform enabling secure video consultations between patients and certified doctors, with appointment management and real-time communication.",
    featured: false,
    image: null,
  },
  {
    name: "SCM Prototype",
    subtitle: "Supply Chain Management",
    role: "Blockchain Engineer",
    type: "Research",
    tech: ["Hyperledger Sawtooth", "NodeJs", "ReactJs", "Solidity"],
    overview: "A supply chain management solution based on blockchain technology with end-to-end tracking implemented across different blockchain platforms.",
    featured: false,
    image: null,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section ref={ref} className="py-24 relative bg-cream">
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      <div className="container relative z-10">
        <SectionHeading
          number="04"
          title="Notable Projects"
          subtitle="Selected work spanning healthcare, fintech, blockchain, and data platforms."
          id="projects"
        />

        {/* Featured projects — large cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {visibleProjects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border bg-linen/80 hover:border-teal/40 transition-all duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-mono tracking-wider text-teal border border-teal/30 uppercase mb-2">
                      {project.type}
                    </span>
                    <h3 className="font-serif text-2xl text-navy">{project.name}</h3>
                    <p className="font-sans text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
                  </div>
                </div>

                {/* Role */}
                <p className="font-mono text-[11px] text-teal mb-3">{project.role}</p>

                {/* Overview */}
                <p className="text-sm text-navy-light leading-relaxed mb-4">{project.overview}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dashed border-border">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-navy-light border border-border bg-cream">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decorations */}
              <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-teal/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-teal/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Other projects — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleProjects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="group relative border border-border bg-linen/60 hover:border-teal/30 transition-all duration-300 overflow-hidden"
            >
              {/* Image if available */}
              {project.image && (
                <div className="h-32 overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              )}

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-1.5 py-0.5 text-[9px] font-mono tracking-wider text-teal border border-teal/20 uppercase">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-navy mb-1">{project.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{project.subtitle}</p>
                <p className="text-xs text-navy-light leading-relaxed mb-3 line-clamp-3">{project.overview}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-dashed border-border">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground border border-border/60">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono text-teal/60">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more/less */}
        {projects.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-wider text-teal border border-teal/30 hover:bg-teal/5 transition-colors uppercase"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>View All Projects <ChevronDown size={14} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
