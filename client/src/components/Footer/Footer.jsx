import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Logo + Name */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C7 7 4 11 4 14a8 8 0 1016 0c0-3-3-7-8-12z"
              />
            </svg>
            <span className="text-xl font-bold text-red-600">
              LifeSaver System
            </span>
          </div>
          <p className="text-sm">
            Saving lives through smart donor matching.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-col space-y-2 md:items-center">
          <h3 className="text-lg font-semibold text-red-600">Quick Links</h3>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Register</a>
        </div>

        {/* Right - Founders + Email */}
        <div className="flex flex-col space-y-2 md:items-end">
          <h3 className="text-lg font-semibold text-red-600">Founders</h3>
          <span>Muhammad Ibraheem</span>
          <span>Muhammad Ashiq</span>
          <span>Aneesa Inayat</span>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-800">Contact Email</h4>
            <a href="mailto:lifesaver.support@example.com" className="text-red-600 hover:underline text-sm">
              lifesaver.support@example.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LifeSaver System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
