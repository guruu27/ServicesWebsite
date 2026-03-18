"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-black/50 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/brand-assets/finsight.framer.ai/logo-1773850646842.svg"
              alt="Buildflow Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              unoptimized
            />
            <span className="text-xl font-bold tracking-tighter">Buildflow</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Auth */}
        <div className="hidden sm:flex items-center gap-4">
          <a href="#login" className="text-sm text-gray-300 hover:text-white transition-colors">
            Login
          </a>
          <a
            href="#signup"
            className="bg-[#5050f2] hover:bg-[#4040d2] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#5050f2]/20"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#login" className="block text-sm text-gray-300">Login</a>
          <a
            href="#signup"
            className="inline-block bg-[#5050f2] text-white px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}
