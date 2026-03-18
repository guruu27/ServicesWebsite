"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">
          Trusted by global innovators
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 hover:opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <Image
            src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/8e741b48-b4ab-47e3-a512-3bc1912eb8dc.svg"
            alt="OpenSea"
            width={100}
            height={24}
            className="h-6 w-auto"
            unoptimized
          />
          <Image
            src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/edff13fb-bf91-454b-935c-0c40cbb25453.svg"
            alt="Shop Pay"
            width={100}
            height={24}
            className="h-6 w-auto"
            unoptimized
          />
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            {/* @ts-expect-error - iconify-icon is a web component */}
            <iconify-icon icon="logos:stripe" style={{ fontSize: "24px" }} />
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            {/* @ts-expect-error - iconify-icon is a web component */}
            <iconify-icon icon="logos:slack-icon" style={{ fontSize: "32px" }} />
            <span className="tracking-tighter">Slack</span>
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            {/* @ts-expect-error - iconify-icon is a web component */}
            <iconify-icon icon="logos:airbnb" style={{ fontSize: "32px" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
