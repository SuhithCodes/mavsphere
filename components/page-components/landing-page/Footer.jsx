import React from "react";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`mt-12 py-8 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Contact information */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: sxg0591@mavs.uta.edu</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        {/* Quick links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        {/* Legal information */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Social media links */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
