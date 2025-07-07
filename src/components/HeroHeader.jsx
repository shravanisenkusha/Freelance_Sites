import React from "react";
import PillButton from "./ui/PillButton";

export default function HeroHeader() {
  return (
    <section className="relative w-full bg-gradient-to-r from-purple-600 to-indigo-700 py-24 overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Geometric bright shapes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true" focusable="false">
        <circle cx="180" cy="120" r="80" fill="#fff" opacity="0.08" />
        <rect x="0" y="0" width="300" height="180" fill="#fff" opacity="0.06" />
        <circle cx="80%" cy="80" r="100" fill="#fff" opacity="0.07" />
        <rect x="70%" y="0" width="200" height="200" fill="#fff" opacity="0.05" />
        <rect x="60%" y="60%" width="120" height="120" fill="#fff" opacity="0.04" />
        <circle cx="90%" cy="90%" r="90" fill="#fff" opacity="0.06" />
        <rect x="10%" y="70%" width="120" height="120" fill="#fff" opacity="0.04" />
        <circle cx="50%" cy="100%" r="120" fill="#fff" opacity="0.07" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-0 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-wide leading-relaxed drop-shadow-lg animate-slide-up" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
          Empowering Digital Innovation
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white/95 mb-8 animate-fade-in max-w-2xl leading-relaxed" style={{animationDelay: '0.2s'}}>
          Build. Scale. Succeed. Together.
        </p>
        <PillButton 
          className="px-8 py-4 text-lg shadow-xl yellow-overlay"
          style={{
            background: '#ffffff',
            borderColor: '#fbbf24',
            color: '#1f2937',
            boxShadow: '0 4px 20px 0 rgba(251, 191, 36, 0.2)'
          }}
        >
          Explore Us
        </PillButton>
      </div>
    </section>
  );
} 