"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-600">
                Senkusha
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/training"
              className="text-zinc-600 hover:text-purple-600 font-medium"
            >
              Training
            </a>
            <a
              href="/products"
              className="text-zinc-600 hover:text-purple-600 font-medium"
            >
              Products
            </a>
            <a
              href="/services"
              className="text-zinc-600 hover:text-purple-600 font-medium"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-zinc-600 hover:text-purple-600 font-medium"
            >
              About Us
            </a>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-zinc-600 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="/training"
              className="block text-zinc-600 hover:text-purple-600 font-medium"
              onClick={toggleMenu}
            >
              Training
            </a>
            <a
              href="/products"
              className="block text-zinc-600 hover:text-purple-600 font-medium"
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href="/services"
              className="block text-zinc-600 hover:text-purple-600 font-medium"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="/about"
              className="block text-zinc-600 hover:text-purple-600 font-medium"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
