'use client';

import { motion } from 'framer-motion';
import { BENEFITS } from '@/lib/constants';

export default function Benefits() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto space-y-20">
        {BENEFITS.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text */}
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl mb-4">
                {benefit.title}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>

            {/* Image placeholder */}
            <div className="flex-1 glass-card p-4">
              <div className="w-full aspect-video bg-[#0e0b0e] rounded-xl flex items-center justify-center">
                <span className="text-white/20 text-lg">{benefit.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
