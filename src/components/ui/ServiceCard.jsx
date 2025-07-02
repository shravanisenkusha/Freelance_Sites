import React from "react";
import { Link } from "react-router-dom";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import demoImage from "../../assets/demo.jpg";

const ServiceCard = ({ 
  service, 
  isActive = false, 
  showImage = true, 
  showDescription = true, 
  showPrice = true, 
  showCategory = true, 
  showFeatures = false, 
  maxFeatures = 3,
  className = "" 
}) => {
  return (
    <Link
      to={`/service/${service.id}`}
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform
        ${isActive 
          ? 'scale-110 shadow-2xl border-2 border-blue-500' 
          : 'scale-90 opacity-70 hover:scale-95 hover:opacity-90'
        }
        cursor-pointer
        ${className}
      `}
    >
      {showImage && (
        <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative">
          <img 
            src={demoImage} 
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
          {showCategory && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium ml-2 flex-shrink-0">
              {service.category}
            </span>
          )}
        </div>
        
        {showDescription && (
          <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        )}
        
        {showFeatures && service.features && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {service.features.slice(0, maxFeatures).map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard; 