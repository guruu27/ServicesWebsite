'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const DOCS_SECTIONS = [
  {
    title: "Getting Started",
    description: "Learn the basics of setting up your manufacturing environment",
    articles: [
      { title: "Quick Start Guide", href: "#" },
      { title: "Installation", href: "#" },
      { title: "First Setup", href: "#" },
      { title: "User Roles & Permissions", href: "#" },
    ],
  },
  {
    title: "Core Concepts",
    description: "Understand the fundamental concepts behind Buildflow",
    articles: [
      { title: "Production Lines", href: "#" },
      { title: "Equipment Monitoring", href: "#" },
      { title: "Analytics & KPIs", href: "#" },
      { title: "Integrations", href: "#" },
    ],
  },
  {
    title: "API Reference",
    description: "Technical documentation for developers",
    articles: [
      { title: "REST API", href: "#" },
      { title: "Webhooks", href: "#" },
      { title: "Authentication", href: "#" },
      { title: "Error Codes", href: "#" },
    ],
  },
  {
    title: "Troubleshooting",
    description: "Solutions to common issues",
    articles: [
      { title: "Connection Issues", href: "#" },
      { title: "Data Sync Problems", href: "#" },
      { title: "Performance Optimization", href: "#" },
      { title: "FAQ", href: "#" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-light tracking-tighter mb-6 gradient-text">
              Documentation
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about Buildflow. From setup to advanced integrations.
            </p>
          </motion.div>
        </section>

        {/* Search */}
        <section className="px-6 pb-16 -mt-8">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#5050f2]"
            />
          </div>
        </section>

        {/* Docs Sections */}
        <section className="py-20 px-6 pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOCS_SECTIONS.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#5050f2]/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{section.description}</p>
                <ul className="space-y-3">
                  {section.articles.map((article) => (
                    <li key={article.title}>
                      <a
                        href={article.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
