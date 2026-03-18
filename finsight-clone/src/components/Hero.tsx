'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#007be330_0%,_transparent_70%)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Badge */}
        <span className="inline-block text-xs font-[family-name:var(--font-mono)] text-[#0099ff] border border-white/10 px-4 py-1.5 rounded-full mb-6">
          Smart Financial Management
        </span>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-display)] font-bold text-5xl md:text-7xl lg:text-[96px] leading-tight mb-6">
          Money moves{' '}
          <span className="gradient-text">smarter</span>{' '}
          with you
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Track, manage, and grow your finances with AI-powered insights
          that adapt to your spending habits.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300">
            Get Started Free
          </button>
          <button className="border border-white/20 text-white font-medium px-8 py-3 rounded-full hover:border-white/40 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-8 h-8 border border-white/20 rounded-full animate-spin-slow" />
    </section>
  );
}
