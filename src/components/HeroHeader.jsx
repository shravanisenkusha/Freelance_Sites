import React from 'react';
import backgroundImage from '../assets/herobackground.jpg';
import PillButton from './ui/PillButton';

const HeroHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden py-24 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#f2f4f7',
      }}
    >
      {/* 🟣 Purple Transparent Overlay */}
      <div className="absolute inset-0 z-0 bg-purple-900/50" />

      {/* 🧠 Main Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Power Your Growth with the Senkusha<br />
          <span className="text-purple-200">Crafting Digital Excellence</span>
        </h1>
        <p className="mt-6 text-lg text-purple-100">
          Analyze, test, and make smarter decisions—so you can build experiences that move the needle.
        </p>
        <div className="mt-8">
          <PillButton
            className="px-8 py-4 text-lg shadow-xl"
            style={{
              background: '#ffffff',
              borderColor: '#a78bfa',
              color: '#1f2937',
              boxShadow: '0 4px 20px 0 rgba(168, 85, 247, 0.4)',
              fontWeight: '600',
            }}
          >
            EXPLORE US
          </PillButton>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
