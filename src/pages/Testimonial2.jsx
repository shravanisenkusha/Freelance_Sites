import React, { useState } from "react";
import testimonials from "../Testimonials";
import { Star } from "lucide-react";

const placeholderImg = "/images/user-placeholder.jpg";

const Testimonial2 = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);
  const t = testimonials[current];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="relative w-full max-w-4xl mx-auto bg-[#faf9f6] rounded-3xl shadow-xl flex flex-col md:flex-row items-center px-6 md:px-16 py-12">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition-all text-gray-700 z-10"
          aria-label="Previous testimonial"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        {/* User Image */}
        <div className="flex-shrink-0 flex items-center justify-center w-64 h-64 bg-[#f3f2ed] rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={placeholderImg}
            alt={t.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Testimonial Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start md:pl-12 mt-8 md:mt-0">
          {/* Stars */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          {/* Feedback */}
          <blockquote className="text-2xl md:text-3xl text-gray-800 font-serif leading-relaxed mb-6 text-center md:text-left">
            “{t.feedback}”
          </blockquote>
          {/* Name and Role */}
          <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">- {t.name}</div>
          <div className="text-base text-gray-600 font-medium mb-2">{t.role} {t.project && `| ${t.project}`}</div>
          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {t.skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100 transition-all text-gray-700 z-10"
          aria-label="Next testimonial"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial2; 