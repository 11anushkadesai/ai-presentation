import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Site Title */}
        <div className="text-2xl font-bold text-purple-600">AI Presentation</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-purple-600">Features</a></li>
          <li><a href="#templates" className="hover:text-purple-600">Templates</a></li>
          <li><a href="#pricing" className="hover:text-purple-600">Pricing</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Try for Free
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-4 space-y-2">
            <li><a href="#features" className="text-gray-700 block hover:text-purple-600">Features</a></li>
            <li><a href="#templates" className="text-gray-700 block hover:text-purple-600">Templates</a></li>
            <li><a href="#pricing" className="text-gray-700 block hover:text-purple-600">Pricing</a></li>
            <li><a href="#about" className="text-gray-700 block hover:text-purple-600">About</a></li>
            <li>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Try for Free
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
