import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { products, services } from '../data';


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setShowDropdown(prev => (prev === type ? null : type));
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-parent')) {
      setShowDropdown(null);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Senkusha Logo" className="h-10 w-auto cursor-pointer" />
        </Link>
      </div>

      {/* Links */}
      <ul className="flex space-x-8 text-base font-medium text-gray-800">
        <li>
          <Link to="/" className="hover:text-purple-600">Home</Link>
        </li>

        {/* Products Dropdown */}
        <li className="relative dropdown-parent">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('products');
            }}
            className="flex items-center gap-1 hover:text-purple-600"
          >
            Products <ChevronDown size={16} />
          </button>
          {showDropdown === 'products' && (
            <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 px-4 z-50">
              {products.map((product, idx) => (
                <li key={idx} className="py-1 hover:text-purple-600 flex items-center gap-2">
                  <img src={product.image} alt={product.name} className="w-5 h-5" />
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Services Dropdown */}
        <li className="relative dropdown-parent">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('services');
            }}
            className="flex items-center gap-1 hover:text-purple-600"
          >
            Services <ChevronDown size={16} />
          </button>
          {showDropdown === 'services' && (
            <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 px-4 z-50">
              {services.map((service, idx) => (
                <li key={idx} className="py-1 hover:text-purple-600 flex items-center gap-2">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-5 h-5 object-cover rounded"
                  />
                  <Link to={`/service/${service.id}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link to="/testimonials" className="hover:text-purple-600">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
