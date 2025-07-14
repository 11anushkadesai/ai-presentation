import React from "react";
import { FaMagic, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f0f0f0] via-[#e8e8e8] to-[#e0e0e0] text-gray-700 pt-10 pb-6 px-4 sm:px-6 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 text-xl font-extrabold text-blue-700 mb-3">
            <FaMagic />
            <span>AI PRESENTATION</span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            Transforming your content into professional slides using smart AI — fast, easy, and free.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:text-blue-600 hover:underline scroll-smooth">
                Features
              </a>
            </li>
            <li>
              <a href="#PPT" className="hover:text-blue-600 hover:underline scroll-smooth">
                Get Started
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 hover:underline scroll-smooth">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Connect</h3>
          <div className="flex gap-4 mt-2 text-2xl">
            <a
              href="mailto:desaianushka945@gmail.com"
              className="hover:text-blue-600"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/11anushkadesai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anushka-desai-1850b1236/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} AI PRESENTATION. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
