'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const DAYS = [
  { day: "Mon", date: "Mar 23" },
  { day: "Tue", date: "Mar 24" },
  { day: "Wed", date: "Mar 25" },
  { day: "Thu", date: "Mar 26" },
  { day: "Fri", date: "Mar 27" },
];

export default function BookAuditPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen relative flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-6"
          >
            <div className="w-20 h-20 bg-[#5050f2]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="text-4xl font-light tracking-tighter mb-4">Audit Scheduled!</h1>
            <p className="text-gray-400 mb-8">
              We&apos;ve sent a confirmation to {formData.email}. Our team will reach out shortly.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-[#5050f2] text-white rounded-full font-medium hover:bg-[#4040d2] transition-all"
            >
              Back to Home
            </a>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-light tracking-tighter mb-6 gradient-text">
              Schedule Your Factory Audit
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Book a free consultation with our manufacturing experts. We&apos;ll analyze your operations and recommend optimization strategies.
            </p>
          </motion.div>
        </section>

        {/* Booking Form */}
        <section className="px-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold mb-4">Your Information</h3>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5050f2]"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5050f2]"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5050f2]"
                    placeholder="Acme Manufacturing"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5050f2]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Number of Employees</label>
                  <select
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#5050f2] [&>option]:bg-black"
                  >
                    <option value="">Select...</option>
                    <option value="1-50">1-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Additional Notes</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#5050f2]"
                    placeholder="Tell us about your facility..."
                  />
                </div>
              </motion.div>

              {/* Right Column - Calendar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>

                {/* Days */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3">Preferred Day</label>
                  <div className="flex gap-2">
                    {DAYS.map((d, i) => (
                      <button
                        key={d.day}
                        type="button"
                        onClick={() => setSelectedDay(i)}
                        className={`flex-1 py-3 rounded-xl border transition-all ${
                          selectedDay === i
                            ? "bg-[#5050f2] border-[#5050f2] text-white"
                            : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                        }`}
                      >
                        <div className="text-xs">{d.day}</div>
                        <div className="text-sm font-semibold">{d.date}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3">Preferred Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map((time, i) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(i)}
                        className={`py-3 rounded-xl border transition-all ${
                          selectedTime === i
                            ? "bg-[#5050f2] border-[#5050f2] text-white"
                            : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold mb-4">Audit Summary</h4>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="text-white">{DAYS[selectedDay].day}, {DAYS[selectedDay].date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="text-white">{TIME_SLOTS[selectedTime]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="text-white">30 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="text-[#95d7e4]">Free</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#5050f2] text-white rounded-xl font-medium text-lg hover:bg-[#4040d2] transition-all shadow-lg shadow-[#5050f2]/20"
                >
                  Confirm Booking
                </button>
              </motion.div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
