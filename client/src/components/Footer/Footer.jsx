import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
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
          <NavLink
            to={""}
            className={({ isActive }) =>
              `block px-3 py-1 rounded transition ${
                isActive
                  ? 'bg-red-600 text-white px-4'
                  : 'text-red-600 hover:underline hover:bg-red-50'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `block px-3 py-1 rounded transition ${
                isActive
                  ? 'bg-red-600 text-white px-4'
                  : 'text-red-600 hover:underline hover:bg-red-50'
                }`
              }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `block px-3 py-1 rounded transition ${
                isActive
                  ? 'bg-red-600 text-white px-4'
                  : 'text-red-600 hover:underline hover:bg-red-50'
                }`
              }
            >
            Contact
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `block px-3 py-1 rounded transition ${
                isActive
                  ? 'bg-red-600 text-white px-4'
                  : 'text-red-600 hover:underline hover:bg-red-50'
                }`
              }
            >
            Login
          </NavLink>
          <NavLink
            to={"/registration"}
            className={({ isActive }) =>
              `block px-3 py-1 rounded transition ${
                isActive
                  ? 'bg-red-600 text-white px-4'
                  : 'text-red-600 hover:underline hover:bg-red-50'
                }`
              }
            >
            Register
          </NavLink>
        </div>

      {/* Right - Team + Emails */}
      <div className="flex flex-col space-y-2 md:items-end">
        <h3 className="text-lg font-semibold text-red-600">Founders</h3>
        <div className="text-sm space-y-4 text-right">
          <div>
            <p className="font-semibold">Muhammad Ibraheem</p>
            <a
              href="mailto:muhammadibraheem8567@gmail.com"
              className="text-red-600 hover:underline break-all"
            >
              muhammadibraheem8567@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Muhammad Ashiq</p>
            <a
              href="mailto:muhammadashiq456@gmail.com"
              className="text-red-600 hover:underline break-all"
            >
              muhammadashiq456@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Aneesa Inayat</p>
            <a
              href="mailto:muhammadashiq456@gmail.com"
              className="text-red-600 hover:underline break-all"
            >
              aneesainayat22@gmail.com
            </a>
          </div>
          <div className="pt-2 border-t border-gray-300">
            <p className="font-semibold">Support</p>
            <a
              href="mailto:support@lifesaver.com"
              className="text-red-600 hover:underline break-all"
            >
              support@lifesaver.com
            </a>
          </div>
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
