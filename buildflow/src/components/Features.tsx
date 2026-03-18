"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: "lucide:factory",
    title: "Line Coordination",
    description:
      "Synchronize your production lines instantly with live floor tracking, shared resource management, and seamless shift transitions.",
  },
  {
    icon: "lucide:activity",
    title: "Equipment Monitoring",
    description:
      "Monitor equipment health with our AI-powered sensors. Predictive maintenance triggers and automated alerts that prevent downtime.",
  },
  {
    icon: "lucide:gauge",
    title: "Factory Analytics & KPIs",
    description:
      "Visualize OEE and throughput with deep-dive insights. Identify production bottlenecks and track quality metrics in real-time.",
  },
  {
    icon: "lucide:truck",
    title: "Supply Chain Sync",
    description:
      "Connect with ERPs and over 1,000+ vendors including SAP, Oracle, and global logistics partners without custom hardware.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Precision-Engineered for Production
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built for high-output facilities that demand absolute efficiency.
            Buildflow scales your manufacturing operations with intelligent
            shop-floor tools.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#5050f2]/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5050f2]/10 flex items-center justify-center text-[#5050f2] mb-6 group-hover:scale-110 transition-transform">
                {/* @ts-expect-error - iconify-icon is a web component */}
                <iconify-icon
                  icon={feature.icon}
                  style={{ fontSize: "24px" }}
                />
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
