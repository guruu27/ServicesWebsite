"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "Buildflow has completely transformed how our production floor coordinates. The real-time visibility into line performance is light-years ahead.",
    name: "Robert Sterling",
    role: "Plant Director, Sterling Automotive",
    avatar:
      "https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/5e1b95c8-23b0-4f1e-8d04-77ee99153e16.png",
  },
  {
    quote:
      "The monitoring engine reduced our unplanned downtime by 34% in the first quarter. It literally paid for its annual license in the first two weeks.",
    name: "Elena Rodriguez",
    role: "Operations Director, Precision Machining",
    avatar:
      "https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/32671650-4b56-49d3-ba78-065f063cfeae.png",
  },
  {
    quote:
      "I've tried every MES out there. Buildflow is the first platform that operators actually love using. It just works exactly how a factory should.",
    name: "Jameson Vance",
    role: "Manufacturing Engineer, Vance Aerospace",
    avatar:
      "https://pquxfbbxflqvtidtlrhl.supabase.co/storage/v1/object/public/hmac-uploads/brand/d47b354a-d58f-45df-86c5-55c9273b695a/assets/5f32be31-c808-4192-ac61-84d24e5957a4.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light tracking-tight mb-4">
            What production leaders are saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 relative hover:border-white/10 transition-all"
            >
              {/* Quote icon */}
              {/* @ts-expect-error - iconify-icon is a web component */}
              <iconify-icon
                icon="ri:double-quotes-l"
                style={{ fontSize: "36px" }}
                className="text-[#5050f2]/30 absolute top-6 left-6"
              />

              <p className="text-lg text-gray-300 mb-8 relative z-10 font-light italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <h6 className="font-semibold">{t.name}</h6>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
