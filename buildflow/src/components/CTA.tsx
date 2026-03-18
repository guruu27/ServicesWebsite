"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[48px] bg-[#5050f2] p-12 lg:p-24 overflow-hidden text-center"
        >
          {/* Abstract decorative overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image
              src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/17047b4a-8f76-4e72-a954-9951f6dfc8de.png"
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-light mb-8 tracking-tighter">
              Ready to optimize <br /> your production?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-lg mb-10 font-light">
              Join over 5,000+ facilities that are running the future with
              Buildflow. Start your production efficiency audit today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-10 py-4 bg-white text-[#5050f2] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-black/20"
              >
                Launch Manufacturing Portal
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
