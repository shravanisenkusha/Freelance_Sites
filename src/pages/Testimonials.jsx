import React from "react";
import { Star, Quote, Users, Calendar, Code } from "lucide-react";
import testimonials from "../Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Testimonials = () => {
  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col md:flex-row p-6 gap-6">
      {/* Left Side - 30% */}
      <div className="flex flex-col items-center justify-center md:w-[30%] w-full py-4">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200 mb-4 bg-blue-50">
          <img 
            src={require('../assets/user.jpg')} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-gray-900 text-sm md:text-lg text-center">{testimonial.name} ~ {testimonial.year}</h3>
        <p className="text-xs md:text-sm text-gray-600 text-center mb-2">{testimonial.role}</p>
        <div className="flex items-center justify-center space-x-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        

      </div>
      
      {/* Right Side - 60% */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Project */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-blue-800 text-sm md:text-base">Worked on {testimonial.project}</span>
          </div>
        </div>
        {/* Feedback */}
        <div className="mb-4">
          <div className="flex items-start space-x-2 mb-3">
            <Quote className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
              "{testimonial.feedback}"
            </p>
          </div>
        </div>
        {/* Skills */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">Skills Developed:</h4>
          <div className="flex flex-wrap gap-2">
            {testimonial.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-2 md:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Intern Success Stories
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how our interns have grown and contributed to innovative projects at Senkusha
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {testimonials.length}
              </div>
              <div className="text-gray-600">Total Interns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {new Set(testimonials.map(t => t.project)).size}
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(testimonials.map(t => t.year)).size}
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                5.0
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl 2xl:max-w-full mx-auto px-2 py-12 xl:px-4 2xl:px-[72px]">
        <div className="text-center mb-8 xl:mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intern Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the experiences of our talented interns who have worked on various projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-3 gap-8 xl:gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials; 