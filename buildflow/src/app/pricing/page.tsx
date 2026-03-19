'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small facilities",
    features: [
      "Up to 5 operators",
      "Basic monitoring",
      "Email support",
      "1 production line",
      "Standard analytics",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "1,299",
    description: "For growing facilities",
    features: [
      "Up to 25 operators",
      "Advanced monitoring",
      "Priority support",
      "Unlimited production lines",
      "AI-powered insights",
      "ERP integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited operators",
      "Full monitoring suite",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export default function PricingPage() {
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your facility. No hidden fees, no surprises.
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-6 pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.popular
                    ? "bg-white/5 border-[#5050f2] ring-1 ring-[#5050f2]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#5050f2] text-white text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-500">/month</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-[#5050f2]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    plan.popular
                      ? "bg-[#5050f2] text-white hover:bg-[#4040d2]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
