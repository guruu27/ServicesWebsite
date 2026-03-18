"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CHECKLIST = [
  {
    title: "Standardized SOPs",
    description:
      "Never lose compliance. Instant versioning and change history for every standard operating procedure.",
  },
  {
    title: "Plant-Floor Security",
    description:
      "ISO 27001 compliant with edge-to-cloud encryption for all your industrial IoT data.",
  },
  {
    title: "Massive Data Historian",
    description:
      "Keep all your sensor data, CAD files, and maintenance logs in one centralized high-speed historian.",
  },
];

export default function DetailedFeature() {
  return (
    <section id="solutions" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <Image
          src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/5810573a-6854-4176-b817-73ed55809d34.png"
          alt=""
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <span className="text-[#5050f2] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Industrial-Grade OS
          </span>
          <h2 className="text-4xl lg:text-6xl font-light mb-8 tracking-tight">
            The ultimate control center <br /> for high-output facilities.
          </h2>

          <div className="space-y-8">
            {CHECKLIST.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#95d7e4]">
                  {/* @ts-expect-error - iconify-icon is a web component */}
                  <iconify-icon icon="lucide:check" style={{ fontSize: "16px" }} />
                </div>
                <div>
                  <h5 className="text-lg font-medium mb-1">{item.title}</h5>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="relative p-2 bg-gradient-to-tr from-white/10 to-white/0 rounded-[40px] border border-white/10">
            <Image
              src="https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/f067f362-6fb3-4e4d-81a8-b85183a15eb2.png"
              alt="Interface Detail"
              width={800}
              height={600}
              className="rounded-[32px] w-full"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
