"use client";

import Image from "next/image";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Solutions: [
    { label: "Automotive", href: "#" },
    { label: "Aerospace", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Pharmaceuticals", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { icon: "brandico:twitter-bird", href: "#", label: "Twitter" },
  { icon: "brandico:github", href: "#", label: "GitHub" },
  { icon: "brandico:linkedin-rect", href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Image
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/brand-assets/finsight.framer.ai/logo-1773850646842.svg"
                alt="Buildflow Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
                unoptimized
              />
              <span className="text-xl font-bold tracking-tighter">
                Buildflow
              </span>
            </a>
            <p className="text-gray-500 max-w-xs mb-8 text-sm">
              Empowering industrial facilities to reach peak efficiency through
              intelligent production orchestration and real-time monitoring.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  {/* @ts-expect-error - iconify-icon is a web component */}
                  <iconify-icon
                    icon={social.icon}
                    style={{ fontSize: "18px" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h6 className="text-white font-semibold mb-6">{category}</h6>
              <ul className="space-y-4 text-sm text-gray-500">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-xs text-gray-600">
            &copy; 2024 Buildflow Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-gray-600 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
