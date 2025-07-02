import React from "react";
import { Button } from "./ui/Button";

export default function HeroHeader() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Geometric bright shapes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true" focusable="false">
        <circle cx="180" cy="120" r="80" fill="#fff" opacity="0.12" />
        <rect x="0" y="0" width="300" height="180" fill="#fff" opacity="0.08" />
        <circle cx="80%" cy="80" r="100" fill="#fff" opacity="0.10" />
        <rect x="70%" y="0" width="200" height="200" fill="#fff" opacity="0.07" />
        <rect x="60%" y="60%" width="120" height="120" fill="#fff" opacity="0.06" />
        <circle cx="90%" cy="90%" r="90" fill="#fff" opacity="0.09" />
        <rect x="10%" y="70%" width="120" height="120" fill="#fff" opacity="0.06" />
        <circle cx="50%" cy="100%" r="120" fill="#fff" opacity="0.10" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-0 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-xl animate-slide-up" style={{fontFamily: 'Nunito, Inter, sans-serif'}}>
          Empowering Digital Innovation
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Build. Scale. Succeed. Together.
        </p>
        <Button animated size="lg" className="px-10 py-5 text-xl shadow-2xl">
          Explore Us
        </Button>
      </div>
    </section>
  );
} 