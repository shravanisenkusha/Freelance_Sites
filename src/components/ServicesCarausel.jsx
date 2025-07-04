import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ui/ServiceCard";

const ServicesCarausel = ({ services = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (services.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Services Available
          </h3>
          <p className="text-gray-500">
            Please add some services to display in the carousel
          </p>
        </div>
      </div>
    );
  }

  // Get indices for left, center, right cards
  const leftIndex = (currentIndex - 1 + services.length) % services.length;
  const rightIndex = (currentIndex + 1) % services.length;

  // Prepare the 3 cards to render
  const cards = [
    { ...services[leftIndex], position: "left" },
    { ...services[currentIndex], position: "center" },
    { ...services[rightIndex], position: "right" },
  ];

  // Style classes for each card
  const positionStyles = {
    left: "z-10 scale-90 opacity-60 -mr-8 md:-mr-12 w-[75%] max-w-md",
    center:
      "z-20 scale-100 opacity-100 mx-2 md:mx-6 w-full max-w-xl shadow-2xl bg-white/80 backdrop-blur-lg",
    right: "z-10 scale-90 opacity-60 -ml-8 md:-ml-12 w-[75%] max-w-md",
  };

  return (
    <div className="relative w-full max-w-7xl px-2 sm:px-4 mx-auto">
      <div className="relative flex items-center justify-center h-[480px]">
        {/* Cards */}
        <div className="flex items-center justify-center w-full h-full">
          {cards.map((card, idx) => (
            <div
              key={card.id + card.position}
              className={`transition-all duration-700 ease-in-out rounded-3xl h-[420px] md:h-[480px] flex items-stretch 
                ${
                  card.position === "center"
                    ? "w-full md:w-[70%] lg:w-[50%] max-w-2xl"
                    : "w-[80%] md:w-[60%] lg:w-[40%] max-w-lg"
                } 
                ${positionStyles[card.position]}`}
              style={{
                boxShadow:
                  card.position === "center"
                    ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                    : undefined,
              }}
            >
              <ServiceCard
                service={card}
                isActive={card.position === "center"}
                showFeatures={true}
                maxFeatures={4}
                className="h-full w-full flex-1 bg-transparent shadow-none"
              />
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 z-30 border border-gray-200"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 z-30 border border-gray-200"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-purple-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarausel;
