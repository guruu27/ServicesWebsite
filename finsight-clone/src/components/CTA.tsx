'use client';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[900px] mx-auto glass-card p-16 text-center bg-[radial-gradient(ellipse_at_center,_#007be315_0%,_transparent_70%)]">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl mb-6">
          Ready to take control of your money?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
          Join thousands of users who are already managing their finances smarter.
        </p>
        <button className="bg-white text-black font-medium px-10 py-4 rounded-full text-lg hover:bg-white/90 transition-all duration-300">
          Get Started Free
        </button>
      </div>
    </section>
  );
}
