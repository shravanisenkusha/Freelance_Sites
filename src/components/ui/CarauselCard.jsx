import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

const CarauselCard = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (!items.length) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Items Available</h3>
          <p className="text-gray-500">Please add some items to display in the carousel</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 relative"
            >
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                {/* Background Image or Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
                  style={{
                    background: item.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Text Content */}
                      <div className="text-white space-y-6">
                        {/* Badge */}
                        {item.badge && (
                          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30 animate-fade-in">
                            {item.badge}
                          </div>
                        )}
                        
                        {/* Title */}
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
                          {item.title}
                        </h2>
                        
                        {/* Subtitle */}
                        {item.subtitle && (
                          <p className="text-xl md:text-2xl text-white/90 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            {item.subtitle}
                          </p>
                        )}
                        
                        {/* Description */}
                        <p className="text-lg text-white/80 leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
                          {item.description}
                        </p>
                        
                        {/* CTA Button */}
                        {item.cta && (
                          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                            <button className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                              {item.cta.text}
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Image or Icon */}
                      <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                          {item.icon ? (
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                              <item.icon className="w-16 h-16 md:w-24 md:h-24 text-white" />
                            </div>
                          ) : item.image ? (
                            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                              />
                            </div>
                          ) : (
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                              <Star className="w-16 h-16 md:w-24 md:h-24 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 z-20"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 z-20"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-500 ease-linear"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarauselCard;
