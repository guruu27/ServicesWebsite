'use client';

import { motion } from 'framer-motion';

export default function ProductShowcase() {
  return (
    <section id="product" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#4f4ff120_0%,_transparent_60%)]" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-center mb-6">
          Beautifully designed for{' '}
          <span className="gradient-text">your finances</span>
        </h2>
        <p className="text-white/60 text-center max-w-xl mx-auto mb-16">
          An intuitive interface that makes managing money feel effortless.
        </p>

        {/* Device Mockup */}
        <div className="flex justify-center gap-8 items-end flex-wrap">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-3 w-[280px] aspect-[9/19]"
          >
            <div className="w-full h-full bg-[#0e0b0e] rounded-2xl flex items-center justify-center">
              <span className="text-white/20">Phone App</span>
            </div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-3 w-[500px] aspect-video hidden lg:block"
          >
            <div className="w-full h-full bg-[#0e0b0e] rounded-2xl flex items-center justify-center">
              <span className="text-white/20">Dashboard</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
