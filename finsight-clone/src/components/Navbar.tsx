'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#010204]/80 backdrop-blur-md' : 'bg-transparent'
      } border-b border-white/[0.08]`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-[family-name:var(--font-display)] font-semibold text-lg">
          FinSight
        </span>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-white/90 transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
}
