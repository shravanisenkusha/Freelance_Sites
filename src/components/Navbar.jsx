import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-3 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Senkusha Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Hamburger icon (mobile only) */}
      <div
        className="text-2xl cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto mt-4 md:mt-0 gap-4 md:gap-6 list-none`}
      >
        <li>
          <Link
            to="/"
            className="text-gray-900 font-medium text-base hover:text-blue-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-gray-900 font-medium text-base hover:text-blue-600"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/product/1"
            className="text-gray-900 font-medium text-base hover:text-blue-600"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/testimonials"
            className="text-gray-900 font-medium text-base hover:text-blue-600"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-900 font-medium text-base hover:text-blue-600"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
