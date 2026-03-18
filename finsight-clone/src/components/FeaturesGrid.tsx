'use client';

import { motion } from 'framer-motion';
import { FEATURES } from '@/lib/constants';

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-center mb-16">
          Everything you need to{' '}
          <span className="gradient-text">take control</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-5 bg-[#0e0b0e] flex items-center justify-center">
                {/* Placeholder for feature image */}
                <div className="text-white/20 text-4xl font-bold">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
