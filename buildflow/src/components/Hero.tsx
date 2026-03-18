"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
      {/* Decorative background SVGs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-20 pointer-events-none">
        <Image
          src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/ea346e65-700d-4751-9953-77c7582fb578.svg"
          alt=""
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Image
          src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/befb5b76-dc51-4ec9-80d7-2bd772db8575.svg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#95d7e4] mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#5050f2]" />
          Smart Manufacturing — Real-time Production Intelligence
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-8 gradient-text"
        >
          Optimize Production, <br /> Master the Shop Floor
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 font-light"
        >
          The ultimate manufacturing operating system that streamlines production
          workflows, monitors equipment health, and connects your entire plant in
          a unified digital interface.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-[#5050f2] text-white rounded-full font-medium text-lg hover:scale-105 transition-all shadow-xl shadow-[#5050f2]/20"
          >
            Request Factory Audit
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium text-lg hover:bg-white/10 transition-all"
          >
            See Production Demo
          </a>
        </motion.div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-20 relative max-w-5xl mx-auto group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#5050f2] to-[#007be3] rounded-[32px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative bg-[#0a0a0a] rounded-[32px] border border-white/10 p-4 shadow-2xl">
            <Image
              src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/fe3a49a3-44bc-4609-9f20-ee007f7e7211.png"
              alt="Dashboard Preview"
              width={1200}
              height={700}
              className="rounded-[20px] w-full shadow-inner"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
