/*
 * Blueprint Precision Design — About Section
 * - Left margin section number
 * - Instrument Serif heading
 * - Clean paragraph layout with DM Sans
 * - DevOps infrastructure illustration
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const DEVOPS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/XJx48TTXUMJySIZdZdyOIv/sandbox/NPWy8a7K59aUqDZLns3L6H-img-2_1770964363000_na1fn_ZGV2b3BzLWluZnJhc3RydWN0dXJl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWEp4NDhUVFhVTUp5U0laZFpkeU9Jdi9zYW5kYm94L05QV3k4YTdLNTlhVXFEWkxuczNMNkgtaW1nLTJfMTc3MDk2NDM2MzAwMF9uYTFmbl9aR1YyYjNCekxXbHVabkpoYzNSeWRXTjBkWEpsLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dzxRi81M~Mt5WkzzhJhwaqHpmkEJTQ8NOo0YjaMgckWupscH3X9XOLu-Kshns~jl8L4hc4krr6K6Jzh3Hv5U~VsqGq28kPGDETsL0~HaPXBcZFQlLsy6K~vW-CHSHw9w0aCDLfQwY6-wf8m~ZIPksgCz0G9tp8kGwUV24ResMaf9HVpXfjEg3THKypvYGTzhmOqBgLiRty4XkepyuKx7r0aIw1jX9kAFcOXpAgroEQap3OaRJCFX71A6cj-BujJmByAiuydRSkEh42NYfR4N5VMjWB6PN8s-t7TbhsvJYLSPzJQoVACTWEv5zxro1N0UPyxbx19z2K8HHqGzQvOK5Q__";

const highlights = [
  "Designed, built, and operated high-traffic, distributed systems serving 3M+ users, 10K+ daily active users, and 20+ microservices in production environments.",
  "Hands-on experience across the entire product lifecycle — from ideation, system design, and architectural decision-making to development, testing, deployment, and production operations.",
  "Strong focus on scalable system architecture, cloud-native design, and best practices to reduce long-term maintenance costs and future architectural rework.",
  "Built and automated end-to-end CI/CD pipelines, covering build, testing, security checks, and Kubernetes-based deployments for containerized workloads.",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container">
        <SectionHeading
          number="01"
          title="About Me"
          id="about"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg leading-relaxed text-navy"
            >
              Senior DevOps & Software Engineer with experience across multiple domains
              including <span className="text-teal font-medium">HealthTech</span>,{" "}
              <span className="text-teal font-medium">FinTech</span>,{" "}
              <span className="text-teal font-medium">AI</span>,{" "}
              <span className="text-teal font-medium">Blockchain</span>, and{" "}
              <span className="text-teal font-medium">Data Platforms</span>, working with
              both startups and large-scale enterprises.
            </motion.p>

            <div className="space-y-4 pt-4">
              {highlights.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-dashed border-teal/40 font-mono text-[10px] text-teal mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-navy-light">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-border p-2 bg-cream">
              <img
                src={DEVOPS_IMG}
                alt="DevOps Infrastructure Blueprint"
                className="w-full h-auto"
              />
              {/* Caption */}
              <div className="mt-2 flex items-center justify-between px-1">
                <span className="font-mono text-[9px] text-muted-foreground tracking-wider uppercase">
                  Fig. 01 — Infrastructure Overview
                </span>
                <span className="font-mono text-[9px] text-teal/60">DWG-001</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
